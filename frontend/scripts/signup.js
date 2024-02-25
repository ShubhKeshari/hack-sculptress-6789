let login = document.getElementById("login");

login.addEventListener("click", (e)=> {
    e.preventDefault();
    window.location.href = "login.html";
});


function signup() {
    let signupForm = document.getElementById("signup-form");
    let email = signupForm.Email.value;
    let password = signupForm.password.value;

    let data = {
        email,
        password
    }    
    fetch("https://hack-sculptress-6789.onrender.com/users", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(newUser => {
        console.log('Signup successful:', newUser);
    });
}


// signupForm.addEventListener("click", (e) => {
//     e.preventDefault();
//     const email = document.getElementsByClassName("email-input").value;
//     const password = document.getElementsByClassName("pass-input").value;

//     fetch("https://hack-sculptress-6789.onrender.com/users", {
//         method : "POST",
//         headers : {
//             "Content-type" : "application/json"
//         },
//         body : JSON.stringify({email,password})
//     })
// })

