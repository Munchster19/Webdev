function execute(){
    var x = document.getElementById('1').value;
    var y = document.getElementById('2').value;
    var sum = Number(x) + Number(y);
    
    if(isNaN(x)){
        alert('Error not a Number');
    }
    else if(x==""){
        alert('Error Need to put a number');
    }
   
    else if(isNaN(y)){
        alert('Error not a Number');
    }
    else if(y==""){
        alert('Error Need to put a number');
    }
    else{
        alert('Sum is: '+sum);
    }
}
function execute2(){
    var x = document.getElementById('1').value;
    var y = document.getElementById('2').value;
    var dif = Number(x) - Number(y);
    if(isNaN(x)){
        alert('Error not a Number');
    }
    else if(x==""){
        alert('Error Need to put a number');
    }
   
    else if(isNaN(y)){
        alert('Error not a Number');
    }
    else if(y==""){
        alert('Error Need to put a number');
    }
    else{
        alert('Difference is: '+dif);
    }
}
function execute3(){
    var x = document.getElementById('1').value;
    var y = document.getElementById('2').value;
    var prod = Number(x) * Number(y);
    
    if(isNaN(x)){
        alert('Error not a Number');
    }
    else if(x==""){
        alert('Error Need to put a number');
    }
   
    else if(isNaN(y)){
        alert('Error not a Number');
    }
    else if(y==""){
        alert('Error Need to put a number');
    }
    else{
        alert('Product is: '+prod);
    }
}
function execute4(){
    var x = document.getElementById('1').value;
    var y = document.getElementById('2').value;
    var quot = Number(x) / Number(y);
    
    if(isNaN(x)){
        alert('Error not a Number');
    }
    else if(x==""){
        alert('Error Need to put a number');
    }
   
    else if(isNaN(y)){
        alert('Error not a Number');
    }
    else if(y==""){
        alert('Error Need to put a number');
    }
    else{
        alert('Quotient is: '+quot);
    }
}