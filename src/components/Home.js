import React, { Component} from "react"
import {Grid, Row, Col} from 'react-bootstrap/lib'

import Header from './Header';
import RetroWentWell from './RetroWentWell';

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
          <Col sm={12} md={6}>
            <RetroWentWell retroType='retro-went-well' title='What went well'></RetroWentWell>
          </Col>
          <Col sm={12} md={6}>
            <RetroWentWell retroType='retro-improved' title='What can be improved'></RetroWentWell>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={6}>
            <RetroWentWell retroType={'retro-start-doing'} title='start doing'></RetroWentWell>
          </Col>
          <Col sm={12} md={6}>
            <RetroWentWell retroType={'retro-actions-items'} title='Action Items'></RetroWentWell>
          </Col>
        </Row>
        </Grid>
      );
    }
}
export default Home