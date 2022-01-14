class Customer {
  constructor(customer, bookings, rooms){
    this.id = customer.id;
    this.name = customer.name;
    this.bookingsData = bookings;
    this.rooms = rooms;
    this.myBookings = [];
    this.bookingsByDate = [];
    this.roomDetailsByDate = [];
  }

  getBookings() {
    this.bookingsData.forEach(booking => {
      if(booking.userID === this.id) {
        this.myBookings.push(booking);
      };
    })
  }

  getTotalCostOfBookings() {
    return this.myBookings.reduce((acc, booking) => {
      this.rooms.forEach(room => {
        if(booking.roomNumber === room.number) {
          acc += room.costPerNight;
        }
      })
      return acc
    }, 0)
  }

  filterBookingsByDate(date) {
    this.bookingsData.forEach(booking => {
      if(booking.date === date) {
        this.bookingsByDate.push(booking)
        this.rooms.forEach(room => {
          if(booking.roomNumber === room.number) {
            this.roomDetailsByDate.push(room)
          }
        })
      }
    })
      // booking => {
      // if(booking.date === date) {
      //   this.bookingsByDate.push(booking);
      // }
    }
}


export default Customer
