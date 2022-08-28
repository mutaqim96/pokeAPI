//dapatkan wrapper dalam html tadi dan declare variable
const poke_cointainer = document.getElementById('poke_container');

//declare total pokemon sedia ada 150. declare variable supaya senang guna dalam for loop nanti
const pokemons_number = 150;

//object yang simpan type dan link kepada color.
const colors = {
    fire : '#FDDFDF',
    grass : '#DEFDE0',
    electric : '#FCF7DE',
    water : '#DEF3FD',
    ground : '#f4e7da',
    rock : '#d5d5d4',
    fairy : '#fceaff',
    poison : '#98d7a5',
    bug : '#f8d5a3',
    dragon : '#97b3e6',
    psychic : '#eaeda1',
    flying : '#F5F5F5',
    fighting : '#E6E0D4',
    normal : '#F5F5F5'
};

// create array yang simpan main type sahaja main_types
const main_types = Object.keys(colors);

//test tengok isi main_types
// console.log(main_types);



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

    //type yang keluar first. map over pokemon type , kita perlukan name dalam type . el /element tu bebas boleh jadi el boleh jadi type bebas namakan
    //element tu isinya types dalam response = el dalam map ni
    const poke_types = pokemon.types.map(el => el.type.name);
    //loop through main_type cari matching dengn current type. find() first one yang ada dalam array tadi
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    //nama : bulbasaur , kita akan ubah b.. which is index [0] dalam string. dan append selebihnya guna slice(1), lepas [1] kita ambil
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    //bastionbot api untuk gambar lawa tak active so, go with default
    //letakkan innerHTMl
    const pokeInnerHTML =`
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" >
        </div>
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    //add innerHTML ke dalam pokeEl
    pokemonEL.innerHTML  = pokeInnerHTML;

    //append pokemon Element ke dalam peke_cointainer awal tadi
    poke_cointainer.appendChild(pokemonEL);

}
