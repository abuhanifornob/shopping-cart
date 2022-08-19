function getPurchesProduct(productNumberField, isTrue) {
    const getProductNumberField = document.getElementById(productNumberField);
    const getProductNumberString = getProductNumberField.value;
    const getProductNumber = parseInt(getProductNumberString);
    let currentProductNumber;
    if (isTrue) {
        currentProductNumber = getProductNumber + 1;
        getProductNumberField.value = currentProductNumber;
    } else {
        currentProductNumber = getProductNumber - 1;
        if (currentProductNumber < 0) {
            alert('Please Buy The Product');
            return 0;
        } else {
            getProductNumberField.value = currentProductNumber;
        }

    }

    return currentProductNumber;

}

function productAmount(productNumber, perProductPrice, addAmountId) {
    const totalAmount = productNumber * perProductPrice;
    const getAmountElement = document.getElementById(addAmountId);

    getAmountElement.innerText = totalAmount;
    return totalAmount;

}

function amountCalculation() {
    let currentCaseAmountElement = document.getElementById('case-amount');
    const currentCaseAmount = parseInt(currentCaseAmountElement.innerText);
    const currentPhoneAmountElement = document.getElementById('phone-amount');
    const currentPhoneAmount = parseInt(currentPhoneAmountElement.innerText);
    const subtotal = currentCaseAmount + currentPhoneAmount;
    const subtotalElemnt = document.getElementById('subtotal');
    subtotalElemnt.innerText = subtotal;
    const taxtAmount = parseInt((subtotal * 0.10).toFixed(2));

    const taxtElementByid = document.getElementById("taxID");
    taxtElementByid.innerText = taxtAmount;

    const totalAmount = subtotal + taxtAmount;
    const totalElement = document.getElementById('total');
    totalElement.innerText = totalAmount;
}