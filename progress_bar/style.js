 let fill=0;
 let counter=0;
 function load_bar(){
   window.setInterval(function(){

     if(fill == 100 || counter==100){
       clearInterval();
     }
     else{
            fill += 1;
            counter += 1;
       document.getElementById('progress_one').style.width = fill + '%';
       document.getElementById('counter').innerHTML = counter + '%';
     }
   },50);
 }

load_bar();
