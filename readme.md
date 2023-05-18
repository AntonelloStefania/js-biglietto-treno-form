PROBLEMA: viene chiesto di inserire all'utente: il proprio nome, la distanza da percorrere e la sua età. Sapendo che la tariffa per km è 0.21€ e che età <18 = 20% sconto e >65 = 40% sconto. stampare a schermo i value inseriti dall'utente su un biglietto.

1- Viene chiesto all'utente di inserire i propri dati;
    1.1- l'utente inserisce il nome;
    1.2- l'utente inserisce il n* di km da percorrere;
    1.3- creo la variabile tariffa*km;

2- l'utente inserisce l'età;
    2.1- ?SE l'età è inferiore ai 18 anni, applico sconto 20%;
    2.2- :ALTRIMENTI ?SE l'età è superiore ai 65 anni, sconto 40%;
    2.3- :ALTRIMENTI applico il prezzo base (tariffa*km);

3- ?SE l'utente preme il bottone di conferma;
    3.1- stampo sul biglietto i value inseriti;

4- :ALTRIMENTI ?SE l'utente preme il bottone annulla;
    4.1 i campi tornano nuovamente vuoti;

5- viene stampato a schermo il biglietto;