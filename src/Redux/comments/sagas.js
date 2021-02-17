import {call, all, put, takeEvery} from 'redux-saga/effects';
import {GET_LIST_COMMENT_POST_REQUESTING} from "./constants";
import {
    getListCommentPostError,
    getListCommentPostSuccess
} from "./actions";


const postCommentUrl = `${process.env.REACT_APP_API_URL}/posts`;

const commentsListPostsGetApi = (id) => {
    return fetch(`${postCommentUrl}/${id}/comments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(json => {
            if (json.length > 0) {
                return json;
            }
            throw json.data;
        })
        .catch(error => {
            throw error;
        });
};

function* commentListPostGetFlow(action) {
    try {
        const {id} = action;
        const comments = yield call(commentsListPostsGetApi, id);
        yield put(getListCommentPostSuccess(comments));
    } catch (error) {
        yield put(getListCommentPostError(error));
    }
}

function* commentsLisPostWatcher() {
    yield all([takeEvery(GET_LIST_COMMENT_POST_REQUESTING, commentListPostGetFlow)]);
}

export default commentsLisPostWatcher;
