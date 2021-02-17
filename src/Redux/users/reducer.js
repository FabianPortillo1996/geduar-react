import {GET_USER_ERROR, GET_USER_REQUESTING, GET_USER_SUCCESS} from "./constants";

const initialState = {
    requesting: false,
    users: [],
    error : ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ERROR:
            return {
                ...state,
                requesting: false,
                error : action.error
            };
        case GET_USER_REQUESTING:
            return {
                ...state,
                requesting: true,
                error : ''
            };
        case GET_USER_SUCCESS :
            return {
                ...state,
                requesting: false,
                users: action.users,
                error : ''
            };
        default:
            return state;
    }
};

export default reducer;
