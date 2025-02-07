async function getDining() {
  const output = document.querySelector('#myTable');
  const diningRequest = await fetch('/api/dining');
  // waits until the request completes...
  console.log('response');
  const diningData = await diningRequest.json();

  diningData.data.forEach((diningHall) => {
    console.log('diningHall');
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `
	    <td>
	      ${diningHall.hall_id}
	    </td>
	    <td>
	      ${diningHall.hall_name}
	    </td>
	    <td>
	      ${diningHall.hall_address}
	    </td>`;
    output.append(appendItem);
  });
}
window.onload = getDining;
