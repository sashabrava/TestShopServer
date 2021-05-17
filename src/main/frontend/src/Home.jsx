import React, { Component } from 'react';
import './App.css';
import PageTemplate from './fragments/PageTemplate';
import { Link } from 'react-router-dom';
import { Button, } from 'react-bootstrap';

const innerElement = <Button variant="outline-primary">
<Link to="/items">Items</Link>
</Button>;

class Home extends Component {

	render() {
		return (
			<PageTemplate innerElement={innerElement}/>
		);
	}
}
export default Home;
