# pricelee-mern-frontend

The frontend server for Pricelee.
Pricelee is a price tracking service. It allows you to search products from popular online stores and to create alerts for the products you want to track after you sign up. You can use filters to improve the search and get more specific results.

For the moment, pricelee only supports calls to the ebay api. It can search by keywords, category id, and price range.

After a user is authenticated, they can add alerts, edit and delete them. They can see the complete list of the alerts they created.

The user is kept logged in by sending requests for new tokens every time the access token is expired.

The backend repository is located at [https://github.com/KhadidjaArezki/pricelee-mern-backend](https://github.com/KhadidjaArezki/pricelee-mern-backend)

The project is hosted at [https://pricelee-mern-backend.onrender.com/api](https://pricelee-mern-backend.onrender.com/api)

## Stack

This project uses the MERN stack:

- Mongoose.js (MongoDB): database
- Express.js: backend framework
- React: frontend framework + Redux
- Node.js: runtime environment

## State Managment

The app uses the Redux library to manage and update state through actions and RTK Query for authentication and automatic re-auth by sending refresh tokens in secure http-only cookies.

## Authors: Khadidja Arezki
