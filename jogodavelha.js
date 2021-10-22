var tds = document.querySelectorAll('td');
var mapa = [
    "","","",
    "","","",
    "","",""
];

function adicionaEventosClick(){
    var id = 0
    for (var td of tds) {
        td.setAttribute('idtd',id);
        td.addEventListener('click', clicouNoTD);
        id++;
    }
}
function clicouNoTD (event) {
    event.target.classList.add("x");
    event.target.innerText = "X";
    var id = event.target.getAttribute("idtd");
    mapa[id] = "X";

    preencheBolinha();
}

function preencheBolinha() {
    var posicao = sorteiaNumeroDeAte(0,8);

    if (mapa[posicao] !== "") {
        return preencheBolinha();
    } else {
        mapa[posicao] = "O";
        var td = document.querySelector('td[idtd="'+posicao+'"]');
        td.classList.add("o");
        td.innerText = "O";
    }
}

function sorteiaNumeroDeAte(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}


adicionaEventosClick();
 