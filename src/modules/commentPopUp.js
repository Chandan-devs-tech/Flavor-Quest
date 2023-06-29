// import { textContent } from 'domutils';
// import { doc } from 'prettier';

const mainContainer = document.querySelector('.main-container');
const commentBtnPop = (event) => {
  // Get the gallery item containing the clicked comment button
  const galleryItem = event.target.closest('.gallery-item');

  // Get the image source from the clicked gallery item
  const imageSrc = galleryItem.querySelector('img').src;
  const foodName = galleryItem.querySelector('.item-name').textContent;
  // Create overlay for popup
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  // Create the popup container element
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.className = 'popup-close';
  closeButton.innerHTML = 'X';
  // create div for image and description
  const imgDescipDiv = document.createElement('div');
  imgDescipDiv.classList.add('img-desc-container');

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
  // div for comment and form section
  const formCommentDiv = document.createElement('div');
  formCommentDiv.classList.add('form-comment-div');
  const commentHeader = document.createElement('h4');
  commentHeader.className = 'comment-header';
  commentHeader.innerHTML = 'Comments (Counter coming soon)';
  // div for showing user comments
  const userCommentsDiv = document.createElement('div');
  userCommentsDiv.classList.add('comments-container');
  userCommentsDiv.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ad soluta quaerat eveniet corrupti cumque nisi omnis nemo harum provident.';
  const userComments = document.createElement('ul');
  const comment = document.createElement('li');
  comment.innerHTML = 'date user: comment';
  userComments.appendChild(comment);

  const commentInputSec = document.createElement('div');
  commentInputSec.className = 'comment-input-sec';
  commentInputSec.textContent = 'Add a comment';
  const form = document.createElement('form');
  form.className = 'form';
  const nameInput = document.createElement('input');
  nameInput.className = 'name-input';
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';

  const yourInsightInput = document.createElement('input');
  yourInsightInput.className = 'your-insight';
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
  imgDescipDiv.appendChild(popupImage);
  imgDescipDiv.appendChild(popupFoodName);
  imgDescipDiv.appendChild(description);
  popupContainer.appendChild(imgDescipDiv);
  formCommentDiv.appendChild(commentHeader);
  formCommentDiv.appendChild(userCommentsDiv);
  formCommentDiv.appendChild(userComments);
  formCommentDiv.appendChild(commentInputSec);
  formCommentDiv.appendChild(form);
  popupContainer.appendChild(formCommentDiv);
  overlay.appendChild(popupContainer);
  // popupContainer.appendChild(submit);

  // Append the popup container to the body of the document
  mainContainer.appendChild(overlay);

  const closePopup = () => {
    mainContainer.removeChild(overlay);
  };

  closeButton.addEventListener('click', closePopup);
};

export default commentBtnPop;
