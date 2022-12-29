let statsLabels = [];
let statsData = [];

let colorsWithOpacity = {
    normal: 'rgba(168, 167, 122, 0,5)',
    fire: 'rgba(238, 129, 48, 0.5)',
    water: 'rgba(99, 144, 240, 0.5)',
    electric: 'rgba(247, 208, 44, 0.5)',
    grass: 'rgba(122, 199, 76, 0.5)',
    ice: 'rgba(150, 217, 214, 0.5)',
    fighting: 'rgba(194, 46, 40, 0.5)',
    poison: 'rgba(163, 62, 161, 0.5)',
    ground: 'rgba(226, 191, 101, 0.5)',
    flying: 'rgba(169, 143, 243, 0.5)',
    psychic: 'rgba(249, 85, 135, 0.5)',
    bug: 'rgba(166, 185, 26, 0.5)',
    rock: 'rgba(182, 161, 54, 0.5)',
    ghost: 'rgba(115, 87, 151, 0.5)',
    dragon: 'rgba(111, 53, 252, 0.5)',
    dark: 'rgba(112, 87, 70, 0.5)',
    steel: 'rgba(183, 183, 206, 0.5)',
    fairy: 'rgba(214, 133, 173, 0.5)',
};

function addStatsLables(i) {
    statsLabels = [];
    let stats = generation[i]['stats'];
    for (j = 0; j < stats.length; j++) {
        statsLabels.push(stats[j]['stat']['name'])
    }
}

function addStatsData(i) {
    statsData = [];
    let datas = generation[i]['stats'];
    for (j = 0; j < datas.length; j++) {
        statsData.push(datas[j]['base_stat'])
    }

    let type = generation[i]['types'][0]['type']['name'];
    let color = colorsWithOpacity[type];
    let color2 = colors[type];

    addChartItem(color, color2)

}

function addChartItem(color, color2) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: statsLabels,
            datasets: [{
                data: statsData,
                borderWidth: 1,
                backgroundColor: color,
                borderColor: color2,
                opacity: 0.1,
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        crossAlign: 'far',
                        font: {
                            size: 14,
                        }
                    }
                },
                x: {
                    reverse: true,
                    ticks: {
                        display: false,
                        
                    }
                }

            },
            plugins: {
                legend: {
                    display: false,
                }
            }
           
        }
    });
}