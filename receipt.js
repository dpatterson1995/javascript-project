function displayCartItems3(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".invoice-items");
    console.log(cartItems)
    let cartCost = localStorage.getItem('totalCost');
    let roundedCartCost = Math.round(100*cartCost)/100;
    if ( cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
         productContainer.innerHTML += `
         <table><tbody><tr>
                                                            <td>${item.name}</td>
                                                            <td>${item.inCart}</td>
                                                            <td class="alignright">$${item.inCart * item.price}</td>
                                                        </tr>
                                                    </tbody></table>
         `   
        });
  
        productContainer.innerHTML += `
        <div class="alignright" id="basketTotalContainer">
        <h4 class="alignright" id="basketTotalTitle">
       Total
        </h4>
        <h4 class="basketTotal">
        $${roundedCartCost}
        `
  
    }
  
  }
  
  displayCartItems3()

  let date = new Date();
  console.log(date);
  let todaysDateContainer = document.querySelector(".todaysDate");
  console.log(todaysDateContainer);
  todaysDateContainer.append(date);


//   const newDate = todaysDateContainer.classList;
//   newDate.add(date);
//   date.textContent = newDate;
 



//   <div class="product">
        
//   <img src="images/${item.tag}">
//   <span>${item.name}</span>
//   </div>
// <div class="alignleft" id="quantity">${item.inCart}</div>  
// <div class="alignright" id="total">$${item.inCart * item.price}</div> //


// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers) {
//         document.querySelector('.cart span').textContent= productNumbers;
//     }

// }

