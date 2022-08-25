

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25'
}

const { url, type, id} = apiData;
const fetchData = `${url}${type}/${id}`;

const pokemon = document.querySelector('.frame');

fetch(fetchData)
    .then(data => data.json())
    .then(data => displayUI(data))


const displayUI = (data) => {

    console.log(data.sprites)
    let html = `
    <div class='img-container>
    <img src='${data.sprites.back_default}' alt='pikachu'>
    <img src='${data.sprites.back_female}' alt='pikachu'>
    <img src='${data.sprites.back_shiny}' alt='pikachu'>
    <img src='${data.sprites.back_female}' alt='pikachu'>
    <img src='${data.sprites.back_female}' alt='pikachu'>
    <img src='${data.sprites.back_shiny_female}' alt='pikachu'>
    <img src='${data.sprites.front_default}' alt='pikachu'>
    
    </div?>`
    pokemon.innerHTML = html;

}

