var umano = Math.floor ( Math.random () * 6 ) + 1;
console.log(umano);
document.getElementById("umano").innerHTML = "il tuo numero é: " + umano;

var bot = Math.floor ( Math.random () * 6 ) + 1;
console.log(bot);
document.getElementById("bot").innerHTML ="il computer ha: " + bot;

if(umano > bot){
    document.getElementById("risultato").innerHTML = "Complimenti HAI VINTO!";
}else if(umano < bot){
    document.getElementById("risultato").innerHTML = "Mi dispiace... Hai perso!";
}else{
    document.getElementById("risultato").innerHTML = "Patta!";
}
