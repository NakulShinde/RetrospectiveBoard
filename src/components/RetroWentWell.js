import React, { Component} from "react";

import RetroWallSections from "./RetroWallSections";

class RetroWentWell extends Component {
    constructor() {
		super();
		this.state = {
			retroData: []
		};
		this.onAddClick = this.onAddClick.bind(this);
    }
    
    onAddClick(retroData){
        console.log("Add clicked");
        this.setState(prevState => ({
            retroData: [...prevState.retroData, {text: retroData}]
        }))
    }

    render(){
        return(
           <RetroWallSections title={this.props.title} onAddClick={this.onAddClick} retroData={this.state.retroData}/>
        );
    }
}

export default RetroWentWell;