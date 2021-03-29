
async function dataHandler() {
  console.log('window loaded');
  const request = await fetch('http://localhost:3000/api/dining', {method: 'GET'});
  const data = await request.json();
  return data;

}
async function windowActions() {
  console.log('window loaded');
  const dataTable = await getData();
  console.table(dataTable);
}

window.onload = windowActions;