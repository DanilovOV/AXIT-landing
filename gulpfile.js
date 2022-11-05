const gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  cleanCSS = require('gulp-clean-css'),
  webpack = require("webpack"),
  webpackStream = require("webpack-stream"),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  size = require('gulp-size'),
  newer = require('gulp-newer'),
  browsersync = require('browser-sync').create(),
  del = require('del')



const paths = {
  html: {
    src: ['src/*.html'],
    dest: 'dist/'
  },
  styles: {
    src: ['src/styles/**/*.scss', 'src/styles/**/*.css'],
    dest: 'dist/css/'
  },
  scripts: {
    src: ['src/scripts/**/*.ts', 'src/scripts/**/*.js'],
    dest: 'dist/js/'
  },
  images: {
    src: 'src/images/**',
    dest: 'dist/images/'
  }
}



function clear() {
  return del(['dist/*', '!dist/images'])
}



function html() {
  return gulp.src(paths.html.src)
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browsersync.stream())
}



function styles() {
  return gulp.src(paths.styles.src)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(rename({
    basename: 'style',
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(browsersync.stream())
}



function scripts() {
  return gulp.src(paths.scripts.src)
  .pipe(sourcemaps.init())
  .pipe(webpackStream({
    entry: {
      main: "./src/scripts/app.ts",
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(concat('script.min.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(browsersync.stream())
}



function img() {
  return gulp.src(paths.images.src)
  .pipe(newer(paths.images.dest))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.images.dest))
}



function watch() {
  browsersync.init({
    server: {
        baseDir: "./dist"
    }
  })
  gulp.watch(paths.html.dest).on('change', browsersync.reload)
  gulp.watch(paths.html.src, html)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.images.src, img)
}



exports.clear = clear
exports.default = gulp.series(clear, html, gulp.parallel(styles, scripts, img), watch)