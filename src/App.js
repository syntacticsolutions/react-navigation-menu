import React from 'react';
import { Router } from '@reach/router'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import logo from './logo.svg';
import './App.css';

function App() {
	const navLinks = [
		{
			text: 'Home',
			path: '/',
			icon: 'ion-ios-home'
		},
		{
			text: 'Contact',
			path: '/contact',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'About',
			path: '/about',
			icon: 'ion-ios-business'
		},
		{
			text: 'Blog',
			path: '/blog',
			icon: 'ion-ios-bonfire'
		},
		{
			text: 'Portfolio',
			path: '/portfolio',
			icon: 'ion-ios-briefcase'
		}
	]

	return (
		<div className="App">
			<ResponsiveNavigation
				navLinks={ navLinks }
				logo={ logo }
				background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
			<Router>
				<Contact path="/contact" />
				<Home path="/home" />
				<Portfolio path="/portfolio" />
				<Blog path="/blog" />
				<About path="/about" />
			</Router>
		</div>
	);
}
export default App;
