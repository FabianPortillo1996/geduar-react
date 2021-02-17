import {GET_USER_ERROR, GET_USER_REQUESTING, GET_USER_SUCCESS} from "./constants";

export const getUserRequesting = () => ({
    type: GET_USER_REQUESTING
});

export const getUserSuccess = (users) => ({
    type: GET_USER_SUCCESS,
    users
});

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    error : error
});
