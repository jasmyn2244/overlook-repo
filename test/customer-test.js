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



})
