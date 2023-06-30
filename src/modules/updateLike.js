const updateNumberOfLikes = (idValue,div) => {
  let foodLikes = parseInt(div.textContent);
  foodLikes++;
  div.textContent = `${foodLikes} likes`;
};

export default updateNumberOfLikes;