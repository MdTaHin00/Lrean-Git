// serctor

const input=document.getElementById("input");
const savelink=document.getElementById("save-link");
const savecurrenttep=document.getElementById("save-current-tep");
const deletealllink=document.getElementById("delete-alllink");
const addlist=document.getElementById("addlist");


let allLink=[];

let getlinks=JSON.parse(localStorage.getItem("Links"));

if(getlinks){
  allLink=getlinks;
  getarray(allLink);
}
function getarray(valus){
  addlist.innerHTML="";
  valus.forEach((items)=>{
    addlist.innerHTML+=`
     <li><a href=${items} target="_blank" class="list">${items}</a></li>
    `
  })
};



savelink.addEventListener("click",function(){ 
  if(input.value===""){
    alert("Inter Your Link");
  }else{
    const links=input.value;
    allLink.push(links);
    input.value="";
    localStorage.setItem("Links",JSON.
    stringify(allLink));
    getarray(allLink);
  }
});

deletealllink.addEventListener("click",function(){
  localStorage.clear();
  allLink=[];
  getarray(allLink);
});

savecurrenttep.addEventListener("click",function(){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0].url;
    allLink.push(activeTab);
    localStorage.setItem("Links",JSON.stringify(allLink));
    getarray(allLink);
  });
})
  
