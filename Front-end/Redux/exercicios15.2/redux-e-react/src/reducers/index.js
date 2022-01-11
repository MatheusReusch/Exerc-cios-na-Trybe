const INITIAL_STATE = {
    list: [],
}
const listReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'ADD_ELEMENT') {
        return {
            list: [...state.list, action.value]
        }
    }
    else {
        return state;
    }
}

export default listReducer
