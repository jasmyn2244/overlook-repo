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

})
