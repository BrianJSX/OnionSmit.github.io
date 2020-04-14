

let imageLoad =  document.querySelector('.imageLoad');
let decriptionContent =  document.querySelector('.decriptionContent');
decriptionContent.classList.add('animated', 'flipInY','slower');
imageLoad.classList.add('animated', 'rotateIn','slower');
let elementFirst = document.querySelectorAll('.contentBox');
let demFirst = elementFirst.length;
for (let i = 0; i < demFirst; i++) {
    elementFirst[i].classList.add('animated', 'fadeInRight','slower');
}

window.onscroll = function() {
    var y = document.documentElement.scrollTop;
    console.log(y);
    if(y>0){
        loadScroll()
    }
    
};
function loadScroll(){
    let x = 0;
    let element =  document.querySelectorAll('.contentBox');
    // document.getElementById("content").style.display = 'block';
    let dem = element.length;
    for (let index = 0; index < dem; index++) {
        element[index].classList.add('animated', 'fadeInRight','slower','delay-'+index+'s');
        element[index].classList.add('animated', 'jackInTheBox','slower','delay-'+index+'s');
    }
    console.log(element[1].classList[4])
}
