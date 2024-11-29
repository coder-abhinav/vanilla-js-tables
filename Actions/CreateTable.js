import { renderTableHeader, renderTableRows } from "./RenderRows";

export const createTable = (tableId, data) => {
  const tableContainer = document.getElementById(tableId);
  const table = document.createElement("table");
  table.classList.add(
    "table",
    "table-dark",
    "table-striped",
    "table-hover",
    "caption-top"
  );

  const caption = document.createElement("caption");
  const captionText = tableId.split("-table");
  caption.textContent = `${captionText[0].toUpperCase()} - Table`;
  table.appendChild(caption);

  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);

  renderTableHeader(thead, data[0]);

  renderTableRows(tbody, data, tableId);

  const tfoot = document.createElement("tfoot");
  const footerRow = document.createElement("tr");
  const footerCell = document.createElement("td");
  footerCell.colSpan = 5;
  footerCell.classList.add("text-center");
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.classList.add("btn", "btn-outline-light", "add-entry-btn");
  addButton.setAttribute("data-bs-toggle", "modal");
  addButton.setAttribute("data-bs-target", "#addEntryModal");
  addButton.setAttribute("data-table", tableId);
  addButton.textContent = "+ Add New Row";
  footerCell.appendChild(addButton);
  footerRow.appendChild(footerCell);
  tfoot.appendChild(footerRow);
  table.appendChild(tfoot);
};
