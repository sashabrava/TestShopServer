import React from 'react';
import ShopNavBar from './ShopNavBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "./ThemeProvider";

const PageTemplate = ({innerElement}) =>  {
  return (
    <ThemeProvider>
      <ShopNavBar/>
      <Container fluid>
        {innerElement}
      </Container>
    </ThemeProvider>
  );
}
export default PageTemplate;
