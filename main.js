const table = document.getElementById("table");
for (let array of arrays) {
  const row = document.createElement("tr");
  for (let data of array) {
    const cell = document.createElement("td");
    cell.innerText = data;
    row.append(cell);
  }
  table.append(row);
}

const input = document.getElementById("input");
input.oninput = () => {
  for (let row of table.rows) {
    const text = row.cells[1].innerText.toLowerCase();
    const value = input.value.toLowerCase();
    if (text.includes(value)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  }
}

window.onload = window.onblur = () => {
  input.focus();
}
