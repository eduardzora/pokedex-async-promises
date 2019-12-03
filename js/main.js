// Eventos
// Los eventos son las reacciones a las acciones que ejecuta el usuario
$loader = document.getElementById('loader');
const buscarPokemon = async (event) => {
    event.preventDefault();
    $loader.classList.remove('hidden');
    $pokemonImage.style.display = 'none';
    const form = new FormData($form);
    const pokemonName = form.get('pokemon')
    const pokemonData = await getPokemon(pokemonName);
    buildPokemon(pokemonData, $pokemon, $pokemonImage, $loader);
}

const $form = document.getElementById('form');
$form.addEventListener('submit', buscarPokemon);
// let const


// Fetch es el API del browser que nos ayuda a interactuar con datos
const $pokemon = document.getElementById('pokemon');
const $pokemonImage = document.getElementById('pokemon-image');

const buildPokemon = (pokemon, $nameContainer, $imageContainer, $loader) => {
    $loader.classList.add('hidden');
    $imageContainer.style.display = 'block';
    $nameContainer.innerHTML = pokemon.name;
    $imageContainer.setAttribute('src', pokemon.sprites.front_default);

    const msg = new SpeechSynthesisUtterance();
    msg.text = pokemon.name;
    speechSynthesis.speak(msg);
}

const getPokemon = async (pokemonId) => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const pokemon = await respuesta.json();
    return pokemon;
    // console.log(pokemon.sprites.front_default)
    // .then(function(respuesta){
    //   console.log(respuesta);
    //   respuesta.json()
    //   .then(function(pokemon){
    //     console.log(pokemon.name)
    //   })
    // });
}
// GET 
// POST 
// PUT 
// DELETE
// Promises 
var nombre = 'Eduard'
function apellido() {
    var apellido = 'Zora'
    setTimeout(function () {
        var segundoApellido = 'Espinosa';
        var nombreCompleto = nombre + " " + apellido + " " + segundoApellido;
        console.log(nombreCompleto);
    }, 1000)
}
setTimeout(apellido, 1000)
// callbacks 
// Un callback es una función que es parametro de otra función 
// Promises
var tiempo = 11;
var promesa = new Promise(function (todoBien, todoMal) {
    if (tiempo === 11) {
        todoBien();
    } else {
        todoMal();
    }
}).then(function () {
    console.log('Eduard llegó puntual')
}).catch(function () {
    console.log('Eduard llegó tarde')
});