// Делаем активным меню при нажатии на бургер
document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
})


// Табы изображений
// Скрываем все изображения кроме первого
let tabsImages = document.querySelectorAll('.tabs__image');
tabsImages.forEach(element => element.style.display = 'none');
tabsImages[0].style.display = 'block';

// Навешиваем обработчики на табы
let tabButtons = document.querySelectorAll('.tabs__tabButton');
tabButtons.forEach(element => element.addEventListener('click', ChangeTab));
let animateOn = false;

// Меняем изображение при нажатии на таб
function ChangeTab() {
    tabsImages.forEach(element => element.style.display = 'none');
    tabsImages[this.dataset.tabnum].style.display = 'block';

    tabButtons.forEach(element => element.classList.remove('activeTab'));
    this.classList.add('activeTab');

    // Анимация добавляется здесь чтобы она не срабатывала при загрузке страницы
    if(animateOn == false){
        document.querySelectorAll('.tabs__image').forEach(element => element.classList.add('animated'));
        animateOn = true;
    }
}


// Плавный скролл при нажатии на ссылку
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // Высота шапки
        const topOffset = 70;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});