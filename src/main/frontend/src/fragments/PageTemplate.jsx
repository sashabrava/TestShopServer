import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopNavBar from './ShopNavBar';
import { Container } from 'react-bootstrap';

class PageTemplate extends Component {
    render() {
        return (
            <>
                <ShopNavBar/>
                <Container fluid>
                    {this.props.innerElement}
                </Container>
            </>
        );
    }
}
export default PageTemplate;
