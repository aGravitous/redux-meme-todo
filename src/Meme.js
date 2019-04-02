import React, { Component } from 'react';

class Meme extends Component {
    
    deleteMe() {
        this.props.triggerDelete(this.props.id);
    }

    updateMe() {
        this.props.triggerUdate(this.props.id);
    }

    // Need to add state and a small form in order to update.
    render() {
        return (
            <div className="Meme">
                <p>{ this.props.topText }</p>
                <img src={ this.props.imgUrl } alt="meme pic" />
                <p>{ this.props.botText }</p>
                <button onClick={ this.deleteMe }>X</button>
                <button onClick={ this.UpdateMe }>Modify</button>
            </div>
        );
    }
}

export default Meme;