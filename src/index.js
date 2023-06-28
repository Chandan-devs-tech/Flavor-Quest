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
    // div.innerHTML = `
    // <img src=${item.strMealThumb} alt="" class="meal-img"/>
    //     <div class="like-comment">
    //       <p class="item-name">${item.strMeal}</p>
    //       <i class="fa-regular fa-heart" style="color: #ff0000"></i>
    //     </div>
    //     <div class="num-of-likes">0 Likes</div>
    //     <div class="btn-container">
    //       <button class="comment-btn">Comment</button>
    //       <button class="reservation-btn">Reservation</button>
    //     </div>`;

    // Create the image element
    const img = document.createElement('img');
    img.src = item.strMealThumb;
    img.alt = '';
    img.className = 'meal-img';

    // Create the div for like and comment
    const likeCommentDiv = document.createElement('div');
    likeCommentDiv.className = 'like-comment';

    // Create the paragraph element for item name
    const itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.textContent = item.strMeal;

    // Create the heart icon element
    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa-regular fa-heart';
    heartIcon.style.color = '#ff0000';

    // Append the item name and heart icon to the like and comment div
    likeCommentDiv.appendChild(itemName);
    likeCommentDiv.appendChild(heartIcon);

    // Create the div for number of likes
    const numOfLikesDiv = document.createElement('div');
    numOfLikesDiv.className = 'num-of-likes';
    numOfLikesDiv.textContent = '0 Likes';

    // Create the div for button container
    const btnContainerDiv = document.createElement('div');
    btnContainerDiv.className = 'btn-container';

    // Create the comment button
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment-btn';
    commentBtn.textContent = 'Comment';

    // Create the reservation button
    const reservationBtn = document.createElement('button');
    reservationBtn.className = 'reservation-btn';
    reservationBtn.textContent = 'Reservation';

    // Append the buttons to the button container div
    btnContainerDiv.appendChild(commentBtn);
    btnContainerDiv.appendChild(reservationBtn);

    // Append all the created elements to the main div
    div.appendChild(img);
    div.appendChild(likeCommentDiv);
    div.appendChild(numOfLikesDiv);
    div.appendChild(btnContainerDiv);

    // Now you can use the main div in your DOM

    mainContainer.appendChild(div);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  await showMeals();
});
