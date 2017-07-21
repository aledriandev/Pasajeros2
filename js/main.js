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
    		document.getElementById("nombre").placeholder=usuarios[i].nombre;
			document.getElementById("apellido").placeholder=usuarios[i].apellido;
			document.getElementById("dni").placeholder=usuarios[i].dni;
    	}
    	else{
    		document.getElementById("nombre").placeholder="Nombre de Usuario";
			document.getElementById("apellido").placeholder="Apellido de Usuario";
			document.getElementById("dni").placeholder="DNI de Usuario";
		}
	}
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

	var n = asientos.indexOf(asiento) 
	celdas[n].style.backgroundColor="DodgerBlue";
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
	var n = asientos.indexOf(asiento) 
	celdas[n].style.backgroundColor="DodgerBlue";
	document.getElementById("mostrar").innerHTML = "El asiento " + asiento + " esta desocupado";
	var u = usuarios.indexOf(asiento);
	usuarios.slice(0,u);
}

function limpiar(){
   document.getElementById("mostrar").innerHTML="Seleccione un asiento..!!";
   document.getElementById("nombre").value="";
   document.getElementById("apellido").value="";
   document.getElementById("dni").value="";  
}































/*
function fila1(){
	var fila11=document.getElementById("fila11");
	var filita="";
	for(var i=4;i<=32;i+=4){
		filita+="<td>"+i+"</td>"
	}
	fila11.innerHTML=filita;
}
fila1();

*/