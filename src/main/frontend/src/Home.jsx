import React, { Component } from 'react';
import './App.css';
import PageTemplate from './fragments/PageTemplate';
import { Button, } from 'react-bootstrap';

const innerElement = <Button variant="outline-primary" href="/items">Items</Button>;

class Home extends Component {

	render() {
		return (
			<PageTemplate innerElement={innerElement}/>
		);
	}
}
export default Home;
