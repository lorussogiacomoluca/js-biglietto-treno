/*
SOTTOPROBLEMI BASE
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

// IF
if (numKm > 0){
    if (age < 18){
        finalPrice = ((pricePerKm * numKm)*(1-discount18)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
        totalDiscount = ((pricePerKm * numKm)*(discount18)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

        console.log(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa UNDER 18. Sconto applicato: ${totalDiscount}`);

        alert(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa UNDER 18. Sconto applicato: ${totalDiscount}`);

    }else if (age > 65){
        finalPrice = ((pricePerKm * numKm)*(1-discount65)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
        totalDiscount = ((pricePerKm * numKm)*(discount65)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

        console.log(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa OVER 65. Sconto applicato: ${totalDiscount}`);

        alert(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa OVER 65. Sconto applicato: ${totalDiscount}`);
    }else {
        finalPrice = ((pricePerKm * numKm)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

        console.log(`Prezzo finale senza sconto: €${finalPrice}`);

        alert(`Prezzo finale senza sconto: €${finalPrice}`);
    }
}else{
    alert('Km non validi.')
}