const prices = document.querySelectorAll('[data-ns-test="prices"]');

let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum += parseInt(prices[i].textContent, 10) || 0;
}

const grandTotalRow = document.createElement("tr");
grandTotalRow.setAttribute("data-ns-test", "grandTotal");

const grandTotalCell = document.createElement("td");
grandTotalCell.textContent = sum;

grandTotalRow.appendChild(grandTotalCell);

// Append the row to your table (or tbody if your table has one)
const table = document.querySelector("table");
table.appendChild(grandTotalRow);