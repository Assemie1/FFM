var Start;
var Oper;
if (Start = ""){
  sessionStorage.setItem("Punkte", 0)
  sessionStorage.setItem("Oper", 0)
}

Punkte = Number(sessionStorage.getItem("Punkte"))


document.getElementById("Richtig").onclick = function() {
  Oper = Number(sessionStorage.getItem("Oper"));
  console.log(Oper);
  if (Oper == 0){
    Punkte = Punkte +1;
      window.alert('Richtig! Dein Punkte liegen bei: ' + Punkte);
      sessionStorage.setItem("Punkte", Punkte);

      document.getElementById("Richtig").disabled=true;
      document.getElementById("Falsch").disabled=true;
      document.getElementById("Falsch2").disabled=true;
      document.getElementById("Falsch3").disabled=true;
      Start = 1;
      sessionStorage.setItem("Oper", 1);
  } else{
    window.alert("Nochmal geht nicht");
  }

}
  document.getElementById("Falsch").onclick = function() {
    Oper = Number(sessionStorage.getItem("Oper"));
    if (Oper == 0){

        window.alert('Falsch, Richtig wäre 1880! Dein Punkte liegen bei: ' + Punkte);
        sessionStorage.setItem("Punkte", Punkte);
  
        document.getElementById("Richtig").disabled=true;
        document.getElementById("Falsch").disabled=true;
        document.getElementById("Falsch2").disabled=true;
        document.getElementById("Falsch3").disabled=true;
        Start = 1;
        sessionStorage.setItem("Oper", 1);
    } else{
      window.alert("Nochmal geht nicht");
    }
  };

  document.getElementById("Falsch2").onclick = function() {
    Oper = Number(sessionStorage.getItem("Oper"));
    if (Oper == 0){

        window.alert('Falsch, Richtig wäre 1880! Dein Punkte liegen bei: ' + Punkte);
        sessionStorage.setItem("Punkte", Punkte);
  
        document.getElementById("Richtig").disabled=true;
        document.getElementById("Falsch").disabled=true;
        document.getElementById("Falsch2").disabled=true;
        document.getElementById("Falsch3").disabled=true;
        Start = 1;
        sessionStorage.setItem("Oper", 1);
    } else{
      window.alert("Nochmal geht nicht");
    }
  };

  document.getElementById("Falsch3").onclick = function() {
    Oper = Number(sessionStorage.getItem("Oper"));
    if (Oper == 0){
        window.alert('Falsch, Richtig wäre 1880! Dein Punkte liegen bei: ' + Punkte);
        sessionStorage.setItem("Punkte", Punkte);
  
        document.getElementById("Richtig").disabled=true;
        document.getElementById("Falsch").disabled=true;
        document.getElementById("Falsch2").disabled=true;
        document.getElementById("Falsch3").disabled=true;
        Start = 1;
        sessionStorage.setItem("Oper", 1);
    } else{
      window.alert("Nochmal geht nicht");
    }
  };

  document.getElementById("clear").onclick = function() {
    sessionStorage.clear();
    location.reload();
    sessionStorage.clear();
  }
