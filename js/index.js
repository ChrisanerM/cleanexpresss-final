//  Local storage
localStorage.setItem(
  "services",
  JSON.stringify([
    {
      id: 1,
      name: "Ordinary Sneaker Cleaning",
      cost: "R250.00",
      image: "https://i.postimg.cc/T3kG1p5v/allclean.webp",
    },
    {
      id: 2,
      name: "Suede Sneaker Cleaning",
      cost: "R300.00",
      image: "https://i.postimg.cc/jts1Sk5X/suede.webp",
    },
    {
      id: 3,
      name: "White Sneaker Cleaning",
      cost: "R350.00",
      image: "https://i.postimg.cc/Kc12tNLH/whitec-jpg.jpg",
    },
    {
      id: 4,
      name: "Home Kit Product",
      cost: "R400.00",
      image: "https://i.postimg.cc/VLPhZQ52/cleaner.webp",
    },
  ])
);

//  Local storage
let serviceList = JSON.parse(localStorage.getItem("services"));

console.log(serviceList);

// Function for Products

function displaydata() {
  let products = document.querySelector("#Products");
  serviceList.forEach((product) => {
    console.log(product);
    products.innerHTML += `
            <div class="col-21">
            <div class="card-3 shadow p-3 ">
              <img src="${product.image}" class="card-img-top img-thumbnail" alt="...">
              <div class="card-body">
                <h5 class="card-title text-center">${product.name}</h5>
                <p class="card-text text-center">${product.cost}</p>
                <button onclick="check()" type="button" class="btn btn-success" href="./html/admin.html" id="checkout">Checkout Here</button>
              </div>
            </div>
            </div>
        `
  });
}
displaydata();





// localStorage.setItem('checkout', JSON.stringify([
//   {
//     name,
//     cost,
//     image
//   }
// ]))



//  Sorting and filtering

