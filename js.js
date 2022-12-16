fetch("https://dummy.restapiexample.com/api/v1/employees", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "host",
        "x-rapidapi-key": "key",
    }
    })
    .then(response => response.json())
    .then(json => {
  
        // Create a variable to store HTML
        let li = `<tr><th>Name</th><th>Salary</th></tr>`;
       
        // Loop through each data and add a table row
        json.forEach(user => {
            li += `<tr>
                <td>${user.employee_name} </td>
                <td>${user.employee_salary}</td>        
            </tr>`;
        });
  
    // Display result
    document.getElementById("users").innerHTML = li;
});