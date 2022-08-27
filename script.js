//dapatkan wrapper dalam html tadi dan declare variable
const poke_cointainer = getElementById('poke_container');

//declare total pokemon sedia ada 150. declare variable supaya senang guna dalam for loop nanti
const pokemons_number = 150;

//function yang akan dicall untuk dapatkan pokemon.
//jadikan async function supaya banyak lagi function boleh followup lepas function ni initiate the call
//getPokemon akan perlukan id . kalau lebih  1 parameter kena letak dalam () cth , (id, name)
const getPokemon = async id => {
    //declare url
    //guna `` supaya boleh guna template literal ${}
    const url = `https://pokeapi.co/api/v2/${id}`;
}