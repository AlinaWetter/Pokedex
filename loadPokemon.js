let currentGenerationAsJson
let currentGenerationSpeciesAsJson
let currentUrlAsJson
let currentSpecificUrlAsJson


async function loadPokemon(idx) {
    document.getElementById('searchBar').classList.remove('d-none')
    document.getElementById('search').value = '';
    clearingPokemons()

    let url = `https://pokeapi.co/api/v2/generation/${idx}`;
    let response = await fetch(url);
    currentGenerationAsJson = await response.json();
    currentGeneration = currentGenerationAsJson['pokemon_species'];

    getSpecies();
   
}

function clearingPokemons() {
    closeTaskBar();
    
    let generationBody = document.getElementById('generationBody');
    generationBody.innerHTML = '';
    generation = [];
}

async function getSpecies() {
    for (i = 0; i < currentGeneration.length; i++) {

        let speciesUrl = currentGenerationAsJson['pokemon_species'][i]['url'];
        let speciesUrlResponse = await fetch(speciesUrl);
        currentUrlAsJson = await speciesUrlResponse.json();

        let speciesId = (currentUrlAsJson['id']);
        let currentGenerationSpecies = `https://pokeapi.co/api/v2/pokemon/${speciesId}/`;

        let speciesResponse = await fetch(currentGenerationSpecies);
        currentGenerationSpeciesAsJson = await speciesResponse.json();
        generation.push(currentGenerationSpeciesAsJson);
        names.push(currentGenerationSpeciesAsJson['name']);
        disableButtons();
        showPokemon(i);
    }
    reenableButtons();
}

async function loadTypes() {
    let url = 'https://pokeapi.co/api/v2/type';
    let response = await fetch(url);
    let responseAsJson = await response.json();

    let responseTypes = responseAsJson['results'];

    for (i = 0; i < responseTypes.length; i++) {
        types.push(responseTypes[i]['name'])
    }
    console.log(types)
} 