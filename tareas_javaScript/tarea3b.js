//Ejercicio 3b adicional de comparación
//@author David González Conejero

//Declaro todas las variables
var operacion1 = null == undefined;
var operacion2 = "NaN" == NaN;
var operacion3 = 5 == NaN;
var operacion4 = NaN == NaN;
var operacion5 = NaN != NaN;
var operacion6 = false == 0;
var operacion7 = true == 1;
var operacion8 = true == 2;
var operacion9 = undefined == 0;
var operacion10 = null == 0;
var operacion11 = "5" == 5;

//Muestro las operaciones a realizar

//null es lo mismo que undefined
alert(operacion1);
//"NaN" (como String) no es lo mismo que NaN
alert(operacion2);
//5 no es lo mismo que NaN
alert(operacion3);
//NaN no es lo mismo que NaN (no es un número)
alert(operacion4);
//Pero NaN es distinto a NaN
alert(operacion5);
//false es lo mismo que 0
alert(operacion6);
//true es lo mismo que 1
alert(operacion7);
//Pero true no es lo mismo que 2
alert(operacion8);
//undefinied no es lo mismo que 0
alert(operacion9);
//Por tanto, null tampoco es lo mismo que 0
alert(operacion10);
//"5", aunque sea un String, es lo mismo que 5
alert(operacion11);
