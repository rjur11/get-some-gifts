fetch("https://mysterious-mesa-00016.herokuapp.com/items")
  .then((response) => response.json())
  .then((data) => {
    let htmlBody = document.querySelector("tbody");
    let ourData = data.map((person) => {
      return `
        <tr>
              <td>${person.recipient}</td>
              <td>${person.name}</td>
              <td>$${person.priceInDollars}</td>
              <td><input type="checkbox"></td>
        </tr>
            `;
    });
    htmlBody.innerHTML = ourData.join("");
    let span = document.querySelector("span");
    let totalCost = data.reduce((acc, gift) => {
      return acc + gift.priceInDollars;
    }, 0);
    span.innerText = `$${totalCost}`;
  })
  .catch((error) => console.log(error));
