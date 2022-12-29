let names = [];
let generation = [];
let types = [];
let colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

function showPokemon(i) {
    let generationBody = document.getElementById('generationBody');

    generationBody.innerHTML += pokemonHtml(i);
    addTypesToPokemon(i);
    colorInType(i);
}

function addTypesToPokemon(i) {
    let typesId = document.getElementById(`types${i}`);
    typesId.innerHTML = '';
    let types = generation[i]['types']
    for (t = 0; t < types.length; t++) {
        typesId.innerHTML += pokemonTypeHtml(i, t);
    }
}

function addTypesToPokemonSmall(i) {
    let typesId = document.getElementById(`types0${i}`);
    typesId.innerHTML = '';
    let types = generation[i]['types']
    for (t = 0; t < types.length; t++) {
        typesId.innerHTML += pokemonTypeHtml(i, t);
    }
}

function capitalizeFirstLetter(j) {
    let str = generation[j]['name'];
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function colorInType(i) {
    let card = document.getElementById(`card${i}`);
    let type = generation[i]['types'][0]['type']['name'];
    let color = colors[type];

    card.style.backgroundColor = `${color}`
}

function disableButtons() {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = true;
    document.getElementById('button4').disabled = true;
    document.getElementById('button5').disabled = true;
    document.getElementById('button6').disabled = true;
    document.getElementById('button7').disabled = true;
    document.getElementById('button8').disabled = true;
    document.getElementById('regionButton').classList.add('pointer-none')
    document.getElementById('regionButton').classList.remove('pointer-unset')
}

function reenableButtons() {
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = false;
    document.getElementById('button3').disabled = false;
    document.getElementById('button4').disabled = false;
    document.getElementById('button5').disabled = false;
    document.getElementById('button6').disabled = false;
    document.getElementById('button7').disabled = false;
    document.getElementById('button8').disabled = false;
    document.getElementById('regionButton').classList.remove('pointer-none')
    document.getElementById('regionButton').classList.add('pointer-unset')
    document.getElementById('alert').classList.add('d-none')
}

function openTaskBar() {
    let regionButton = document.getElementById('regionButton');
    if (regionButton.classList.contains('pointer-none')) {
        document.getElementById('alert').classList.remove('d-none')
    } else {
        document.getElementById('header').classList.remove('d-none');
        document.getElementById('regionButton').classList.add('d-none');
        document.getElementById('generationBody').classList.add('d-none');
        document.getElementById('searchBar').classList.add('d-none')
    }
}

function closeTaskBar() {
    document.getElementById('header').classList.add('d-none');
    document.getElementById('regionButton').classList.remove('d-none');
    document.getElementById('generationBody').classList.remove('d-none');
}

function openPokeCard(i) {
    getSpecificSpecies(i);
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('overlay').innerHTML = pokeCardHtml(i);
    document.getElementById('body').classList.add('no-scroll');
    document.getElementById('html').classList.add('no-scroll');
}

function smallPokeCardFunctions(i) {
    let box = document.getElementById('descriptionContainer');
    let smallBox = document.getElementById('coloredDescription');

    getEnglishDes()
    smallBox.innerHTML += smallPokemonCardHtml();
    smallBox.innerHTML += getWeightandHeight(i);
    box.innerHTML += addChart();
    addStatsLables(i);
    addStatsData(i)
    // addChartItem();
    getColorForSmallCard(i);
}

function getEnglishDes() {
    let texts = currentSpecificUrlAsJson['flavor_text_entries']
    for (j = 0; j < texts.length; j++) {
        let language = texts[j]['language']['name'];

        if (language === 'en') {

            console.log(currentSpecificUrlAsJson['flavor_text_entries'][j]['flavor_text']);
            finalText = currentSpecificUrlAsJson['flavor_text_entries'][j]['flavor_text'];
            break;

        }
    }
}

async function getSpecificSpecies(i) {
    let speciesUrl = currentGenerationAsJson['pokemon_species'][i]['url'];
    let speciesUrlResponse = await fetch(speciesUrl);
    currentSpecificUrlAsJson = await speciesUrlResponse.json();
    console.log(currentSpecificUrlAsJson);
    smallPokeCardFunctions(i)
}

function getColorForSmallCard(i) {
    let type = generation[i]['types'][0]['type']['name'];
    let color = colors[type];
    let smallCard = document.getElementById('smallPokemonCard');
    smallCard.style.backgroundColor = `${color}`;
    let desText = document.getElementById('desText');
    desText.style.backgroundColor = `${color}`;
    let weightElement = document.getElementById('weightElement');
    let heightElement = document.getElementById('heightElement');
    weightElement.style.backgroundColor = `${color}`;
    heightElement.style.backgroundColor = `${color}`;
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('body').classList.remove('no-scroll');
    document.getElementById('html').classList.remove('no-scroll');
}

function filter() {
    let generationBody = document.getElementById('generationBody');
    generationBody.innerHTML = '';
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    console.log(search)

    for (j = 0; j < names.length; j++) {

        if (names[j].toLowerCase().includes(search)) {
            showPokemon(j);
        }
    }
}

function openSearchBar() {
    let search = document.getElementById('search');

    if (search.classList.contains('search')) {
        closeSearchBar(search)
    } else {
        search.classList.add('search')
        search.classList.remove('d-none')
    }
}

function closeSearchBar(search) {
    document.getElementById('search').value = '';
    search.classList.add('d-none')
    search.classList.remove('search')
    filter();
}

