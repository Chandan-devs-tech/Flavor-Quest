import './style.css';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';

let arrayOfMeals = [];
const mainContainer = document.querySelector('.main-container');
const getData = async () => {
  const result = await fetch(baseUrl);
  const { meals } = await result.json();
  return meals;
};

getData();

const showMeals = async () => {
  arrayOfMeals = await getData();
  arrayOfMeals.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.setAttribute('data-id', item.idMeal);
    div.innerHTML = `
    <img src=${item.strMealThumb} alt="" class="meal-img"/>
        <div class="like-comment">
          <p class="item-name">${item.strMeal}</p>
          <i class="fa-regular fa-heart" style="color: #ff0000"></i>
        </div>
        <div class="num-of-likes">0 Likes</div>
        <div class="btn-container">
          <button class="comment-btn">Comment</button>
          <button class="reservation-btn">Reservation</button>
        </div>`;
    mainContainer.appendChild(div);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  await showMeals();
});
