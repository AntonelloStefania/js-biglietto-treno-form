const tariffa = 0.21;

let submit_button = document.getElementById('submit_button');
console.log(submit_button);

submit_button.addEventListener('click', function(){
    let nome_utente = document.getElementById('name').value;
    console.log(nome_utente);
    
    let km = document.getElementById('km').value;
    console.log(km);
    
    let eta = document.getElementById('eta').value;
    console.log(eta)
    if (eta == 'under 18'){
        let price = (km * tariffa) * 0.8;
        console.log(price)
        document.getElementById("nome-utente").innerHTML = `${nome_utente}`;
        document.getElementById("tipo-biglietto").innerHTML = `${eta}`;
        document.getElementById("costo-biglietto").innerHTML = `${price}`
    } else if (eta == 'over 65'){
        let price = (km * tariffa) * 0.4;
        console.log(price);
        document.getElementById("nome-utente").innerHTML = `${nome_utente}`;
        document.getElementById("tipo-biglietto").innerHTML = `${eta}`;
        document.getElementById("costo-biglietto").innerHTML = `${price}`
    } else if (eta == 'standard') {
        let price = km * tariffa;
        console.log(price)
        document.getElementById("nome-utente").innerHTML = `${nome_utente}`;
        document.getElementById("tipo-biglietto").innerHTML = `${eta}`;
        document.getElementById("costo-biglietto").innerHTML = `${price}`
    }
})


