console.log("Script is geladen");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById("fruit");

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function zetInGroenteLa(groente){
    console.log(groente);

    const nieuwrElement = document.createElement('h2');
    nieuwrElement.innerHTML = groente;
    nieuwrElement.className = 'groente';
    groentevak.appendChild(nieuwrElement);
}