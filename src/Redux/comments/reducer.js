import {
    GET_LIST_COMMENT_POST_ERROR,
    GET_LIST_COMMENT_POST_REQUESTING,
    GET_LIST_COMMENT_POST_SUCCESS
} from "./constants";

const initialState = {
    requesting: false,
    comments: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_COMMENT_POST_ERROR:
            return {
                ...state,
                requesting: false,
                error: action.error
            };
        case GET_LIST_COMMENT_POST_REQUESTING:
            return {
                ...state,
                requesting: true,
                error: ''
            };
        case GET_LIST_COMMENT_POST_SUCCESS :
            return {
                ...state,
                requesting: false,
                comments: action.comments,
                error: ''
            };
        default:
            return state;
    }
};

export default reducer;
