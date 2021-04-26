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
arrResult = array contenente i numeri uguali tra quelli inseriti da pc e quelli dall'utente
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
  /*   $('#numero').hide();
    $('#numUtente').hide(); */
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


      
      $('#numUtente').click(function(){
        var a = $('#numero').val();
        printOutput('','#numero');
        if(arrUman.includes(a) === false && arrUman.length < n){
          arrUman.push(a);
          console.log(arrUman);
        }else if(arrUman.length = n){
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
        }else{
          printOutput("errore",'#display');
        }
      });

      /* prova mal riuscita dell'inserimento da input box 
      for(var i = 0; i<n ;i++){
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
});