import { ON_CHANGE } from '../../Constants'
export const onChange = params => {
    return dispatch => {
        dispatch({
            type: ON_CHANGE,
            payload: params
        }

        )
    }
}