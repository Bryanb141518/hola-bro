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

function ejercicioUno(a,b,operation){
    switch(operation){
        case "suma":
            return a+b;
            break;
        case "resta":
            return a-b;
            break;
        case "multiplicacion":
            return a*b;
            break;
        case "divicion":
            return a/b;
            break
        default :
            console.error(`la operacion ${operation} no es valida`)
    }
}
ejercicioUno(12,20,"divicion")