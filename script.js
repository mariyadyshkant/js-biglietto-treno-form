console.log("HELLO WORLD");

// campi in cui inserire i dati
const firstName = document.getElementById("first_name");
const secondName = document.getElementById("second_name");
const addKm = document.getElementById("add_kilometers");
const ageRange = document.getElementById("age_range");

// bottoni "calcola" e "annulla"
const calcBtn = document.getElementById("calc_btn");
console.log(calcBtn);
const cancBtn = document.getElementById("cancel_btn");

// tipo di offerta applicata al biglietto
let offerType = document.getElementById("offer_type").innerText;

// funzione collegata al click del bottono "calcola" che permette di calcolare il prezzo del biglietto
calcBtn.addEventListener("click", (_event) => {
    // event.preventDefault();
    console.log("Cliccato");

    // i due parametri che ci servono per calcolare il prezzo del biglietto recuperati dai dati inseriti
    const tripInKm = Number(addKm.value);
    const userAge = Number(ageRange.value);

    let ticketPrice = tripInKm * 0.21;
    //console.log(ticketPrice);
    let ticketPriceEuro = ticketPrice.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

    // prezzo del bigllietto scontato del 40%
    const discount40 = (ticketPrice * 40) / 100;
    const ticketPrice40 = (ticketPrice - discount40).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

    // prezzo del bigllietto scontato del 20%
    const discount20 = (ticketPrice * 20) / 100;
    const ticketPrice20 = (ticketPrice - discount40).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

    if (userAge < 18) {
        ticketPrice = ticketPrice20;
    }
    else if (userAge >= 65) {
        ticketPrice = ticketPrice40;
    }
    else {
        ticketPrice = ticketPriceEuro
    }

    document.getElementById("price_result").innerText = ticketPrice;
})

calcBtn.addEventListener("click", (_event) => {

    document.getElementById("first_name_ticket").innerText = firstName.value; // stampo il nome del passeggero sul biglietto
    document.getElementById("second_name_ticket").innerText = secondName.value; // stampo il cognome 
    document.getElementById("carriage_number").innerText = Math.floor(Math.random() * 10) + 1; // numero carrozza random
    document.getElementById("booking_code").innerText = Math.floor(Math.random() * 100000) + 1; // codice di prenotazione random

    // tipo di offerta applicata al biglietto
    if (userAge < 18) {
        offerType = "Biglietto Young";
    }
    else if (userAge >= 65) {
        offerType = "Biglietto Senior";
    }
    else {
        offerType = "Biglietto Standard";
    }


})