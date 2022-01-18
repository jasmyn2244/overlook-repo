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

  it('Should instatiate a new instance of Customer', () => {
    expect(customer20).to.be.an.instanceOf(Customer);
  })

  it('Should have default parameters for its properies', () => {
    expect(customer20.myBookings).to.be.an('array');
    expect(customer20.roomsByDate).to.be.an('array');
    expect(customer20.roomsByType).to.be.an('array');
    expect(customer20.totalCostOfBookings).to.equal(0);
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
    customer20.getTotalCostOfBookings();

    expect(customer20.totalCostOfBookings).to.equal(1632.09);
    customer22.getBookings();
    customer22.getTotalCostOfBookings();
    expect(customer22.totalCostOfBookings).to.equal(0);
  })

  it('Should be able to filter availible rooms by date', () => {
    customer20.filterRoomsByDate("2022/02/16");
    expect(customer20.roomsByDate.length).to.equal(9);
  })

  it('Should be able to filter rooms availible on a certain date by room type', () => {
    customer20.filterRoomsByDate("2022/02/16");
    customer20.filterAvailibleRoomsByType('single room');
    expect(customer20.roomsByType.length).to.equal(3);

    customer20.filterAvailibleRoomsByType('suite')
    expect(customer20.roomsByType.length).to.equal(2);
  })

})
