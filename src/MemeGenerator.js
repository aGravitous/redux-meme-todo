import React, { Component } from 'react';
import { connect } from "react-redux";
import Meme from './Meme';
import MemeForm from './MemeForm';

class MemeGenerator extends Component {

    constructor(props) {
        super(props);
        this.addMeme = this.addMeme.bind(this);
    }

    addMeme(obj){
        console.log("IN ADD MEME", obj);
        this.props.dispatch({
            type: "ADD",
            payload: obj
        })
    }

    render() {
        const memes = this.props.memes.map( meme => 
            <Meme triggerDelete={ () => this.deleteMeme(meme.id) } key={ meme.id } data={ meme } />
        )
        return (
            <div>
                <MemeForm triggerAdd={ this.addMeme }/>
                { memes }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("IN MAP", state);
    return { memes: state.memes };
}

const connectToState =
    connect(mapStateToProps);

export default connectToState(MemeGenerator);