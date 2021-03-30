async function getDining() {
  const output = document.querySelector('#myTable');
  const Diningrequest = await fetch('/api/dining');
  // waits until the request completes...
  console.log('response');
  const diningData = await Diningrequest.json();
  
  diningData.data.forEach((diningHall) => {
    console.log('diningHall')
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `
    
    `;




  });







async function windowActions() {
  console.log('window loaded');
  const dataTable = await getData();
  console.table(dataTable);
}

window.onload = windowActions;