// ProductList
let services = [
    {
      id: 1,
      name: "Ordinary Sneaker Cleaning",
      cost: 250.0,
      image: "",
    },
    {
      id: 1,
      name: "Suede Sneaker Cleaning",
      cost: 300.0,
      image: "",
    },
    {
      id: 1,
      name: "White Sneaker Cleaning",
      cost: 350.0,
      image: "",
    },
    {
      id: 1,
      name: "Home Kit Product",
      cost: 400,
    },
  ];
  let serviceList = JSON.parse(localStorage.getItem("services"))
    ? JSON.parse(localStorage.getItem("services"))
    : JSON.parse(localStorage.setItem("services", JSON.stringify(services)));
  