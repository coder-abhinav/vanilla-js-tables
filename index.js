import { createTable } from "./Actions/CreateTable.js";
import { addNewEntry } from "./Actions/TableActions.js";
import { BIG_CATS, DOGS, BIG_FISHES } from "./assets/TableData.js";

const initializeTables = () => {
  createTable("big-cats-table-container", BIG_CATS);
  createTable("dogs-table-container", DOGS);
  createTable("big-fishes-table-container", BIG_FISHES);
};

document.querySelectorAll('[data-bs-target="modal"]').forEach((button) => {
  console.log(button, "#button");
  button.addEventListener("click", (event) => {
    console.log("Button clicked:", event.currentTarget, "#button click");
    console.log("Data-table attribute:", button.getAttribute("data-table"));
    const tableId = event.currentTarget.getAttribute("data-table");
    document.getElementById("addEntryForm").setAttribute("data-table", tableId);
  });
});

initializeTables();

document.getElementById("addEntryForm").addEventListener("submit", addNewEntry);
