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