//dapatkan wrapper dalam html tadi dan declare variable
const poke_cointainer = document.getElementById('poke_container');

//declare total pokemon sedia ada 150. declare variable supaya senang guna dalam for loop nanti
const pokemons_number = 150;




//function untuk dapatkan semua 150 pokemon
const fetchPokemons = async () => {

    //for loop untuk process each of that pokemon
    for(let i = 1 ; i <= pokemons_number ; i++){
        //ada async adanya await, dan panggil function pokemon tadi
        await getPokemon(i);
    }

}



//function yang akan dicall untuk dapatkan pokemon.
//jadikan async function supaya banyak lagi function boleh followup lepas function ni initiate the call
//getPokemon akan perlukan id . kalau lebih  1 parameter kena letak dalam () cth , (id, name)
const getPokemon = async id => {
    //declare url
    //guna `` supaya boleh guna template literal ${}
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //fetch resource guna url. res tu result / response
    const res = await fetch(url);
    //dapatkan pokemon daripada res tadi, dan jadikan dia json
    const pokemon = await res.json();
    
    //test guna console.log
    // console.log(pokemon);

    //panggil function untuk create Pokemon Cards.
    createPokemonCard(pokemon);
}

//Panggil function fetchPokemons tadi. CONFIRM KENA LETAK LEPAS DAH DECLARE FUNCTION
fetchPokemons();

//panggil function getPokemon
// getPokemon(1);

// declare function untuk buat card tadi
function createPokemonCard(pokemon){
    //create html untuk card pokemon
    const pokemonEL = document.createElement('div');
    //add class untuk boleh style 
    pokemonEL.classList.add('pokemon');

    //nama : bulbasaur , kita akan ubah b.. which is index [0] dalam string. dan append selebihnya guna slice(1), lepas [1] kita ambil
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    //bastionbot api untuk gambar lawa tak active so, go with default
    //letakkan innerHTMl
    const pokeInnerHTML =`
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" >
        </div>
        ${name}
    `;
    //add innerHTML ke dalam pokeEl
    pokemonEL.innerHTML  = pokeInnerHTML;

    //append pokemon Element ke dalam peke_cointainer awal tadi
    poke_cointainer.appendChild(pokemonEL);

}
