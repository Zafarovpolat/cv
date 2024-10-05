let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll("header nav a")
let form = document.querySelector("#myForm")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active')

})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNumber = document.querySelector('input[name="phonenumber"]').value.length == 0 ? "No number" : document.querySelector('input[name="phonenumber"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const text = document.querySelector('textarea[name="message"]').value;
    const message = `Name:${username}\nEmail: ${email}\nNumber: ${phoneNumber}\nSubject: ${subject}\nMessage: ${text}\n`


    const telegramToken = '7660049288:AAEKyLxU5IfQtfU_mivVkc_zu3EdZmnHFs8';
    const chatId = '8128878855';
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;


    fetch(url)
        .then(response => { })
        .catch(error => {
            console.error('Error:', error);
        });
})