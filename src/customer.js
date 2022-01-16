class Customer {
  constructor(customer, bookings, rooms){
    this.id = customer.id;
    this.name = customer.name;
    this.bookingsData = bookings;
    this.rooms = rooms;
    this.myBookings = [];
    this.roomsByDate = [];
    this.roomsByType = [];
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
    this.roomsByDate = [];
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
  }

  filterAvailibleRoomsByType(type) {
    this.roomsByType = [];
    this.roomsByDate.forEach(roomByDate => {
      if(roomByDate.roomType === type) {
        this.roomsByType.push(roomByDate);
      }
    })
  }
}


export default Customer
