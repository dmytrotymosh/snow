document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.kinds-content__tab');
    const tabContents = document.querySelectorAll('.kind-content__tab-panel-item');
    const initTabs = () => {
        tabLinks.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabLinks.forEach(t => t.classList.remove('kinds-content__tab--active'));
                tabContents.forEach(c => c.classList.remove('kind-content__tab-panel-item--active'));
                tab.classList.add('kinds-content__tab--active');
                tabContents[index].classList.add('kind-content__tab-panel-item--active');
            });
        });
    };
    initTabs();
});
