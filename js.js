
var Amzug = 1;
var Spielzug = 0;
var Sperren = false;
var Katze1 = null;
var Katze2 = null;
var Möglich = 0;


document.getElementById("Molly").onclick = function() {
  
  document.getElementById("Odin").disabled = true;
  Katze1 = "Molly";
  Möglich = Möglich +1;
  MöglichFunc () 

};

document.getElementById("Odin").onclick = function() {
  
  document.getElementById("Molly").disabled = true;
  Katze1 = "Odin";
  Möglich = Möglich +1;
  MöglichFunc () 


};

document.getElementById("Emmi").onclick = function() {
  
  document.getElementById("Fine").disabled = true;
  Katze2 = "Emmi";
  Möglich = Möglich +1;
  MöglichFunc () 


};

document.getElementById("Fine").onclick = function() {
  
  document.getElementById("Emmi").disabled = true;
  Katze2 = "Fine";
  Möglich = Möglich +1;
  
  MöglichFunc () 


};

if (Möglich <2){
  var Spielfeld1 = document.getElementById("1")
        Spielfeld1.disabled=true
        var Spielfeld2 = document.getElementById("2")
        Spielfeld2.disabled=true
        var Spielfeld3 = document.getElementById("3")
        Spielfeld3.disabled=true
        var Spielfeld4 = document.getElementById("4")
        Spielfeld4.disabled=true
        var Spielfeld5 = document.getElementById("5")
        Spielfeld5.disabled=true
        var Spielfeld6 = document.getElementById("6")
        Spielfeld6.disabled=true
        var Spielfeld7 = document.getElementById("7")
        Spielfeld7.disabled=true
        var Spielfeld8 = document.getElementById("8")
        Spielfeld8.disabled=true
        var Spielfeld9 = document.getElementById("9")
        Spielfeld9.disabled=true
        console.log("ESGEHT NICHT")


}
function MöglichFunc () {
  if (Möglich == 2){
    var Spielfeld1 = document.getElementById("1")
        Spielfeld1.disabled=false
        var Spielfeld2 = document.getElementById("2")
        Spielfeld2.disabled=false
        var Spielfeld3 = document.getElementById("3")
        Spielfeld3.disabled=false
        var Spielfeld4 = document.getElementById("4")
        Spielfeld4.disabled=false
        var Spielfeld5 = document.getElementById("5")
        Spielfeld5.disabled=false
        var Spielfeld6 = document.getElementById("6")
        Spielfeld6.disabled=false
        var Spielfeld7 = document.getElementById("7")
        Spielfeld7.disabled=false
        var Spielfeld8 = document.getElementById("8")
        Spielfeld8.disabled=false
        var Spielfeld9 = document.getElementById("9")
        Spielfeld9.disabled=false
        console.log("ES GEHT")
  }
  AP.textContent = "Es beginnt "+ Katze2 

}
document.addEventListener('DOMContentLoaded', function () {
	  
  document.querySelector('#gameboard').addEventListener('click',  markField);	  
  
  function markField (e) { 
    const AP = document.getElementById("AP");
    var field = e.target;
    
    console.log(field);
  
    
    if (Amzug % 2 == 0 && Katze1 == "Molly"){
      field.setAttribute('aria-label','Molly'); 
      AP.textContent = Katze2 +" ist am Zug";
      field.disabled = true;
      

    }
    else if (Amzug % 2 == 0 && Katze1 == "Odin"){
      field.setAttribute('aria-label','Odin'); 
      AP.textContent = Katze2 +" ist am Zug";
      field.disabled = true;
    }

    else if (Katze2 == "Emmi"){
      field.setAttribute('aria-label','Emmi');
      AP.textContent = Katze1 + " ist am Zug";
      field.disabled = true;
        

    }
    else if (Katze2 == "Fine"){
      field.setAttribute('aria-label','Fine');
      AP.textContent = Katze1 + " ist am Zug";
      field.disabled = true;
    }

    Amzug = Amzug + 1  
    Spielzug = Spielzug + 1
    Ende()
    console.log(Sperren)

    
  }

  function Ende () {
    var fields = document.querySelectorAll('#gameboard button')

    for (var i = 0; i <3; i++){
      if (Spielzug == 9){
        console.log("Funktioniert")
        AP.textContent = "Unentschieden!";
      }
    }

      for (i = 0; i<3; i++){
        if (fields[0+i].getAttribute("aria-label") != "" && 
        fields[0+i].getAttribute("aria-label") == fields[3+i].getAttribute("aria-label") && 
        fields[3+i].getAttribute("aria-label") == fields[6+i].getAttribute("aria-label")){
          AP.textContent = fields[0+i].getAttribute("aria-label") + " hat gewonnen!!!";
          Sperren = true;


        }
        if (fields[i * 3].getAttribute('aria-label') != "" && 
          fields[i * 3].getAttribute('aria-label') == fields[i * 3 + 1].getAttribute('aria-label') &&
          fields[i * 3 + 1].getAttribute('aria-label') == fields[i * 3 + 2].getAttribute('aria-label')) {
          AP.textContent = fields[i * 3].getAttribute('aria-label') + " hat gewonnen!!!";
          Sperren = true;

        }
        

      }
      if (fields[0].getAttribute('aria-label') != "" && 
          fields[0].getAttribute('aria-label') == fields[4].getAttribute('aria-label') &&
          fields[4].getAttribute('aria-label') == fields[8].getAttribute('aria-label')) {
          AP.textContent = fields[0].getAttribute('aria-label') + " hat gewonnen!!!";
          Sperren = true;

        }
      if (fields[2].getAttribute('aria-label') != "" && 
        fields[2].getAttribute('aria-label') == fields[4].getAttribute('aria-label') &&
        fields[4].getAttribute('aria-label') == fields[6].getAttribute('aria-label')) {
        AP.textContent = fields[2].getAttribute('aria-label') + " hat gewonnen!!!";
        Sperren = true;


      }

      if(Sperren == true){
        var Spielfeld1 = document.getElementById("1")
        Spielfeld1.disabled=true
        var Spielfeld2 = document.getElementById("2")
        Spielfeld2.disabled=true
        var Spielfeld3 = document.getElementById("3")
        Spielfeld3.disabled=true
        var Spielfeld4 = document.getElementById("4")
        Spielfeld4.disabled=true
        var Spielfeld5 = document.getElementById("5")
        Spielfeld5.disabled=true
        var Spielfeld6 = document.getElementById("6")
        Spielfeld6.disabled=true
        var Spielfeld7 = document.getElementById("7")
        Spielfeld7.disabled=true
        var Spielfeld8 = document.getElementById("8")
        Spielfeld8.disabled=true
        var Spielfeld9 = document.getElementById("9")
        Spielfeld9.disabled=true
        

      }
     
      
  

    }


  }
  


);





