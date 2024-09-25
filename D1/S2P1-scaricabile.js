//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroIntero1 = 10;
let numeroIntero2 = 20;

if (numeroIntero1 > numeroIntero2) {
  console.log("Il numero più grande è " + numeroIntero1);
} else if (numeroIntero2 > numeroIntero1) {
  console.log("Il numero più grande è " + numeroIntero2);
} else {
  console.log("I numeri sono uguali");
}
/* oppure*/
function numeroMaggiore(numeroIntero1, numeroIntero2) {
  if (numeroIntero1 > numeroIntero2) {
    console.log("Il numero più grande è " + numeroIntero1);
  } else if (numeroIntero2 > numeroIntero1) {
    console.log("Il numero più grande è " + numeroIntero2);
  } else {
    console.log("I numeri sono uguali");
  }
}
/* alternativa di sintassi*/
function numeroMaggiore(numeroIntero1, numeroIntero2) {
  if (numeroIntero1 > numeroIntero2) {
    return "Il numero più grande è " + numeroIntero1;
  } else if (numeroIntero2 > numeroIntero1) {
    return "Il numero più grande è " + numeroIntero2;
  } else {
    return "I numeri sono uguali";
  }
}
/* nel terzo esempio ho scelto il return invece del console.log perchè permette di riutilizzare il risultato in altre operazioni e rendere la funzione più flessibile*/
/*VISUALIZZIAMO SULLA PAGINA WEB! PRIMO ESERCIZIO*/
function trovaMaggiore() {
  //recuperiamo i valori che inserisce l'utente dall'input
  let numero1 = document.getElementById("input1-card1").value;
  let numero2 = document.getElementById("input2-card1").value;
  //trasformiamo a prescindere qualsiasi numero inserito in numero intero
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  //facciamo un confronto tra i numeri
  if (numero1 > numero2) {
    document.getElementById("risultato").innerHTML =
      "Il numero maggiore è " + numero1;
  } else if (numero2 > numero1) {
    document.getElementById("risultato").innerHTML =
      "Il numero maggiore è " + numero2;
  } else {
    document.getElementById("risultato").innerHTML = "I numeri sono uguali!";
  }
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let numero = 21;
if (numero < 5) {
  console.log("Tiny");
} else if (numero < 10) {
  console.log("Small");
} else if (numero < 15) {
  console.log("Medium");
} else if (numero < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}
/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(i);
}
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log("la variabile " + i + "è pari");
  } else {
    console.log("la variabile" + i + "è dispari");
  }
}
/* alternativa con ternary operator*/
for (let i = 0; i <= 15; i++) {
  console.log(
    "la variabile " +
      i +
      "è " +
      (i % 2 === 0 ? "un numero pari" : "un numero dispari")
  );
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoNumero = 10;
let secondoNumero = 18;
if (primoNumero === 8) {
  console.log("il primo numero è 8");
} else if (secondoNumero === 8) {
  console.log("il secondo numero è 8");
} else if (primoNumero + secondoNumero === 8) {
  console.log("la somma dei due numeri è 8");
} else if (
  primoNumero - secondoNumero === 8 ||
  secondoNumero - primoNumero === 8
) {
  console.log("la differenza dei due numeri è 8");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* VISUALIZZIAMO SULLA PAGINA WEB! ESERCIZIO SULLE PROMOZIONI!*/
function myPromozione() {
  let totalShoppingCart = parseFloat(
    document.getElementById("totalShoppingCart").value
  );
  if (totalShoppingCart > 50) {
    document.getElementById("result").innerHTML =
      "La tua promozione è attiva: paghi solo 50 euro &#128522";
  } else {
    document.getElementById("result").innerHTML =
      "costo della spedizione: 10 &#128520";
  }
}
/*OPPURE*/
let shoppingCart = 50;
let totale;
if (shoppingCart > 50) {
  console.log("la spedizione è gratuita");
  totale = shoppingCart;
} else {
  console.log("il costo della spedizione è 10 euro");
  totale = shoppingCart + 10;
}
console.log("il totale è: " + totale);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let sconto = 0.2;
totale = totale - totale * sconto; //al salvataggio si eliminano automaticamente lo 0 e le ()
/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = true;
let gender = isMale ? "maschio" : "femmina";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
