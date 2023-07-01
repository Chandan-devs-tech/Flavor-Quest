const popupWindow = async (id) => {
  const mainContainer = document.querySelector('.main-container');
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await result.json();
  const mealDetails = data.meals[0];
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  const closeButton = document.createElement('button');
  closeButton.className = 'popup-close';
  closeButton.innerHTML = 'X';

  const img = new Image();
  const popupImage = document.createElement('div');
  img.src = `${mealDetails.strMealThumb}`;
  popupImage.appendChild(img);

  const imgDescipDiv = document.createElement('div');
  imgDescipDiv.classList.add('img-desc-container');
  imgDescipDiv.innerHTML = `<p>Area : ${mealDetails.strArea} </p>
  <p>Measure : ${mealDetails.strMeasure2}</p>
  <p>Ingedients : ${mealDetails.strIngredient1} </p>
  <p>Category: ${mealDetails.strCategory}</p>
 `;

  const popupFoodName = document.createElement('h3');
  popupFoodName.textContent = `${mealDetails.strMeal}`;

  const commentHeader = document.createElement('h4');
  commentHeader.className = 'comment-header';
  commentHeader.innerHTML = 'Comments (Counter coming soon)';

  const userCommentsDiv = document.createElement('div');
  userCommentsDiv.classList.add('comments-container');
  userCommentsDiv.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

  const formTitle = document.createElement('div');
  formTitle.className = 'comment-input-sec';
  formTitle.textContent = 'Add a comment';

  const form = document.createElement('form');
  form.className = 'form';

  const nameInput = document.createElement('input');
  nameInput.className = 'name-input';
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';

  const yourInsightInput = document.createElement('textarea');
  yourInsightInput.className = 'your-insight';
  yourInsightInput.cols = 40;
  yourInsightInput.rows = 6;
  yourInsightInput.placeholder = 'Your Insights';

  const submit = document.createElement('button');
  submit.className = 'submit';
  submit.innerText = 'Submit';

  form.appendChild(nameInput);
  form.appendChild(yourInsightInput);
  form.appendChild(submit);

  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(popupImage);
  popupContainer.appendChild(imgDescipDiv);
  popupContainer.appendChild(commentHeader);
  popupContainer.appendChild(userCommentsDiv);
  popupContainer.appendChild(formTitle);
  popupContainer.appendChild(form);
  overlay.appendChild(popupContainer);

  // Append the popup container to the body of the document
  mainContainer.appendChild(overlay);

  const closePopup = () => {
    mainContainer.removeChild(overlay);
  };

  closeButton.addEventListener('click', closePopup);
};

export default popupWindow;
