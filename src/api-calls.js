import { fetchData, showSuccessMessage, showErrorMessage} from './scripts';

const fetchCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
}

const fetchBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
   .then(response => response.json())
}

const fetchRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
}

const postBooking = (selectedRoom, customer, date) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userID: customer.id, date: date, roomNumber: selectedRoom.number }),
    })
  .then(response => {
    if(response.ok) {
      showSuccessMessage()
      fetchData()
    } else if (!response.ok) {
      throw new Error (`Error: ${respnse.body}`)
    }
  })
  .catch(err => {
    console.log(err)
    showErrorMessage()
  })
}



export { fetchCustomer, fetchBookings, fetchRooms, postBooking };
