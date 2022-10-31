export default function smoothScroll() {

    document.querySelectorAll('a[href^="#"')?.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 70; // Высота шапки
    const elementPosition = scrollTarget?.getBoundingClientRect().top;
    const offsetPosition = elementPosition ? elementPosition - topOffset : topOffset
    
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}