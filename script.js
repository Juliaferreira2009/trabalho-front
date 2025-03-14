const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function setError(index){
    campos[index].style.border = '1px solid #e63636';
    spans[index]
}
function nameValidade(){
    if(campos[0].value.lenght < 3)
    {
        console.log('Nome deve ter no mínimo 3 caracteres');
    }
    else
    {
        console.log('nome valido');
    }
}
  