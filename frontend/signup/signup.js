let login = document.getElementById("login");
let signupForm = document.getElementById("signup-form");

login.addEventListener("click", (e)=> {
    e.preventDefault();
    window.location.href = "../login/login.html";
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:4000/users", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({email,password})
    })
})