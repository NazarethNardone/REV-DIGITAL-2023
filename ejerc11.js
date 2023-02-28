//if//
let precioHelado=50;
let precio = 0;
let PrecioFinal = 0;

if (topping == "oreo"){
    precio = 10
}
else if (topping == "kitkat"){
    precio = 15
}
else if (topping == "kinder"){
    precio = 25
}
else {
    document.write("no tenemos este topping.");
    precio = 0;
}

PrecioFinal = (precioHelado + precio);
document.write("El helado cuesta "+ "$" + PrecioFinal);


//switch//
let expr="menu";
switch (expr) {
case "carne":
console.log ("Te podemos ofrecer vino tinto");
break;
case "pescado":
console.log ("Te podemos ofrecer vino blanco");
break;
case "verduras":
console.log ("Te podemos ofrecer agua");
break;
default:
console.log ("elija carne, pescado o verdura");

}

//for//
let nombre =["Diego", "Anabel", "Esteban"];
console.log(nombre);
console.log(nombre[0]);
console.log(nombre[2]);
console.log("Cantidad de nombre:", nombre.length);
for(let i = 0; i< nombre.length; i++){
console.log(nombre[i])
}

// while//
let num = 11;
while (num < 11) {
console.log("numero es más chico que 11");
count=count +1
}



