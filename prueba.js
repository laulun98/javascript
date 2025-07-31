function validarForm(){
    var nombre = document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;

    const formulario = document.getElementById("idForm");

    let elementoActivo = document.querySelector('input[name="fav_lang"]:checked');
    if(!elementoActivo) {
        document.getElementById("lengFav").innerHTML=("Selecciona una opción");
    }

    if(nombre.length == 0){
        document.getElementById("datosPersonales").innerHTML=("El nombre es obligatorio");
        document.getElementById("idNombre").style.color="red";
    } else if (apellido.length==0){
        document.getElementById("datosPersonales").innerHTML=("Los apellidos son obligatorios");
        document.getElementById("idApellido").style.color="red";
    } else {
        document.getElementById("datosPersonales").innerHTML=("Formulario validado");
        document.getElementById("datosPersonales").style.color="black";
    }
}

function validarCoches(){
    let coches = document.getElementById("coche");
    let listaCoches = document.getElementById("listaCoches");
    if (coches.checked){
        listaCoches.style.display="block";
    } else {
        listaCoches.style.display="none";
    }
}

function validarBicis(){
    let bicis = document.getElementById("bici");
    let listaBicis = document.getElementById("listaBici");

    if(bicis.checked){
        listaBicis.style.display="block";
    } else {
        listaBicis.style.display="none";
    }
}

function validarAvion(){
    let avion = document.getElementById("avion");
    let listaAvion = document.getElementById("listaAvion");
    if (avion.checked){
        listaAvion.style.display="block";
    } else {
        listaAvion.style.display="none";
    }
}
