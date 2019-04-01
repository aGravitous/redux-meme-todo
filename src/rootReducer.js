const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    console.log("IN REDUCER", state, action);

    switch (action.type) {
        case "ADD":
            let addAMeme = [...state.memes, action.payload];
            return { memes: addAMeme };

        case "DELETE":
            let deleteAMeme = state.memes.filter(m => m.id !== action.payload.id);
            return { memes: deleteAMeme };

        default:
            return state;
    }
}

export default rootReducer;