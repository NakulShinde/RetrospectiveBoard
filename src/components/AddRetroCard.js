import React, { Component} from "react";
import {Button, FormGroup, FormControl , Modal} from 'react-bootstrap/lib'

class AddRetroCard extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.onAddRetro = this.onAddRetro.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    onAddRetro() {
        this.props.afterAddRetro(this.state.value);
    }
    handleHide() {
        this.props.handleHideDialog();
    }

    render(){
        return(
            <Modal
                    show={this.props.showDialod}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                        <FormGroup controlId="formControlsTextarea">
                            <FormControl 
                                value={this.state.value}
                                onChange={this.handleChange}
                                componentClass="textarea" 
                                placeholder="Add Retrospective" />
                        </FormGroup>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onAddRetro}>Add</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
        );
    }
}

export default AddRetroCard;