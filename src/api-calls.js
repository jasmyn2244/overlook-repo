

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


export { fetchCustomer, fetchBookings, fetchRooms };
