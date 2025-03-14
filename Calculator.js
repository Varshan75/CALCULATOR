let display = document.getElementById('display');
function add(a){
  display.value += a;
}
function vanish(){
    display.value= "";
}
function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
    display.value = 'error';    
}
}




