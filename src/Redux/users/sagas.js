import {call, all, put, takeEvery} from 'redux-saga/effects';
import {GET_USER_REQUESTING} from "./constants";
import {getUserError, getUserSuccess} from "./actions";


const usersUrl = `${process.env.REACT_APP_API_URL}/users`;

const usersGetApi = () => {
    return fetch(`${usersUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(json => {
            if(json.length > 0){
                return json;
            }
            throw json.data;
        })
        .catch(error => {
            throw error;
        });
};

function* userGetFlow() {
    try {
        const users = yield call(usersGetApi);
        yield put(getUserSuccess(users));
    } catch (error) {
        yield put(getUserError(error));
    }
}

function* usersWatcher() {
    yield all([takeEvery(GET_USER_REQUESTING, userGetFlow)]);
}

export default usersWatcher;
