let nomePatos = document.querySelector(".patos");
let btnPatos = document.querySelector(".botoesPato");


btnPatos.onclick = patoHover;

function patoHover(){
    nomePatos.style.color = "black";
    btnPatos.style.backgroundColor = "white";
    nomePatos.style.cursor = "pointer";
}


