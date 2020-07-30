import React, { Fragment } from 'react';
import './index.css';
import { Headers } from '../../Components/Headers';


class Listing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className='listing-container' >
                <Headers />

                <div className="ads">
                </div>
            </div>

        )
    }
}
export default Listing;