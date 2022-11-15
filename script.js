let carts = document.getElementsByClassName("addToCart")
console.log(carts);

let products=[
   { 
    name: 'Bread', 
    category: 'Pantry', 
    price: 1.99, 
    tag:'Bread.jpg',
    salesTax: false, 
    inCart: 0
},
   { 
    name: 'Dog Food', 
    category: 'Pet', 
    price: 45,
    tag:'DOg.jpg', 
    salesTax: true, 
    inCart: 0
},
   { 
    name: 'Ground Pork', 
    category: 'Meat', 
    price: 14.99,
    tag:'Beeef.jpg', 
    salesTax: false, 
    inCart: 0
},
   { 
    name: 'Milk', 
    category: 'Dairy', 
    price: 2.99, 
    tag:'ilk.jpg',
    salesTax: false, 
    inCart: 0
},
{
    name: 'Eggs',
    category: 'Protein',
    price: 2.59,
    tag:'Eggs.jpg',
    salesTax: false,
    inCart: 0
},
{
    name: 'Bananas',
    category: 'Produce',
    price: 3.79,
    tag: 'Bana.jpg',
    salesTax: false,
    inCart: 0
},
{
    name: 'Sushi',
    category: 'Protein',
    price: 8.99,
    tag:'Sush.jpg',
    salesTax: false,
    inCart: 0
},
{
    name: 'Yogurt',
    category: 'Dairy',
    price: 1.06,
    tag:'Yop.webp',
    salesTax: false,
    inCart: 0
},
{
    name: 'Tofu',
    category:'Protein',
    price: 2.48,
    tag:'tofu_image.png',
    salesTax: false,
    inCart: 0
},
{
    name: 'Carrots',
    category: 'Produce',
    price: 0.79,
    tag:'carrots_image.png',
    salesTax: false,
    inCart: 0
}

]

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => { 
    console.log('clicked');
    cartNumbers(products[i]);
    totalCost(products[i]);
    displayCart();
})
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent= productNumbers;
    }

}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent =  productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
let cartItems= localStorage.getItem('productsInCart');
console.log("My cartItems are (beofre parse)", cartItems);

cartItems= JSON.parse(cartItems);
console.log("My cartItems are", cartItems);
if(cartItems != null){
    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
    cartItems[product.tag].inCart += 1;
} else{
product.inCart = 1;
cartItems = {
        [product.tag]: product
    }
}
    
localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    console.log("AAA The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("AAA My cartCost is", cartCost);
    console.log(typeof cartCost);
    if(cartCost != null) {
        console.log('AAA 1')
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        console.log('AAA 2')
        localStorage.setItem("totalCost", product.price);
    }

    cartCost = localStorage.getItem('totalCost');
    
    console.log("AAA2 My cartCost is", cartCost);

}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("#shopping-cart-card");
    console.log(cartItems)
    let cartCost = localStorage.getItem('totalCost');
    if ( cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
         productContainer.innerHTML += `
         <div class="product">
        
         <img src="images/${item.tag}">
         <span>${item.name}</span>
         </div>
    
         <div class="total">$${item.inCart * item.price}</div>
         `   
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        $${cartCost}
        </h4>
        `

    }

}







onLoadCartNumbers();
//  <img class="closeIcon" src="images/cancel_1.png">
    //  <div class="price">$${item.price}</div>
        //  <div class="quantity"><img class="leftArrow" src="images/leftarrow.jpeg"><span>${item.inCart}</span><img class="rightArrow" src="images/rightarrow.jpeg"></div>