setTimeout(function () {
    const loadingScreen = document.querySelector('.loading');
    loadingScreen.style.display = 'none';
    const content = document.querySelector('.content');
    content.style.display = 'block';
}, 1000);


function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    clockElement.textContent = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    dateElement.textContent = formattedDay + '/' + formattedMonth + '/' + year;

}

setInterval(updateClock, 1000);


const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
    window.location.href = "index.html";
});


document.addEventListener('DOMContentLoaded', function () {
    const headerLinks = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const startPosition = window.pageYOffset;
                const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let start = null;
                window.requestAnimationFrame(step);

                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    } else {
                        window.scrollTo(0, targetPosition);
                    }
                }

                function easeInOutCubic(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                }
            }
        });
    }
});



function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.body.style.overflow = "hidden";

    document.querySelector('.login').addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            Swal.fire({
                title: 'Hata!',
                text: 'Lütfen kullanıcı adı ve şifrenizi girin',
                icon: 'warning',
                confirmButtonText: 'Tamam'
            });
        } else {

        }
    });
}

function closeForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    document.getElementById("myForm").style.display = "none";
    document.body.style.overflow = "auto";

}


function openForm1() {
    document.getElementById("myForm1").style.display = "block";
    document.body.style.overflow = "hidden";

    document.querySelector('.signup').addEventListener('click', function (event) {
        event.preventDefault();

        const username1 = document.getElementById('username1').value;
        const password1 = document.getElementById('password1').value;
        const passwordConfirm = document.getElementById('password-confirm2').value;


        if (username1 === '' || password1 === '' || passwordConfirm === '') {
            Swal.fire({
                title: 'Hata!',
                text: 'Lütfen kullanıcı adı ve şifre alanlarını doldurun.',
                icon: 'warning',
                confirmButtonText: 'Tamam'
            });
        } else {

        }
    });

}
""

function closeForm1() {
    document.getElementById("username1").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password-confirm").value = "";


    document.getElementById("myForm1").style.display = "none";
    document.body.style.overflow = "auto";

}


function openForm2() {
    document.getElementById("myForm2").style.display = "block";
    document.body.style.overflow = "hidden";

    document.querySelector('.re-password').addEventListener('click', function (event) {
        event.preventDefault();

        var username2 = document.getElementById('username1').value;
        var password2 = document.getElementById('password1').value;
        var passwordConfirm2 = document.getElementById('password-confirm').value;


        if (username2 === '' || password2 === '' || passwordConfirm2 === '') {
            Swal.fire({
                title: 'Hata!',
                text: 'Lütfen kullanıcı adı ve şifre alanlarını doldurun.',
                icon: 'warning',
                confirmButtonText: 'Tamam'
            });
        } else {

        }
    });

}


function closeForm2() {
    document.getElementById("username2").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("password-confirm2").value = "";


    document.getElementById("myForm2").style.display = "none";
    document.body.style.overflow = "auto";

}



document.querySelector('.sent').addEventListener('click', function (event) {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    if (name === '' || email === '' || message === '') {
        Swal.fire({
            title: 'Hata!',
            text: 'Lütfen bilgileri doldurun',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        });
    }
});


const logoTitle = document.querySelector('.logo-titlle');
logoTitle.addEventListener('click', function () {
    window.location.href = "index.html";
});
