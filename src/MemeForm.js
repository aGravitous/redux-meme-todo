import React, { Component } from 'react';
import uuid from 'uuid/v4';

class MemeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            topText: "",
            botText: "",
            imgUrl: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        // send states up to MemeGenerator to be added to Redux state
        this.props.triggerAdd({...this.state, id: uuid()});
        // clear state
        this.setState({
            topText: "",
            botText: "",
            imgUrl: "",
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    render() {
        return (
            <div>
                <form className="MemeForm" onSubmit={ this.handleSubmit }>
                    <label htmlFor="topText">Top Text</label>
                    <input name="topText" id="topText" value={ this.state.topText } onChange={ this.handleChange } required />
                    <label htmlFor="botText">Bottom Text</label>
                    <input name="botText" id="botText" value={ this.state.botText } onChange={ this.handleChange } required />
                    <label htmlFor="imgUrl">Image URL</label>
                    <input name="imgUrl" id="imgUrl" value={ this.state.imgUrl } onChange={ this.handleChange } type="url" required />
                    <button>Add Meme</button>
                </form>
            </div>
        );
    }
}

export default MemeForm;