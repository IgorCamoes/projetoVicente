let patoLogo = document.querySelector("#navMobile a img");
let nav = document.querySelector("nav");
let btnHmb = document.querySelector("#divHmb");
let spanTopo = document.querySelector(".spanTopo");
let spanMeio = document.querySelector(".spanMeio");
let spanBase = document.querySelector(".spanBase");




function animacaoHmb(){
    spanTopo.classList.toggle("topoXis");
    spanMeio.classList.toggle("meioSome");
    spanBase.classList.toggle("baseXis");
    patoLogo.classList.toggle("quack");
    nav.classList.toggle("desceDai");
}

// function menuDeslizar(){
//     if(body.style.gridTemplateRows = "10vh 75vh 15vh 120vh 20vh"){
//         body.style.gridTemplateRows = "10vh 30vh 75vh 15vh 120vh 20vh";
//     }
//     else if(body.style.gridTemplateRows = "10vh 30vh 75vh 15vh 120vh 20vh"){
//     body.style.gridTemplateRows = "10vh 75vh 15vh 120vh 20vh";
//     }

//     if(body.style.gridTemplateAreas = '"nv" "hd" "sc" "art" "ftr"'){
//         body.style.gridTemplateAreas = '"nv" "nv2" "hd" "sc" "art" "ftr"';
//     }
//     else if(body.style.gridTemplateAreas = '"nv" "nv2" "hd" "sc" "art" "ftr"'){
//         body.style.gridTemplateAreas = '"nv" "hd" "sc" "art" "ftr"';
//     }
// }

btnHmb.onclick = animacaoHmb;

// btnHmb.onclick = menuDeslizar;
