import React from 'react'
import routes from '../shared/routes'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
         {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
        </Switch>
      </div>
    )
  }
}

export default App