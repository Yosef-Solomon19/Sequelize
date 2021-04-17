function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

async function getMeals() {
  console.log('response');
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions() {
  console.log('loaded window');
  const meals = await getMeals();
  const mealData = meals.data;
  
  const mealArray = [1,2,3,4,5,6,7,8,9,10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, mealData.length - 1);
    return mealData[random];
  });
 // Challenge: How to display the randomly selected Meals/Macros on a table. 
  console.table(selectedMeals);
  return selectedMeals;
}

function mealChart(selectedMeals,macros) {
  console.table(selectedMeals);
  const macroName = [];
  selectedMeals.forEach((meal) =>{
    const macroNameDict = {y: '', label: ''};
    macroNameDict.label = meal.meal_name;
    macroNameDict.y = meal[macros];
    macroName.push(macroNameDict);
  });
  return macroName;
}


window.onload = async function () {
  const dataChart = await windowActions();
  
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: '10 Random Meals Macros Chart'
    },
    axisX: {
      
    },
    axisY: {
      
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries
    },
    data: [{
      type: 'stackedBar',
      name: 'calories',
      showInLegend: 'true',
      dataPoints: mealChart(dataChart, 'calories')
    },
    {
      type: 'stackedBar',
      name: 'cholesterol',
      showInLegend: 'true',
      dataPoints: mealChart(dataChart, 'cholesterol')
    },
    {
      type: 'stackedBar',
      name: 'sodium',
      showInLegend: 'true',
      dataPoints: mealChart(dataChart, 'sodium')
    },
    {
      type: 'stackedBar',
      name: 'carbs',
      showInLegend: 'true',
      dataPoints: mealChart(dataChart, 'carbs')
    },
    {
      type: 'stackedBar',
      name: 'protein',
      showInLegend: 'true',
      dataPoints: mealChart(dataChart, 'protein')
    },
    {
      type: 'stackedBar',
      name: 'fat',
      showInLegend: 'true',
      dataPoints: mealChart(dataChart, 'fat')
    }]
  });
  chart.render();
  
  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};
