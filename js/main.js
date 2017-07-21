var usuarios = [];
var celdas = document.getElementsByTagName('td');
var asientos = [];
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
    asientos.push(celdas[i].textContent);
}
var _asiento=0;


function redirect(event){
	var _asiento = (event.target.textContent)
	var num = asientos.indexOf(_asiento)    
	var mensaje=" esta desocupado"
	
	for (var i = 0; i < usuarios.length; i++) {
		if(celdas[num].textContent==usuarios[i].n){
    		mensaje=" esta ocupado"
    	}
    	
	}
	if(mensaje==" esta ocupado"){
		for(var i=0; i<usuarios.length; i++){
			if(usuarios[i].n==_asiento){
				document.getElementById("nombre").placeholder=usuarios[i].nombre;
				document.getElementById("apellido").placeholder=usuarios[i].apellido;
				document.getElementById("dni").placeholder=usuarios[i].dni;
			}	
		}
    	document.getElementById("nombre").readOnly = true;
		document.getElementById("apellido").readOnly = true;
		document.getElementById("dni").readOnly = true;
    }else{
    	document.getElementById("nombre").placeholder="Nombre de Usuario";
		document.getElementById("apellido").placeholder="Apellido de Usuario";
		document.getElementById("dni").placeholder="DNI de Usuario";
    	document.getElementById("nombre").readOnly = false;
		document.getElementById("apellido").readOnly = false;
		document.getElementById("dni").readOnly = false;
    }

	limpiar();
	document.getElementById("mostrar").innerHTML = "El asiento " + (event.target.textContent)+mensaje;
}

function reservar(){
	var asiento= document.getElementById("mostrar").textContent.substr(11,2);
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var persona = {
		nombre: nombre,
		apellido:apellido,
		dni: dni,
		n:asiento}

	var num = asientos.indexOf(asiento) 
	celdas[num].style.backgroundColor="DodgerBlue";
	document.getElementById("mostrar").innerHTML = "El asiento " + asiento + " esta ocupado";

	usuarios.push(persona);

	alert("Usuario registrado");

	limpiar();
}

function listar(){
	var listaUsuarios="";
	for(var i=0; i<usuarios.length; i++){
		listaUsuarios+= "<h3><strong> Usuario </strong>"+ (i+1) +": <br></h3>"+
						"<strong>Nombre de Usuario: </strong>"+ usuarios[i].nombre +"<br>"+ 
						"<strong>Apellido de Usuario: </strong>"+ usuarios[i].apellido+"<br>"+
						"<strong>DNI de Usuario: </strong>"+ usuarios[i].dni+"<br>"+
						"<strong>Asiento Ocupado: </strong>"+ usuarios[i].n+"<br>"
	}
	document.getElementById("lista").innerHTML= listaUsuarios;
}

//{}
function cancelar(){
	var asiento= document.getElementById("mostrar").textContent.substr(11,2);
	document.getElementById("nombre").placeholder="Nombre de Usuario";
	document.getElementById("apellido").placeholder="Apellido de Usuario";
	document.getElementById("dni").placeholder="DNI de Usuario";
	var num = asientos.indexOf(asiento) 
	celdas[num].style.backgroundColor="White";
	document.getElementById("mostrar").innerHTML = "El asiento " + asiento + " esta desocupado";
	var i=0;
	for(i=0;i<usuarios.length;i++){
		var j= usuarios[i].n;
		if(usuarios[i].n==asiento){
			usuarios.splice(i,1);
		}
	}
	
}

function buscar(){
	var id = document.getElementById("DNI").value;
	var mensaje="<h3><strong>Usuario No encontrado</strong></h3>"
	for(var i=0; i<usuarios.length; i++){
		if(usuarios[i].dni==id){
			mensaje="<h3><strong>Usuario Encontrado:</strong></h3>"+
					"<strong>Nombre de Usuario: </strong>"+ usuarios[i].nombre +"<br>"+ 
					"<strong>Apellido de Usuario: </strong>"+ usuarios[i].apellido+"<br>"+
					"<strong>DNI de Usuario: </strong>"+ usuarios[i].dni+"<br>"+
					"<strong>Asiento Ocupado: </strong>"+ usuarios[i].n+"<br>"
		}  else {
			mensaje="<h3><strong>Usuario No encontrado</strong></h3>"
		}	
	}
	document.getElementById("lista").innerHTML=mensaje;
	document.getElementById("DNI").value="";
}

function limpiar(){

   document.getElementById("nombre").value="";
   document.getElementById("apellido").value="";
   document.getElementById("dni").value="";
   document.getElementById("lista").innerHTML="";
}