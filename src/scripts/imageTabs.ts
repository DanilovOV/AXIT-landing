export default function imageTabs() {
    const tabsImages = document.querySelectorAll('.js-tab-image');
    tabsImages?.forEach(element => element.classList.add('hidden'));
    tabsImages[0].classList.remove('hidden');

    // Навешиваем обработчики на табы
    let tabButtons = document.querySelectorAll('.js-tab-button');
    tabButtons?.forEach(element => element.addEventListener('click', ChangeTab));
    let animateOn = false;

    // Меняем изображение при нажатии на таб
    function ChangeTab() {
        tabsImages.forEach(element => element.classList.add('hidden'));
        tabsImages[this.dataset.tabnum].classList.remove('hidden');

        tabButtons.forEach(element => element.classList.remove('activeTab'));
        this.classList.add('activeTab');

        // Анимация добавляется здесь чтобы она не срабатывала при загрузке страницы
        if(animateOn == false){
            document.querySelectorAll('.js-tab-image').forEach(element => element.classList.add('animated'));
            animateOn = true;
        }
    }
}