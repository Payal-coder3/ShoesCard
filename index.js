
const card = document.querySelector(".card")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")

const Container = document.querySelector(".container");


Container.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth/2-e.pageX)/15;
    let yAxis = (window.innerWidth/2-e.pageY)/12;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    card3.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
    
});
//Animate out
Container.addEventListener()

//Animate in