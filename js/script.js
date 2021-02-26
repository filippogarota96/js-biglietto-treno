var numeroKilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
var age = parseInt(prompt('Quanti anni hai?'));

//calcolo del costo del biglietto

var prezzoTotale = numeroKilometri * 0.21;
document.write (prezzoTotale);

//calcolo degli sconti per età

if (age <= 18) {
  console.log ((prezzoTotale * 20) / 100);
} else if (age > 65) {
  console.log ((prezzoTotale * 40) / 100);
} else {
  console.log (prezzoTotale);
}
