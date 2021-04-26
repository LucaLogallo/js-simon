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

*/

$(function(){
  var arrPC = [];
  var arrUman = [];
  var arrResult = [];
  var n = 5; //possiamo anche farlo inserire all'utente . Cardinalità dell'array di numeri sia di quelli generati randomicamente dal pc sia di quelli inseriti dall'utente
  console.log(arrPC);
//1. Clccando su “via” il computer genera 5 numeri
  $('#start').click(function(){
    $('.rules').hide();
    $('#numero').hide();
    $('#numUtente').hide();
    creaArrayPC(n,1,100);
    
    console.log(arrPC);

    var clock;
    var C = 4;

    clock = setInterval(function(){
      C--;
      printOutput("pronto tra "+C,'#display');
      if(C === 1){
        clearInterval(clock);
      }
    },1000)

    setTimeout(function(){
      printOutput(arrPC.toString(),'#display'); 
    },4000);
    
    
    setTimeout(function(){
      printOutput('', '#display');
      $('#numero').show();
      $('#numUtente').show();
      $('#numUtente').click(function(){
        printOutput('','#display');
        var a = $('#numero').val();
        if(arrUman.includes(a) === false && arrUman.length < n){
          arrUman.push(a);
          console.log(arrUman);
        }else{
          printOutput('ERROR INSERIMENTO','#display');
        }
      });

      for(var i=0; i<n; i++){
        if(arrPC.includes(arrUman[i]) === true){
          arrResult.push(arrUman[i]);
        }
      }

      if(arrResult.length>0){
        printOutput("hai indovinato "+arrResult.length+"numeri", '#result');
        printOutput(arrResult.toString(),'#numResult');
      }else if(arrResult.length === n){
        printOutput("hai indovinato tutti i numeri",'#result');
        printOutput(arrResult.toString(),'#numResult');
      }else{
        console.log("perso");
        /* 
        printOutput('non hai indovinato nemmeno un numero. Consiglio una cura di fosforo per memoria <a href="https://www.vitaminexpress.org/it/brainpower-integratore-cervello-capsule?gclid=Cj0KCQjwyZmEBhCpARIsALIzmnLqxxsM1ClL-xnKTIPJmXmIuZhiZYsrvZ8LSfEIuXbcQUnW52A56OgaAn-rEALw_wcB">qui</a>','#result'); */
      }
      /* for(var i = 0; i<n ;i++){
        var num = 0;
        printOutput("inserisci il "+i+"e premi invio",'#display'); 
        $('#numero').keyup(function(event){
          var num = $(this).val();
          console.log(num);
          if(num === 13){
            arrUman[i].push(num);
            console.log(arrUman[i]);
          }
        });

      } */
    },8000);
   




  });

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