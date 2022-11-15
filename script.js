let carts = document.getElementsByClassName("addToCart")
console.log(carts);

let products=[
   { 
    name: 'Bread', 
    tag: 'Pantry', 
    price: 1.99, 
    salestax: false, 
    inCart: 0
},
   { 
    name: 'Dog Food', 
    tag: 'Pet', 
    price: 45, 
    salestax: true, 
    inCart: 0
},
   { 
    name: 'Ground Pork', 
    tag: 'Meat', 
    price: 14.99, 
    salestax: false, 
    inCart: 0
},
   { 
    name: 'Milk', 
    tag: 'Dairy', 
    price: 2.99, 
    salestax: false, 
    inCart: 0
},
{
    name: 'Eggs',
    tag: 'Protein',
    price: 2.59,
    salestax: false,
    inCart: 0
},
{
    name: 'Bananas',
    tag: 'Produce',
    price: 3.79,
    salestax: false,
    inCart: 0
},
{
    name: 'Sushi',
    tag: 'Protein',
    price: 8.99,
    salestax: false,
    inCart: 0
},
{
    name: 'Yogurt',
    tag: 'Dairy',
    price: 1.06,
    salestax: false,
    inCart: 0
},
{
    name: 'Tofu',
    tag:'Protein',
    price: 2.48,
    salestax: false,
    inCart: 0
},
{
    name: 'Carrots',
    tag: 'Produce',
    price: 0.79,
    salestax: false,
    inCart: 0
}

]

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => { 
    console.log('clicked');
    cartNumbers(products[i]);
    totalCost(products[i])
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
    console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }

}

onLoadCartNumbers();