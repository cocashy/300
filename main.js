const table = document.createElement("table");
for (let array of arrays) {
  const row = document.createElement("tr");
  for (let str of array) {
    const data = document.createElement("td");
    data.innerText = str;
    row.append(data);
  }
  table.append(row);
}
console.log(table)
document.body.append(table);
