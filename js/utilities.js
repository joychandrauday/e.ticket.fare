function updateBusSeat(totalSeat, perClickSeat) {
    const totalSeatLeft = totalSeat - perClickSeat;
    return totalSeatLeft;
}
function calculateDiscount(totalPrice, discount) {
    const finalPrice = totalPrice - ((totalPrice * discount) / 100);
    return finalPrice;

}
function updateSelectedSeat(previousSeat, perClickSeat) {
    const totalSeatAdd = previousSeat + perClickSeat;
    return totalSeatAdd;
}
function updateTicketPrice(singleTicketPrice, perClickTimes) {
    const totalPrice = singleTicketPrice * perClickTimes;
    return totalPrice;
}

function newElementValueUpdate(valueId, value) {

    // update
    const totalvalueElement = document.getElementById(valueId);
    totalvalueElement.innerText = value;
}
function valueFromId(valueId) {
    const valueElement = document.getElementById(valueId);
    const currentValueText = valueElement.innerText;
    const currentValue = parseInt(currentValueText);
    return currentValue;
}

function checkEmptyValue(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    return inputText;
}
//nexxzt
