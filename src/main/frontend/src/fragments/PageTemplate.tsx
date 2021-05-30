import React, { useContext } from 'react';
import ShopNavBar from './ShopNavBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, ThemeContext } from "./ThemeProvider";
import {Helmet} from 'react-helmet';

export const PageTemplateInner: React.FC<{ innerElement: React.ReactNode }> = ({ innerElement }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
  <div>
    <Helmet>
        <style>{`body { background-color: ${currentTheme.backgroundColor}; }`}</style>
    </Helmet>

      <ShopNavBar />
      <Container fluid>
        {innerElement}
      </Container>
    </div>
  );
}
export const PageTemplate: React.FC<{ innerElement: React.ReactNode }> = ({ innerElement }) => {
  return <ThemeProvider>
    <PageTemplateInner innerElement={innerElement} />
  </ThemeProvider>
}
export default PageTemplate
