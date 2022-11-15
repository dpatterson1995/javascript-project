let carts = document.getElementsByClassName("addToCart")
console.log(carts);

//maybe have an empty array to signify their cart?
let userCart = [];

let products=[
   { 
    name: 'Bread', 
    tag: "Pantry", 
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
    cartNumbers();
})
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent= productNumbers;
    }

}

//WOW LOCAL STORAGE?! Neat.
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent =  productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    
}

onLoadCartNumbers();

 //EXAMPLE CODE
//Do you follow my logic?
function addToCart(event){
   //dataset.id gets that data-id from the html tag!
   let id = event.target.dataset.id;
   
   //get all the quantities
   let quantityInputs = document.querySelector('.cart-quantity-input');
   
   //find the one with the matching id
   let currentItemQuantity = quantityInputs.find((x) => x.dataset.id === id);
   
   let quantity = currentItemQuantity.value;
   
   let item = products.find((x) => x.id === id);
   
   for(let i = 0; i < quantity; i++){
      userCart.push(item);
   }
   
}
