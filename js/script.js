var numeroKilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
var age = parseInt(prompt('Quanti anni hai?'));

//calcolo del costo del biglietto

var prezzoTotale = Math.floor(numeroKilometri * 0.21);

document.getElementById('prezzo__intero').innerHTML = prezzoTotale.toFixed(2) + ' €';

//calcolo degli sconti per età

var prezzoScontato;

if (age <= 18) {
  prezzoScontato = prezzoTotale - (prezzoTotale * 20 / 100);
}
if (age > 65) {
  prezzoScontato = prezzoTotale - (prezzoTotale * 40 / 100);
}
if ( age <= 65 && age > 18) {
  prezzoScontato = 'Non disponibile';
 }

document.getElementById('sconto').innerHTML = prezzoScontato;
document.getElementById('sconto').innerHTML = prezzoScontato.toFixed(2) + ' €';
