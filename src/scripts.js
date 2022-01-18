// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { fetchCustomer, fetchBookings, fetchRooms, postBooking } from './api-calls';
import Customer from './customer';
import domUpdates from './dom-updates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'



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


let bookings;
let rooms;
let customer;
let inputDate;
let roomToBook;



export const fetchData = () => {
  Promise.all([fetchBookings(), fetchRooms()])
    .then(data => {
      bookings = data[0].bookings;
      rooms = data[1].rooms;
    })
    .catch(err => console.log(err))
}

// const customerPromise = new Promise(() => {
//   fetchCustomer(id))
// })
// const customerPromise = new Promise((fetchCustomer) => fetchCustomer(customerID));
// customerPromise.then(customer = new Customer(customerPromise, bookings, rooms))

const authenticateCustomer = (event) => {
  event.preventDefault();
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
  domUpdates.hide([loginView, bookARoomView]);
  domUpdates.show([myBookingsView, navButtonContainer]);
  customer.getBookings();
  customer.getTotalCostOfBookings();
  if(customer.myBookings.length === 0) {
    //display no bookings message
  } else {
    domUpdates.showMyBookings(customer);

    }
  }

const displayBookARoom = () => {
  domUpdates.hide([myBookingsView]);
  domUpdates.show([bookARoomView])
  filteredRoomsContainer.classList.add('invisible');

}

const displayFilteredRooms = (event) => {
  event.preventDefault();
  filteredRoomsContainer.classList.remove('invisible')
  inputDate = date.value.replace(/-/g, '/');
  let inputType = document.querySelector('input[name="roomType"]:checked').value;
  customer.filterRoomsByDate("inputDate");
  customer.filterAvailibleRoomsByType(inputType);
  domUpdates.showAvailibleRooms(customer);
}


const makeNewBooking = (event) => {
  console.log(event)
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
  console.log('error message placeholder')
}

//EVENT LISTENERS
window.addEventListener('load', fetchData);
loginButton.addEventListener('click', authenticateCustomer);

newBookingButton.addEventListener('click', displayBookARoom);

viewFilteredRoomsButton.addEventListener('click', displayFilteredRooms);

filteredRoomsContainer.addEventListener('click', makeNewBooking);
// myBookingsButton.addEventListener('click', displayMyBookings);

export { customer };
