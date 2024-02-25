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
async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/cart');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  async function totalpayment()
  {
    const cart=await fetchData();
    let total=0;
    const dataarray=cart;
    dataarray.forEach(item=>
        {
            total+=item.CurrentPrice;
        

        });
        const totalo=document.getElementById("payment");
        totalo.innerHTML=total;
        const totaloo=document.getElementById("paymento");
        totaloo.innerHTML=total;
        

  }

  

  document.addEventListener('DOMContentLoaded', totalpayment);