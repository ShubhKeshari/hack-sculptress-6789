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
