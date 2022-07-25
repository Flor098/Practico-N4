//Obtener y Recorrer las Llaves de un Objeto
    //Aqui tu codigo
/*    var datos={
    nombre: "Florencia",
    apelllido:"Robledo",
    cumpleaños: "9/8"
}
function Obtener(obj) {
    for (let clave in obj){

        console.log(clave);
        
        console.log(obj[clave]);
        
        }
}
Obtener(datos);*/
/*var fec=new Date('23 Julio, 2022')
function Fecha(num) {
    //Escriba una función de JavaScript para obtener el día de una fecha en particular.
    //Aqui tu codigo
var dia=num.getDay();
switch(dia){
    case 1: return "Lunes";
    break
    case 2: return "Martes";
    break
    case 3: return "Miercoles";
    break
    case 4: return "Jueves";
    break
    case 5: return "Viernes";
    break
    case 6: return "Sabado";
    break
    case 7: return "Domingo";
    break
}
}

console.log(Fecha(fec));*/



// Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
/*var usuario={
    nombre:"Marcos",
    contraseña:"hola123"
}

function verificarPassword(usuario, password) {
    
    // if(usuario.contraseña===password){
    //     return true;
    // }else{
    //     return false
    // }
    return (usuario.contraseña===password)
  

}
console.log(verificarPassword(usuario,"hola1823"))*/



    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
/*
function crearGato(nombre, edad) {
    var gato={
        nombre:nombre,
        edad:edad,
        Meow:function() {
            console.log('Meow')
        }
    }
return gato
}
console.log(crearGato("Mishi",30))*/


  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]")
    // y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:

   /* var producto={
        precio:20,
    }

function agregarMetodoCalculoDescuento(producto) {
   
       producto.calcularPrecioDescuento= function (desc){
        return producto.precio-(desc*producto.precio);
       }
    }

agregarMetodoCalculoDescuento(producto)
console.log(producto)
console.log(producto.calcularPrecioDescuento(0.5))*/



 // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la 
 //forma que tu quieras
    // Mostrar array ordenado.
    // Tu código:
function ordenar(array) {
   return array.sort()
   /*var ordenado=[];
   mayor=0;
   for(i=0;i<array.length;i++){
if(array[i]>mayor){
    for(j=0;j<array.length;j++){
    ordenado.push[j]=arreglo[i];
}
   }
}
   return ordenado;*/
}
var arreglo=[34,56,80,40,87,30]
console.log(ordenar(arreglo));