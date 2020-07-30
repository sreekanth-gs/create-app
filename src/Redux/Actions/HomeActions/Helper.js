import { API_BASE } from '../../../Utils/apiInstances';
export const getApi = (apiBody) => {
    return (
        API_BASE + apiBody
    )

}