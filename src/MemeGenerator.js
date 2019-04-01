import React, { Component } from 'react';
import { connect } from "react-redux";
import Meme from './Meme';
import MemeForm from './MemeForm';

class MemeGenerator extends Component {

    render() {
        return (
            <div>
                <Meme />
                <MemeForm />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { memes: state.memes };
}

const connectToState =
    connect(mapStateToProps);

export default connectToState(MemeGenerator);