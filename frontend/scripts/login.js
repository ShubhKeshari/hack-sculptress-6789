let signup = document.getElementById("signup");
let loginForm = document.getElementById("login-form");

let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("login-password");

let loginBtn = document.getElementById("login-btn");

let url = "https://hack-sculptress-6789.onrender.com";

signup.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "signup.html"
});


loginBtn.addEventListener("click", login);

async function login() {
    try {
        let credentials = {
            Email : loginEmail.value,
            Password : loginPassword.value
        };
        let response = await fetch(`${url}/users`, {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(credentials)
        });

        let data = await response.json();
        localStorage.setItem("localAccessToken", JSON.stringify(data.accessToken));
        +localStorage.setItem("userId", JSON.stringify(data.user.id));
        fetchData();
    } catch (error) {
        console.log(error);
    }
}

async function fetchData() {
    try {
        let token = JSON.parse(localStorage.getItem("localAccessToken"));
        let userId = +JSON.parse(localStorage.getItem("userId"));

        let response = await fetch(`${url}/courses/${userId}`, {
            method : "GET",
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        });
        let data = await response.json();
        console.log(data);
        window.location.href = "../index.html";
    } catch (error) {
        console.log(error);
    }
}









// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     fetch("http://localhost:4000/users", {
//         method : "GET",
//         headers : {
//             "Content-type" : "application/json"
//         },
//         body : JSON.stringify({email, password})
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         if (data.authenticated) window.location.href = "../pages/index.html";
//         else alert('Invalid username or password');
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// })
