class Customer {
  constructor(customer, bookings, rooms){
    this.id = customer.id;
    this.name = customer.name;
    this.bookingsData = bookings;
    this.rooms = rooms;
    this.myBookings = [];
    this.bookingsByDate = [];
    this.roomsByDate = [];
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
            this.roomsByDate.push(room)
          }
        })
      }
    })
  }

  filterAvailibleRoomsByType(type) {
    let roomsToReturn = []
    this.roomsByDate.forEach(roomByDate => {
      this.rooms.forEach(room => {
        if(room === roomByDate) {
          if(room.roomType === type) {
            roomsToReturn.push(room)
          }
        }
      })
    })
    return roomsToReturn
  }

}


export default Customer
