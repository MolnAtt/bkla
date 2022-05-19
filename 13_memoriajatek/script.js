s=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'];
s = s.concat(s);

// terv:
// végigmegyünk a listán, és mindent kicserélünk egy hátrébb lévővel.

function csere(i, j, lista){    
    let temp = lista[i];
    lista[i] = lista[j];
    lista[j] = temp;
}



alert(s.length);