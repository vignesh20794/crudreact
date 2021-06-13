import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './Createcomp';
import Edit from './Editcomp';
import List from './Listcomp';

function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/list'} className="navbar-brand">Simple CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
              <Link to={'/list'} className="nav-link">List</Link>
            </li>
          </ul>
        </div>
      </nav> <br/>
      <Switch>
          <Route exact path='/create' component={ Create } />
          <Route path='/edit/:id' component={ Edit } />
          <Route path='/list' component={ List } />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
