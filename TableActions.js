import { renderTableRows } from "./TableUtils";

export function addNewEntry(data, form, table, removeRowCallback) {
  const name = document.getElementById("nameInput").value;
  const size = document.getElementById("sizeInput").value;
  const location = document.getElementById("locationInput").value;

  data.push({
    name,
    size,
    location,
    image: "https://i.imgflip.com/6apehw.jpg",
  });

  renderTableRows(table, data, removeRowCallback);

  form.reset();
  const modalElement = document.getElementById("addEntryModal");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  modalInstance.hide();
}

export function removeRow(data, index, table, removeRowCallback) {
  data.splice(index, 1);
  renderTableRows(table, data, removeRowCallback);
}
