import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class ShopNavBar extends Component {

	render() {
		return <Navbar>
			<Nav.Item>
				<Nav.Link href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Link href="/old/">Old interface</Nav.Link>
			<Nav.Link href="/old/about">Old about</Nav.Link>
		</Navbar>;
	}}
