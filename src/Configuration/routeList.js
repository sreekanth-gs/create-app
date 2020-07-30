import Home from '../Routes/Home'
import Listing from '../Routes/Listing'

export const routesList = [
    {
        path: '/listing',
        components: Listing

    }, {
        path: '/',
        components: Home
    }]