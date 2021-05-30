import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useContext } from "react";
import {ThemeContext, interfaceLight, interfaceDark} from "./ThemeProvider";

const ShopNavBar = () => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
	console.log(currentTheme)
	return <Navbar>
		<Nav.Item>
			<Nav.Link href="/">Home</Nav.Link>
		</Nav.Item>
		<Nav.Link href="/old/">Old interface</Nav.Link>
		<Nav.Link href="/old/about">Old about</Nav.Link>
		<ToggleButtonGroup name='value' value={currentTheme} type='radio' onChange={val => setCurrentTheme(val)}>
			<ToggleButton value={interfaceLight} aria-label="Light" >abc</ToggleButton>
			<ToggleButton value={interfaceDark} aria-label="Dark" >def</ToggleButton>
		</ToggleButtonGroup>
	</Navbar>
}
export default ShopNavBar
