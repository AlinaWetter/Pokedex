function pokemonHtml(i) {
    return /* html */ `
        <div class="wrapper"> 
            <div class="pokemon-card" id="card${i}" onclick="openPokeCard(${i}); addTypesToPokemonSmall(${i})">
                <img class="pokeball-img" src="./img/Pokeball.png">
                <img class="pokemon-img" src="${generation[i]['sprites']['other']['home']['front_shiny']}">
                <span class="id">#${generation[i]['id']}</span>
                <span class="name" >${capitalizeFirstLetter(i)}</span>
                <div class="type-parent" id="types${i}"></div>
            </div>
        </div>
    `;
}

function pokeCardHtml(i) {
    return /* html */ `
        
        <div class="pokemon-card-small no-scroll" id="smallPokemonCard" onclick="event.stopPropagation()">
            <div>
                <img class="white-arrow" src="./img/white-arrow.png" onclick="closeOverlay()">
            </div>
            <img class="pokeball-img" src="./img/Pokeball.png">
            <img class="pokeball-img-2" src="./img/Pokeball.png">
            <div class="pokemon-info-container">
                <div class="left">
                    <span class="name" >${capitalizeFirstLetter(i)}</span>
                    <div class="type-parent" id="types0${i}"></div>
                </div>
                <span class="id">#${generation[i]['id']}</span>
            </div>
            <div class="description" id="descriptionContainer">
            <img class="pokemon-img" src="${generation[i]['sprites']['other']['home']['front_shiny']}">
                <div id="coloredDescription" class="colored-description">

                </div>

            </div>
        </div>
    `;
}

function pokemonTypeHtml(i, t) {
    return /* html */ `
        <div class="type-child" id="typeChild${t}}">
        ${generation[i]['types'][t]['type']['name']}
        </div>
    `;
}

function smallPokemonCardHtml() {
    return /* html */ `
    <div id="desText" class="description-text">${finalText}</div>
    </div>
    `
}

function getWeightandHeight(i) {
    return /* html */ `
    <div class="small-element" id="weightElement"> weight <b>${generation[i]['weight']}</b>
    </div>
    <div class="small-element" id="heightElement"> height <b>${generation[i]['height']}</b>
    </div>
    `
}

function addChart() {
    return /* html */ `
    <div class="chart"> 
        <canvas id="myChart"></canvas>
    </div>
    `

}