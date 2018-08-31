import React, { Component} from "react";
import {Panel} from 'react-bootstrap/lib';
import "./RetroWallCard.css";

class RetroWallCard extends Component {
    render(){
        return(
            <Panel className="retro-wall-card">
                <Panel.Body>{this.props.retro.text}</Panel.Body>
            </Panel>
        );
    }
}

export default RetroWallCard;