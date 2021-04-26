/* 
**Descrizione:**
1. Clccando su “via” il computer genera 5 numeri
2. Vengono mostrati per 5 secondi i numeri generati
3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
6. Opzionale:
	- alla fine far apparire un bottone “restart”
	- all’inizio fare scegliere all’utente con quanti numeri giocare
**Consigli del giorno:**
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
**Note:**
Potete partire dall’applicazione fatta in classe o (meglio :occhiolino: ) svilupparla da zero


VARIABILI
arrPC = array di numeri generati randomicamente dal pc
arrUman = array di numeri inseriti dall'utente 
var sshow = numeri di secondi usati per il "countdown" del tempo nel quale i numeri generati dal pc devono essere mostrati

*/

$(function(){
  var arrPC = [];
  var arrUman = [];
  var n = 5; //possiamo anche farlo inserire all'utente . Cardinalità dell'array di numeri sia di quelli generati randomicamente dal pc sia di quelli inseriti dall'utente

//1. Clccando su “via” il computer genera 5 numeri
  $('#start').click(function(){
    creaArrayPC(n,1,100);
    console.log(arrPC);
  });


  var clock ;
  var c = 1;

  printOutput(arrPC,'#display'); 

  console.log(printOutput(arrPC,'#display'));
  clock = setInterval(function(){
    c--;
    if(c === 0){
      clearInterval(clock);
      printOutput('finito','#display');
    }
  }, 5000);





/* FUNZIONI */
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function creaArrayPC(n,min,max){

  while(arrPC.length < n){
    var numero = random(min,max);
    if(arrPC.includes(numero)=== false){
      arrPC.push(numero);
    } 
  }
}

function printOutput(text, target){
  $(target).text(text);
}
})






/* 

$(document).ready(function(){
//console.log('ciao')

//Inserisco in un input un numero che indica quanto è lungo il countdown
//visualizzo l'input e il bottone start
//2 al click di 'Start' parte il countdown, scompare il campo di input e visualizzo il countdown
//3 al termine del countdown visualizzo 'Fine' e un bottone per ripartire

    var countdown = 0;
    var clock;
    $('#ricomincia').hide();

    $('#btn').click(function(){

        countdown = $('#input').val();
 //console.log(countdown);

        $('#input').hide();
        $('#btn').hide();
        printOutput(countdown,'#display');

        clock = setInterval(function(){
            countdown--;
            printOutput(countdown,'#display');

            if(countdown === 0){
                clearInterval(clock);
                setTimeout(function(){
                    printOutput('Finito', '#display');
                    $('#ricomincia').show();
                    $('#input').val('');
                },1000);
                
            }
        },1000);
    

    })// END CLICK BTN

    $('#ricomincia').click(function(){
        printOutput('Inserisci un numero', '#display');
        $('#input').show();
        $('#btn').show();
        $(this).hide();
    })


})

function printOutput(text, target){

    $(target).text(text);
}

*/