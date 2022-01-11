const INITIAL_STATE = {
    listLucas: [],
}

const listLucasReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'ADD_LUCAS') {
        return {
            listLucas: [...state.listLucas, 'Lucas']
        }
    }
    else {
        return state;
    }
}

export default listLucasReducer
