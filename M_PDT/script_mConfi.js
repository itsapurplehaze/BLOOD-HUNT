// Al cargar la página, revisamos si ya hay un nombre guardado
window.onload = function () {
  const savedName = localStorage.getItem("playerName");   
  if (savedName) {
    // Ya está guardado, no mostramos la modal
    document.getElementById("playerModal").classList.add("hidden");
    document.getElementById("welcomeMsg").innerText = `¡Hola de nuevo, ${savedName}! 🎉`;
  }
};    
function startGame() {
  const nameInput = document.getElementById("playerNameInput");
  const playerName = nameInput.value.trim();  
  if (playerName === "") {
    alert("Pon tu nombre primero bro...");
    return;
  }   
  // Guardar en localStorage
  localStorage.setItem("playerName", playerName); 
  // Ocultar la modal
  document.getElementById("playerModal").classList.add("hidden"); 
  // Mostrar mensaje
  document.getElementById("welcomeMsg").innerText = `¡Vamos, ${playerName}! 🎮`;
  // Redireccionar al juego
  window.location.href = "../SCENE/game.html";
}