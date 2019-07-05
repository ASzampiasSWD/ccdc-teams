import React from 'react';
import './styles/App.css';
import Header from './components/header';
import logo from './images/ohio.svg';
import Footer from './components/footer';
import CollegeTable from './components/table';
import './styles/bootstrap.min.css';
import './styles/roboto.css';
import './styles/fontawesome.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

function App() {
  return (
    <div className="App">	
	<header className="App-header">
		<Header />	
		<br /><br /><br /><br />
		<CollegeTable state="Ohio" />
		 <img src={logo} alt="Logo" />
		</header>
		<Footer className="App-footer" />
    </div>
  );
}

export default App;
