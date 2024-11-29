export const renderTableHeader = (thead, sampleRow) => {
  const headerRow = document.createElement("tr");
  Object.keys(sampleRow).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    th.style.textAlign = "center";
    headerRow.appendChild(th);
  });
  const actionsTh = document.createElement("th");
  actionsTh.textContent = "Actions";
  actionsTh.style.textAlign = "center";
  headerRow.appendChild(actionsTh);
  thead.appendChild(headerRow);
};

export const renderTableRows = (tbody, data, tableId) => {
  tbody.innerHTML = "";
  data.forEach((entry, index) => {
    const row = document.createElement("tr");

    Object.entries(entry).forEach(([key, value]) => {
      const td = document.createElement("td");
      if (key === "image") {
        const img = document.createElement("img");
        img.src = value;
        img.alt = key;
        img.classList.add("table-image");
        td.appendChild(img);
      } else {
        td.textContent = value;
      }
      td.style.textAlign = "center";
      row.appendChild(td);
    });

    const removeButtonTd = document.createElement("td");
    const removeButton = document.createElement("div");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", () =>
      removeRow(data, index, tableId)
    );
    removeButtonTd.style.textAlign = "center";
    removeButtonTd.appendChild(removeButton);
    row.appendChild(removeButtonTd);

    tbody.appendChild(row);
  });
};
