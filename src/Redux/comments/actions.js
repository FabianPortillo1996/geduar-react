import {
    GET_LIST_COMMENT_POST_ERROR,
    GET_LIST_COMMENT_POST_REQUESTING,
    GET_LIST_COMMENT_POST_SUCCESS
} from "./constants";

export const getListCommentPostRequesting = (id) => ({
    type: GET_LIST_COMMENT_POST_REQUESTING,
    id
});

export const getListCommentPostSuccess = (comments) => ({
    type: GET_LIST_COMMENT_POST_SUCCESS,
    comments
});

export const getListCommentPostError = (error) => ({
    type: GET_LIST_COMMENT_POST_ERROR,
    error
});
