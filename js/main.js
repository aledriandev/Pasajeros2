var celdas = document.getElementsByTagName('td');
var asientos = [];
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
    asientos.push(celdas[i].textContent);
}
var _asiento=0;


function redirect(event){   
	var mensaje=""
	for (var i = 0; i < celdas.length; i++) {
    	if(celdas[i].style.backgroundColor=="blue"){
    		mensaje=" esta ocupado"
    	}else mensaje=" esta desocupado"
	}
	//_asiento = (event.target.textContent)
	//var n = asientos.indexOf(_asiento) 
	//celdas[n].style.backgroundColor="blue";
	document.getElementById("mostrar").innerHTML = "El asiento " + (event.target.textContent)+mensaje;
}
var usuarios = [];

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
	celdas[n].style.backgroundColor="blue";

	usuarios.push(persona);

	alert("Usuario registrado")

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