//
// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// Numeri casuali generati da pc
var pcNumbers = [];
var userNumbers = [];
var i = 0;
while (pcNumbers.length < 5) {
  var pcNumber = random(1, 100);
  if (!search(pcNumbers, pcNumber)){
    pcNumbers.push(' ' + pcNumber);
  }
  i++
}
// alert per numeri generati da pc
alert(pcNumbers);
// countdown di 30 secondi e ciclo for per chiedere i numeri all'utente
setTimeout(countdown, 30000);
function countdown() {
  for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
    while(!(userNumber > 0 && userNumber <= 100)){
     userNumber = parseInt(prompt('Attenzione! devi inserire un numero da 1 a 100!' ));
    }
    if (search(pcNumbers, userNumber)) {
      userNumbers.push(' ' + userNumber);
    }
  }
// alert per risultati
  if (userNumbers.length == 0){
    alert('Che disastro! Non ne hai indovinato nemmeno uno!');
  } else {
    alert('Il tuo punteggio è ' + userNumbers.length + ', i numeri che hai indovinato sono:' + userNumbers);
  }
}

// Funzioni

// Funzione numeri random
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)  + min);
}

// Funzione per controllo numeri
function search(arr, num){
  var i = 0;
  while (i < arr.length){
    if (num == arr[i]){
      return true;
    }
    i++;
  }
  return false;
}
