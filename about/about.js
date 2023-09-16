const hamburger = document.querySelector(".hamburger");
const lien = document.querySelector(".lien");
const nav = document.querySelector(".deskop-nav");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    lien.classList.toggle('active');
    nav.classList.toggle('active');
})

const getelement = async () => {
    
}