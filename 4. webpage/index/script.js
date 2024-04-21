
const inicio =document.getElementById("but1");
inicio.addEventListener('click', () => {
    location.href = '../index/index.html';
    console.log("it works")
});

const robots =document.getElementById("but2");
robots.addEventListener('click', () => {
    location.href = '../robots/index.html';
});
const terminids =document.getElementById("but3");
terminids.addEventListener('click', () => {
    location.href = '../terminids/index.html';
});
const support =document.getElementById("but4");
support.addEventListener('click', () => {
    location.href = '../support/index.html';
});
