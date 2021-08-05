// valore del prezzo del biglietto calcolato ogni km
const prezzoKm = 0.21;
// Percentuale di sconto da applicare nel caso dell'acquisto di un minorenne
const discountMinor = 80;
// Percentuale di sconto da applicare nel caso dell'acquisto di un over 65enne
const dicsountOver65 = 60;

// Variabile per il calcolo del prezzo del biglietto scontato
let prezzoBiglietto;

// Inserimento della distanza del viaggio
let distance = parseInt( prompt("Inserisci la distanza del viaggo da percorrere con un numero maggiore di 0"));
console.log("distanza " + distance + " " + typeof(distance));

// Inserimento dell'età del viaggiatore
let age = parseInt( prompt("Inserisci la tua età al giorno attuale"))
console.log("età " + age + " " + typeof(age));

// Stampa sulla pagina web la distanza
document.getElementById('distance').innerText = distance;


// Cacolo del prezzo senza sconto
prezzoBiglietto = prezzoKm * distance;
console.log("valore prezzoBiglietto non scontato " + prezzoBiglietto);

// Controllo dell'età del passeggero e applicazione dello sconto
if (age < 18) {
    // Stampa sulla pagina web lo sconto applicato
    document.getElementById('discount').innerHTML = (100 - discountMinor) + " %";
    // Applicazione dello sconto
    prezzoBiglietto = (prezzoBiglietto * discountMinor) / 100;
} else if (age > 65) {
    // Stampa sulla pagina web lo sconto applicato
    document.getElementById('discount').innerHTML = (100 - dicsountOver65) + " %";
    // Applicazione dello sconto
    prezzoBiglietto = (prezzoBiglietto * dicsountOver65) / 100;
} else {
    // Stampa sulla pagina web lo sconto applicato
    document.getElementById('discount').innerHTML += "Nessuno sconto applicabile";
}


document.getElementById('price').innerHTML = prezzoBiglietto.toFixed(2);