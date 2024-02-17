let seatNumbers=40;
let selectedSeatCount=0;
let singleTicketPrice=550;
let ticketPurchaseTimes=0;
const seatButtons=document.querySelectorAll(".seatBtn");
for (let i = 0; i < seatButtons.length; i++) {
    
    //seat left
    
    
    seatButtons[i].addEventListener('click',function() {

        ticketPurchaseTimes++
        if (ticketPurchaseTimes<=4) {
                // button styles 
            seatButtons[i].style.backgroundColor='#1DD100';
            seatButtons[i].style.color='white';
            
            //add to the cart

            //update seat numbers
            seatNumbers=updateBusSeat(seatNumbers,1);
            const seatNumberContainer=document.getElementById('seatLeft');
            seatNumberContainer.innerText=(seatNumbers);
            
            //update selected seat count
            selectedSeatCount=updateSelectedSeat(selectedSeatCount,1)
            const selectedSeatCountContainer=document.getElementById('selectedSeatCount');
            selectedSeatCountContainer.innerText=(selectedSeatCount);

            //update seat number and price

            const seatName=seatButtons[i].innerHTML;
            const ticketContainer=document.getElementById('ticketContainer');

            const div=document.createElement('div');
            ticketContainer.appendChild(div);

            const h3=document.createElement('h3');
            h3.innerText=seatName;
            div.appendChild(h3);

            const h4=document.createElement('h4');
            h4.innerText='economy';
            div.appendChild(h4);

            const h5=document.createElement('h5');
            h5.innerText=550;
            div.appendChild(h5);

            div.style.display='flex';
            div.style.justifyContent='space-between';
            div.style.marginTop='5px';

            //update total price
            const totalPrice=updateTicketPrice(singleTicketPrice,ticketPurchaseTimes);
            totalPrizeArea.innerText=totalPrice+' Taka.';

        }else{
            alert('you can buy only Four ticket with one varified account.')
            let get= document.getElementById("couponEnter")
            get.disabled = false;
        }
        

        
    })
}

function validCouponDetection() {
    const coupon=document.getElementById('couponEnter');
    const couponText=coupon.value;
    if(couponText==='NEW15' || couponText==='Couple20'){
        if (couponText==='NEW15'){
            const totalPriceText=document.getElementById('totalPrizeArea');
            const totalPrice=parseInt(totalPriceText);
            // const finalPrice=totalPrice-((totalPrice*15)/100);
            console.log(totalPrice);

            // newElementValueUpdate('grandTotalArea',finalPrice);
        }else if(couponText==='Couple20'){
            const finalPrice=calculateDiscount(totalPrice,20);
            newElementValueUpdate('grandTotalArea',finalPrice);
        }

    }else{
        alert('Invalid coupon.');
    }
}

if (checkEmptyValue('passangerName')!='' || checkEmptyValue('phoneNumber')!='') {
    document.querySelector("#finalPageBtn").disabled=false;
}else{
    document.querySelector("#finalPageBtn").disabled=true;
}