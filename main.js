var pokeId = 1;
var interval = setInterval('display()', 1000);
var boton = document.getElementById('boton');


function display() {
   boton.innerHTML = pokeId.toString();
   consultarPkmn()

   pokeId++;
   if (pokeId > 150) {
      pokeId = 1;
   }
}

function consultarPkmn() {
   let pokeApi = "https://pokeapi.co/api/v2/pokemon/";
   fetch(pokeApi + pokeId.toString())
      .then(response => response.json())
      .then(data => console.log(data.name))
}
