function validarForm(){
    var nombre = document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;

    if(nombre.length == 0){
        alert("El nombre es obligatorio")
    } else if (apellido.length==0){
        alert("Los apellidos son obligatorios")
    } else {
        document.getElementById("final").innerHTML=("Formulario validado");
    }
}