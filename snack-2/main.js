// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

const N = Number(prompt("inserire un numero"))


// genera numero di array 
for (let i = 0; i < N; i++){
    let array =[]
    for (let i = 0; i < 10; i++){
        // genera 10 numeri randomici tra 1 e 100
      let add =  Math.floor(Math.random() * 100)+ 1;
      array.push(add)
        // stampalo
        console.log(array)
    }
    
    
}



