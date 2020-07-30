import { Default } from './initialState'
import { ON_CHANGE, SEARCH_LOADING, SEARCH_FAILED, SEARCH_SUCCESS } from '../../Constants'
export const HomeReducer = (state = Default(), action) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                data: action.payload
            }
        case SEARCH_LOADING:
            return {
                ...state,
                onLoading: true
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                onLoading: false,
                onSuccess: true,
                searchData: action.payload
            }
        case SEARCH_FAILED:
            return {
                ...state,
                onLoading: false,
                onError: true,
                onsuccess: false
            }
        default:
            return state;
    }
}