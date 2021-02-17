import {call, all, put, takeEvery} from 'redux-saga/effects';
import {GET_LIST_POST_USER_REQUESTING} from "./constants";
import {getListPostUserError, getListPostUserSuccess} from "./actions";


const usersPostUrl = `${process.env.REACT_APP_API_URL}/users`;

const usersListPostsGetApi = (id) => {
    return fetch(`${usersPostUrl}/${id}/posts`, {
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

function* userListPostGetFlow(action) {
    try {
        const {id} = action;
        const posts = yield call(usersListPostsGetApi, id);
        yield put(getListPostUserSuccess(posts));
    } catch (error) {
        yield put(getListPostUserError(error));
    }
}

function* usersLisPostWatcher() {
    yield all([takeEvery(GET_LIST_POST_USER_REQUESTING, userListPostGetFlow)]);
}

export default usersLisPostWatcher;
