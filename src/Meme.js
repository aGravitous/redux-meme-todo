import React, { Component } from 'react';

class Meme extends Component {
    render() {
        return (
            <div className="Meme">
                <p>{ this.props.data.topText }</p>
                <img src={ this.props.data.imgUrl } alt="meme pic" />
                <p>{ this.props.data.botText }</p>
                <button onClick={ this.props.triggerDelete }>X</button>
            </div>
        );
    }
}

export default Meme;