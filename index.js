let addBtn = document.getElementsByClassName("add")[0];
let inp = document.querySelectorAll("input")[0];
let addItems = document.querySelector(".contain");

addBtn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  addItems.appendChild(item);
  inp.value = "";

  let delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText = "delete";
  item.appendChild(delBtn);
});

addItems.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let del = e.target.parentElement;
    del.remove();
  }
});

