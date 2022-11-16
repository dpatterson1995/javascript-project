// // let removeCartItemsButtons = document.getElementsByClassName("btn-danger");

// // for (let i = 0; i < removeCartItemsButtons.length; i++) {
// //   let button = removeCartItemsButtons[i];
// //   button.addEventListener("click", removeCartItem);
// // }

// // let quantityInputs = document.getElementsByClassName("cart-quantity-input");
// // for (let i = 0; i < quantityInputs.length; i++) {
// //   let input = quantityInputs[i];
// //   input.addEventListener("change", quantityChanged);
// // }

// // function quantityChanged(event) {
// //   let input = event.target;
// //   if (isNaN(input.value) || input.value < +0) {
// //     input.value = 1;
// //   }
// //   updateCartTotal();
// // }

// // function updateCartTotal() {
// //   let cartItemContainer = document.getElementsByClassName("cart-items")[i];
// //   let cartRows = cartItemContainer.getElementsByClassName("cart-row");
// //   let total = 0;
// //   for (let i = 0; i < cartRows.length; i++) {
// //     let cartRow = cartRows[i];


// //     let priceElement = cartRow.getElementsByClassName("cart-price")[i];
// //     let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[i];


// //     let price = parseFloat(priceElement.innerText.replace("$", ""));

// //     let quantity = quantityElement.value;
// //     total = total + price * quantity;
// //   }
// //   total = Math.round(total * 100) / 100;
// //   document.getElementsByClassName("cart-total-price")[0].innerText =
// //     "$" + total;
// // }

// let cashButton = document.getElementById('cashform');
// let creditButton = document.getElementById('creditform');

// let cashPayment = document.getElementById('cash-info');
// let creditPayment = document.getElementById('credit-info');

// cashButton.addEventListener('click', clickCashButton);

// function clickCashButton(){
//   cashPayment.style.display = "block";
//   creditPayment.style.display = "none";
// }

// creditButton.addEventListener('click', clickCreditButton);

// function clickCreditButton(){
//   creditPayment.style.display = "block";
//   cashPayment.style.display = "none";
// }

// //cash button
// let cash = document.querySelector("#cash");
// //credit button
// let credit = document.querySelector("#credit");
// //cash form
// let cashShow = document.querySelector("#cashForm");
// //credit form
// let creditShow = document.querySelector("#creditForm");
// //purchase button
// let buy = document.querySelector("#buy");

// buy.addEventListener("click", purchase);

// buy.addEventListener("click", purchase2);

// cash.addEventListener("click", cashButton);

// credit.addEventListener("click", creditButton);

// cashShow.addEventListener("click", cashButton);

// creditShow.addEventListener("click", creditButton);

// // function cashButton(event) {
// //   event.preventDefault();
// //   cashShow.classList.remove("form-check");
// //   cashShow.appendChild;

// //   creditShow.classList.add("form-check");
// //   creditShow.appendChild;
// // }

// // function creditButton(event) {
// //   event.preventDefault();
// //   creditShow.classList.remove("form-check");
// //   creditShow.appendChild;

// //   cashShow.classList.add("form-check");
// //   cashShow.appendChild;
// // }

// // function purchase(event) {
// //   event.preventDefault();
// //   let remove = document.getElementById("cash");
// //   remove.classList.remove("hide");
// // }

// // function purchase2(event) {
// //   event.preventDefault();
// //   let remove = document.getElementById("credit");
// //   remove.classList.remove("hide");
// // }
// ////Start -- Data loaded into Shopping Cart///


// function displayCartItems(){
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
//   let productContainer = document.querySelector("#shopping-cart-card2");
//   console.log(cartItems)
//   let cartCost = localStorage.getItem('totalCost');
//   let roundedCartCost = Math.round(100*cartCost)/100;
//   if ( cartItems && productContainer){
//       productContainer.innerHTML = '';
//       Object.values(cartItems).map(item => {
//        productContainer.innerHTML += `
//        <div class="product">
      
//        <img src="images/${item.tag}">
//        <span>${item.name}</span>
//        </div>
//        <div class="quantity">${item.inCart}</div>  
//        <div class="total">$${item.inCart * item.price}</div>
//        `   
//       });

//       productContainer.innerHTML += `
//       <div class="basketTotalContainer">
//       <h4 class="basketTotalTitle">
//       Basket Total
//       </h4>
//       <h4 class="basketTotal">
//       $${roundedCartCost}
//       `

//   }

// }

// displayCartItems()


// ////End -- Data loaded into Shopping Cart///