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

  // Build HTML structure
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
          <img src="${p.image}" alt="${p.name}" />
          <h4>${p.name}</h4>
          <p>$${p.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        `;
        productGrid.appendChild(el);
      });

      container.appendChild(productGrid);
    }
  }
}

// Load the products on page load
loadProducts();
