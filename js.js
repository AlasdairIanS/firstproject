fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json()
})
.then(data => {
    data.forEach(user => {
        const markup  = 
        `<details>
        <summary id="perfiles">${user.username}</summary>
        <ul>
        <li><b>Name :</b> ${user.name}</li>
        <li><b>Email :</b>${user.email}</li>
        <li><b>Phone :</b>${user.phone}</li>
        <li><b>Website :</b>${user.website}</li><br>
        <li><img src="blank.png" height="120px alt="MDN"></li>
        </ul>
        
        </details>`

        document.querySelector("#users").insertAdjacentHTML("beforeend", markup)
        
    });
})
.catch(function (err) {
    console.log('error: ' + err);
});
function abrirFormulario() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

