// dinerocofla = prompt("Cuanto dinero tienes cofla?:");
// dinerocofla = parseInt(dinerocofla);

// if (dinerocofla > 0.6 && dinerocofla <1){
//     alert("comprate el helado de agua")
// }
// else if (dinerocofla >= 1 && dinerocofla <1.6){
//     alert("comprate el helado de crema")
//     alert("y te sobran" + (dinerocofla -1))
// }
// else if (dinerocofla >= 1.6 && dinerocofla <1.7){
//     alert("comprate el helado de crema")
// }else if (dinerocofla >= 1.7 && dinerocofla <1.8){
//     alert("comprate el helado de crema")
// }else if (dinerocofla >= 1.8 && dinerocofla <2.9){
//     alert("comprate el helado de crema")
// } 
// else if (dinerocofla >=2.9){
//     alert("helado con confites o el pote de 1/4kg")
//     alert("y te sobran" + (dinerocofla - 2.9))
// } else{
//         alert("lo siento pobre de mirda hp perro hp animla de mrda manco")
// }  

// let free = false;
// const validarCliente = (time)=>{
//     let edad = prompt ("cual es tu edad?");
//     if(edad > 18){
//         if (time >= 2 && time < 7 && free ==false){
//             alert("podes pasar gratis")
//             free = true;
//         } else{
//             alert ("podes pasar pero tenes que pagar la entrada")
//         }
//     } else{
//         alert("mira papu sos menor de edad y por ende no podes pasar")
//     }
// }

// validarCliente(23);
// validarCliente(25); 


// ejercicio con funciones 1

// function ejercicioUno(a,b,operation){
//     switch(operation){
//         case "suma":
//             return console.log (a+b);
//             break;
//         case "resta":
//             return console.log (a-b);
//             break;
//         case "multiplicacion":
//             return console.log(a*b)
//             break;
//         case "divicion":
//             return console.log(a/b);
//             break
//         default :
//             console.error(`la operacion ${operation} no es valida`)
//     }
// }
// ejercicioUno(12,20,"multiplicacion")

// // realizar una funcion que almacene en un arreglo 
// // todos los numeros pares desde a hasta b

// //ejercicio 2


// function ejercicioDos (a = 0,b =0){
//     let nums=[];
//     for (let i = a; i <=b; i++){
//         console.log(i)
//         if (i %2 === 0)nums.push(i)
//     }
//     console.log(nums);
// } 
// function suma (a,b){
//     return a+b;
// }
// console.log(suma(30,60));

// function calculadora(a,b){
//     let resultado = a + b;
//     return resultado 
// }
// resultado = calculadora(5,7)
// console.log(resultado);

// clases en js -------------------------------------------------------------


// class animal{
//     constructor(especie,edad,color) {
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
// }
// }
// let perro = new animal("perro",5,"negro");
// let gato = new animal("gato",2,"gris");
// let pajaro = new animal("pajaro",1,"verde");

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

//ejemrcicio # 2 de cofla 
class celular 