dinerocofla = prompt("Cuanto dinero tienes cofla?:");
dinerocofla = parseInt(dinerocofla);

if (dinerocofla > 0.6 && dinerocofla <1){
    alert("comprate el helado de agua")
}
else if (dinerocofla >= 1 && dinerocofla <1.6){
    alert("comprate el helado de crema")
    alert("y te sobran" + (dinerocofla -1))
}
else if (dinerocofla >= 1.6 && dinerocofla <1.7){
    alert("comprate el helado de crema")
}else if (dinerocofla >= 1.7 && dinerocofla <1.8){
    alert("comprate el helado de crema")
}else if (dinerocofla >= 1.8 && dinerocofla <2.9){
    alert("comprate el helado de crema")
} 
else if (dinerocofla >=2.9){
    alert("helado con confites o el pote de 1/4kg")
    alert("y te sobran" + (dinerocofla - 2.9))
} else{
        alert("lo siento pobre de mirda hp perro hp animla de mrda manco")
}  

function miltiplicar (a,b){
    return a*b
}
resultad = multiplicar ( 2,3)
console.log(resultad)

console.log("Hola, mundo!");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
