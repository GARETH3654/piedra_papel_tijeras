console.log('hola');
function game1(form){
  var cpu = Math.floor(Math.random()*3)
  var num = form.juego.value
  var piedra = 0;
  var papel = 1;
  var tijeras = 2;
  if ( cpu = num) {
    document.querySelector('.piedra').innerHTML =''
  }
  else if (num) {
    document.querySelector('.papel').innerHTML =''
  } else {
    document.querySelector('.tijeras').innerHTML ='tijeras'
  }

  console.log(form.juego.value);
}
