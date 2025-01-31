const manu=document.getElementById("manu");
const humbergercontent=document.getElementById("humberger-content");
const humbergerend=document.getElementById("humberger-end");


manu.addEventListener("click", function(){
  humbergercontent.style.right="0%";
  // console.log("jjj");
  
});


humbergerend.addEventListener("click",function(){
  // console.log("hjjj");
  humbergercontent.style.right="-100%";
  
})
