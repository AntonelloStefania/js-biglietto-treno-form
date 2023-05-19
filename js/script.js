const tariffa = 0.21;
let reset= document.getElementById('reset')
let submit_button = document.getElementById('submit_button');
submit_button.addEventListener('click', function(){
    let km = document.getElementById('km').value;
    
    let carrozza =`Carrozza Numero ${ Math.floor(Math.random() * 10 +1)}`;

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
        carrozza = '';
        cp = '';
        eta = '';
        document.getElementById("costo-biglietto").innerHTML = ``;
    }
    document.getElementById("nome-utente").innerHTML = document.getElementById('name').value;
    document.getElementById("tipo-biglietto").innerHTML = eta;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("cp").innerHTML = `${cp}`;
})

reset.addEventListener('click', function(){
        document.getElementById("tipo-biglietto").innerHTML = '';
        document.getElementById("carrozza").innerHTML = '';
        document.getElementById("cp").innerHTML = '';
        document.getElementById("costo-biglietto").innerHTML = ``;
        document.getElementById("nome-utente").innerHTML = ''
})


