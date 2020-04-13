
let element =  document.querySelectorAll('.contentBox');
let imageLoad =  document.querySelector('.imageLoad');
imageLoad.classList.add('animated', 'rotateIn','slower');
let decriptionContent =  document.querySelector('.decriptionContent');
decriptionContent.classList.add('animated', 'flipInY','slower');
let dem = element.length;
for (let index = 0; index < dem; index++) {
    animateCheck(index);
}
function animateCheck(i){
    element[i].classList.add('animated', 'fadeInRight','slower','delay-3s' );
}