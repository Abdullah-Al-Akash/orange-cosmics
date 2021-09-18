const productContainer = document.getElementById('product-container');

// Load Default Display Data:
fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then(res => res.json())
        .then(data => displayProduct(data))

// Display Product Data:
const displayProduct = (products) => {
        productContainer.textContent = '';
        console.log(products[0]);
        products.forEach((product) => {
                const { brand, name, price, image_link } = product;
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                                <div class="col">
                                <div class="h-100 product-card">
                                        <div class="product-image">
                                                <img src="${image_link}" class="img-fluid" alt="...">
                                        </div>
                                        <div class="card-body">
                                                <div class="product-name overflow-hidden">
                                                        <h5 class="card-title">${name}</h5>
                                                </div>
                                                <p class="m-0 p-0">Brand Name: ${brand}</p>
                                                <h3 class="product-price">$${price}</h3>
                                                <button type="button" class="btn btn-danger fw-bold" id="add-cart">Add
                                                        Cart</button>
                                        </div>
                                        <div class="">
                                                <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>

                                </div>
                        </div>
                `;
                productContainer.appendChild(productDiv);
        })
}

// Loaded Item Products By Menu Click:
const singleItem = (url) => {
        // console.log(url)
        fetch(url)
                .then(res => res.json())
                .then(data => displaySingleItem(data))
}

const displaySingleItem = (products) => {
        productContainer.textContent = '';
        console.log(products[0]);
        products.forEach((product) => {
                const { brand, name, price, image_link } = product;
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                                <div class="col">
                                <div class="h-100 product-card">
                                        <div class="product-image">
                                                <img src="${image_link}" class="img-fluid" alt="...">
                                        </div>
                                        <div class="card-body">
                                                <div class="product-name overflow-hidden">
                                                        <h5 class="card-title">${name}</h5>
                                                </div>
                                                <p class="m-0 p-0">Brand Name: ${brand}</p>
                                                <h3 class="product-price">$${price ? price : 20.99}</h3>
                                                <button type="button" class="btn btn-danger fw-bold" id="add-cart">Add
                                                        Cart</button>
                                        </div>
                                        <div class="">
                                                <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>

                                </div>
                        </div>
                `;
                productContainer.appendChild(productDiv);
        })
}