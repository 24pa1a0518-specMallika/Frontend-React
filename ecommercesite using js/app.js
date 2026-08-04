let cartCount = 0;
let wishlistCount = 0;
let totalPrice = 0;

const cart = document.getElementById("cartCount");
const wish = document.getElementById("wishlistCount");
const total = document.getElementById("totalPrice");

// ---------------- CART ----------------

document.querySelectorAll(".cartBtn").forEach(button=>{

button.addEventListener("click",function(){

let price = Number(this.dataset.price);

cartCount++;
totalPrice += price;

cart.innerText = cartCount;
total.innerText = totalPrice;

});

});

// ---------------- WISHLIST ----------------

document.querySelectorAll(".wishBtn").forEach(button=>{

button.addEventListener("click",function(){

if(this.classList.contains("active")){

this.classList.remove("active");
wishlistCount--;

}
else{

this.classList.add("active");
wishlistCount++;

}

wish.innerText = wishlistCount;

});

});

// ---------------- DELETE PRODUCT ----------------

document.querySelectorAll(".deleteBtn").forEach(button=>{

button.addEventListener("click",function(){

this.closest(".product").remove();

});

});

// ---------------- VIEW IMAGE ----------------

const modalImage=document.getElementById("modalImage");

document.querySelectorAll(".viewBtn").forEach(button=>{

button.addEventListener("click",function(){

modalImage.src=this.dataset.img;

const modal=new bootstrap.Modal(
document.getElementById("imageModal")
);

modal.show();

});

});

// ---------------- SEARCH ----------------

const search=document.getElementById("searchBox");

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

document.querySelectorAll(".product").forEach(product=>{

let name=product.querySelector(".product-name").innerText.toLowerCase();

if(name.includes(value))
{
product.style.display="block";
}
else
{
product.style.display="none";
}

});

});