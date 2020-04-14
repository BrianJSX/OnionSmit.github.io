

let imageLoad =  document.querySelector('.imageLoad');
let decriptionContent =  document.querySelector('.decriptionContent');
decriptionContent.classList.add('animated', 'flipInY','slower');
imageLoad.classList.add('animated', 'rotateIn','slower');
let x = 0;
let element =  document.querySelectorAll('.contentBox');
// document.getElementById("content").style.display = 'block';
let dem = element.length;
for (let index = 0; index < dem; index++) {
    element[index].classList.add('animated', 'fadeInRight','slower','delay-'+index+'s');
}

