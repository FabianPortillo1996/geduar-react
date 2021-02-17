import {GET_LIST_POST_USER_ERROR, GET_LIST_POST_USER_REQUESTING, GET_LIST_POST_USER_SUCCESS} from "./constants";

export const getListPostUserRequesting = (id) => ({
    type: GET_LIST_POST_USER_REQUESTING,
    id
});

export const getListPostUserSuccess = (posts) => ({
    type: GET_LIST_POST_USER_SUCCESS,
    posts
});

export const getListPostUserError = (error) => ({
    type: GET_LIST_POST_USER_ERROR,
    error: error
});
