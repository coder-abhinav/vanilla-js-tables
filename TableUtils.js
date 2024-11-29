export function renderTableHeader(table, data) {
  const thead = table.querySelector("thead tr");
  thead.innerHTML = "";
  if (data.length > 0) {
    Object.keys(data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      th.style.textAlign = "center";
      thead.appendChild(th);
    });

    const actionsTh = document.createElement("th");
    actionsTh.textContent = "Actions";
    actionsTh.style.textAlign = "center";
    thead.appendChild(actionsTh);
  }
}

export function renderTableRows(table, data, removeRowCallback) {
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = ""; // Clear existing rows

  data.forEach((entry, index) => {
    const row = document.createElement("tr");

    Object.entries(entry).forEach(([key, value]) => {
      const td = document.createElement("td");
      if (key.toLowerCase() === "image") {
        td.classList.add("text-center", "d-flex", "justify-content-center");
        const img = document.createElement("img");
        img.src = value;
        img.alt = "Image of " + (entry.name || "Big Cat");
        img.classList.add("table-image", "img-fluid");
        td.appendChild(img);
      } else {
        td.textContent = value;
        td.style.textAlign = "center";
      }
      row.appendChild(td);
    });

    const removeButtonTd = document.createElement("td");
    removeButtonTd.style.textAlign = "center";
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-danger", "btn-sm");
    removeButton.addEventListener("click", () => {
      removeRowCallback(index);
    });
    removeButtonTd.appendChild(removeButton);
    row.appendChild(removeButtonTd);

    tbody.appendChild(row);
  });
}
