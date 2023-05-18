const tariffa = 0.21;

let submit_button = document.getElementById('submit_button');

submit_button.addEventListener('click', function(){
    let km = document.getElementById('km').value;
    
    let carrozza = Math.floor(Math.random() * 10 +1);

    let cp = Math.floor(Math.random() * 100000 +1);

    let eta = document.getElementById('eta').value;

    if (eta == 'under 18' && km > 0){
        let price = (km * tariffa) * 0.8;
        document.getElementById("costo-biglietto").innerHTML = `${price.toFixed(2)}€`;
    } else if (eta == 'over 65' && km > 0){
       let price = (km * tariffa) * 0.6;
        document.getElementById("costo-biglietto").innerHTML = `${price.toFixed(2)}€`;
    } else if (eta == 'standard' && km > 0) {
        let price = km * tariffa;
        document.getElementById("costo-biglietto").innerHTML = `${price.toFixed(2)}€`;
    } else{
        alert('è necessario inserire valori validi');
    }
    document.getElementById("nome-utente").innerHTML = document.getElementById('name').value;
    document.getElementById("tipo-biglietto").innerHTML = eta;
    document.getElementById("carrozza").innerHTML = `carrozza numero: ${carrozza}`;
    document.getElementById("cp").innerHTML = `${cp}`;
})


