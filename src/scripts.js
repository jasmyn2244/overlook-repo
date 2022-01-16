// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { fetchCustomer, fetchBookings, fetchRooms } from './api-calls';
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



let bookings;
let rooms;
let customer;



const fetchData = () => {
  Promise.all([fetchBookings(), fetchRooms()])
    .then(data => {
      console.log(data[1].rooms);
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

const authenticateCustomer = () => {
  if(passwordInput.value === 'overlook2021') {
    const customerID = usernameInput.value.replace( /^\D+/g, '');
    Promise.all([fetchCustomer(customerID)])
      .then(data => {
        customer = (new Customer(data[0], bookings, rooms))
        displayMyBookings()
        console.log(customer)
      })
    }
  }

const displayMyBookings = () => {
  domUpdates.hide([loginView]);
  domUpdates.show([myBookingsView]);
  customer.getBookings();
  customer.getTotalCostOfBookings();
  if(customer.myBookings.length === 0) {
    //domUpdates.showNoBookingsMessage();
  } else {
    domUpdates.showMyBookings(customer);

    }
  }





//EVENT LISTENERS
window.addEventListener('load', fetchData);
loginButton.addEventListener('click', authenticateCustomer);

export { customer };
