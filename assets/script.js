const addButton12 = document.getElementById("addButton12");
addButton12.addEventListener("click", () => {
  const insert12 = document.getElementById("insert12");
  const insertAmount12 = parseFloat(insert12.value);

  const iphone12Price = document.getElementById("iphone12Price");
  const current12Price = parseFloat(iphone12Price.innerText);

  const total12insert = insertAmount12 + 1;

  document.getElementById("insert12").value = total12insert;

  let total12price = total12insert * 1219;

  document.getElementById("iphone12Price").innerText = total12price;
});

const minus12 = document.getElementById("minus12");
minus12.addEventListener("click", () => {
  const insert12 = document.getElementById("insert12");
  const insertAmount12 = parseFloat(insert12.value);

  const iphone12Price = document.getElementById("iphone12Price");
  const current12Price = parseFloat(iphone12Price.innerText);

  const total12insertMinus = insertAmount12 - 1;

  document.getElementById("insert12").value = total12insertMinus;

  const total12priceMinus = current12Price - 1219;

  document.getElementById("iphone12Price").innerText = total12priceMinus;
});

// iphone 11 side

const addButton11 = document.getElementById("addButton11");
addButton11.addEventListener("click", () => {
  const insert11 = document.getElementById("insert11");
  const insertAmount11 = parseFloat(insert11.value);

  const iphone11Price = document.getElementById("iphone11Price");
  const current11Price = parseFloat(iphone11Price.innerText);

  const total11insert = insertAmount11 + 1;

  document.getElementById("insert11").value = total11insert;

  let total11price = total11insert * 59;

  document.getElementById("iphone11Price").innerText = total11price;
});

const minus11 = document.getElementById("minus11");
minus11.addEventListener("click", () => {
  const insert11 = document.getElementById("insert11");
  const insertAmount11 = parseFloat(insert11.value);

  const iphone11Price = document.getElementById("iphone11Price");
  const current11Price = parseFloat(iphone11Price.innerText);

  const total11insertMinus = insertAmount11 - 1;

  document.getElementById("insert11").value = total11insertMinus;

  const total11priceMinus = current11Price - 59;

  document.getElementById("iphone11Price").innerText = total11priceMinus;
});

// remove the element

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
  const current12Price = parseFloat(iphone12Price.innerText);

  const iphone11Price = document.getElementById("iphone11Price");
  const current11Price = parseFloat(iphone11Price.innerText);

  const totalprice = current12Price + current11Price;

  const subtotalAmount = document.getElementById("subtotalAmount");

  document.getElementById("subtotalAmount").innerText = totalprice;

  const totalPriceAmount = totalprice;

  document.getElementById("totalAmount").innerText = totalPriceAmount;
});
