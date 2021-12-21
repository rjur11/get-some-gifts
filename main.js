fetch("https://mysterious-mesa-00016.herokuapp.com/items")
  .then((response) => response.json())
  .then((data) => renderScreen(data))
  .catch((error) => console.log(error));

function renderScreen(data) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  const span = document.querySelector("span");
  let totalPrice = data.reduce((acc, gift) => {
    return acc + gift.priceInDollars;
  }, 0);
  data
    .map((person) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${person.recipient}</td>
        <td>${person.name}</td>
        <td>$${person.priceInDollars}</td>`;
      const lastCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("click", (e) => {
        if (e.target.checked) {
          totalPrice -= person.priceInDollars;
        } else {
          totalPrice += person.priceInDollars;
        }
        span.innerText = "$" + totalPrice.toFixed(2);
      });
      lastCell.appendChild(checkbox);
      row.appendChild(lastCell);
      return row;
    })
    .forEach((row) => {
      tbody.appendChild(row);
    });
  span.innerText = "$" + totalPrice;
}
