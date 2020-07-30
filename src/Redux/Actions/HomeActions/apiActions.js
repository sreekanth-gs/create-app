import React from 'react'
import { SEARCH_LOADING, SEARCH_SUCCESS, SEARCH_FAILED } from '../../Constants';
import { getApi } from './Helper'
import axios from 'axios'

export const SearchAction = (apiBody) => {
    let API_REQUEST = getApi(apiBody)
    return dispatch => {
        dispatch({ type: SEARCH_LOADING });
        return axios.post(API_REQUEST)
            .then(res =>
                dispatch({ type: SEARCH_SUCCESS, payload: res })
            ).catch(err =>
                dispatch(SEARCH_FAILED, err)
            );
    };
};