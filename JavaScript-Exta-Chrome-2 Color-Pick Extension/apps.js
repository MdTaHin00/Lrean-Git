// selector
const pickcolorbtn=document.getElementById("pick-color");
const clearall=document.getElementById("clear-all");
const colorlist=document.querySelector(".all-color");
const pickclass=document.getElementById("pickclass");
const colors=document.querySelectorAll(".color");

// let pickcolor=[];
pickclass.style.display="none";

let pickcolor=JSON.parse(localStorage.getItem("picked") || "[]");

const activeEye=async ()=>{
  try{
    const eyeDropper=new EyeDropper();
    const colorCode=await eyeDropper.open();

    // copy to clipboard
    navigator.clipboard.writeText(colorCode.sRGBHex);
    pickcolor.push(colorCode.sRGBHex);
    pickclass.style.display="block";
    localStorage.setItem("picked",JSON.stringify(pickcolor));
    // console.log(pickcolor);
    showcolor();
  }catch(error){
// alert("Failed");
  }
  }

pickcolorbtn.addEventListener("click",activeEye);

 clearall.addEventListener("click",()=>{ 
  pickclass.style.display="none";
  pickcolor.length=0;
  localStorage.setItem("picked",JSON.stringify(pickcolor));

 });

let showcolor=()=>{
  if(!pickcolor.length){
    return;
  }
  colorlist.innerHTML=pickcolor.map((colors)=>`
     <ul class="all-color">
     <li class="color">
       <span class="rect" style="background-color:${colors}"></span>
       <span class="value-hex">${colors}</
span>
     </li>
   </ul>
  `
  ).join("");
  
};





