// Contenido del archivo.js
var loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.open("login.html", "_blank");
});