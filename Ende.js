Punkte = Number(sessionStorage.getItem("Punkte"))

document.getElementById("Knopf").onclick = function() {

      window.alert('Dein Punkte liegen bei: ' + Punkte);
}
