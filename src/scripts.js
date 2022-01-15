// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { fetchCustomer, fetchBookings, fetchRooms } from './api-calls'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'



//QUERY SELECTORS
const usernameInput = document.querySelector('#usernameInput');
const passwordInput = document.querySelector('#passwordInput');


console.log('single customer', fetchCustomer(20));
console.log('bookings', fetchBookings());
console.log('rooms', fetchRooms());
//console.log ('Is this connected to the correct repo?')
const authenticateCustomer = () => {
  if(passwordInput.value === 'overlook2021') {
    const currentCustomer = customers.find(currentCust => {
      customer.ids
    })
    const customer = new Customer ()
  }
}
