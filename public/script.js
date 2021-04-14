async function getMeals() {
  console.log('response');
  const diningRequest = await fetch('/api/meals');
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions() {
  console.log('loaded window');
  const meals = await getMeals();
  console.table(meals);
  
}

window.onload = windowActions;