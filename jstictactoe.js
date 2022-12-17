//Festlegen der Grund Variablen
var Amzug = 1;
var Spielzug = 0;
var Sperren = false;
var Katze1 = null;
var Katze2 = null;
var Möglich = 0;

document.getElementById("Refresh").disabled = true;

// Wenn Molly gedrückt sie als Katze Spieler auswählen und Odin deaktiviern
document.getElementById("Molly").onclick = function() {
  
  document.getElementById("Odin").disabled = true;
  Katze1 = "Molly";
  Möglich = Möglich +1;
  MöglichFunc () 

};

// Wenn Odin gedrückt sie als Katze Spieler auswählen und Molly deaktiviern
document.getElementById("Odin").onclick = function() {
  
  document.getElementById("Molly").disabled = true;
  Katze1 = "Odin";
  Möglich = Möglich +1;
  MöglichFunc () 


};

// Wenn Emmi gedrückt sie als Katze Spieler auswählen und Fine deaktiviern
document.getElementById("Emmi").onclick = function() {
  
  document.getElementById("Fine").disabled = true;
  Katze2 = "Emmi";
  Möglich = Möglich +1;
  MöglichFunc () 


};

// Wenn Fine gedrückt sie als Katze Spieler auswählen und Emmi deaktiviern
document.getElementById("Fine").onclick = function() {
  
  document.getElementById("Emmi").disabled = true;
  Katze2 = "Fine";
  Möglich = Möglich +1;
  
  MöglichFunc () 


};

// Wenn noch keine zwei Katzen ausgewählt wurden Spielfeld deaktiviert
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
        


}

//Wenn zwei Katzen ausgewählt sind Spielfeld aktivieren
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
        
  }
  //Hinweise1 an ersten Zug anpassen
  AP.textContent = "Es beginnt "+ Katze2 

}

//Listenener hinzufügen
document.addEventListener('DOMContentLoaded', function () {

	//Welcher Knopf wrude gedrückt
  document.querySelector('#gameboard').addEventListener('click',  markField);	  
  
  //Hinweis1 für passenden Zug anpassen, Feld deaktiviern
  function markField (e) { 
    const AP = document.getElementById("AP");
    var field = e.target;
    
    console.log(field);
  
    //Welcher Spieler ist dran und welche Katze gewählt und füllen des Feldes mit entsprechendm aria-label
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

    //Anpassen Variablen Welcher Spieler, Zählen Spielzüge und Abfrage Ende Funktion. 
    Amzug = Amzug + 1  
    Spielzug = Spielzug + 1
    Ende()
    console.log(Sperren)

    
  }

  //Abfrage ob ein Sieler gewonnen hat
  function Ende () {
    var fields = document.querySelectorAll('#gameboard button')

    //Spielende wenn alle Felder voll sind
    for (var i = 0; i <3; i++){
      if (Spielzug == 9){
        console.log("Funktioniert")
        AP.textContent = "Unentschieden!";
        Sperren = true;
      }
    }


      for (i = 0; i<3; i++){
        //Überprüfen Vertikal
        if (fields[0+i].getAttribute("aria-label") != "" && 
        fields[0+i].getAttribute("aria-label") == fields[3+i].getAttribute("aria-label") && 
        fields[3+i].getAttribute("aria-label") == fields[6+i].getAttribute("aria-label")){
          AP.textContent = fields[0+i].getAttribute("aria-label") + " hat gewonnen!!!";
          Sperren = true;


        }

        // Überprüfen Horizontal
        if (fields[i * 3].getAttribute('aria-label') != "" && 
          fields[i * 3].getAttribute('aria-label') == fields[i * 3 + 1].getAttribute('aria-label') &&
          fields[i * 3 + 1].getAttribute('aria-label') == fields[i * 3 + 2].getAttribute('aria-label')) {
          AP.textContent = fields[i * 3].getAttribute('aria-label') + " hat gewonnenH!!!";
          Sperren = true;

        }
        

      }
      //Überprüfen diagonal oben links nach unten rechts
      if (fields[0].getAttribute('aria-label') != "" && 
          fields[0].getAttribute('aria-label') == fields[4].getAttribute('aria-label') &&
          fields[4].getAttribute('aria-label') == fields[8].getAttribute('aria-label')) {
          AP.textContent = fields[0].getAttribute('aria-label') + " hat gewonnen!!!";
          Sperren = true;

        }
      
      //Überprüfen diagonal oben rechts nach unten links
      if (fields[2].getAttribute('aria-label') != "" && 
        fields[2].getAttribute('aria-label') == fields[4].getAttribute('aria-label') &&
        fields[4].getAttribute('aria-label') == fields[6].getAttribute('aria-label')) {
        AP.textContent = fields[2].getAttribute('aria-label') + " hat gewonnen!!!";
        Sperren = true;


      }
      
      // Wenn ein Spieler gewonnen hat restlichen/alle Buttons deaktivieren.
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
        
        //NeuesSpiel Knopf anschalten
        document.getElementById("Refresh").disabled = false;

      }
     
      
  

    }


  }
  


);




// Wenn gedrückt Seite wird neu geladen
document.getElementById("Refresh").onclick = function() {
  
  location.reload();


};



