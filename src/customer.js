class Customer {
  constructor(customer, bookings, rooms){
    this.id = customer.id;
    this.name = customer.name;
    this.bookingsData = bookings;
    this.rooms = rooms;
    this.myBookings = []
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
}


export default Customer
