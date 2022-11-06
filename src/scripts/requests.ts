export default function requests() {

    const url = 'https://628e4808a339dfef87ab4f4b.mockapi.io/'

    // Отправка формы в блоке trial
    document.querySelector('.js-trial-submit').addEventListener('click', trialFormSubmit)
    function trialFormSubmit(e: Event) {
        e.preventDefault()

        let userData = {
            name:     (<HTMLInputElement>document.getElementById('trial-text')).value,
            email:    (<HTMLInputElement>document.getElementById('trial-email')).value,
            password: (<HTMLInputElement>document.getElementById('trial-password')).value,
        };

        fetch(url + 'AXIT-trial-requests', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) throw new Error()
        })
        .then(() => alert('Success!'))
        .catch(() => alert('Error'))
    }



    // Отправка данных формы в блоке Contact
    document.querySelector('.js-send-message').addEventListener('click', contactFormSubmit)
    function contactFormSubmit(e:Event) {
        e.preventDefault()

        let userData = {
            name:    (<HTMLInputElement>document.getElementById('contact-name')).value,
            email:   (<HTMLInputElement>document.getElementById('contact-email')).value,
            subject: (<HTMLInputElement>document.getElementById('contact-subject')).value,
            message: (<HTMLInputElement>document.getElementById('contact-message')).value
        }

        fetch(url + 'AXIT-messages', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) throw new Error()
        })
        .then(() => alert('Success!'))
        .catch(() => alert('Error'))
    }
}