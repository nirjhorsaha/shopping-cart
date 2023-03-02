serial = 0;

function displayData(productName, productPrice, productQuantity, priceTotal) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
  container.appendChild(tr);

  // show total products in cart
  document.getElementById("total-product").innerText = serial;
}

// disable button
function disableButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

// calculate total price
let totalPrice = document.getElementById("total-price").innerText;
function totalCalculate(totalId) {
  let sum = parseFloat(totalPrice) + parseFloat(totalId);
  totalPrice = sum;
  let setTotalPrice = document.getElementById("total-price");
  setTotalPrice.innerText = totalPrice;
}

// validation
function quantityValidation(quantity, pPrice) {
  if (isNaN(quantity)) {
    alert("Enter valid quantity");
    return;
  } else {
    // declare priceTotal as a global
    priceTotal = parseInt(pPrice) * parseInt(quantity);
    return priceTotal;
  }
}

// first product
document.getElementById("first-btn").addEventListener("click", function () {
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = parseInt(document.getElementById("first-quantity").value);

  const calculate = quantityValidation(productQuantity, productPrice);
  // const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  serial += 1;

  displayData(productName, productPrice, productQuantity, priceTotal);

  disableButton("first-btn");

  totalCalculate(priceTotal);
});

// second - product (using event object)
document.getElementById("second-btn").addEventListener("click", function (e) {
  // const pName = e.target.parentNode.parentNode.children[0].innerText;
  // const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
  // const pQuantity = parseInt(e.target.parentNode.parentNode.children[3].value);
  // console.log(e.target.parentNode.parentNode.children);
  // const pTotal = parseInt(pPrice) * parseInt(pQuantity);
  const pName = document.getElementById("second-name").innerText;
  const pPrice = document.getElementById("second-price").innerText;
  const pQuantity = parseInt(document.getElementById("second-quantity").value);

  const calculate = quantityValidation(pQuantity, pPrice);

  serial += 1;

  displayData(pName, pPrice, pQuantity, priceTotal);

  disableButton("second-btn");

  totalCalculate(priceTotal);
});

// third -product
document.getElementById("third-btn").addEventListener("click", function () {
  const productName = document.getElementById("third-name").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = parseInt(document.getElementById("third-quantity").value);

  // const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  const calculate = quantityValidation(productQuantity, productPrice);

  serial += 1;

  displayData(productName, productPrice, productQuantity, priceTotal);

  disableButton("third-btn");

  totalCalculate(priceTotal);
});

// fourth -product
document.getElementById("fourth-btn").addEventListener("click", function (e) {
  const productName = document.getElementById("fourth-name").innerText;
  const productPrice = document.getElementById("fourth-price").innerText;
  const productQuantity = parseInt(document.getElementById("fourth-quantity").value);

  // const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  const calculate = quantityValidation(productQuantity, productPrice);

  serial += 1;

  displayData(productName, productPrice, productQuantity, priceTotal);

  disableButton("fourth-btn");

  totalCalculate(priceTotal);
});

// fifth -product
document.getElementById("fifth-btn").addEventListener("click", function (e) {
  const productName = document.getElementById("fifth-name").innerText;
  const productPrice = document.getElementById("fifth-price").innerText;
  const productQuantity = parseInt(document.getElementById("fifth-quantity").value);

  // const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  const calculate = quantityValidation(productQuantity, productPrice);

  serial += 1;

  displayData(productName, productPrice, productQuantity, priceTotal);

  disableButton("fifth-btn");
  
  totalCalculate(priceTotal);
});
