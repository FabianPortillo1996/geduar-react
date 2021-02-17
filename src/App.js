import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import indexReducer from './Redux/index-reducer';
import {indexSagas} from './Redux/index-sagas';
import {createBrowserHistory} from "history";
import {UserScreen} from "./Screens/Users";
import {ListPostScreen} from "./Screens/Posts";
import {ListCommentScreen} from "./Screens/Comments";

const history = createBrowserHistory();

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    indexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(indexSagas);

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route exact path="/" component={UserScreen}/>
                <Route exact path="/posts/:id" component={ListPostScreen}/>
                <Route exact path="/posts/:id/comments" component={ListCommentScreen}/>
            </Router>
        </Provider>
    );
}

export default App;
