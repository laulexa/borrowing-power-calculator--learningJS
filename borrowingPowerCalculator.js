const monthlyIncome = document.querySelector('#monthly-income');
const monthlyOtherIncome = document.querySelector('#monthly-other-income');
const monthlyLivingExpenses = document.querySelector('#monthly-living-expenses');
const otherMonthlyCommitments = document.querySelector('#other-monthly-commitments');
const calculateBorrowingPowerBtn = document.querySelector('#calculateBorrowingPower');
const answer = document.querySelector('.answer');
 
calculateBorrowingPowerBtn.addEventListener('click', calculateBorrowingPower);

function calculateBorrowingPower () {
    const totalIncome = Number(monthlyIncome.value) + Number(monthlyOtherIncome.value);
    console.log(totalIncome)
    const totalExpenses = Number(monthlyLivingExpenses.value) + Number(otherMonthlyCommitments.value);
    console.log(totalExpenses)
    const percentage = 0.35;
    const borrowingPower = (totalIncome - totalExpenses) * percentage;
    if(borrowingPower < 0) {
        answer.innerText = "You don't have borrowing power.";
    } else {
        answer.innerText = "Your borrowing power is: $" + getCommasNumber(borrowingPower.toFixed(2));
    }
}
function getCommasNumber(number) {
    const stringNumber = number

    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }