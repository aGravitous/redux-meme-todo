import React, { Component } from 'react';
import { connect } from "react-redux";
import Meme from './Meme';
import MemeForm from './MemeForm';

class MemeGenerator extends Component {

    constructor(props) {
        super(props);
        this.addMeme = this.addMeme.bind(this);
        this.deleteMeme = this.deleteMeme.bind(this);
        this.updateMeme = this.updateMeme.bind(this);
    }

    addMeme(obj){
        console.log("IN ADD MEME", obj);
        this.props.dispatch({
            type: "ADD",
            payload: obj
        })
    }

    deleteMeme(id){
        console.log("IN DELETE MEME", id);
        this.props.dispatch({
            type: 'DELETE',
            payload: { id }
        });
    }

    updateMeme(obj){
        console.log("IN UPDATE MEME", obj);
        this.props.dispatch({
            type: 'UPDATE',
            payload: obj
        });
    }

    // Update meme not yet done. Need to make Meme itself display
    // a form for updating so that it can triggerUpdate.
    render() {
        const memes = this.props.memes.map( meme => 
            <Meme triggerDelete={ this.deleteMeme }
                  triggerUpdate={ this.updateMeme }
                  key={ meme.id }
                  topText={ meme.topText }
                  botText={ meme.botText }
                  imgUrl={ meme.imgUrl } />
        )
        return (
            <div>
                <MemeForm triggerAdd={ this.addMeme } />
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