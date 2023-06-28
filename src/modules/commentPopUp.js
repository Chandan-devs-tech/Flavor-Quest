import { textContent } from 'domutils';
import { doc } from 'prettier';

const commentBtnPop = (event) => {
  // Get the gallery item containing the clicked comment button
  const galleryItem = event.target.closest('.gallery-item');

  // Get the image source from the clicked gallery item
  const imageSrc = galleryItem.querySelector('img').src;
  const foodName = galleryItem.querySelector('.item-name').textContent;

  // Create the popup container element
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.className = 'popup-close';
  closeButton.innerHTML = 'X';

  // Create the popup image element
  const popupImage = document.createElement('img');
  popupImage.src = imageSrc;

  const popupFoodName = document.createElement('h3');
  popupFoodName.textContent = foodName;

  const description = document.createElement('div');
  description.className = 'description';
  description.innerHTML = `<div class="left">
      <p>Ingredient: Organic</p>
      <p>Portion: 1:2</p>
    </div>
    <div class="right">
      <p>Take Away</p>
      <p>Price: Negociable</p>
    </div>`;
  
  const commentHeader = document.createElement('h4');
  commentHeader.className = 'comment-header';
  commentHeader.innerHTML = 'Comments (Counter coming soon)'

  const userComments = document.createElement('ul');
  const comment = document.createElement('li');
  comment.innerHTML = 'date user: comment'
  userComments.appendChild(comment);

  const commentInputSec = document.createElement('div');
  commentInputSec.className = 'comment-input-sec';
  commentInputSec.textContent = 'Add a comment';
  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  nameInput.className = 'name-input';
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';
  
  const yourInsightInput = document.createElement('input');
  yourInsightInput.className = 'your-insight'
  yourInsightInput.type = 'text';
  yourInsightInput.placeholder = 'Your Insights';

  const submit = document.createElement('button');
  submit.className = 'submit';
  submit.innerText = 'Submit';
  
  form.appendChild(nameInput);
  form.appendChild(yourInsightInput);
  form.appendChild(submit);


  // Append the popup image to the popup container
  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(popupImage);
  popupContainer.appendChild(popupFoodName);
  popupContainer.appendChild(description);
  popupContainer.appendChild(commentHeader);
  popupContainer.appendChild(userComments);
  popupContainer.appendChild(commentInputSec);
  popupContainer.appendChild(form);

  // Append the popup container to the body of the document
  document.body.appendChild(popupContainer);

  const closePopup = () => {
    document.body.removeChild(popupContainer);
  };

  closeButton.addEventListener('click', closePopup);
};

export { commentBtnPop };
