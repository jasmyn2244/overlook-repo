import { customer } from './scripts'
//import Customer from './customer';


let domUpdates = {

  hide(elements) {
    elements.forEach(element => {
      element.classList.add('hidden')
    })
  },

  show(elements) {
    elements.forEach(element => {
      element.classList.remove('hidden')
    })
  },

  changeInnerText(element, text) {
    element.innerText = text;
  },

  showMyBookings(customer) {
    console.log(customer);
    myBookingsHeading.innerText = `${customer.name}'s Bookings`
    totalCost.innerText = `Total Cost: $${customer.totalCostOfBookings}`
    customer.myBookings.forEach(booking => {
      myBookingsWrapper.innerHTML += `
      <section class="individaul-booking">
          <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
        <div class="room-details">
          <p>${booking.date}</p>
          <p>${booking.roomType}</p>
          <p>${booking.bedSize}</p>
          <p>${booking.numBeds}</p>
        </div>
        <p class="cost">$${booking.costPerNight}</p>
      </section>    `
    })
  },
}


export default domUpdates;
