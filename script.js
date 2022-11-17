let carts = document.getElementsByClassName("addToCart");
console.log(carts);

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log("clicked");
    cartNumbers(products[i]);
    totalCost(products[i]);
    displayCart();
  });
}

// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers) {
//         document.querySelector('.cart span').textContent= productNumbers;
//     }

// }

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  console.log("My cartItems are (beofre parse)", cartItems);

  cartItems = JSON.parse(cartItems);
  console.log("My cartItems are", cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  console.log("AAA The product price is", product.price);
  let cartCost = localStorage.getItem("totalCost");

  console.log("AAA My cartCost is", cartCost);
  console.log(typeof cartCost);
  if (cartCost != null) {
    console.log("AAA 1");
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    console.log("AAA 2");
    localStorage.setItem("totalCost", product.price);
  }

  cartCost = localStorage.getItem("totalCost");

  console.log("AAA2 My cartCost is", cartCost);
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector("#shopping-cart-card");
  console.log(cartItems);
  let cartCost = localStorage.getItem("totalCost");
  let roundedCartCost = Math.round(100 * cartCost) / 100;
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
         <div class="product">
        
         <img src="images/${item.tag}">
         <span>${item.name}</span>
         </div>
         <div class="quantity">${item.inCart}</div>  
         <div class="total">$${item.inCart * item.price}</div>
         `;
    });

    productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        $${roundedCartCost}
        `;
  }
}

// displayCartItems()

let cashButton = document.getElementById("cash");
let creditButton = document.getElementById("credit");

cashButton.style.display = "none";
creditButton.style.display = "none";

let purchaseButton = document.getElementById("purchase-btn");
purchaseButton.addEventListener("click", showPaymentOptions);
function showPaymentOptions() {
  cashButton.style.display = "block";
  creditButton.style.display = "block";
}

let cashPayment = document.getElementById("cash-info");
let creditPayment = document.getElementById("credit-info");

cashPayment.style.display = "none";
creditPayment.style.display = "none";

cashButton.addEventListener("click", clickCashButton);

function clickCashButton() {
  cashPayment.style.display = "block";
  creditPayment.style.display = "none";
}

creditButton.addEventListener("click", clickCreditButton);

function clickCreditButton() {
  creditPayment.style.display = "block";
  cashPayment.style.display = "none";
}
let cashSubmit2 = document.querySelector("#cashSubmit");
cashSubmit2.addEventListener("click", cashSubmit);
let total = 20;
function cashSubmit() {
  let change = 0;
  let receiptTotalNumber = total;
  if (parseInt(cashInput.value) < total) {
    alert("Insufficient Funds.");
  } else if (parseInt(cashInput.value) === receiptTotalNumber) {
    alert("Your order has been Confirmed!");
  } else if (parseInt(cashInput.value) > total) {
    change = parseInt(cashInput.value) - total;
    console.log(change);
    alert("Your Order Has Been Confirmed! You've Got Change!: $" + change);
  }
}
