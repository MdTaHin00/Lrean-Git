//  
 const btn=document.getElementById("btn");
 const input=document.getElementById("input");
 const mealadd=document.getElementById("mealadd");
 const onMeal=document.getElementById("onMeal");
 const addveiws=document.getElementById("addveiws");
//  const Closes=document.getElementById("closeModal");
 const pop=document.getElementById("pop");
// 
// 
function namemeal(){
     if(input.value){
          let URLS=`https://themealdb.com/api/json/v1/1/search.php?s=${input.value}`;
          fetch(URLS)
               .then((res)=>res.json())
               .then((meals)=> showmeal(meals.meals));
// 
         onMeal.style.display="none";
     }else{
        alert("Search for a food frist ");
        onMeal.style.display="inline-block";
// 
     }
}
// 
btn.addEventListener("click",namemeal);
// 
 function showmeal(meals){
     console.log("show",meals);
     // 
     meals.forEach((meal)=>{
          // console.log(meal);
          mealadd.innerHTML+=`    

                   <div class="border border-orange-300 overflow-hidden py-5"> 
                      <img src=${meal.strMealThumb} alt="" class="rounded-full p-3"> 
                      <h2 class="text-yellow-200 mb-3">${meal.strMeal}</h2> 
                       <p class="text-sm text-blue-50 mb-1 ">${meal.strInstructions.slice(0,110)} ...</p>  
                     <p><span class="text-gray-500">${meal.strArea}</span> <span class="text-gray-400">${meal.strCategory}</span></p> 
                      <div class="mt-4"> 
                       <a href="${meal.strYoutube}"  target="_blank" class="bg-orange-500 px-4 py-2 rounded-xl text-yellow-100">Watch</a> 
                       <button class="text-slate-200 italic" onclick="lookup('${meal.idMeal}')">View </button> 
                      </div> 
                     
          `
        input.value="";  
     })
 }
// 
 function lookup(id){
     let URLS=`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      fetch(URLS)
           .then((res)=>res.json())
           .then((meals)=> showdetails(meals.meals[0])
           );
     // 
 }
// 
 function showdetails(meals){
     pop.classList.add("visible");
     pop.classList.remove("invisible");
     pop.innerHTML=`
     <div id="modal" class="fixed inset-0 flex items-center justify-center  bg-slate-300">
  <div class="bg-white rounded-lg shadow-xl w-[80%] p-6 absolute top-20 left-20 h-auto" id="addveiws">
    <h2 class="text-xl font-bold text-gray-800 mb-4">${meals.strMeal}</h2>
    <p class="text-gray-600 mb-6">${meals.strInstructions}</p>
    <div class="flex justify-end gap-5">
      <a  href=${meals.strYoutube} id="closeModal"  target="_blank"  class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">  
      Watch
      </a>
      <a id="closeModal"  class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400" onclick="deletelist()" >Close </a>
    </div>
  </div>
</div>
     `
 };
// 
// 
function deletelist(){
     pop.classList.add("invisible");
     pop.classList.remove("visible");
}
// 
// 