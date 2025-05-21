const products = [
  const products = [
  {
    id: 1,
    name: "Scorch 61754-105",
    price: 89.99,
    image: "https://via.placeholder.com/150?text=Scorch",
    category: "Lighters",
    subcategory: "Scorch"
  },
  {
    id: 2,
    name: "Boom 1027",
    price: 24.99,
    image: "https://via.placeholder.com/150?text=Boom",
    category: "Lighters",
    subcategory: "Boom"
  },
  {
    id: 3,
    name: "Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/150?text=Headphones",
    category: "Electronics",
    subcategory: "Audio"
  },
  {
    id: 4,
    name: "Phone Case",
    price: 9.99,
    image: "https://via.placeholder.com/150?text=Phone+Case",
    category: "Electronics",
    subcategory: "Accessories"
  },
  {
    id: 5,
    name: "Notebook",
    price: 3.99,
    image: "https://via.placeholder.com/150?text=Notebook",
    category: "Stationery",
    subcategory: "Notebooks"
  },
  {
    id: 6,
    name: "Pen Set",
    price: 2.49,
    image: "https://via.placeholder.com/150?text=Pen+Set",
    category: "Stationery",
    subcategory: "Pens"
  }
];

let cart = [];

function loadProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const categories = {};

  // Group products by category and subcategory
  products.forEach(p => {
    if (!categories[p.category]) {
      categories[p.category] = {};
    }
    if (!categories[p.category][p.subcategory]) {
      categories[p.category][p.subcategory] = [];
    }
    categories[p.category][p.subcategory].push(p);
  });

  // Build HTML sections
  for (const category in categories) {
    const catHeader = document.createElement("h2");
    catHeader.textContent = category;
    container.appendChild(catHeader);

    for (const sub in categories[category]) {
      const subHeader = document.createElement("h3");
      subHeader.textContent = sub;
      container.appendChild(subHeader);

      const productGrid = document.createElement("div");
      productGrid.className = "products";

      categories[category][sub].forEach(p => {
        const el = document.createElement("div");
        el.className = "product";
        el.innerHTML = `
          <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:8px;" />
          <h4>${p.name}</h4>
          <p>$${p.price.toFixed(2)}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        productGrid.appendChild(el);
      });

      container.appendChild(productGrid);
    }
  }
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
