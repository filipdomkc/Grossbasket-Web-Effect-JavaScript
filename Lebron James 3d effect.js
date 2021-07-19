// movement animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const ti=document.querySelector('.title');
const lbj=document.querySelector('.LBJ');
const desc= document.querySelector('.info h3')

//Moving animation event
container.addEventListener("mousemove",(e) => {
let xAxis = (window.innerWidth / 2 - e.pageX)/10;
let yAxis = (window.innerHeight / 2 - e.pageY)/10;

card.style.transform= `rotateY(${xAxis}deg)rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', e=> {
    card.style.transition='none';
    ti.style.transform='translateZ(50px)';
    lbj.style.transform='translateZ(50px)';
    desc.style.transform='translateZ(50px)';
})
//Animate Out
 container.addEventListener('mouseleave', e=> {
    card.style.transition='all 0.5s ease'; 
    card.style.transform=`rotateY(0deg)rotateX(0deg)`;
    ti.style.transform='translateZ(0px)';
    lbj.style.transform='translateZ(0px)';
    desc.style.transform='translateZ(0px)';
 })

 