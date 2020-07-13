
const pokemons_number = 151;

async function gottaCatchEmAll(){
    for (let id = 1; id <= pokemons_number; id++) {
        const pokemonInfo = await getPokemon(id);
        createListSprite(pokemonInfo);
    }
}

async function getPokemon(id){

    const url = "https://pokeapi.co/api/v2/pokemon/"+ id.toString();
    const res = await fetch(url);
    const pokemon = await res.json();
    return(pokemon);
}

function createListSprite(pokemon){
    //Preformato de contenido 
    const name=pokemon.name.toString();
    const viewName=name[0].toUpperCase()+name.slice(1);
    const listSprite = '<img src="https://img.pokemondb.net/sprites/sword-shield/icon/'+name+'.png">';
    const listNumber = pokemon.id.toString();
    //Formato
    const listHTML=listSprite + "<p>" + listNumber +". "+viewName+"</p>"

    //Crear nueva estructura HTML
    const listElement = document.createElement("div");
    listElement.classList.add("listPokemon");
    listElement.classList.add("row") ;
    listElement.innerHTML = listHTML;  

    //Referencia "append" a HTML
    let poke_list = document.getElementById("poke_list");
    poke_list.appendChild(listElement);
}


gottaCatchEmAll();