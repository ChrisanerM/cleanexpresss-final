let servicesList = JSON.parse(localStorage.getItem("services"));
console.log(servicesList);

servicesList.forEach((ser) => {
  console.log(ser.name);
  let d = document.querySelector("tbody");
  d.innerHTML += `
        <tr>
            <td>${ser.id}</td>
            <td><img src="${ser.image}"/></td>
            <td>${ser.name}</td>
            <td>${ser.cost}</td>
            <td><button class="add" id="edit">Add</button>
            <button class="del" id="rem">Delete</button>
            </td>
        </tr>
    `;
});
