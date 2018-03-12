function p1vscpu(form){
    var cpu = Math.floor(Math.random()*3)
    var p1 = form.p1.value


  if (cpu == 0) {
      cpu = "cpu piedra";
      console.log(cpu);
  }
  else if  (cpu ==1) {
      cpu = "cpu papel"
      console.log(cpu);
  }

    else if (cpu ==2) {
        cpu = "cpu tijera"
        console.log(cpu);
  }
  var resultado = [p1, cpu]
  var p1vscpu = [p1, cpu]

    if (p1vscpu[0] == 'piedra' && p1vscpu[1] == 'cpu papel') {
      console.log('tu pierdes');
      document.querySelector('.result'). innerHTML = 'eres tan malo que hasta con homero pierdes';
      document.querySelector('.audio').src='../audio/homer victory.mp3'

    } else if (p1vscpu[0] == 'piedra' && p1vscpu[1] =='cpu tijera') {
      console.log('tu ganas');
      document.querySelector('.result'). innerHTML = 'jajaja quien no le podria ganar a homero';
      document.querySelector('.audio').src='../audio/homero pierde.mp3'

    } else if (p1vscpu[0]== 'papel' && p1vscpu[1] == 'cpu piedra') {
      console.log('tu ganas');
      document.querySelector('.result'). innerHTML = 'jajaja quien no le podria ganar a homero';
      document.querySelector('.audio').src='../audio/homero pierde.mp3'

    } else if (p1vscpu[0] == 'papel' && p1vscpu[1] == 'cpu tijera') {
      console.log('tu pierdes');
      document.querySelector('.result'). innerHTML = 'eres tan malo que hasta con homero pierdes';
      document.querySelector('.audio').src='../audio/homer victory.mp3'

    } else if (p1vscpu[0] == 'tijeras' && p1vscpu[1] == 'cpu piedra') {
      console.log('tu pierdes');
      document.querySelector('.result'). innerHTML = 'eres tan malo que hasta con homero pierdes';
      document.querySelector('.audio').src='../audio/homer victory.mp3'

    } else if (p1vscpu[0] == 'tijeras' && p1vscpu[1] == 'cpu papel') {
      console.log('tu ganas');
      document.querySelector('.result'). innerHTML = 'jajaja quien no le podria ganar a homero';
      document.querySelector('.audio').src='../audio/homer victory.mp3'
      
    } else {
      console.log('empate');
      document.querySelector('.result'). innerHTML = 'empate';
    }
    console.log(form.p1.value);
    document.querySelector('.p1vscpu'). innerHTML = resultado;
    document.querySelector('.p1vscpu'). style.display = 'flex';
    document.querySelector('.result'). style.display= 'flex';
    document.querySelector('.result2'). innerHTML = 'flex';

  }
