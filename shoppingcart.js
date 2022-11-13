
let quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (let i = 0; i < quantityInputs.length; i++){
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}

let addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener('click', addToCartClicked)
}


  function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <+ 0){
        input.value = 1;
    }
    updateCartTotal();
  }

  // not working correctly yet
function addToCartClicked(event){
  let button = event.target;
  let product = document.getElementsByClassName('product-category')[0].innerText;
  let itemName = document.getElementsByClassName('card-title')[0].innerTexxt;
  let itemPrice = document.getElementsByClassName('item-price')[0].innerText;
 
  addItemToCart(product, itemName, itemPrice);
}

function addItemToCart(product, itemName, itemPrice){
  let cartRow = document.createElement('div');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  let cartRowContents = product + itemName + itemPrice;
  cartRow.innerText = cartRowContents;
  cartItems.append(cartRow)
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
