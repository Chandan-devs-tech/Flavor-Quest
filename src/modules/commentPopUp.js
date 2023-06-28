const commentBtnPop = (event) => {
  // Get the gallery item containing the clicked comment button
  const galleryItem = event.target.closest('.gallery-item');

  // Get the image source from the clicked gallery item
  const imageSrc = galleryItem.querySelector('img').src;

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
  popupImage.alt = 'Popup Image';

  // Append the popup image to the popup container
  popupContainer.appendChild(closeButton);
  popupContainer.appendChild(popupImage);

  // Append the popup container to the body of the document
  document.body.appendChild(popupContainer);

  const closePopup = () => {
    document.body.removeChild(popupContainer);
  };

  closeButton.addEventListener('click', closePopup);

};


export { commentBtnPop };
