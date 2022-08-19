document.getElementById('case-plus-btn').addEventListener('click', function() {
    const currentCaseNumber = getPurchesProduct('case-field', true);
    const perProductPrice = 59;
    productAmount(currentCaseNumber, perProductPrice, 'case-amount');
    amountCalculation();




})

document.getElementById('case-minus-btn').addEventListener('click', function() {
    const perProductPrice = 59;
    let currentCaseNumber = getPurchesProduct('case-field', false);
    productAmount(currentCaseNumber, perProductPrice, 'case-amount');

    amountCalculation();


})

document.getElementById('phone-plus-btn').addEventListener('click', function() {
    const currentPhoneNumber = getPurchesProduct('phone-field', true);
    const perProductPrice = 1259;
    productAmount(currentPhoneNumber, perProductPrice, 'phone-amount');


    amountCalculation();

})

document.getElementById('phone-minus-btn').addEventListener('click', function() {
    const perProductPrice = 1259;
    let currentPhoneNumber = getPurchesProduct('phone-field', false);
    productAmount(currentPhoneNumber, perProductPrice, 'phone-amount');
    amountCalculation();
})