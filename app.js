// Load Default Display Data:
fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then(res => res.json())
        .then(data => console.log(data))