# Overlook

## Table of Contents
  - [Description](#description)
  - [Technologies](#technologies)
  - [Install + Setup](#set-up)
  - [Wins](#wins)
  - [Challenges + Future Iterations](#challenges-+-Future)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)



## Description

This app allows users to search hotel rooms and make bookings. Users can filter hotel rooms by room type and by date. The app will keep track of all of the users bookings and their total cost.

##### Login
<img width="1440" alt="LoginView" src="https://user-images.githubusercontent.com/78129211/150028344-d3bf4899-92df-4858-b518-c9ed50d72198.png">
* To login:
   - use `customer50` as the username
   - use `overlook2021` as the passwordInput

##### My Bookings Dashboard
<img width="1440" alt="DashboardView" src="https://user-images.githubusercontent.com/78129211/150028305-7889bc4b-ae84-4855-b7fa-e9771222268e.png">
* You will see a 'My Bookings' view that shows all the bookings for that user with the total cost of those bookings.

##### Filter View
<img width="1440" alt="FilterView" src="https://user-images.githubusercontent.com/78129211/150028312-aaffb7fd-e9e2-4408-8167-9581a9244f4f.png">
* Click 'Book A Room' to see the filter. Select any date and any of the four room types.

##### Filtered Rooms Display
<img width="1440" alt="FilterRoomsView" src="https://user-images.githubusercontent.com/78129211/150028328-f993d7e1-a48d-4e43-8a4a-ec66fa219b9a.png">
* Once you click 'View Rooms', you will see all the rooms available (not already booked) on that date.
* When you find the room you want, click 'Book This Room, you'll be taken to a confirmation pageTitle

##### Booking Confirmation
<img width="1440" alt="ConfirmationMessage" src="https://user-images.githubusercontent.com/78129211/150028279-e8fd7f3b-4bd9-4455-8bcf-9ba822363aca.png">
* After celebrating your newly booked vacation, you can either brows more available rooms or checkout your bookings.

##### Error Message
<img width="1440" alt="ErrorMessage" src="https://user-images.githubusercontent.com/78129211/150028330-747b90c4-79ca-4338-abcf-c4f0a948cf4a.png">
* In the case that there is an error with the api call, the user will see this message. And the developer can view the error in the console.

## Installation and Setup

* Fork and clone the repo down to your local machine. [Github Repo Link](https://github.com/jasmyn2244/overlook-repo)
* `cd` into the directory
* Run `npm install`
* Run `npm start` and past the local host url in your browser
* You'll need a local API. To access the api, visit [API Repo](https://github.com/turingschool-examples/overlook-api) and clone it down to your machine
* `cd` into the directory
* Run `npm install`
* Run `npm start`
* LoginView
- use `customer50` as the username
- use `overlook2021` as the passwordInput


## Technologies

* Javascript
* eslint
* Atom
* WebPack
* API
* Mocha and Chai
* Sass
* Lighthouse

## Wins

* Being able to problem most of the major issues with my own toolbox.
* Creating a satisfying design
* Successful api calls and error handling
* Accessibility was very important and lighthouse scores are 100% for this project.

## Challenges and Future Iterations

* Ran into issues with css with the child elements overflowing out of the parent container to the flex start side. Learned that this is a flexbox issue that can be fixed by replacing `justify-content: center` with `margin: auto`.
* For the future, I'd like to make the login page more functional where a user can create their own username and password that can be added to the api.
* I'm also learning that it's better to represent all the api data with classes. In real life, we wouldn't want the user to have access to all the bookings so it makes sense to create a hotel class that store rooms and bookings.


## Contributors
[Jasmyn Hicks](https://github.com/jasmyn2244)
