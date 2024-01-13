//import { food } from "./objects.js";

const containerupper = document.querySelector("#container-upper");
const meals = document.querySelector("#meals");

// to get foods image and name from objects.js file
// function foods() {
//   for (let newfood of food) {
//     const containeruppers = document.createElement("div");
//     containeruppers.classList.add("img-contaiener");
//     containeruppers.innerHTML = `
//     <img
//       class="container-img"
//       src="${newfood.img}"
//       alt=""
//     />
//     <span>${newfood.name}</span>
//     `;
//     containerupper.appendChild(containeruppers);
//   }
// }
// foods();
getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch("https:www.themealdb.com/api/json/v1/1/random.php");

  const respData = await resp.json();
  const randomMeal = respData.meals[0];
  console.log(randomMeal);
  addMeal(randomMeal, true);
}

// async function getMealById(id) {
//   const resp = await fetch(
//     "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
//   );

//   const respData = await resp.json();
//   const meal = respData.meals[0];

//   return meal;
// }

// async function getMealBySearch(term) {
//   const meals = await fetch(
//     "www.themealdb.com/api/json/v1/1/search.php?s=" + term
//   );
// }

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("section-lower-img-container");

  meal.innerHTML = `
<img
  class="container-section-lower-img"
  src="${mealData.strMealThumb}"
  alt="${mealData.strMeal}"
/>
<div class="container-section-lower">
  <span>${mealData.strMeal}</span>
  <button class="btn" id="btn" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="custom-svg"><path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
  </svg></button>
</div>
`;
  meals.appendChild(meal);

  const btn = document.querySelector("#btn");

  btn.addEventListener("click", function (e) {
    btn.classList.toggle("active");

    // if (btn.classList.contains("active")) {
    //   removeMealLS(mealData.idMeal);
    //   btn.classList.remove("active");
    // } else {
    //   addMealsLs(mealData.idMeal);
    //   btn.classList.add("active");
    // }
  });
}

// function addMealsLs(mealId) {
//   const mealIds = getmealsLS();
//   localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
// }

// function removeMealLS(mealId) {
//   const mealIds = getmealsLS();

//   localStorage.setItem(
//     "mealIds",
//     JSON.stringify(mealIds.filter((id) => id !== mealId))
//   );
// }

// function getmealsLS() {
//   const mealIds = JSON.parse(localStorage.getItem("mealIds"));

//   return mealIds === null ? [] : mealIds;
// }

// async function fetchFavMeals() {
//   const mealIds = getmealsLS();

//   for (let i = 0; i < mealIds.length; i++) {
//     const mealId = mealIds[i];
//     const meal = await getMealById(mealId);

//     addMealFav(meal);
//   }
// }

// function addMealFav(mealData) {
//   const containeruppers = document.createElement("div");
//   containeruppers.classList.add("img-contaiener");
//   containeruppers.innerHTML = `
//         <img
//           class="container-img"
//           src="${mealData.strMealThumb}"
//           alt=""
//         />
//         <span>${mealData.strMeal}</span>
//         `;

//   containerupper.append(containeruppers);
// }
