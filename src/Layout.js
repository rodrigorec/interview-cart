import { Link } from 'react-router-dom'

const Layout = ({ children }) => (
  <section>
    <header>
      <nav>
        <h4>MasterClass</h4>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/purchases">Purchases</Link>
      </nav>
    </header>
    <main>{children}</main>
  </section>
)

export default Layout
