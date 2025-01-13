// secator

const grnerateinput=document.querySelector(".form-control-generatedPin");
const grnerateclick=document.getElementById("generatedPin");
const showValue=document.getElementById("showValue");
const submit=document.querySelector(".submit-btn");
const pinWrong=document.getElementById("wrong-pin");
const pinorrect=document.getElementById("correct-pin");
const tryleft=document.getElementById("tryLeft");

function generate(){
const pin=Math.floor(Math.random()*9000)+1000;
grnerateclick.value=pin;
pinWrong.style.display="none";
pinorrect.style.display="none";
submit.style.backgroundColor="#495BC3";
};


function numberValue(number=10){
    showValue.value+=number;
   if(number==="C"){
    showValue.value="";
    }
};

 function onedelete(){ 
  let courrentValue=showValue.value;
  showValue.value=courrentValue.slice(0,-1);
 };

 pinWrong.style.display="none";
 pinorrect.style.display="none";
function submitbotton(){
    if(showValue.value===""){
        alert("Enter Your Pin")
        submit.style.backgroundColor="#495BC3";
        pinWrong.style.display="none";
        pinorrect.style.display="none";
    }else{
        if(grnerateclick.value===showValue.value ){
            pinWrong.style.display="none";
            pinorrect.style.display="inline-block";
            submit.style.backgroundColor="green";
        }else{
            pinorrect.style.display="none";
            pinWrong.style.display="inline-block";
            submit.style.backgroundColor="red";
            tryleftfunction();
        } 
    }
    
     grnerateclick.value=""  ; 
     showValue.value=""; 
     
};

function tryleftfunction(){
const tryLeftvalue=parseInt(tryleft.innerText);
if(0<tryLeftvalue){
    tryleft.innerText=tryLeftvalue - 1;
}else{
submit.disabled =true;
}
}

submit.addEventListener("click",submitbotton);

