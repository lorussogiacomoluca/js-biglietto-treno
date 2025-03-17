/*
SOTTOPROBLEMI BONUS
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

// definizione tariffa
let tariffa;

// IF
if (numKm > 0){
    if (age < 18){
        tariffa = `Tariffa UNDER 18: ${-discount18*100}%`
        finalPrice = ((pricePerKm * numKm)*(1-discount18)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
        totalDiscount = ((pricePerKm * numKm)*(discount18)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

        console.log(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa UNDER 18. Sconto applicato: ${totalDiscount}`);

        alert(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa UNDER 18. Sconto applicato: ${totalDiscount}`);

    }else if (age > 65){
        tariffa = `Tariffa OVER 65: ${discount65*100}`
        finalPrice = ((pricePerKm * numKm)*(1-discount65)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
        totalDiscount = ((pricePerKm * numKm)*(discount65)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

        console.log(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa OVER 65. Sconto applicato: ${totalDiscount}`);

        alert(`Il costo del biglietto per ${numKm} km è di ${finalPrice} €. Il prezzo si intende scontato per la tariffa OVER 65. Sconto applicato: ${totalDiscount}`);
    }else {
        tariffa = "Tariffa standard";
        finalPrice = ((pricePerKm * numKm)).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

        console.log(`Prezzo finale senza sconto: €${finalPrice}`);

        alert(`Prezzo finale senza sconto: €${finalPrice}`);
    }
}else{
    tariffa = '';
    alert('Km non validi.')
}

//BONUS SECTION
document.getElementById("pricePerKm").innerHTML = `${pricePerKm.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}/km`;

document.getElementById("tariffa").innerHTML = `${tariffa}`;

document.getElementById("age").innerHTML = `${age} anni`;

document.getElementById("numKm").innerHTML = `${numKm} KM`;

document.getElementById("price").innerHTML = `${(numKm*pricePerKm).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })} `;

document.getElementById("totalDiscount").innerHTML = `${totalDiscount} `;

document.getElementById("finalPrice").innerHTML = `${finalPrice} `;
