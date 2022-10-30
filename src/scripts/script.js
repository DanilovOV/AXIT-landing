// Делаем активным меню при нажатии на бургер
document.querySelector('.js-header-burger').addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    document.querySelector('.js-header-burger').classList.toggle('active');
    document.querySelector('.js-header-menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('body--fixed');
}



// Логика табов

// Скрываем все изображения кроме первого
let tabsImages = document.querySelectorAll('.js-tab-image');
tabsImages.forEach(element => element.style.display = 'none');
tabsImages[0].style.display = 'block';

// Навешиваем обработчики на табы
let tabButtons = document.querySelectorAll('.js-tab-button');
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
        document.querySelectorAll('.js-tab-image').forEach(element => element.classList.add('animated'));
        animateOn = true;
    }
}



// Плавный скролл при нажатии на ссылку
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 70; // Высота шапки
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    console.log(1)
    toggleMobileMenu();
}



const url = 'https://628e4808a339dfef87ab4f4b.mockapi.io/'

// Отправка формы в блоке trial
document.querySelector('.js-trial-submit').onclick = trialFormSubmit;
function trialFormSubmit(e) {
    e.preventDefault();
    let userData = {
        name: document.getElementById('trial-text').value,
        email: document.getElementById('trial-email').value,
        password: document.getElementById('trial-password').value,
    };

    fetch(url + 'AXIT-trial-requests', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) throw new Error(response)
    })
    .then(() => alert('Success!'))
    .catch(() => alert('Error'))
}



// Отправка данных формы в блоке Contact
document.querySelector('.js-send-message').onclick = contactFormSubmit;
function contactFormSubmit(e) {
    e.preventDefault();
    let userData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value
    };

    fetch(url + 'AXIT-messages', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) throw new Error(response)
    })
    .then(() => alert('Success!'))
    .catch(() => alert('Error'))
}