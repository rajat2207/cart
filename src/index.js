import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbeXJvOFtf57ZFsdQJuju1JXTKq0CrS8g",
  authDomain: "cart-ffcc4.firebaseapp.com",
  databaseURL: "https://cart-ffcc4.firebaseio.com",
  projectId: "cart-ffcc4",
  storageBucket: "cart-ffcc4.appspot.com",
  messagingSenderId: "421441245176",
  appId: "1:421441245176:web:ac321c64aabd2c59c8d00d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


