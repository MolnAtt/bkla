document.addEventListener('DOMContentLoaded', main);

function katt(){
    let e = document.querySelector('#elso');
    e.classList.toggle('megvannyomva'); // így tessék mindig formázós dolgokkal dolgozni, azaz classList-tel!
}

function main(){
    // let g = document.getElementById("gomb");
    let g = document.querySelector('#gomb'); // JQuery-ből lopott dolog.
    g.addEventListener('click', katt);
}
