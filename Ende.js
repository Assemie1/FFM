Punkte = Number(sessionStorage.getItem("Punkte"))

document.getElementById("Knopf").onclick = function() {
  Oper = Number(sessionStorage.getItem("Oper"));
  console.log(Oper);

      window.alert('Dein Punkte liegen bei: ' + Punkte);

      sessionStorage.setItem("Oper", 7);
 
}
