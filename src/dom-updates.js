import { customer } from './scripts'
// import { postBooking } from './api-calls'
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
    totalCost.innerText = `Total Cost: $${customer.totalCostOfBookings.toFixed(2)}`
    myBookingsWrapper.innerHTML = ''
    customer.myBookings.forEach(booking => {
      myBookingsWrapper.innerHTML += `
      <section class="individaul-booking">
          <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
        <div class="room-details">
          <p>${booking.date}</p>
          <p>Room Type: ${booking.roomType}</p>
          <p>Bed Type: ${booking.bedSize}</p>
          <p>Number of Beds: ${booking.numBeds}</p>
          <p>Room Number: ${booking.roomNumber}</p>
        </div>
        <p class="cost">${booking.costPerNight.toFixed(2)}</p>
      </section>    `
    })
  },

  showAvailibleRooms(customer) {
    filteredRoomsContainer.innerHTML = ''
    if(customer.roomsByType.length === 0) {
      filteredRoomsContainer.innerHTML =
        `<h2>We are so terribly sorry but there are no rooms of the type you are looking for on this date. Please forgive us try searching for a different room type or a different date. Again, we are sooooooooo sorry! Please don't give up on us.</h2>`
    }
    customer.roomsByType.forEach(room => {
      filteredRoomsContainer.innerHTML += `
      <section class="individual-room">
          <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
        <div class="filtered-room-details">
          <p>Room Type: ${room.roomType}</p>
          <p>Bed Type: ${room.bedSize}</p>
          <p>Number of Beds: ${room.numBeds}</p>
          <p>Room Number: ${room.number}</p>
        </div>
        <p class="filtered-cost">$${room.costPerNight}</p>
        <button class="book-this-room-button" id="${room.number}">Book This Room!</button>
      </section>
      `
    })
  },

  showBookedRoom(customer, room) {
    successMessageWrapper.innerHTML = `
    <h2>You're Going on Vacation, ${customer.name}!</h2>
    <section class="booked-room">
        <img src="https://www.mountainliving.com/content/uploads/data-import/9882388e/YC---River-Runs-Through-It---High-Resolution---Image-9.jpg" alt="luxry-cabin-room">
      <div class="filtered-room-details">
        <p>Room Type: ${room.roomType}</p>
        <p>Bed Type: ${room.bedSize}</p>
        <p>Number of Beds: ${room.numBeds}</p>
        <p>Room Number: ${room.number}</p>
      </div>
    </section>
      <h3>This room has been added to your bookings</h3>
    `
  },

  showRequiredFieldMessage(element) {
    element.classList.add('error-border');
  },

  hideRequiredFieldMessage(element) {
    element.classList.remove('error-border');
  }
}


export default domUpdates;
