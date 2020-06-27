var pokeID = 1;
let pokemonHTML = document.getElementById("pkmn");
let interval = setInterval('display()', 1000);


function display() {
   console.log(pokeID);
   pokeAPI(pokeID);
   pokeID=incrementar(pokeID);
}

function incrementar(numero) {
   numero++;
   if (numero>150) {
      numero=1;
   }
   return numero;
}

function pokeAPI(pokeID = 1) {
   let url = "https://pokeapi.co/api/v2/pokemon/" + pokeID.toString();
   fetch(url)
       .then(response => response.json())
       .then(data => crearPkmn(data))
   //.then(data => console.log(data))
}

function crearPkmn(data) {
   let imagen = pokemonHTML.getElementsByTagName("img")[0];
   imagen.setAttribute("src",data.sprites.front_default);

   let nombre = pokemonHTML.getElementsByTagName("p")[0];
   nombre.textContent = data.name;
   //console.log(pokeID);
}