import {all, fork} from 'redux-saga/effects';
import userSaga from './users/sagas';
import postSaga from './posts/sagas';
import commentSaga from './comments/sagas';

export function* indexSagas() {
    yield all([
        fork(userSaga),
        fork(postSaga),
        fork(commentSaga)
    ])
}
