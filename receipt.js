let date = new Date().toDateString();
console.log(date);
let todaysDateContainer = document.getElementById("todaysDate");
console.log(todaysDateContainer);
todaysDateContainer.innerText = date;
console.log(todaysDateContainer);

let roundedCartCost = 0;

function displayCartItems3() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".invoice-items");
  console.log(cartItems);
  let cartCost = localStorage.getItem("totalCost");
  console.log("cartCost " + cartCost);
  roundedCartCost = Math.round(100 * cartCost) / 100;
  console.log("roundedCartCost " + roundedCartCost);
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
         <table><tbody><tr>
                <td>${item.name}</td>
                <td>${item.inCart}</td>
                <td id="itemCost$" class="alignright">$${
                  item.inCart * item.price
                }</td>
                <td id="salesTax" class="alignright">${item.salesTax}</td>
                <td id="itemCostWTax" class="alignright">${
                  !item.salesTax
                    ? item.inCart * item.price
                    : 1.06 * item.inCart * item.price
                }</td>
            </tr>
        </tbody></table>
         `;
    });

    productContainer.innerHTML += `
        <div class="alignright" id="basketTotalContainer">
        <h4 class="alignright" id="basketTotalTitle">
       Sub Total
        </h4>
        <h4 class="basketTotal">
        $${roundedCartCost}
        `;
  }
}
function displaySalesTaxTotal() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let salesTaxTotal = 0;
  let salesTaxObject = document.querySelectorAll("#itemCostWTax");
  let productContainer2 = document.querySelector(".invoice-items");
  console.log("productContainer2: " + productContainer2);
  console.log("salesTaxObject: " + salesTaxObject);
  // for (let i=0; i< salesTaxObject.length; i++){
  //     console.log("made it to the for loop")
  //     console.log(salesTaxObject[i].innerHTML);
  //     let salesTaxTotal2 = salesTaxTotal + salesTaxObject[i].innerHTML;
  // //     let subString = salesTaxTotal2.substring(2);
  // //     console.log(subString);
  // salesTaxTotal += parseFloat(salesTaxTotal2);
  // console.log(salesTaxTotal);
  // };
  for (let product of Object.values(cartItems)) {
    if (product.salesTax) {
      salesTaxTotal += product.inCart * product.price * 0.06;
    }
  }
  let grandTotal = salesTaxTotal + roundedCartCost;
  console.log(typeof salesTaxTotal);
  productContainer2.innerHTML += `
    <div class="alignright" id="basketTotalContainer">
    <h4 class="alignright" id="basketTotalTitle">
    
   Sales Tax
   </h4>
   <h4 class="basketTotal">
    $${salesTaxTotal.toFixed(2)} 
    <h4 class="alignright" id="basketTotalTitle">
    Grand Total
    </h4>
    <h4 class="basketTotal">
    $${grandTotal.toFixed(2)}
    `;
}

displayCartItems3();
displaySalesTaxTotal();

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
// let cartItems = localStorage.getItem("productsInCart");
// cartItems = JSON.parse(cartItems);
// let productContainer = document.querySelector(".invoice-items");
// console.log(cartItems)
// // }
// function totalCost(product){
//     console.log("AAA The product price is", product.price);
//     let cartCost = localStorage.getItem('totalCost');

//     console.log("AAA My cartCost is", cartCost);
//     console.log(typeof cartCost);
//     if(cartCost != null) {
//         console.log('AAA 1')
//         cartCost = parseFloat(cartCost);
//         localStorage.setItem("totalCost", cartCost + product.price);
//     }else{
//         console.log('AAA 2')
//         localStorage.setItem("totalCost", product.price);
//     }

//     cartCost = localStorage.getItem('totalCost');

//     console.log("AAA2 My cartCost is", cartCost);
// function setId(product){
//     console.log("AAA The product price is", product.id);
//     let cartIds = localStorage.getItem('setId');
//     console.log("AAA My cartCost is", cartIds);
//     console.log(typeof cartIds);
//     if(cartIds != null) {
//         console.log('AAA 1')
//         cartIds = parseFloat(cartIds);
//         localStorage.setItem("setId", cartIds);
//     }else{
//         console.log('AAA 2')
//         localStorage.setItem("setId", cartIds);
//     }

//     cartIds = localStorage.getItem('setId');}

//     setId(products)

// function setIds(product) {
//     let cartIds= localStorage.getItem('productIds');
//     console.log("My cartIds are (beofre parse)", cartIds);

//     cartIds= JSON.parse(cartIds);
//     console.log("My cartIds are", cartIds);
//     if(cartIds != null){
//         if(cartIds[product.id] == undefined) {
//             cartIds = {
//                 ...cartIds,
//                 [product.id]: product
//             }
//         }
//         cartIds[product.id].inCart += 1;
//     } else{
//     product.inCart = 1;
//     cartIds = {
//             [product.id]: product
//         }
//     }}

// setIds(product)

// function totalCost(product){
//     console.log("AAA The product price is", product.price);
//     let cartCost = localStorage.getItem('totalCost');

//     console.log("AAA My cartCost is", cartCost);
//     console.log(typeof cartCost);
//     if(cartCost != null) {
//         console.log('AAA 1')
//         cartCost = parseFloat(cartCost);
//         localStorage.setItem("totalCost", cartCost + product.price);
//     }else{
//         console.log('AAA 2')
//         localStorage.setItem("totalCost", product.price);
//     }

//     cartCost = localStorage.getItem('totalCost');

//     console.log("AAA2 My cartCost is", cartCost);

//
