// let removeCartItemsButtons = document.getElementsByClassName("btn-danger");

// for (let i = 0; i < removeCartItemsButtons.length; i++) {
//   let button = removeCartItemsButtons[i];
//   button.addEventListener("click", removeCartItem); 
// }

let quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (let i = 0; i < quantityInputs.length; i++){
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}

// function removeCartItem(event){
//     let buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal();
//   }

  function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <+ 0){
        input.value = 1;
    }
    updateCartTotal();
  }

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];

    let price = parseFloat(priceElement.innerText.replace("$", ""));

    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}