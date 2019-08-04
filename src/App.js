import React from 'react';
import Toolbar from './components/Toolbar'
import Contact from './components/Contact'
import { Router } from '@reach/router'
import './App.css';
import './assets/scss/base.scss'

function App() {
    const navLinks = [
      {
        text: 'Contact',
        path: '/contact',
        icon: 'ion-ios-megaphone'
      }
      // {
      //   text: 'About',
      //   path: '/about',
      //   icon: 'ion-ios-business'
      // },
      // {
      //   text: 'Blog',
      //   path: '/blog',
      //   icon: 'ion-ios-bonfire'
      // },
      // {
      //   text: 'Portfolio',
      //   path: '/portfolio',
      //   icon: 'ion-ios-briefcase'
      // }
    ]

    return (
      <div className="App">
          <Toolbar
            navLinks={ navLinks }
            imagePath={ require('./logo.svg') }
          ></Toolbar>
          <Router>
            <Contact path="/contact" />
          </Router>
      </div>
    )
}

export default App;
