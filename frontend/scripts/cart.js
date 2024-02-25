// Function to fetch data from JSON Server
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
  let totalPrice=0;
  function deletecourse(item)
  {
    
      fetch(`http://localhost:3000/cart/${item}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
              // You can add other headers if needed
          }
      })
      .then(response => {
          if (response.ok) {
              console.log("DELETE request successful!");
          } else {
              console.error("DELETE request failed:", response.status);
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  
  

  }
  
  // Function to generate HTML card for each item
  async function generateCartCards() {
    try {
      const cart = await fetchData();
      console.log(cart);
      const cartContainer = document.getElementById('cart-container');
      const cartItems=cart
      const cartlength=cartItems.length;


     

    
      cartItems.forEach(item => {
        // Create card element
        totalPrice+=item.CurrentPrice;
        const card = document.createElement('div');
       
        
  
        // Create card content
        const cardContent = `
          <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <img
                    src=${item.image}
                    class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                </div>
                <div class="ms-3">
                  <h5>${item.Title}</h5>
                  <p class="small mb-0">256GB, Navy Blue</p>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div style="width: 50px;">
                  <h5 class="fw-normal mb-0">${item.Rating}</h5>
                </div>
                <div style="width: 80px;">
                  <h5 class="mb-0">$${item.CurrentPrice}</h5>
                </div>
                <div><i id="delet" class="fas fa-trash-alt"></i></div>

               
              </div>
            </div>
          </div>
        </div>
        `;
        card.innerHTML = cardContent;
  
        // Append card to container
        cartContainer.appendChild(card);
        cartContainer.querySelector("#delet").addEventListener('click',function ()
        {
          deletecourse(item.id);
        })
      });
      const coursecount=document.getElementById("cartTotal");
      coursecount.innerHTML=cartlength;
      const noofcourse=document.getElementById("Daya-item");
      noofcourse.innerHTML=`You have ${cartlength} items in your cart`;
      const totalBill=document.getElementById("totalBill");
      totalBill.innerHTML=totalPrice;

    
     
     

    } catch (error) {
      console.error('Error generating cart cards:', error);
    }
  }
  
  // Call the function to generate cards when the page loads
  document.addEventListener('DOMContentLoaded', generateCartCards);
  
 
  
  
  // Example function to handle adding item to cart
  
  