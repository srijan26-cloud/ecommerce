import './App.css';
import Home from './Components/Home/Home';
import { HashRouter as Router, Route, Link ,Switch } from "react-router-dom";
import Login from './Components/Login/Login';
import ContactUs from './Components/ContactUs/ContactUs';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import Register from './Components/Register/Register';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/Product' component={Product} />
            <Route exact path='/Register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
