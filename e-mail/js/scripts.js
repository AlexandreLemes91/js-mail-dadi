/* 
-creare aray e-mail
-chiedere e-mail all utente
-controllare se l'email è valida e restituire una risposta
*/

var utenti = ["andre@mail.it" , "luca@mail.it" , "francesco@mail.it" , "sara@mail.it"];
//FORSE ERA MEGLIO AGGIUNGERE @mail.it IN AUTO A TUTTI -> MA SE è DIVERSO DA MAIL, COME "GMAIL?"

var utente = prompt("Inserire la propria e-mail");
var controlloUtente = false;

for ( var i=0 ; i < utenti.length ; i++ ){

    if( utenti[i] === utente){
        controlloUtente = true;
        break;
    }
}

if(controlloUtente === true){
    console.log("OK");
    document.getElementById("content").innerHTML = "Benvenuto " + utenti[i] 
}else{
    console.log("NO");
    document.getElementById("content").innerHTML = "Utente non riconosciuto... ricaricare la pagina"
}