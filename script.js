"use strict";


let result=document.getElementById('result'),
     min=document.getElementById('minus'),
     pl=document.getElementById('plus'),
     mult=document.getElementById('mult'),
     devi=document.getElementById('devi');


let a=+prompt('A=');
let b=+prompt('B=');


const calculate={
   add: function(a,b){return a + b},
   minus: function(a,b){return a-b},
   multiple: function(a,b){return a*b},
   devision: function(a,b){return a/b},
}

min.onclick=function(){
   let res=calculate.minus(a,b);
   result.textContent = res;
}

pl.onclick=function(){
   let res=calculate.add(a,b);
   result.textContent = res;
}

mult.onclick=function(){
   let res=calculate.multiple(a,b);
   result.textContent = res;
}


devi.onclick=function(){
   let res=calculate.devision(a,b);
   result.textContent = res
}














