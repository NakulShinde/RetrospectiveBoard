import React, { Component} from "react";
import {Navbar} from 'react-bootstrap/lib';

class Header extends Component{
    render(){
        return (
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
        );
    }
}

export default Header;