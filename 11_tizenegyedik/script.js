function szamlalofuggveny()
{
    szamlalo++;
    //console.log(szamlalo);
    d.innerHTML = szamlalo;


    /// jelenjen meg két új gomb!
    // jöjjön létre a két új gomb
    ujg1 = document.createElement('button');
    ujg2 = document.createElement('button');

    // belső szövege is legyen
    ujg1.innerHTML="gomb1";
    ujg2.innerHTML="gomb2";

    // hozzáteszi a body-hoz (megjelenik!)
    b.appendChild(ujg1);
    b.appendChild(ujg2);

    // minden így létrejött gomb működjön ugyanígy!
    ujg1.addEventListener('click',szamlalofuggveny);
    ujg2.addEventListener('click',szamlalofuggveny);

}

d = document.querySelector('#megjelenito');
g = document.querySelector('#szamologomb');
b = document.querySelector('body');

let szamlalo = 0;
g.addEventListener('click',szamlalofuggveny);

console.log(g); 
