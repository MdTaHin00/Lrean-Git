function calculator(NewValue){
document.getElementById("result").value+=NewValue;
}

function clean(){
  document.getElementById("result").value="";
}

function answer(){
  let Answer=eval(document.getElementById("result").value);
  document.getElementById("result").value=Answer
}