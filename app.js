const productContainer = document.getElementById('product-container');

// Load Default Display Data:
fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then(res => res.json())
        .then(data => displayProduct(data))

// Display Product Data:
const displayProduct = (products) => {
        // productContainer.textContent = '';
        console.log(products[0]);
        products.forEach((product) => {
                const { brand, name, price, image_link, product_colors } = product;
                // Product Color Code:
                const colorName = product_colors.splice(0, 3);
                const firstColor = colorName[0]?.hex_value;
                const secondColor = colorName[1]?.hex_value;
                const thirdColor = colorName[2]?.hex_value;

                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                                <div class="col">
                                <div class="h-100 product-card">
                                        <div class="product-image">
                                        <img src="${image_link}" class="img-fluid pt-3" alt="...">
                                        </div>
                                        <div class="card-body">
                                                <div class="product-name overflow-hidden">
                                                        <h5 class="card-title">${name}</h5>
                                                </div>
                                                <p class="m-0 p-0">Brand Name: ${brand}</p>
                                                
                                                <div class="d-flex justify-content-between mt-3">
                                                        <h3 class="product-price">$${price ? price : 20.99}</h3>
                                                        <button onclick="addToCartProduct('${product.price ? product.price : 10}')" type="button" class="btn btn-danger fw-bold" id="add-cart"><i class="fas fa-cart-plus"></i> Add
                                                                Cart</button>
                                                </div>
                                        </div>
                                        <div class="text-center d-flex justify-content-center pb-3" id="product-color-container">
                                                <p class="product-color" style="background-color: ${firstColor ? firstColor : 'hotpink'}"></p>
                                                <p class="product-color" style="background-color: ${secondColor}"></p>
                                                <p class="product-color" style="background-color: ${thirdColor}"></p>
                                        </div>

                                </div>
                        </div>
                `;
                productContainer.appendChild(productDiv);
        })
}

// Loaded Item Products By Menu Click:
const singleItem = (url, itemName) => {
        // console.log(url)
        fetch(url)
                .then(res => res.json())
                .then(data => displaySingleItem(data, itemName))
}

const displaySingleItem = (products, itemName) => {

        const readyItems = document.getElementById('ready-items');
        readyItems.innerHTML = `<span class="orange">${itemName}</span>'s are ready in below...`
        productContainer.textContent = '';
        // console.log(products[0].product_colors.length);
        products.forEach((product) => {
                // Destructure Value
                const { brand, name, price, image_link, product_colors } = product;
                // console.log(product_colors.splice(0, 3));//That is Array
                const colorName = product_colors.splice(0, 3);
                const firstColor = colorName[0]?.hex_value;
                const secondColor = colorName[1]?.hex_value;
                const thirdColor = colorName[2]?.hex_value;

                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                                <div class="col">
                                <div class="h-100 product-card">
                                        <div class="product-image">
                                                <img src="${image_link}" class="img-fluid pt-3" alt="...">
                                        </div>
                                        <div class="card-body">
                                                <div class="product-name overflow-hidden">
                                                        <h5 class="card-title">${name}</h5>
                                                </div>
                                                <p class="m-0 p-0">Brand Name: ${brand}</p>
                                                <div class="d-flex justify-content-between mt-3">
                                                        <h3 class="product-price">$${price ? price : 20.99}</h3>
                                                        <button onclick="addToCartProduct('${price}')" type="button" class="btn btn-danger fw-bold" id="add-cart">
                                                                <i class="fas fa-cart-plus"></i> Add
                                                                Cart
                                                        </button>
                                                </div>
                                        </div>
                                        <div class="text-center d-flex justify-content-center pb-3" id="product-color-container">
                                                <p class="product-color" style="background-color: ${firstColor ? firstColor : 'hotpink'}"></p>
                                                <p class="product-color" style="background-color: ${secondColor}"></p>
                                                <p class="product-color" style="background-color: ${thirdColor}"></p>
                                        </div>
                                </div>
                        </div>
                `;
                productContainer.appendChild(productDiv);
        })
}

// My Cart: 
// const myCart = () => {
//         const mainPart = document.getElementById('main-part');
//         mainPart.textContent = '';
// }

let totalPrice = 0;
let totalProductCount = 0;
const productCountContainer = document.getElementById('product-count');
// Click Add to Cart and Pass Value:
const addToCartProduct = (price) => {
        // console.log(price);
        totalPrice = totalPrice + (+price);
        totalProductCount = totalProductCount + 1;
        productCountContainer.innerText = totalProductCount;
        localStorage.setItem('totalCost', totalPrice);
}