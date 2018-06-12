import React, { Component} from "react";
import {Grid, Row, Col, Navbar, Nav, NavItem, Well} from 'react-bootstrap/lib';

class Home extends Component{
    render(){
      return(
        <Grid>
        <Row className="show-grid">
          <Col sm={12} md={12}>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Welcome to React Chat App!</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Text>By Nakul Shinde!</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={4} md={3}>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <NavItem eventKey={1}>
                NavItem 1 content
              </NavItem>
              <NavItem eventKey={2}>
                NavItem 2 content
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8} md={9}>
            <Well bsSize="small">Messages will appear here!</Well>
          </Col>
        </Row>
        </Grid>
      );
    }
}
export default Home;