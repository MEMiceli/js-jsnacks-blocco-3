// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// crea lista vuota

// chiedi inserire dati dentro lista vuota

// ripeti richiesta  fintanto che la somma degli elementi é minore di 50

 let list = []
 sum = 0
 
 do {
    let numeroInserito = Number(prompt("Inserire numero"));
// correzione
    if(!isNaN(numeroInserito) ){
        sum += list; 
            if(sum < 50){
                list.push(numeroInserito);
            }
        
    }
 }while ( sum < 50 )
 console.log(list); 







