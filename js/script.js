/*
SOTTOPROBLEMI
- creazione variabile costante: pricePerKm
- creazione variabile costante: discount18
- creazione variabile costante: discount65
- dichiarazione e assegnazione tramite prompt della variabile km
- dichiarazione e assegnazione tramite prompt della variabile age
- blocco IF per individuare sconto da applicare in base ad età
- calcolo del prezzo finale
- formmattazione del prezzo finale con due decimali
*/

// pricePerKm variable
let pricePerKm = 0.21;

// discount18
let discount18 = 0.2;

//discount65
let discount65= 0.4;

// numKm
let numKm = parseInt(prompt('Inserisci il numero di km da percorrere'))

// age
let age = parseInt(prompt('Inserisci età del passeggero'))

// finalPrice
let finalPrice;