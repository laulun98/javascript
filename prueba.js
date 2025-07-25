function validarForm(){
    var nombre = document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;

    if(nombre.length == 0){
        document.getElementById("final").innerHTML=("El nombre es obligatorio");
        document.getElementById("idNombre").style.color="red";
    } else if (apellido.length==0){
        document.getElementById("final").innerHTML=("Los apellidos son obligatorios");
        document.getElementById("idApellido").style.color="red";
    } else {
        document.getElementById("final").innerHTML=("Formulario validado");
    }
}