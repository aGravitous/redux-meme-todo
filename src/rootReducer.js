const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    let newMemes;
    switch (action.type) {
        case "ADD":
            newMemes = [...state.memes, action.payload];
            return { memes: newMemes };

        case "DELETE":
            newMemes = state.memes.filter(m => m.id !== action.payload.id);
            return { memes: newMemes };

        default:
            return state;
    }
}

export default rootReducer;