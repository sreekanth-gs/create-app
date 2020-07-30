import React, { Fragment } from 'react';
import { Headers } from '../../Components/Headers';
import { SearchComponent } from '../../Components/SearchBar';
import './index.css'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    onSearch = (e) => {
        this.props.onSearch(e.target.value)
    }
    getSearch = (e, params) => {
        e.preventDefault()
        this.props.startSearch(params)
        this.props.history.push('./listing')
    }
    render() {
        return (
            <Fragment>
                <Headers />
                <SearchComponent {...this.props} onChange={this.onSearch} OnClick={this.getSearch} />
            </Fragment>
        )
    }
}
export default Home;