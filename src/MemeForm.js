import React, { Component } from 'react';

class MemeForm extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <form className="MemeForm" onSubmit={this.handleSubmit}>

                </form>
            </div>
        );
    }
}

export default MemeForm;