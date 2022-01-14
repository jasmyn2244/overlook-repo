import chai from 'chai';
const expect = chai.expect;
import { bookings, customers, rooms } from '../src/test-data-sets';
import Customer from '../src/customer'

describe('Customer', () => {

  let customer20;
  let customer22;

  beforeEach(() => {
    customer20 = new Customer(customers[0], bookings, rooms);
    customer22 = new Customer(customers[2], bookings, rooms);
  })

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  })

  it('Should instatiat a new instanct of Customer', () => {
    expect(customer20).to.be.an.instanceOf(Customer);
  })

  it('Should be able to take in arguments', () => {
    expect(customer20.bookingsData[0].roomNumber).to.equal(7);
    expect(customer20.rooms[0].number).to.equal(2);
  })

  it('Should be able to retrive all its bookings', () => {
    customer20.getBookings();

    expect(customer20.myBookings.length).to.equal(5);
    customer22.getBookings();
    expect(customer22.myBookings.length).to.equal(0);
  })

  it('Should be able to total the cost of its bookings', () => {
    customer20.getBookings();

    expect(customer20.getTotalCostOfBookings()).to.equal(1632.09);
    customer22.getBookings();
    expect(customer22.getTotalCostOfBookings()).to.equal(0);
  })

  it('Should be able to filter bookings by date', () => {
    customer20.filterBookingsByDate("2022/02/16");

    expect(customer20.bookingsByDate.length).to.not.equal(0);
    expect(customer20.roomsByDate[0].number).to.equal(7);
  })

  it('Should be able to filter rooms availible on a certain date by room type', () => {
    customer20.filterBookingsByDate("2022/02/16");
    expect(customer20.filterAvailibleRoomsByType('single room').length).to.equal(2);
    expect(customer20.filterAvailibleRoomsByType('suite').length).to.equal(0);
  })
})
