// update phone number
function updateProductNumber(product, isIncreasing, price) {
	const productInput = document.getElementById(product + `-number`);
	let productNumber = productInput.value;
	if (isIncreasing == true) {
		productNumber = parseInt(productNumber) + 1;
	} else if (isIncreasing == false && productNumber > 0) {
		productNumber = parseInt(productNumber) - 1;
	}
	productInput.value = productNumber;
	const productTotal = document.getElementById(product + `-total`);
	productTotal.innerText = productNumber * price;
	calculateTotal();
}
// update phone number function end

// get productInput function start
function getInputValue(product) {
	const productInput = document.getElementById(product + `-number`);
	const productNumber = parseInt(productInput.value);
	return productNumber;
}
// get productInput function end

// calculate total start
function calculateTotal() {
	const phoneTotal = getInputValue(`phone`) * 1219;
	const caseTotal = getInputValue(`case`) * 59;
	const subTotal = phoneTotal + caseTotal;
	const tax = subTotal / 10;
	const paybleAmount = subTotal + tax;
	document.getElementById(`sub-total`).innerText = subTotal;
	document.getElementById(`tax-amount`).innerText = tax;
	document.getElementById(`total-price`).innerText = paybleAmount;
}
// calculate total end

// add event handler part start
document.getElementById(`phone-plus`).addEventListener(`click`, function () {
	updateProductNumber(`phone`, true, 1219);
});
document.getElementById(`phone-minus`).addEventListener(`click`, function () {
	updateProductNumber(`phone`, false, 1219);
});
document.getElementById(`case-plus`).addEventListener(`click`, function () {
	updateProductNumber(`case`, true, 59);
});
document.getElementById(`case-minus`).addEventListener(`click`, function () {
	updateProductNumber(`case`, false, 59);
});
// add event handler end

function checkOut() {
	const totalPrice = document.getElementById(`total-price`);
	const totalPriceNumber = parseInt(totalPrice.innerText);
	if (totalPriceNumber > 0) {
		window.alert(`Thank You for your purchase`);
	} else {
		window.alert(`Please add something in your cart list`);
	}
}

document.getElementById(`check-out`).addEventListener(`click`, function () {
	checkOut();
});
