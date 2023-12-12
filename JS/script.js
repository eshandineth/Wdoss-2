//------------------------Hotel booking------------------------

//Dom Elements
document.addEventListener('DOMContentLoaded', function() {

    //-------------Submit btn-----------------------------------
    document.getElementById('submitBtn').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        const phone = document.getElementById('phone').value;
        const numRooms = parseInt(document.getElementById('num-rooms').value);
        const numAdults = parseInt(document.getElementById('num-adults').value, 10);
        const numChildren = parseInt(document.getElementById('num-children').value, 10) || 0;
        const duration = parseInt(document.getElementById('duration').value);
        
  
        // Costs based on selected room types
        const roomTypes = document.querySelectorAll('input[name="room-type"]:checked');
        let totalCost = 0;
        switch(roomTypes){
            case'single':
            totalCost = 25000;
            break;
            case'double':
            totalCost = 35000;
            break;
            case'triple':
            totalCost = 40000;
            break;
        }
        
        let total=totalCost;
  

  
        // Extra bed cost if selected
        if (document.getElementById('extra-bed').checked) {
            total += 8000 * numRooms * duration;
        }
  
        document.getElementById('totalCost').innerText = `Total Cost: Rs. ${total.toFixed(2)}`;
        
        
        
  
        // Promo code discount if applicable
        const promoCode = document.getElementById('promoCode').value;
        if (promoCode === 'Promo123') {
            const discount = total * 0.05;
            total -= discount;
        }
  
        // Booking information and total cost
        document.getElementById('bookingInfo').innerText = `Booking for ${numRooms} room(s) from ${checkIn} to ${checkOut} for ${numAdults} adults and ${numChildren} children.`;
        alert(`The hotel rooms are booked successfully! `);

        // Display overall cost of bookings
        const overallCost = total * numRooms * duration ;
        document.getElementById('overallCostOfBooking').innerText = `Crrent cost of booking: Rs. ${total.toFixed(2)}`;

        // Display overall booking
        const selectedRoomTypes = Array.from(roomTypes).map(roomType => roomType.value).join(', ');
        document.getElementById('overallBooking').innerText = `Overall Booking:  ${selectedRoomTypes}`;
  
        // Display promo code
        document.getElementById('promoCodeDisplay').innerText = `Promo Code: ${promoCode}`;
  
        
        
       
          
          
        
    });
//----------------------loyalty button------------------------------------

    document.getElementById('loyaltyBtn').addEventListener('click', function() {
        // Retrieve values from form elements
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        const phone = document.getElementById('phone').value;
        const numRooms = parseInt(document.getElementById('num-rooms').value, 10);
        const numAdults = parseInt(document.getElementById('num-adults').value, 10);
        const numChildren = parseInt(document.getElementById('num-children').value, 10) || 0;
        const duration = parseInt(document.getElementById('duration').value, 10);
  
        // Costs based on selected room types
        const roomTypes = document.querySelectorAll('input[name="room-type"]:checked');
        let totalCost = 0;
  
        roomTypes.forEach(function(roomType) {
            totalCost += parseInt(roomType.getAttribute('data-price'), 10) * numRooms * duration;
        });
  
        // Extra bed cost if selected
        if (document.getElementById('extra-bed').checked) {
            totalCost += 8000 * numRooms * duration;
        }
  
       
        
         // Loyalty points
         let loyaltyPoints = 0;
         if (numRooms > 4) {
             loyaltyPoints = (numRooms-4)*20;
            
         }
         const loyaltyMessage = `   loyalty point balance is: ${loyaltyPoints}`;
    
         let loyaltyMessage_seraialized = JSON.stringify(loyaltyMessage);
         localStorage.setItem("loyaltyMessage",loyaltyMessage_seraialized);
         console.log(loyaltyMessage_seraialized);
  
        // Promo code discount if applicable
        const promoCode = document.getElementById('promoCode').value;
        if (promoCode === 'Promo123') {
            const discount = totalCost * 0.05;
            totalCost -= discount;
        }
  
        document.getElementById('loyaltypoints').innerHTML=`The available points: ${loyaltyPoints}`;   
        
    });

//-----------------------------------add to favourites button--------------------------------------------------------------------------
   
document.getElementById('addToFavourite').addEventListener('click', function() {
    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const checkIn = document.getElementById('check-in').value;
      const checkOut = document.getElementById('check-out').value;
      const phone = document.getElementById('phone').value;
      const numRooms = parseInt(document.getElementById('num-rooms').value, 10);
      const numAdults = parseInt(document.getElementById('num-adults').value, 10);
      const numChildren = parseInt(document.getElementById('num-children').value, 10) || 0;
      const duration = parseInt(document.getElementById('duration').value, 10);
  
      // Calculate costs based on selected room types
      const roomTypes = document.querySelectorAll('input[name="room-type"]:checked');
      let totalCost = 0;
  
      roomTypes.forEach(function(roomType) {
          totalCost += parseInt(roomType.getAttribute('data-price'), 10) * numRooms * duration;
      });
  
      // Add extra bed cost if selected
      if (document.getElementById('extra-bed').checked) {
          totalCost += 8000 * numRooms * duration;
      }
  
      // Calculate loyalty points
      let loyaltyPoints = 0;
      if (numRooms > 4) {
          loyaltyPoints = 20;
         
      }
  
      // Apply promo code discount if applicable
      const promoCode = document.getElementById('promoCode').value;
      if (promoCode === 'Promo123') {
          const discount = totalCost * 0.05;
          totalCost -= discount;
      }
  
      const favourite= `Thank you,${name}, for ${numChildren}children ${numAdults} adults for ${numRooms} days`;
      alert(favourite);

      let favourite_serialized=JSON.stringify(favourite);
      localStorage.setItem("favourite",favourite_serialized);
      console.log(favourite_serialized);
      
  });
  
 
});



//---------------------------------------------Adventure booking------------------------------------



// Adventure Booking Variables
let currentAdventureCost = 0;
let overallAdventureCost = 0;

//Adventure booking DOM Elements
const nameElement = document.getElementById('name');
const phoneNumberElement = document.getElementById('phoneNumber');
const dateElement = document.getElementById('date').value;
const mailElement = document.getElementById('mail');
const localAdultsElement = document.getElementById('localAdults');
const localKidsElement = document.getElementById('localKids');
const foreignAdultsElement = document.getElementById('foreignAdults');
const foreignKidsElement = document.getElementById('foreignKids');
const extraChargeAdultElement = document.getElementById('extraChargeAdult');
const extraChargeKidsElement = document.getElementById('extraChargeKids');
const adventureConfirmationMessageElement = document.getElementById('adventureConfirmationMessage');
const currentAdventureBookingInfoElement = document.getElementById('currentAdventureBookingInfo');
const overallAdventureBookingInfoElement = document.getElementById('overallAdventureBookingInfo');
const bookAdventureButton = document.getElementById('bookAdventureButton');
const addToFavoritesAdventureButton = document.getElementById('addToFavoritesAdventureButton');

let name=nameElement;
let mail=mailElement;
// Adventure Booking Functions
function calculateAdventureCost() {
    const localAdults = parseInt(localAdultsElement.value);
    const localKids = parseInt(localKidsElement.value);
    const foreignAdults = parseInt(foreignAdultsElement.value);
    const foreignKids = parseInt(foreignKidsElement.value);
    const extraChargeAdult = extraChargeAdultElement.checked;
    const extraChargeKids = extraChargeKidsElement.checked;

    
    // Adventure Cost
    currentAdventureCost = calculateAdventureBookingCost(localAdults, localKids, foreignAdults, foreignKids, extraChargeAdult, extraChargeKids);

    // UI
    adventureConfirmationMessageElement.innerHTML = `The adventure booking is successfully completed! \n Number of local adults:${localAdults} \n Number of local kids:${localKids}\n Number of foreign adults:${foreignAdults}\nNumber of foreign kids:${foreignKids}`;
    currentAdventureBookingInfoElement.innerHTML = `Current Adventure Booking Cost: ${currentAdventureCost} LKR`;
    overallAdventureBookingInfoElement.innerHTML = `Overall Adventure Booking Cost: ${currentAdventureCost} LKR`;

    
    resetAdventureBookingForm();
    
}
//------------------------------_Adventure Booking Cost------------------------------------------------

function calculateAdventureBookingCost(localAdults, localKids, foreignAdults, foreignKids, extraChargeAdult, extraChargeKids) {
    const localAdultDivingCost = 5000;
    const localKidsDivingCost = 2000;
    const foreignAdultDivingCost = 10000;
    const foreignKidsDivingCost = 5000;
    const guideCostAdult = 1000;
    const guideCostKids = 500;

    // Cost based on user input
    let adventureCost = 0;

    // Cost for local adults and kids
    adventureCost += localAdults * localAdultDivingCost;
    adventureCost += localKids * localKidsDivingCost;

    // Cost for foreign adults and kids
    adventureCost += foreignAdults * foreignAdultDivingCost;
    adventureCost += foreignKids * foreignKidsDivingCost;

    // Additional cost for guide if needed
    if (extraChargeAdult) {
        adventureCost += guideCostAdult * localAdults;
        adventureCost += guideCostAdult * foreignAdults;
    }

    if (extraChargeKids) {
        adventureCost += guideCostKids * localKids;
        adventureCost += guideCostKids * foreignKids;
    }

    return adventureCost;

   
}



//---------------Favorites btn()
const fovourites_adven=document.getElementById("add-to-favorites-btn");
fovourites_adven.addEventListener("click",favouritesBuuton);
favouritesBuuton();

function favouritesBuuton(){
  
    
    const lastMessage = `Thank you for reserving. The total amount to reserve is ${overallAdventureCost}.00 LKR`;
    
    let lastMessage_seraialized = JSON.stringify(lastMessage);
    localStorage.setItem("last mesaage",lastMessage_seraialized);
    console.log(lastMessage_seraialized);
    
}

function thankyouMessage(){
    let currentAdventureCost = 0;
    let overallAdventureCost = 0;
    
    //Adventure booking DOM Elements
    const nameElement = document.getElementById('name');
    const phoneNumberElement = document.getElementById('phoneNumber');
    const dateElement = document.getElementById('date').value;
    const mailElement = document.getElementById('mail');
    const localAdultsElement = document.getElementById('localAdults');
    const localKidsElement = document.getElementById('localKids');
    const foreignAdultsElement = document.getElementById('foreignAdults');
    const foreignKidsElement = document.getElementById('foreignKids');
    const extraChargeAdultElement = document.getElementById('extraChargeAdult');
    const extraChargeKidsElement = document.getElementById('extraChargeKids');
    const adventureConfirmationMessageElement = document.getElementById('adventureConfirmationMessage');
    const currentAdventureBookingInfoElement = document.getElementById('currentAdventureBookingInfo');
    const overallAdventureBookingInfoElement = document.getElementById('overallAdventureBookingInfo');
    const bookAdventureButton = document.getElementById('bookAdventureButton');
    const addToFavoritesAdventureButton = document.getElementById('addToFavoritesAdventureButton');
    
    let name=nameElement;
    let mail=mailElement;
    // Adventure Booking Functions
    {
        const localAdults = parseInt(localAdultsElement.value);
        const localKids = parseInt(localKidsElement.value);
        const foreignAdults = parseInt(foreignAdultsElement.value);
        const foreignKids = parseInt(foreignKidsElement.value);
        const extraChargeAdult = extraChargeAdultElement.checked;
        const extraChargeKids = extraChargeKidsElement.checked;
    
        
        // Adventure Cost
        currentAdventureCost = calculateAdventureBookingCost(localAdults, localKids, foreignAdults, foreignKids, extraChargeAdult, extraChargeKids);
    
        // UI
        adventureConfirmationMessageElement.innerHTML = `The adventure booking is successfully completed! \n Number of local adults:${localAdults} \n Number of local kids:${localKids}\n Number of foreign adults:${foreignAdults}\nNumber of foreign kids:${foreignKids}`;
        currentAdventureBookingInfoElement.innerHTML = `Current Adventure Booking Cost: ${currentAdventureCost} LKR`;
        overallAdventureBookingInfoElement.innerHTML = `Overall Adventure Booking Cost: ${currentAdventureCost} LKR`;
    
    alert(`thankyou for reserving your booking,the total is ${currentAdventureCost}`);

}}
