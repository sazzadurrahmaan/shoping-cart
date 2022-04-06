function handleProductChange(product, isIncrease) {
  const productAmount = getInputValue(product);

  const productPrice = document.getElementById(product + "-total");
  const current11Price = parseInt(productPrice.innerText);

  let totalProduct = productAmount;
  if (isIncrease == true) {
    totalProduct = productAmount + 1;
  }
  if (isIncrease == false && productAmount > 0) {
    totalProduct = productAmount - 1;
  }

  document.getElementById(product + "-count").value = totalProduct;

  let totalProductPrice = 0;
  if (product == "phone") {
    totalProductPrice = totalProduct * 1219;
  }
  if (product == "case") {
    totalProductPrice = totalProduct * 59;
  }

  document.getElementById(product + "-total").innerText = totalProductPrice;
  calculateTotal();
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

function calculateTotal() {
  const phoneCount = getInputValue("phone");

  const caseCount = getInputValue("case");

  const subtotal = phoneCount * 1219 + caseCount * 59;

  document.getElementById("subtotalAmount").innerText = subtotal;

  const tax = Math.round(subtotal * 0.01);

  document.getElementById("tax-amount").innerText = tax;

  const grandTotal = subtotal + tax;
  document.getElementById("totalAmount").innerText = grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
