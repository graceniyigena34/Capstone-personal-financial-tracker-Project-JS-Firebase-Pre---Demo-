This the deployed link: https://capstone-personal-financial-tracker-psi.vercel.app

## Financial Tracker Web Application


The Financial Tracker is a web application designed to help users manage personal finances efficiently. Users can track income and expenses, categorize transactions, and view summaries of their financial activities. The application uses Firebase for real-time database storage and authentication.


## Features

Add Transactions: Users can record income and expense transactions with details such as amount, date, description, and category.

Categories: Organize transactions into categories like Salary, Food, Entertainment, Bills, etc.

Dashboard: See total income, total expenses, and current balance at a glance.

Transaction History: View a detailed list of past transactions.

Firebase Integration: Real-time storage of transactions and user authentication.

Responsive Design: Optimized for desktop, tablet, and mobile devices.

User Authentication: Users can sign up, log in, and manage their own transactions securely.

## Technologies Used

Frontend: HTML, CSS, JavaScript

Backend / Database: Firebase Realtime Database or Firestore

Authentication: Firebase Authentication (Email & Password)

Libraries: Google Fonts,Chart.js for visualization

## Installation & Setup

Clone the repository:

git clone https://github.com/graceniyigena34/Capstone-personal-financial-tracker-Project-JS-Firebase-Pre---Demo-

Navigate to the project folder:

cd financial-tracker

Open index.html in your browser.

Firebase Configuration:

Create a Firebase project at Firebase Console.

Enable Firestore or Realtime Database.

Enable Email/Password Authentication.

Copy your Firebase configuration and add it to firebase-config.js:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_I
D.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
Usage

Open the web application in your browser.

Sign up or log in using your email.

## Add a transaction by entering:

Description

Amount

Type (Income or Expense)

Category

View your financial summary on the dashboard.

All transactions are stored in Firebase and synced in real-time.
