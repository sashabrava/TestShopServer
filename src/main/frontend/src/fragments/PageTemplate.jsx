import React, { Component } from 'react';
import ShopNavBar from './ShopNavBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
