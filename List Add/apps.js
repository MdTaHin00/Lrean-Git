// sector

const main=document.getElementById("main");
const input=document.getElementById("list");
const addList=document.getElementById("btn");


addList.addEventListener("click",function(){

const newDiv=document.createElement("div") ;
newDiv.classList.add("div-class") ;
main.appendChild(newDiv);


const newInput=document.createElement("input");
newInput.classList.add("input-class");
newDiv.appendChild(newInput);
newInput.value=input.value;
newInput.setAttribute("readonly","readonly")


const Line=document.createElement("button");
Line.classList.add("line-class");
newDiv.appendChild(Line);
Line.innerText="Line";

const Edit=document.createElement("button");
Edit.classList.add("Edit-class");
newDiv.appendChild(Edit);
Edit.innerText="Edit";

const Delete=document.createElement("button");
Delete.classList.add("Delete-class");
newDiv.appendChild(Delete);
Delete.innerText="Delete";


input.value="";

Delete.addEventListener("click",function(some){
  some.target.parentElement.remove();
  });

Edit.addEventListener("click",function(have){
  have.target
if(have.target.innerText==="Edit"){
 newInput.removeAttribute("readonly");
 Edit.innerText="Save";
}else{
  newInput.setAttribute("readonly","readonly");
  Edit.innerText="Edit";
}
})  

Line.addEventListener("click",function(){
  
  if(Line.innerText==="Line"){
    newInput.style.textDecoration="line-through";
  Line.innerHTML="Unline"
  }else{
    newInput.style.textDecoration="none";
    Line.innerHTML="Line";
  }
})

});



  