let signup = document.getElementById("signup");
let loginForm = document.getElementById("login-form")


signup.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../signup/signup.html"
});

loginForm.addEventListener("submir", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:4000/users", {
        method : "GET",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({email, password})
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (data.authenticated) window.location.href = "../pages/index.html";
        else alert('Invalid username or password');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
})