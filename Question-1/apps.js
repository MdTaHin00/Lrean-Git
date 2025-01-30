
// Select elements
const secarch = document.getElementById("btn");
const input = document.getElementById("input");
const text = document.getElementById("text");
const itemAdd = document.getElementById("item-add");
const pop = document.getElementById("pop");
const list = document.getElementById("list");

// Event Listener for Search
secarch.addEventListener("click", function () {
  if (input.value) {
    let code = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`;
    
    fetch(code)
      .then((res) => res.json())
      .then((data) => showdata(data.drinks));

    list.innerText = input.value;
  } else {
    alert("Enter Cocktail Name");
    text.style.display = "block";
  }
});

// Function to Show Drinks
function showdata(data) {
  itemAdd.innerHTML = ""; // Clear previous results

  if (!data) {
    itemAdd.innerHTML = "<p class='text-red-500'>No drinks found!</p>";
    return;
  }

  data.forEach((meal) => {
    let instructions = meal.strInstructionsIT ? meal.strInstructionsIT.slice(0, 100) : "Instructions not available";

    itemAdd.innerHTML += `
      <div class="border border-orange-300 overflow-hidden py-5 text-center">
        <img src="${meal.strDrinkThumb}" alt="" class="rounded-full p-3">
        <h2 class="text-yellow-200 mb-3 text-center">${meal.strDrink}</h2>
        <p class="text-sm text-blue-50 mb-1 text-center">${instructions}...</p> 
        <p><span class="text-gray-500">${meal.dateModified  || "Nall"}</span></p>
        <span class="text-gray-400">${meal.idDrink}</span>
        <div class="mt-4">
          <button class="text-slate-200 italic border border-orange-300 px-5 py-2" onclick="showlist('${meal.idDrink}')">View</button>
        </div>
      </div>
    `;
  });

  input.value = "";
}

// Function to Fetch Drink Details
function showlist(id) {
  let URLS = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  
  fetch(URLS)
    .then((res) => res.json())
    .then((meals) => showdetails(meals.drinks[0])); // Access first item
}

// Function to Show Drink Details in Modal
function showdetails(meal) {
  pop.classList.add("visible");
  pop.classList.remove("invisible");

  pop.innerHTML = `
    <div id="modal" class="fixed inset-0 flex items-center justify-center bg-[#cbd5e178] w-[70%]">
      <div class="bg-white rounded-lg shadow-xl w-[80%] p-6 absolute top-20 left-[10%] h-auto" id="addveiws">
        <h2 class="text-xl font-bold text-gray-800 mb-4">${meal.strDrink}</h2>
        <img src="${meal.strDrinkThumb}" alt="" class="list-image rounded-lg">
        <p class="text-gray-600 mb-6 mt-3">${meal.strInstructions || "Nall"}</p>
        <div class="flex gap-4">
          <h2 class="text-xl text-gray-900 mb-4">${meal.strCategory || "Nall"}</h2>
          <h2 class="text-xl text-gray-900 mb-4">${meal.strAlcoholic}</h2>
          <h2 class="text-xl text-gray-900 mb-4">${meal.strGlass}</h2>
        </div>
        <div class="flex justify-end gap-5">
          <button id="closeModal" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400" onclick="closes()">Close</button>
        </div>
      </div>
    </div>
  `;
}

// Function to Close Modal
function closes() {
  pop.classList.add("invisible");
  pop.classList.remove("visible");
}
