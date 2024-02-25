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
function categoryPage() {
  window.location.href = `${baseURL}/pages/categories.html`;
}

// Function to fetch data from JSON Server
async function fetchData() {
  try {
    const response = await fetch(
      "https://hack-sculptress-6789.onrender.com/courses"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
let totalPrice = 0;

function post(item) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };

  // Send the POST request
  fetch(`https://hack-sculptress-6789.onrender.com/cart`, options)
    .then((response) => {
      if (response.ok) {
        console.log("Request successful!");
      } else {
        console.error("Request failed with status:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle the error appropriately
    });
}

// Function to generate HTML card for each item
async function generateCourses() {
  try {
    const cart = await fetchData();
    const cartContainer = document.getElementById("Courses");
    const cartItems = cart;
    const cartlength = cartItems.length;

    console.log("check course", cartItems);

    cartItems.forEach((item) => {
      // Create card element
      totalPrice += item.CurrentPrice;
      const card = document.createElement("div");
      card.classList.add("col-sm-6");
      card.classList.add("col-md-4");
      card.classList.add("col-lg-3");

      // Create card content
      const cardContent = ` <div class="card">
           
        <img src=${item.image}
          class="card-img-top" alt="Laptop" />
        <div class="card-body">
        

          <div class="d-flex justify-content-between mb-3">
            <h5 class="mb-0">${item.Title}</h5>
            <h5 class="text-dark mb-0">$${item.CurrentPrice}</h5>
          </div>
          <button type="button"   class="btn btn-primary addToCartBtn">Add To Cart</button>

         
        </div>
      </div>`;
      card.innerHTML = cardContent;

      // Append card to container
      cartContainer.appendChild(card);

      card
        .querySelector(".addToCartBtn")
        .addEventListener("click", function () {
          // Call the post() function with the item parameter
          //alert("Item added to cart")
          post(item);
        });
    });
    //   const coursecount=document.getElementById("cartTotal");
    //   coursecount.innerHTML=cartlength;
    //   const noofcourse=document.getElementById("Daya-item");
    //   noofcourse.innerHTML=`You have ${cartlength} items in your cart`;
    //   const totalBill=document.getElementById("totalBill");
    //   totalBill.innerHTML=totalPrice;
  } catch (error) {
    console.error("Error generating cart cards:", error);
  }
}

// Call the function to generate cards when the page loads
document.addEventListener("DOMContentLoaded", generateCourses);

// Example function to handle adding item to cart
