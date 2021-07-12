import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/purchases">
          <Purchases />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Layout>
  </Router>
)

export default Routes
