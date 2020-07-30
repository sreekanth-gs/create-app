import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routesList } from './routeList'
import ReduxProvider from './reduxConfig';
import '../Styles/index'

class App extends React.Component {
    render() {
        const routeComponents = routesList.map(({ path, components }, key) => <Route path={path} key={key} component={components} />)
        return (
            <ReduxProvider>
                <Router>
                    <Switch>
                        {routeComponents}
                    </Switch>
                </Router>
            </ReduxProvider>
        )
    }
}
export default App;
