const bookings = [
  {
    "id": "5fwrgu4i7k55hl6t7",
    "userID": 20,
    "date": "2022/02/16",
    "roomNumber": 7,
    "roomServiceCharges": []
  },
  {
  "id": "5fwrgu4i7k55hl6ui",
  "userID": 20,
  "date": "2022/02/07",
  "roomNumber": 24,
  "roomServiceCharges": []
},
{
  "id": "5fwrgu4i7k55hl6yr",
  "userID": 20,
  "date": "2022/02/05",
  "roomNumber": 2,
  "roomServiceCharges": []
},
{
  "id": "5fwrgu4i7k55hl75n",
  "userID": 20,
  "date": "2022/01/18",
  "roomNumber": 13,
  "roomServiceCharges": []
},
{
  "id": "5fwrgu4i7k55hl7fv",
  "userID": 20,
  "date": "2022/02/16",
  "roomNumber": 12,
  "roomServiceCharges": []
},
{
    "id": "5fwrgu4i7k55hl7lm",
    "userID": 33,
    "date": "2022/01/21",
    "roomNumber": 16,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl7lp",
    "userID": 11,
    "date": "2022/02/01",
    "roomNumber": 14,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl7lt",
    "userID": 5,
    "date": "2022/01/18",
    "roomNumber": 25,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl7lu",
    "userID": 28,
    "date": "2022/02/09",
    "roomNumber": 18,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl7ly",
    "userID": 31,
    "date": "2022/02/04",
    "roomNumber": 16,
    "roomServiceCharges": []
  },
]


//ROOMS
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------

const rooms = [
  {
  "number": 2,
  "roomType": "suite",
  "bidet": false,
  "bedSize": "full",
  "numBeds": 2,
  "costPerNight": 477.38
  },
  {
    "number": 7,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 231.46
  },
  {
  "number": 12,
  "roomType": "single room",
  "bidet": false,
  "bedSize": "twin",
  "numBeds": 2,
  "costPerNight": 172.09
  },
  {
    "number": 13,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 423.92
  },
  {
    "number": 14,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 457.88
  },
  {
    "number": 15,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 294.56
  },
  {
    "number": 16,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 325.6
  },
  {
    "number": 17,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 328.15
  },
  {
    "number": 18,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 496.41
  },
  {
    "number": 19,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 374.67
  },
  {
  "number": 24,
  "roomType": "suite",
  "bidet": false,
  "bedSize": "queen",
  "numBeds": 1,
  "costPerNight": 327.24
  },
]

//CUSTOMERS
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------

const customers = [
  {
    "id": 20,
    "name": "Keon Kirlin"
  },
  {
    "id": 21,
    "name": "Kelsie Rath"
  },
  {
    "id": 22,
    "name": "Amalia Rowe"
  },
  {
    "id": 23,
    "name": "Angus Swift"
  },
  {
    "id": 24,
    "name": "Salvatore Marquardt"
  },
]

export default {bookings, rooms, customers};
