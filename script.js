'use strict';

function check (year) {
  if(year%4==0){
    if(year%100==0){
      if(year%400==0){
        return true
      }
      else
        return false}
    else 
      return true }    
  else
    return false
}


function edit(a){
if(check(a)){
document.getElementById('year').innerHTML=`${a} IS LEAP year`
}
else document.getElementById('year').innerHTML=`${a}  NOT LEAP year `
}



var input = document.getElementById('typeyear');

input.oninput = function() {

  edit(+input.value)
  console.log( +input.value,  typeof(+input.value))
};



