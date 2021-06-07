// Transição dos vídeos:
const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');
var index = 0;

function nextSlide(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prevSlide(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Botão menu responsivo 
function toggleMenu(){
    const menuIcon = document.querySelector('.menuIcon');
    const menuIconClose1 = document.querySelector('.menuIconClose');
    const list2 = document.querySelector('#lista2')
    menuIcon.style.display = ('none')
    
    list2.style.position = ('absolute');
    list2.style.marginTop = ('11px');
    list2.style.marginRight = ('-20px');
    list2.style.right = ('0');
    menuIconClose1.style.display = ('initial')

}

function toggleMenuClose() {
    const menuIconClose = document.querySelector('.menuIconClose');
    const listA2 = document.querySelector('#lista2');
    const menuIcon1 = document.querySelector('.menuIcon');
    listA2.style.position = ('absolute');
    listA2.style.right = ('-300px');
    menuIconClose.style.display = ('none');
    menuIcon1.style.display = ('initial');
}