// Display meal counter function
const mealcounter = async () => {
  const request = new Request('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
  const result = await fetch(request);
  const data = await result.json();
  return data.meals.length;
};
// Display show count function
const showCount = (num) => {
  const homeli = document.querySelector('.home-li');
  homeli.textContent = `(${num})Meals`;
};

export { mealcounter, showCount };
