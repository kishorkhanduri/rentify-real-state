# Rentify - Where Renting Meets Simplicity

## Introduction

**Rentify** is a web application designed to streamline the rental process by connecting property owners (sellers) with potential tenants (buyers). Built using Vite, React, Tailwind CSS, Node.js, Express, and MongoDB, Rentify leverages Firebase for Google authentication and storage services to enhance user experience and security.

## Table of Contents

- [Introduction](#introduction)
- [How to Clone and Run Locally](#how-to-clone-and-run-locally)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Application Flow](#application-flow)
  - [User Authentication](#user-authentication)
  - [Buyer Flow](#buyer-flow)
  - [Seller Flow](#seller-flow)
  - [Email Notifications](#email-notifications)
- [Deployment](#deployment)

## How to Clone and Run Locally

### Prerequisites

- Node.js and npm installed
- MongoDB instance running
- Firebase project setup for authentication and storage

### Steps

1. Clone the Repository:
    ```bash
    git clone https://github.com/your-username/rentify.git
    cd rentify
    ```

2. Setup Backend:
    - Navigate to the backend directory:
      ```bash
      cd api
      npm install
      ```
    - Create a `.env` file and add the following environment variables:
      ```
      MONGO=your_mongo_connection_string
      JWT_SECRET=your_jwt_secret
      ```
    - Start the backend server:
      ```bash
      npm run dev
      ```

3. Setup Frontend:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      npm install
      ```
    - Create a `.env` file and add the following environment variables:
      ```
      VITE_FIREBASE_API_KEY=your_firebase_api_key
      ```
    - Start the frontend development server:
      ```bash
      npm run dev
      ```

## Features

- **User authentication with Google login via Firebase**
- **Property listings with image storage on Firebase**
- **Filter properties by rent, sale, discounts, etc.**
- **Contact sellers via email notifications**
- **User and seller profile management**
- **Real-time property updates and notifications**

## Tech Stack

### Frontend

- **Vite**: Fast build tool for modern web projects. Used for building the React frontend quickly and efficiently.
- **React**: JavaScript library for building user interfaces. Used to create reusable UI components.
- **Tailwind CSS**: Utility-first CSS framework. Used for styling the application in a highly customizable way.
- **Redux Toolkit**: State management library. Used to manage the application state effectively.
- **Firebase**: Authentication and image storage. Used for Google login and storing property images.

### Backend

- **Node.js**: JavaScript runtime for server-side programming. Used to build the backend server.
- **Express**: Web framework for Node.js. Used to handle routing and middleware for the backend.
- **MongoDB**: NoSQL database. Used for storing user and property data.
- **JWT**: JSON Web Tokens for secure authentication. Used to manage user sessions securely.

## Dependencies

### Frontend

- `firebase`: Provides Firebase services for authentication and storage.
- `react`: Core React library for building user interfaces.
- `react-dom`: Provides DOM bindings for React.
- `react-icons`: Icon library for React, used to include icons in the UI.
- `react-redux`: Official React bindings for Redux, used to connect Redux with React components.
- `react-router-dom`: Declarative routing for React, used for navigation between different pages.
- `redux-persist`: Persist and rehydrate a Redux store, used to maintain the Redux state across page reloads.
- `swiper`: Modern mobile touch slider, used for creating carousels/sliders.

### Backend

- `bcryptjs`: Library to hash passwords, used for securing user passwords.
- `cookie-parser`: Parse cookie header and populate `req.cookies`, used to handle cookies.
- `cors`: Enable CORS with various options, used to allow cross-origin requests.
- `dotenv`: Load environment variables from `.env` file, used to manage environment variables.
- `express`: Web framework for Node.js, used to create the backend server.
- `jsonwebtoken`: JWT implementation, used for creating and verifying JSON Web Tokens.
- `mongoose`: MongoDB object modeling tool, used for defining schemas and interacting with the MongoDB database.
- `nodemon`: Monitor for changes in your source and automatically restart your server, used for development.

## Application Flow

### User Authentication

**Login/Register**:
- Users can register using their Google account via Firebase. This simplifies the authentication process and ensures security.
- Login is required to view seller details and contact sellers, ensuring that sensitive information is protected.

**JWT Token**:
- After successful authentication, users receive a JWT token, which is used to manage their session securely and persist their login state.

### Buyer Flow

**View Listings**:
- Buyers can browse all listed properties, seeing details such as location, price, description, and images.
- Filters are available for rent, sale, discounts, and other criteria to help buyers find properties that match their preferences.

**Property Details**:
- Clicking on a property shows detailed information, including images, description, price, and other relevant details.

**Contact Seller**:
- A "Contact" button is available for logged-in users to contact sellers. This ensures that only authenticated users can reach out to sellers.
- When a buyer shows interest, an email notification is sent to the seller, and the buyer receives the seller's contact details via email.

### Seller Flow

**Post Property**:
- Sellers can list new properties by filling out a form with details like name, description, price, images, and whether the property is for rent or sale.
- Images are uploaded and stored using Firebase Storage, ensuring they are securely stored and easily accessible.

**Manage Listings**:
- Sellers can view all their property listings, update details, or delete listings as needed.

**Profile Management**:
- Sellers can update their profile information, change passwords, and manage account details.
- If logged in via Google, the profile image is fetched and displayed automatically.

### Email Notifications

**Buyer Interest**:
- When a buyer clicks "I'm Interested," the seller is notified via email with details about the interested buyer.
- This ensures that sellers are promptly informed about potential interest in their properties.

## Deployment

- **Backend**: Deployed on Render platform. Render provides a simple and scalable way to deploy backend services.
- **Frontend**: Deployed on Render platform. Render offers a fast and reliable hosting service for frontend applications.
- **Database**: MongoDB cluster used for data storage, providing a scalable and secure database solution.

