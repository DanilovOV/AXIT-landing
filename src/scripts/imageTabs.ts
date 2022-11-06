export default function imageTabs() {
    document.querySelectorAll(".js-tab")?.forEach(
        tab => tab.addEventListener("click", changeTab));

    function changeTab(e: Event) {
        const activeTab = <HTMLElement>document.querySelector('.activeTab');
        if(activeTab == e.target) return;
        
        const thisTab = <HTMLElement>e.target;
        const activeImage = document.querySelector(`[data-tab="${activeTab?.dataset.openTab}"]`);
        const thisImage = document.querySelector(`[data-tab="${thisTab?.dataset.openTab}"]`);

        if (!activeTab || !thisTab || !activeImage || !thisImage) return;

        activeTab.classList.remove('activeTab');
        activeImage.classList.add('hidden');

        thisTab.classList.add('activeTab');
        thisImage.classList.remove('hidden');
    }
}
