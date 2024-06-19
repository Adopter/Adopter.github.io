// Sample product data
const products = [
    { name: 'Product 1', description: 'This is the first product.' },
    { name: 'Product 2', description: 'This is the second product.' },
    { name: 'Product 3', description: 'This is the third product.' },
  ];
  
  // Get the product list element
  const productList = document.getElementById('product-list');
  
  // Loop through the products and create list items
  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - ${product.description}`;
    productList.appendChild(listItem);
  });