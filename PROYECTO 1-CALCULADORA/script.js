//esto agrega a la pantalla el valor del boton que toquemos

function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//esto borra todo
function borrar(){
    document.getElementById('pantalla').value=''
}
//efectua los
function calcular(){
    const valorPantalla=document.getElementById('pantalla').value
const resultado =eval(valorPantalla)
document.getElementById('pantalla').value=resultado
}