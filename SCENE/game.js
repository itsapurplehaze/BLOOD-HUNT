// Variables de puntuaciones
let kills = 12;
let points = 2450;

document.getElementById("kills").innerText = kills;
document.getElementById("points").innerText = points;

// Pausar y reanudar el juego con ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("pause-menu").classList.toggle("hidden");
    }
});

// Reanudar juego
document.getElementById("resume-btn").addEventListener("click", function() {
    document.getElementById("pause-menu").classList.add("hidden");
});

// Abrir configuración
document.getElementById("settings-btn").addEventListener("click", function() {
    document.getElementById("pause-menu").classList.add("hidden");
    document.getElementById("settings-menu").classList.remove("hidden");
});

// Volver del menú de configuración
document.getElementById("back-btn").addEventListener("click", function() {
    document.getElementById("settings-menu").classList.add("hidden");
    document.getElementById("pause-menu").classList.remove("hidden");
});

// Mostrar puntuaciones mientras TAB está presionado
document.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();
        document.getElementById("scoreboard").classList.remove("hidden");
    }
});

// Ocultar puntuaciones al soltar TAB
document.addEventListener("keyup", function(event) {
    if (event.key === "Tab") {
        document.getElementById("scoreboard").classList.add("hidden");
    }
});

/*API SHIT*/
// Mostrar modal de compartir al hacer clic en "Abandonar"
document.getElementById("share-btn").addEventListener("click", function() {
    const message = `¡He alcanzado ${kills} kills y ${points} puntos en el juego!`;

    if (typeof FB === 'undefined') {
        alert("El SDK de Facebook no se cargó.");
        return;
    }

    document.getElementById("black-overlay").classList.remove("hidden");

    // Compartir en Facebook
    FB.ui({
        method: 'share', // share > más simple y nativo para compartir links
        href: window.location.href, // link a tu página
        quote: message, // mensaje personalizado
    }, function(response) {
        document.getElementById("black-overlay").classList.add("hidden");

        if (response && !response.error_message) {
            console.log('✅ Compartido exitosamente.');
            window.location.href = "../MAIN_MENU/main.html";
        } else {
            console.log('❌ Falló el compartir.');
            alert("No se compartió tu progreso. Inténtalo de nuevo.");
        }
    });    
});

// No compartir, redirigir al menú principal
document.getElementById("skip-share-btn").addEventListener("click", function() {
    console.log('No se compartió el progreso. Redirigiendo al menú...');
    window.location.href = "../MAIN_MENU/main.html";
});



