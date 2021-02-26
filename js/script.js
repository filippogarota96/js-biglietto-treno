var numeroKilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
var age = parseInt(prompt('Quanti anni hai?'));

//calcolo del costo del biglietto

var prezzoTotale = Math.floor(numeroKilometri * 0.21);

document.getElementById('prezzo__intero').innerHTML = prezzoTotale;
//calcolo degli sconti per età

if (age <= 18) {
  document.getElementById('sconto').innerHTML = (prezzoTotale * 20) / 100 ;
}
if (age > 65) {
  document.getElementById('sconto').innerHTML = (prezzoTotale * 40) / 100 ;
}
