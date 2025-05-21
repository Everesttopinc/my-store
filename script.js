const products = [
  { id: 1, name: "Product A", price: 10.0 },
  { id: 2, name: "Product B", price: 15.0 },
  { id: 3, name: "Product C", price: 20.0 },
];

let cart = [];

function loadProducts() {
  const container = document.getElementById("product-list");
  products.forEach((p) => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(el);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";

  cartCount.textContent = cart.length;
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    li.innerHTML += ` <button onclick="removeFromCart(${index})">x</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartEl = document.getElementById("cart");
  cartEl.style.display = cartEl.style.display === "block" ? "none" : "block";
}

function checkout() {
  alert("Thank you for your order!");
  cart = [];
  updateCart();
  toggleCart();
}

window.onload = loadProducts;
