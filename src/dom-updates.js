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
    myBookingsHeading.innerText = `${customer.name}'s Bookings`
    totalCost.innerText = `Total Cost: $${customer.totalCostOfBookings}`
    customer.myBookings.forEach(booking => {
      myBookingsWrapper.innerHTML += `
      <section class="individaul-booking">
          <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
        <div class="room-details">
          <p>${booking.date}</p>
          <p>Room Type: ${booking.roomType}</p>
          <p>Bed Type: ${booking.bedSize}</p>
          <p>Number of Beds: ${booking.numBeds}</p>
        </div>
        <p class="cost">$${booking.costPerNight}</p>
      </section>    `
    })
  },

  showAvailibleRooms(customer) {
    customer.roomsByType.forEach(room => {
      filteredRoomsContainer.innerHTML += `
      <section class="individual-room">
          <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
        <div class="filtered-room-details">
          <p>Room Type: ${room.roomType}</p>
          <p>Bed Type: ${room.bedSize}</p>
          <p>Number of Beds: ${room.numBeds}</p>
        </div>
        <p class="filtered-cost">$${room.costPerNight}</p>
        <button class="book-this-room-button" id="${room.number}">Book This Room!</button>
      </section>
      `
    })
  },

  showBookedRoom(customer,room) {
    successMessageWrapper.innerHTML = `
    <h2>You're Going on Vacation ${customer.name}!</h2>
    <section class="individual-room">
        <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
      <div class="filtered-room-details">
        <p>Room Type: ${room.roomType}</p>
        <p>Bed Type: ${room.bedSize}</p>
        <p>Number of Beds: ${room.numBeds}</p>
      </div>
      <p class="filtered-cost">$${room.costPerNight}</p>
    </section>
    `
  }
}


export default domUpdates;
