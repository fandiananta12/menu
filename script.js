const span = document.querySelector('.menu span ');
const nav = document.querySelector('nav ul ');



span.addEventListener("click", function() {
    nav.classList.toggle('aktif');
})