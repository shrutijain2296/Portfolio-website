document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycby4Lxu7PYC3-oOvlA0scXoRA1cfbJ3WZSpMO5g_sJd9gQBVud0VpB-SjRgdkuljCU1v/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


