// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// crea lista vuota

// chiedi inserire dati dentro lista vuota

// ripeti richiesta  fintanto che la somma degli elementi é minore di 50

 let list = []
 sum = 50
 
 do {
    let numeroInserito = Number(prompt("Inserire numero"));
    list.push(numeroInserito);
    sum += list[i];
   
 }
 while ( i < sum );
 console.log(sum); 







