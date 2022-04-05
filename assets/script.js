const addButton12 = document.getElementById("addButton12");
addButton12.addEventListener("click", () => {
  handlephone(true);
});

const minus12 = document.getElementById("minus12");
minus12.addEventListener("click", () => {
  handlephone(false);
});

function handlephone(isIncrease) {
  const insert12 = document.getElementById("insert12");
  const insertAmount12 = parseInt(insert12.value);

  const iphone12Price = document.getElementById("iphone12Price");
  const current12Price = parseInt(iphone12Price.innerText);
  let total12insert = insertAmount12;
  if (isIncrease == true) {
    total12insert = insertAmount12 + 1;
  }
  if (isIncrease == false && insertAmount12 > 0) {
    total12insert = insertAmount12 - 1;
  }

  document.getElementById("insert12").value = total12insert;

  const total12Price = total12insert * 1219;

  document.getElementById("iphone12Price").innerText = total12Price;
}

//case section
const addButton11 = document.getElementById("addButton11");
addButton11.addEventListener("click", function () {
  handleProductChange(true);
});

const minus11 = document.getElementById("minus11");
minus11.addEventListener("click", () => {
  handleProductChange(false);
});

function handleProductChange(isIncrease) {
  const insert11 = document.getElementById("insert11");
  const insertAmount11 = parseInt(insert11.value);

  const iphone11Price = document.getElementById("iphone11Price");
  const current11Price = parseInt(iphone11Price.innerText);

  let total11insert = insertAmount11;
  if (isIncrease == true) {
    total11insert = insertAmount11 + 1;
  }
  if (isIncrease == false && insertAmount11 > 0) {
    total11insert = insertAmount11 - 1;
  }

  document.getElementById("insert11").value = total11insert;

  const total11priceMinus = total11insert * 59;

  document.getElementById("iphone11Price").innerText = total11priceMinus;
}

const removeItem = document.getElementById("remove-item");
const removeItem2 = document.getElementById("remove-item2");
const removeCart = document.getElementById("removeCart");
const removeCart2 = document.getElementById("removeCart2");

removeItem.addEventListener("click", () => {
  removeCart.style.display = "none";
});
removeItem2.addEventListener("click", () => {
  removeCart2.style.display = "none";
});
const checkOut = document.getElementById("checkout");

checkOut.addEventListener("click", () => {
  const iphone12Price = document.getElementById("iphone12Price");
  const current12Price = parseInt(iphone12Price.innerText);

  const iphone11Price = document.getElementById("iphone11Price");
  const current11Price = parseInt(iphone11Price.innerText);

  const totalprice = current12Price + current11Price;

  const subtotalAmount = document.getElementById("subtotalAmount");

  document.getElementById("subtotalAmount").innerText = totalprice;

  const totalPriceAmount = totalprice;

  document.getElementById("totalAmount").innerText = totalPriceAmount;
});
