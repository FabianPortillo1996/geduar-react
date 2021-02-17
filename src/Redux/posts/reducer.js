import {GET_LIST_POST_USER_ERROR, GET_LIST_POST_USER_REQUESTING, GET_LIST_POST_USER_SUCCESS} from "./constants";

const initialState = {
    requesting: false,
    posts: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_POST_USER_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        case GET_LIST_POST_USER_REQUESTING:
            return {
                ...state,
                requesting: true,
                error: ''
            };
        case GET_LIST_POST_USER_SUCCESS :
            return {
                ...state,
                requesting: false,
                posts: action.posts,
                error: ''
            };
        default:
            return state;
    }
};

export default reducer;
