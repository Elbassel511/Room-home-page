let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let slides = document.querySelectorAll('.carousel-item')
let scrollPosition = 1;
let navbtn = document.querySelector('.nav__btn-toggle');
let isNavOpen = false;
let nav = document.querySelector('.nav__links--mob')

prevBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollPosition -=1;
    if(scrollPosition<1) scrollPosition=slides.length;
    scrlTo(scrollPosition);  
})

nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollPosition +=1;
    if(scrollPosition>slides.length) scrollPosition=1;
    scrlTo(scrollPosition);  

})

let scrlTo = (scrollPosition) =>{
    document.querySelectorAll('.products__discription--box').forEach(box=>box.classList.add('hide'));
    document.querySelector(`[data-slide = hero-${scrollPosition}]`).classList.remove('hide');
}

navbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    nav.classList.toggle('active')
    document.querySelector('.layer').classList.toggle('active')
    if(isNavOpen){
        document.querySelector('#btn-img').setAttribute('src','./images/icon-hamburger.svg')
        isNavOpen=false
    }else{
        document.querySelector('#btn-img').setAttribute('src','./images/icon-close.svg')
        isNavOpen=true
    }
})