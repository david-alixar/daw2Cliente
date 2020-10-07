//Ejercicio 3 comparación de números y Strings
//@author David González Conejero

//Declaro todas las variables
var operacion1 = 10 == 10;
var operacion2 = 10 === 10;
var operacion3 = 10 === 10.0;
var operacion4 = "Laura" == "laura";
var operacion5 = "Laura" > "laura";
var operacion6 = "Laura" < "laura";
var operacion7 = "123" == 123;
var operacion8 = "123" === 123;
var operacion9 = parseInt("123") === 123;

//Muestro las operaciones a realizar

//10 es lo mismo que 10
alert("La operación 10 == 10 es: " + operacion1);
//10 es exactamenet lo mismo que 10
alert("La operación 10 === 10 es: " + operacion2);
//10 es exactamente lo mismo que 10.0
alert("La operación 10 === 10.0 es: " + operacion3);
//Laura no es lo mismo que laura (capital letters)
alert("La operación Laura == laura es: " + operacion4);
//Laura no es mayor que laura
alert("La operación Laura > laura es: " + operacion5);
//Laura es mayor que laura
alert("La operación Laura < laura es: " + operacion6);
//El string 123 es lo mismo que el entero 123 (esto convierte tipos previamente al poner ==)
alert("La operación 123 == 123 es: " + operacion7);
//El string 123 no es exactamente lo mismo que el entero 123 (no los convierte para compararlos)
alert("La operación 123 === 123 es: " + operacion8);
//El string 123 es lo mismo que 1el entero 23, puesto que lo parsea manualmente, al igual que lo hace solo con la operacion7
alert("La operación ParseInt('123') === 123 es: " + operacion9);
