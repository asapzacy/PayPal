# PayPal
![PayPal preview](https://raw.githubusercontent.com/zacarellano/PayPal/master/dist/assets/img/other/paypal_preview.png)

A coding challenge to create a sample PayPal checkout widget. You can add and manage payment methods used for checkout.

## Usage
```
git clone https://github.com/zacarellano/PayPal.git
cd PayPal
yarn
yarn start
```
then --> [localhost:8080](http://localhost:8080)

## Task

1. Node.js server - the app currently runs on a Node.js / Express backend and React / React Router frontend. The backend server is very basic and doesn't do much, runs on `http://localhost:9090`.

2. API endpoints - because of reasons below (#4), there's only one simple API call right now. On initial page load, a promise-based http request (using [axios](https://github.com/mzabriskie/axios)) is sent to `/api`, which returns an object of sample user data. The basic schema is show below.
  ```
    {
      user: 'zac',
      price: 88.08,
      paymentMethods: [
        {
          first: 'Zac',
          last: 'Arellano',
          type: 'Visa',
          cc: '4662 2194 7795 2314',
          expiration: '12/20',
          csc: '789'
        },
        ...
      ]
    }
  ```

3. desktop / mobile support - I didn't spend too much time perfecting the responsiveness / css, but it does work on desktop and mobile.

4. create / read / update / delete options - this (and the UI itself) is where I spent most of my time. Right now it will load in sample payments on page load, and from there you have the ability to -
  - add a new payment - user fills in payment info and creates a `newPaymentMethod` object which gets added to `this.state.paymentMethods` array
  - read existing payments - displays all payment methods and also shows which method is being used / preferred
  - update existing payment - clicking on the manage button will take you to `/managePayment/${perferredPaymentId}` which allows us to pre-populate the same component from adding a new method (`<EditPaymentInfo />`), from there we just update `this.state.paymentMethods` with the updated object
  - delete existing payment - I was following the preview images and never saw a delete icon or way to do that, so I actually haven't implemented this yet, but would follow the same ideology as adding or managing payment

## Note
It was a little awkward not using a database for this type of project - this is why there are minimal API calls and backend logic. I wanted to show off my abilities as best as possible, so I spent most of my time in areas I'm best at (frontend, UI). It's still fully functional, but a little awkward and a database would've been necessary in a production environment.
