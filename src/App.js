import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage'
import firebaseConfig from './Firebase/firebaseConnection';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
