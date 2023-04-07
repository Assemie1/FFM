Punkte = Number(sessionStorage.getItem("Punkte"))


document.getElementById("Richtig").onclick = function() {
  Oper = Number(sessionStorage.getItem("Oper"));
  console.log(Oper);
  if (Oper == 2){
    Punkte = Punkte +1;
      window.alert('Richtig! Dein Punkte liegen bei: ' + Punkte);
      sessionStorage.setItem("Punkte", Punkte);

      document.getElementById("Richtig").disabled=true;
      document.getElementById("Falsch").disabled=true;
      document.getElementById("Falsch2").disabled=true;
      document.getElementById("Falsch3").disabled=true;
      Start = 1;
      sessionStorage.setItem("Oper", 3);
  } else{
    window.alert("Nochmal geht nicht");
  }

}
  document.getElementById("Falsch").onclick = function() {
    Oper = Number(sessionStorage.getItem("Oper"));
    if (Oper == 2){

        window.alert('Falsch, Richtig wäre 47.000! Dein Punkte liegen bei: ' + Punkte);
        sessionStorage.setItem("Punkte", Punkte);
  
        document.getElementById("Richtig").disabled=true;
        document.getElementById("Falsch").disabled=true;
        document.getElementById("Falsch2").disabled=true;
        document.getElementById("Falsch3").disabled=true;
        Start = 1;
        sessionStorage.setItem("Oper", 3);
    } else{
      window.alert("Nochmal geht nicht");
    }
  };

  document.getElementById("Falsch2").onclick = function() {
    Oper = Number(sessionStorage.getItem("Oper"));
    if (Oper == 2){

        window.alert('Falsch, Richtig wäre 47.000! Dein Punkte liegen bei: ' + Punkte);
        sessionStorage.setItem("Punkte", Punkte);
  
        document.getElementById("Richtig").disabled=true;
        document.getElementById("Falsch").disabled=true;
        document.getElementById("Falsch2").disabled=true;
        document.getElementById("Falsch3").disabled=true;
        Start = 1;
        sessionStorage.setItem("Oper", 3);
    } else{
      window.alert("Nochmal geht nicht");
    }
  };

  document.getElementById("Falsch3").onclick = function() {
    Oper = Number(sessionStorage.getItem("Oper"));
    if (Oper == 2){
        window.alert('Falsch, Richtig wäre 47.000! Dein Punkte liegen bei: ' + Punkte);
        sessionStorage.setItem("Punkte", Punkte);
  
        document.getElementById("Richtig").disabled=true;
        document.getElementById("Falsch").disabled=true;
        document.getElementById("Falsch2").disabled=true;
        document.getElementById("Falsch3").disabled=true;
        Start = 1;
        sessionStorage.setItem("Oper", 3);
    } else{
      window.alert("Nochmal geht nicht");
    }
  };

 