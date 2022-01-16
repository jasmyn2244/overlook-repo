class Customer {
  constructor(customer, bookings, rooms){
    this.id = customer.id;
    this.name = customer.name;
    this.bookingsData = bookings;
    this.rooms = rooms;
    this.myBookings = [];
    this.roomsByDate = [];
    this.bookingsFilteredByType = []
  }

  getBookings() {
    this.myBookings = [];
    this.bookingsData.forEach(booking => {
      if(booking.userID === this.id) {
        this.rooms.forEach(room => {
          if(booking.roomNumber === room.number) {
            this.myBookings.push({'date': booking.date, 'roomNumber': booking.roomNumber, 'roomType': room.roomType, 'bedSize': room.bedSize, 'numBeds': room.numBeds, 'costPerNight': room.costPerNight});
          }
        })
      }
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

  filterRoomsByDate(date) {
    //this.roomsByDate = [];
    let unavailableRooms = []
    this.rooms.forEach(room => {
      this.bookingsData.forEach(booking => {
        if(booking.roomNumber === room.number) {
          if(booking.date === date) {
            unavailableRooms.push(room);
          }
        }
      })
    })
    this.rooms.forEach(room => {
      if(!unavailableRooms.includes(room))  {
        this.roomsByDate.push(room);
      }
    })
    console.log(unavailableRooms);
    console.log(this.roomsByDate);
  }

  filterAvailibleBookingsByType(type) {
    this.bookingsFilteredByType = [];
    this.bookingsByDate.forEach(bookingByDate => {
      this.rooms.forEach(room => {
        if(room.number === bookingByDate.roomNumber) {
          if(room.roomType === type) {
            this.bookingsFilteredByType.push({'date': bookingByDate.date, 'roomNumber': bookingByDate.roomNumber, 'roomType': room.roomType, 'bedSize': room.bedSize, 'numBeds': room.numBeds, 'costPerNight': room.costPerNight})
          }
        }
      })
    })
  }
}


export default Customer
