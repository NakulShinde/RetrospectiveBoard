import React, { Component} from "react"
import {Nav, NavItem} from 'react-bootstrap/lib'

class Sidebar extends Component {
    render(){
        return(
            <Nav bsStyle="pills" stacked activeKey={1}>
                <NavItem eventKey={1}>
                NavItem 1 content
                </NavItem>
                <NavItem eventKey={2}>
                NavItem 2 content
                </NavItem>
          </Nav>
        );
    }
}

export default Sidebar