let s = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'];
s = s.concat(s);

// terv:
// végigmegyünk a listán, és mindent kicserélünk egy hátrébb lévővel.

keveres(s)

let racs = document.querySelector('#racs');
let divlista = racs.children;

for (const lapocska of divlista) {
    lapocska.addEventListener('mousedown', felfordit);
    
}

for (let i = 0; i < s.length; i++) {
    divlista[i].innerHTML = '<div class="lathatatlan">'+s[i]+'</div>';
}


// kisfeladat: ha valamelyikre rákattintunk, akkor fedje fel azt a kártyát!

function felfordit(e) // e mint event
{
    let lapka = e.target;
    let i = hanyadik(lapka, lapka.parentElement);
    lapka.classList.toggle('lathatatlan');
}

function hanyadik(gyerek, szulo){
    let i = 0;
    while(szulo.children[i]!=gyerek){
        i++;
    }
    return i;
}

function veletlen(mettol,meddig){
    let oldalszam = meddig-mettol+1; // képzeletbeli dobókocka oldalszáma!
    return mettol+Math.floor(Math.random()*oldalszam);
}

function keveres(lista){
    for (let i = 0; i < lista.length; i++) {
        csere(i, veletlen(i, lista.length-1), lista);        
    }

    /* "forof"
    for (const elem of lista) {
        
    }
    */

}

function csere(i, j, lista){    
    let temp = lista[i];
    lista[i] = lista[j];
    lista[j] = temp;
}





