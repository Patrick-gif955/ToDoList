"use strict";
const input_box = document.getElementById("input");
const addBTN = document.getElementById("btn");
const listTask = document.getElementById("listTask");

function addTask() {
  event.preventDefault();
  if (input_box.value !== "") {
    const input_text = input_box.value;
    const list_items = document.createElement("li");
    list_items.innerHTML = ` ${input_text}  <button class ="delete-btn">Delete</button>`;

    listTask.appendChild(list_items);
    input_box.value = "";
    const deleteBTN = list_items.querySelector(".delete-btn");
    deleteBTN.addEventListener("click", () => {
      list_items.remove();
    });
    list_items.addEventListener("click", function () {
      list_items.classList.toggle("completed");
    });
  } else if (input_box.value === "") {
    alert("Please Enter a Task");
  }
}
//alert("HELLO WORLD, HELLO PURPOSE ")
