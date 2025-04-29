// Simulación de datos para cada jugador
let scores = [
    { kills: 12, points: 2450 },
    { kills: 8, points: 1875 },
    { kills: 15, points: 3020 }
];

// Seleccionamos todos los elementos de la tabla de puntuaciones
let players = document.querySelectorAll("#All-scores li");

players.forEach((player, index) => {
    let killsElement = player.querySelector(".kills");
    let pointsElement = player.querySelector(".points");

    // Asignamos los valores únicos de cada jugador
    killsElement.innerText = scores[index].kills;
    pointsElement.innerText = scores[index].points;
});
