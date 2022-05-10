# Getting Started with 'Electronics Inventory Management'

### First of all, let's check out the live site: [Electronics Inventory Management](https://fullstack-warehouse-management.web.app/)

'Electronics Inventory Management' is a warehouse management app. It is based on Javascript React library. For the server-side, used Node.js and mongoDB as database. It is very easy to use. Here you can add your products by adding all the information and manage stock, delivery, sell information. Also you can easily find out the most selling products and the items which needs to re-stock again.

## Some key features of this app

- It has a nice navbar and a professional footer, both are device-friendly
- To reduce the long height of the homepage, we have only set 6 items here and a button to see all the items on another page
- On homepage, you can see 6 most popular/most selling items based on your sell data
- Also you can see the items which stock quantities are less than 40 to give you a reminder for re-stocking the product. There is also a dedicated menu to check sold out products which stock quantity is zero.
- For every items, you will find two buttons. One is for managing the stock and another one is for deleting the item.
- For managing the item, you need to login first. After login, you can deliver that specific item. For each delivery, the stock quantity will be decreased and sold quantity will be increased.
- From here you can add new stock for this item or delete this item.
- After login, you will be able to see your own added items and you can add a new item.
- To register as a new user, you can go with email password system or continue with google/github. There is also email verification and reset password features

## Technologies we have used

For the client-side of this app, we have used the following technologies...

- React App
- React Router
- React Icons
- Tailwind CSS
- React Toastify
- React Environment Variable to secure Firebase auth keys
- Firebase Authentication
- Firebase Hosting

For the server-side of this app, we have used the following technologies...

- Node.JS
- MongoDB
- DotENV to secure database credentials
- CORS middleware
- Nodemon
