let bombo = [];

for (let i = 1; i < 91; i++) {
  let div = document.createElement('div');
  
  div.id = `num${i}`;
  div.textContent= i;

  bombo.push(i);
  numeros.appendChild(div);
}



let display = [];

document.getElementById("Num").addEventListener('click', () =>{

    // Llamar a la función para agregar un elemento aleatorio

    function agregarElementoAleatorio() {
        let randomIndex = Math.floor(Math.random() * bombo.length);
        display.push(bombo[randomIndex]);
        bombo.splice(randomIndex, 1);
   
     
       // Add a class to the div element based on the content
        document.getElementById(`num${display[display.length - 1]}`).classList.add("active");

        
   
        
       document.getElementById("preview").textContent= display[display.length - 1];
    } 
    agregarElementoAleatorio();    
    });
document.getElementById("New").addEventListener('click', () =>{
    
        location.reload(true);
});

document.addEventListener('DOMContentLoaded',(event) => {
  const myDiv=0;

});
