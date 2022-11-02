document.querySelectorAll('a[href^="#"')?.forEach((link) => {
    link.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault()
    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);
    
    const topOffset = 70; // Высота шапки
    const elementPosition = scrollTarget?.getBoundingClientRect().top;
    const offsetPosition = elementPosition
        ? elementPosition - topOffset
        : topOffset;
    
    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
    });
    
}
