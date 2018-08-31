import React, {Component} from "react"
import {Button, Panel} from 'react-bootstrap/lib'

import RetroWallCard from "./RetroWallCard"
import AddRetroCard from './AddRetroCard';

import './RetroWallSections.css';

class RetroWallSections extends Component {
    constructor() {
        super();
        this.state = {
            showDialod: false
        }
        this.afterAddRetro = this.afterAddRetro.bind(this);
        this.onAddRetroClick = this.onAddRetroClick.bind(this);
        this.handleHideDialog = this.handleHideDialog.bind(this);
    }
    onAddRetroClick(){
        this.setState({showDialod: true});
    }
    afterAddRetro(retroData) {
        this.setState({showDialod: false});
        this.props.onAddClick(retroData);
    }
    handleHideDialog() {
        this.setState({showDialod: false});
    }

    render() {
        return (
            <Panel>
                <Panel.Heading className="heading-hight">
                    <Panel.Title componentClass="h3" className="pull-left">
                        {this.props.title} </Panel.Title>
                    <Button bsStyle="primary" onClick={this.onAddRetroClick} className="pull-right">
                        +</Button>
                </Panel.Heading>
                <Panel.Body>
                    {
                        this.props.retroData.map(function(retro, index){
                            return <RetroWallCard key={ index } retro={retro}/>;
                        })
                    }
                    {/* <RetroWallCard/>
                    <RetroWallCard/> */}
                </Panel.Body>
                
                <AddRetroCard 
                    showDialod={this.state.showDialod} 
                    handleHideDialog={this.handleHideDialog}
                    afterAddRetro={this.afterAddRetro}/>
            </Panel>
        );
    }
}

export default RetroWallSections