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
        checkboxes();
        //formulario.reset();
    }
}

function checkboxes (){
    var vehiculos = document.getElementsByName("vehiculo");
    let boton = document.getElementById("idBoton");

    boton.addEventListener('click', function(){
        vehiculos.forEach((e)=>{
            if(e.checked==true){
                console.log(e.value);
            }
        })
    });

}