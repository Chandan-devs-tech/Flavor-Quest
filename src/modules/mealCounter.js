export const mealcounter = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
  const result = await fetch(url);
  const data = await result.json();
  return data.meals.length;
};

const showCount = (num) => {
  const homeli = document.querySelector('.home-li');
  homeli.textContent = `(${num})Meals`;
};

export { showCount };