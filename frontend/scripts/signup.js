const isDevelopment = window.location.hostname.includes("127.0.0.1");
let baseURL = isDevelopment
  ? "http://127.0.0.1:5500/hack-sculptress-6789/frontend"
  : "https://hack-sculptress-6789-1.onrender.com";

function logolink() {
  let url = `${baseURL}/index.html`;
  console.log(url);
  window.location.href = `${baseURL}/index.html`;
}
function cartPage() {
  window.location.href = `${baseURL}/pages/cart.html`;
}

function loginPage() {
  window.location.href = `${baseURL}/pages/login.html`;
}

function signupPage() {
  window.location.href = `${baseURL}/pages/signup.html`;
}
function categoryPage(){
  window.location.href = `${baseURL}/pages/categories.html`;
}

// Signup page js starts here
document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.querySelector(".name-input");
  let emailInput = document.querySelector(".email-input");
  let passwordInput = document.querySelector(".pass-input");
  let signupBtn = document.querySelector(".signup-btn");
  let login = document.getElementById("login");
  console.log(login);
  login.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `${baseURL}/pages/login.html`;
  });
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("signup pressed");
    signup();
  });
  async function signup() {
    let newObj = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      isAdmin: false,
    };
    console.log(newObj);
    try {
      let res = await fetch("https://hack-sculptress-6789.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newObj),
      });
      let data = await res.json();
      console.log(data);
      localStorage.setItem(
        "localAccessToken",
        JSON.stringify(data.accessToken)
      );
      localStorage.setItem("userId", JSON.stringify(data.user.id));
      window.location.href = `${baseURL}/index.html`;
    } catch (error) {
      console.log(error);
    }
  }
});


