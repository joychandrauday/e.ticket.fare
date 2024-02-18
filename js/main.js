let seatNumbers = 40;
let selectedSeatCount = 0;
let singleTicketPrice = 550;
let ticketPurchaseTimes = 0;
const seatButtons = document.querySelectorAll(".seatBtn");
for (let i = 0; i < seatButtons.length; i++) {

    //seat left
    let inputNameText = document.getElementById('phoneNumber');
    if (ticketPurchaseTimes = 0) {
        inputNameText.disabled = false;
    } else {
        inputNameText.disabled = true;
    }

    seatButtons[i].addEventListener('click', function () {
        inputNameText.disabled = false;
        ticketPurchaseTimes++
        seatButtons[i].style.pointerEvents='none';

        if (ticketPurchaseTimes < 5) {
            // button styles 
            seatButtons[i].style.backgroundColor = '#1DD100';
            seatButtons[i].style.color = 'white';

            
            //update seat numbers
            seatNumbers = updateBusSeat(seatNumbers, 1);
            const seatNumberContainer = document.getElementById('seatLeft');
            seatNumberContainer.innerText = (seatNumbers);

            //update selected seat count
            selectedSeatCount = updateSelectedSeat(selectedSeatCount, 1)
            const selectedSeatCountContainer = document.getElementById('selectedSeatCount');
            selectedSeatCountContainer.innerText = (selectedSeatCount);
            selectedSeatCountContainer.style.backgroundColor='#1DD100';
            
            //update seat number and price

            const seatName = seatButtons[i].innerHTML;
            const ticketContainer = document.getElementById('ticketContainer');

            const div = document.createElement('div');
            ticketContainer.appendChild(div);

            const h3 = document.createElement('h3');
            h3.innerText = seatName;
            div.appendChild(h3);

            const h4 = document.createElement('h4');
            h4.innerText = 'economy';
            div.appendChild(h4);

            const h5 = document.createElement('h5');
            h5.innerText = 550+' taka';
            div.appendChild(h5);

            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.marginTop = '5px';

            //update total price
            const totalPrice = updateTicketPrice(singleTicketPrice, ticketPurchaseTimes);
            totalPrizeArea.innerText = totalPrice + ' Taka.';
            //add to the cart
            if(ticketPurchaseTimes===4){
                let get = document.getElementById("couponEnter")
                get.disabled = false;
            }else{
                get.disabled = true;
                
            }
        }else {
            alert('you can buy only Four ticket with one varified account.')
        }
        
    })
}

//pasanger check
const inputNumberText = document.getElementById('phoneNumber');
const inputNumber = inputNumberText.value;
// console.log(inputName,inputNumber,nextBtn)
const inputNameText = document.getElementById('passangerName');
const inputName = inputNameText.value;

inputNameText.addEventListener('keyup', function () {
    let nextBtn = document.getElementById('finalPageBtn');
    if (inputNumber != " ") {
        nextBtn.removeAttribute('disabled');
    } else if (inputNumber === "disabled") {
        nextBtn.setAttribute('disabled', true);
    }
})





// || checkEmptyValue('passangerName')==='' || ticketPurchaseTimes <1 
//discount price update
function validCouponDetection() {
    const coupon = document.getElementById('couponEnter');
    const couponText = coupon.value;
    if (couponText === 'NEW15' || couponText === 'Couple20') {
        if (couponText === 'NEW15') {
            const totalPrice = valueFromId('totalPrizeArea');
            const calculateDiscountPrice = calculateDiscount(totalPrice, 15);
            const gottedDiscount = totalPrice - calculateDiscountPrice
            newElementValueUpdate('gottedDiscount', gottedDiscount)
            newElementValueUpdate('grandTotalArea', calculateDiscountPrice + ' taka');

            coupon.value='';
        } else if (couponText === 'Couple20') {
            const totalPrice = valueFromId('totalPrizeArea');
            const calculateDiscountPrice = calculateDiscount(totalPrice, 20);
            const gottedDiscount = totalPrice - calculateDiscountPrice
            newElementValueUpdate('gottedDiscount', gottedDiscount)
            newElementValueUpdate('grandTotalArea', calculateDiscountPrice + ' taka');
            coupon.value='';
        }

    } else {
        alert('Invalid coupon.');
    }
}


