import './css/base.scss';
import { fetchCustomer, fetchBookings, fetchRooms, postBooking } from './api-calls';
import Customer from './customer';
import domUpdates from './dom-updates';



//QUERY SELECTORS
const usernameInput = document.querySelector('#usernameInput');
const passwordInput = document.querySelector('#passwordInput');
const loginButton = document.querySelector('#loginButton');
const myBookingsView = document.querySelector('#myBookingsView');
const myBookingsContainer = document.querySelector('#myBookingsContainer');
const myBookingsWrapper = document.querySelector('#myBookingsWrapper');
const myBookingsHeading = document.querySelector('#myBookingsHeading');
const totalCost = document.querySelector('#totalCost');
const navButtonContainer = document.querySelector('#navButtonContainer');
const newBookingButton = document.querySelector('#newBookingButton');
const bookARoomView = document.querySelector('#bookARoomView');
const viewFilteredRoomsButton = document.querySelector('#viewFilteredRoomsButton');
const filteredRoomsContainer = document.querySelector("#filteredRoomsContainer");
const date = document.querySelector('#date');
const myBookingsButton = document.querySelector('#myBookingsButton');
const filteredRoomsWrapper = document.querySelector('#filteredRoomsWrapper');
const bookingSuccessView = document.querySelector('#bookingSuccessView');
const successMessageWrapper = document.querySelector('#successMessageWrapper');
const makeAnotherBookingButton = document.querySelector('#makeAnotherBookingButton');
const viewMyBookingsButton = document.querySelector('#viewMyBookingsButton');
const roomTypeSection = document.querySelector('#roomTypeSection');
const bookingErrorView = document.querySelector("#bookingErrorView");




// GLOBAL VARIABLES
let bookings;
let rooms;
let customer;
let inputDate;
let roomToBook;


// FUNCTIONS
export const fetchData = () => {
  Promise.all([fetchBookings(), fetchRooms()])
    .then(data => {
      bookings = data[0].bookings;
      rooms = data[1].rooms;
      if(customer) {
        customer.bookingsData = bookings
      }
    })
    .catch(error => {
      console.log(error)
      showErrorMessage()
    })
}

const authenticateCustomer = (event) => {
  event.preventDefault();
  if(!usernameInput.value) {
    domUpdates.showRequiredFieldMessage(usernameInput);
    return
  } else {
    domUpdates.hideRequiredFieldMessage(usernameInput)
  }
  if(!passwordInput.value) {
    domUpdates.showRequiredFieldMessage(passwordInput);
    return;
  } else {
    domUpdates.hideRequiredFieldMessage(passwordInput)
  }
  if(passwordInput.value === 'overlook2021') {
    const customerID = usernameInput.value.replace( /^\D+/g, '');
    Promise.all([fetchCustomer(customerID)])
      .then(data => {
        customer = (new Customer(data[0], bookings, rooms))
        displayMyBookings()
      })
    }
  }

const displayMyBookings = () => {
  domUpdates.hide([loginView, bookARoomView, bookingSuccessView]);
  domUpdates.show([myBookingsView, navButtonContainer]);
  customer.getBookings();
  customer.getTotalCostOfBookings();
  domUpdates.showMyBookings(customer);
}

const displayBookARoom = () => {
  domUpdates.hide([bookingSuccessView, myBookingsView]);
  domUpdates.show([bookARoomView])
  filteredRoomsContainer.classList.add('invisible');

}

const displayFilteredRooms = (event) => {
  event.preventDefault();
  inputDate = date.value.replace(/-/g, '/');
  let inputType = document.querySelector('input[name="roomType"]:checked');
  if(!inputDate) {
    domUpdates.showRequiredFieldMessage(date);
    return;
  } else {
    domUpdates.hideRequiredFieldMessage(date)
  }
  if(!inputType) {
    domUpdates.showRequiredFieldMessage(roomTypeSection);
    return
  } else {
    domUpdates.hideRequiredFieldMessage(roomTypeSection)
  }
  filteredRoomsContainer.classList.remove('invisible')
  customer.filterRoomsByDate(inputDate);
  customer.filterAvailibleRoomsByType(inputType.value);
  domUpdates.showAvailibleRooms(customer);
}


const makeNewBooking = (event) => {
  if(event.target.classList.contains('book-this-room-button')) {
    roomToBook = customer.roomsByType.find(room => {
      if(room.number === parseInt(event.target.id)) {
        return room
      }
    })
    postBooking(roomToBook, customer, inputDate)
  }
}

export const showSuccessMessage = () => {
  domUpdates.hide([bookARoomView]);
  domUpdates.show([bookingSuccessView])
  domUpdates.showBookedRoom(customer, roomToBook);
}

export const showErrorMessage = () => {
  domUpdates.hide([bookARoomView])
  domUpdates.show([bookingErrorView])
}

// const handleEmptyField = (input, element) => {
//   if(!input) {
//   domUpdates.showRequiredFieldMessage(element)
//   return return;
//   } else {
//   domUpdates.hideRequiredFieldMessage(element)
//   }
// }

//EVENT LISTENERS
window.addEventListener('load', fetchData);
loginButton.addEventListener('click', authenticateCustomer);
newBookingButton.addEventListener('click', displayBookARoom);
viewFilteredRoomsButton.addEventListener('click', displayFilteredRooms);
filteredRoomsContainer.addEventListener('click', makeNewBooking);
viewMyBookingsButton.addEventListener('click', displayMyBookings);
makeAnotherBookingButton.addEventListener('click', displayBookARoom)
myBookingsButton.addEventListener('click', displayMyBookings);

export { customer };
