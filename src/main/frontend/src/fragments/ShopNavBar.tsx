import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useContext } from "react";
import { ThemeContext, themeLight, themeDark } from "./ThemeProvider";

const ShopNavBar = () => {
  const { currentTheme, saveThemeViaId } = useContext(ThemeContext);
  return <Navbar bg={currentTheme.navBg} variant={currentTheme.navVariant}>
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Link href="/old/">Old interface</Nav.Link>
    <Nav.Link href="/old/about">Old about</Nav.Link>
    <ToggleButtonGroup name='value' value={currentTheme.themeId} type='radio' onChange={val => saveThemeViaId(val)}>
      <ToggleButton value={themeLight.themeId} aria-label="Light" >light</ToggleButton>
      <ToggleButton value={themeDark.themeId} aria-label="Dark" >dark</ToggleButton>
    </ToggleButtonGroup>
  </Navbar>
}
export default ShopNavBar;
