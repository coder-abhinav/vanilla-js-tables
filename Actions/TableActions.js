import { renderTableRows } from "./RenderRows";
import { BIG_CATS, DOGS, BIG_FISHES } from "../assets/TableData";

const tablesData = {
  "big-cats": BIG_CATS,
  dogs: DOGS,
  "big-fishes": BIG_FISHES,
};

export const removeRow = (data, index, tableId) => {
  data.splice(index, 1);
  renderTableRows(document.querySelector(`#${tableId} tbody`), data, tableId);
};

export const addNewEntry = (event) => {
  event.preventDefault();
  console.log(event.target.getAttribute("data-table"));
  const name = document.getElementById("nameInput").value;
  const size = document.getElementById("sizeInput").value;
  const location = document.getElementById("locationInput").value;

  const tableId = event.target.getAttribute("data-table");
  console.log(tableId);
  const tableData = tablesData[tableId];

  tableData?.push({
    name,
    size,
    location,
    image: "https://i.imgflip.com/6apehw.jpg",
  });

  renderTableRows(
    document.querySelector(`#${tableId} tbody`),
    tableData,
    tableId
  );

  document.getElementById("addEntryForm").reset();
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("addEntryModal")
  );
  modal.hide();
};
