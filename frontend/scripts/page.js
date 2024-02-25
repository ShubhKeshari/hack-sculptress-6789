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

// Login Page JS starts here

document.addEventListener("DOMContentLoaded", function () {
  let signup = document.getElementById("signup");
  let loginForm = document.getElementById("login-form");
  let loginEmail = document.getElementById("login-email");
  let loginPassword = document.getElementById("login-password");
  let loginBtn = document.getElementById("login-btn");
  console.log(loginBtn);
  console.log(signup);
  signup.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = `${baseURL}/pages/signup.html`;
  });

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("yes");
    login();
  });

  async function login() {
    try {
      let credentials = {
        email: loginEmail.value,
        password: loginPassword.value,
      };
      console.log(credentials);
      let response = await fetch(
        "https://hack-sculptress-6789.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      let data = await response.json();
      localStorage.setItem(
        "localAccessToken",
        JSON.stringify(data.accessToken)
      );
      localStorage.setItem("userId", JSON.stringify(data.user.id));
      console.log(data);
      fetchData();
    } catch (error) {
      alert("Email or password is incorrect");
      console.log("This is an error", error);
    }
  }

  async function fetchData() {
    try {
      let token = JSON.parse(localStorage.getItem("localAccessToken"));
      let userId = +JSON.parse(localStorage.getItem("userId"));
      let response = await fetch(
        `https://hack-sculptress-6789.onrender.com/users?id=${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      console.log(data);
      alert("Successfully logged in");
      window.location.href = `${baseURL}/index.html`;
    } catch (error) {
      console.log(error);
    }
  }
});

// Login Page JS Ends here

