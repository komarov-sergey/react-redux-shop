import React from 'react'
import {Switch, Route} from 'react-router'

import Phones from 'containers/phones'

const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
  </Switch>
)

const Layout = () => <div>{routes}</div>

export default Layout
