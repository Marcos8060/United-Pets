const items = document.getElementById('products');

// loop through the array
products.forEach((product)=>{
    items.innerHTML += `
    <div class="card" style="width: 20rem;margin: 20px">
      <img src=${product.imgSrc} class="card-img-top" alt="...">
       <div class="card-body">
        <div class="row">
          <div class="col">
            <h6>Name: ${product.name}</h6>
            <p>Gender: ${product.gender}</p>
            <p>Age: ${product.age}</p>
          </div>
          <div class="col">
            <p>Price: $${product.price}</p>
            <p>Breed: ${product.breed}</p>
          </div>
          <h6 class="font-weight-bold">Condition: ${product.condition}</h6>
        </div>
       </div>
    </div>
    `
})