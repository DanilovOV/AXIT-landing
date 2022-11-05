export default function mobileMenu() {
    const burger = document.querySelector(".js-header-burger");
    const headerMenu = document.querySelector(".js-header-menu");
    const body = document.querySelector("body");

    burger?.addEventListener("click", toggleMobileMenu);

    function toggleMobileMenu() {
        burger?.classList.toggle("active");
        headerMenu?.classList.toggle("active");
        body?.classList.toggle("body--fixed");
    }
}
