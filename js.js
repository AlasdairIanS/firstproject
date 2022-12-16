let products = [];

fetchData();

function fetchData() {
  fetch('https://dummy.restapiexample.com/api/v1/employees'){
    'mode': 'cors',
    'headers': {
        'Access-Control-Allow-Origin': '*',
    }
    .then(response => response.json())
    .then(json => products = json)
    .then(() => {
      for (let item of products) {
        toAppend.innerHTML += `
<div class="card">
<p>${item.employee_name}</p>
<h2>${item.employee_salary}</h2>
</div>
`;
      }
    });
}