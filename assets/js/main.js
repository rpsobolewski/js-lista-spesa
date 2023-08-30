//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const list = document.getElementById("list");

const spesa = [];

const l = prompt("inserisci numero articoli");

let x = 0;

while (x < Number(l) ) {
    let prodotto = prompt(" inserisci un articolo")
    spesa.push(prodotto);
    x++;
}


const lunghezza = spesa.length;

console.log(lunghezza);

let i = 0;

while (i < lunghezza){
   
    const liEl = document.createElement('li');
    liEl.append(spesa[i]);
    console.log(spesa[i]); 
    list.append(liEl);
    i++;
}