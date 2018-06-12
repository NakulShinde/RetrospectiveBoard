import React, { Component} from "react"
import {Grid, Row, Col} from 'react-bootstrap/lib'

import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContainer'

class Home extends Component{
    render(){
      return(
        <Grid>
        <Row className="show-grid">
          <Col sm={12} md={12}>
            <Header></Header>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={4} md={3}>
           <Sidebar></Sidebar>
          </Col>
          <Col sm={8} md={9}>
            <MainContent></MainContent>
          </Col>
        </Row>
        </Grid>
      );
    }
}
export default Home