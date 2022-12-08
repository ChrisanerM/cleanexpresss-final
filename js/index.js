// Products
localStorage.setItem('services', JSON.stringify([
  {
    id: 1,
    name: "Ordinary Sneaker Cleaning",
    cost: 250.0,
    image: "https://i.postimg.cc/T3kG1p5v/allclean.webp",
  },
  {
    id: 2,
    name: "Suede Sneaker Cleaning",
    cost: 300.0,
    image: "https://i.postimg.cc/jts1Sk5X/suede.webp",
  },
  {
    id: 3,
    name: "White Sneaker Cleaning",
    cost: 350.0,
    image: "https://i.postimg.cc/Kc12tNLH/whitec-jpg.jpg",
  },
  {
    id: 4,
    name: "Home Kit Product",
    cost: 400.0,
    image: "https://i.postimg.cc/VLPhZQ52/cleaner.webp",
  },
]))


// let services = [
//   {
//     id: 1,
//     name: "Ordinary Sneaker Cleaning",
//     cost: 250.0,
//     image: "https://i.postimg.cc/T3kG1p5v/allclean.webp",
//   },
//   {
//     id: 2,
//     name: "Suede Sneaker Cleaning",
//     cost: 300.0,
//     image: "https://i.postimg.cc/jts1Sk5X/suede.webp",
//   },
//   {
//     id: 3,
//     name: "White Sneaker Cleaning",
//     cost: 350.0,
//     image: "https://i.postimg.cc/Kc12tNLH/whitec-jpg.jpg",
//   },
//   {
//     id: 4,
//     name: "Home Kit Product",
//     cost: 400.0,
//     image: "https://i.postimg.cc/VLPhZQ52/cleaner.webp",
//   },
// ];
//  Local storage
let serviceList = JSON.parse(localStorage.getItem("services"));

console.log(serviceList);

function displaydata() {
  let products = document.querySelector("#Products");
  serviceList.forEach ((product) => {
    products.innerHTML += `
            <div class="col-21">
            <div class="card-3 shadow p-3 ">
              <img src="${product.image}" class="card-img-top img-thumbnail" alt="...">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-center">${product.cost}</p>
              </div>
            </div>
            </div>
        `;
  });
}
displaydata();

//  Sorting and filtering
