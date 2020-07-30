import { connect } from 'react-redux'
import { SelectState } from './Selector';
import Home from './Home';
import { OnChange, SearchAction } from '../../Redux/Actions/HomeActions'

const mapStateToProps = state => {
    return { ...SelectState(state) }

};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (params) => {
            dispatch(OnChange(params))
        },
        startSearch: (params) => {
            dispatch(SearchAction(params))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);