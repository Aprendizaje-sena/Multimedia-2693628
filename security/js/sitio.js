//funcion seleccionar usada en el menu de navegacion del sitio  para identificar la opcion selecionada

function seleccionar(link) {
    let links = document.querySelectorAll("header nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    link.className = "selected";
}

function validar(){
    alert("Gracias por contactarnos, pronto recibiras tu asesoria")
}