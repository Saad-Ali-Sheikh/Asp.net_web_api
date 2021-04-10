//import logo from './logo.svg';
// import './App.css';
// import Table from './User_table/User_table'
// import AddStudent from './Category/AddCategory'

// fetch("https://localhost:44324/api/Users")
//         .then(response=>response.json())
//         .then(data=> alert(data))
import React from 'react';
import AddCategory from './Category/AddCategory';
import Categorylist from './Category/CategoryList';
import EditCategory from './Category/EditCategory';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/AddCategory'} className="nav-link">AddCategory</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Categorylist'} className="nav-link">Category List</Link>
              </li>
            </ul>
          </div>
        </nav> <br />
        <Switch>
          <Route exact path='/AddCategory' component={AddCategory} />
          <Route path='/edit/:id' component={EditCategory} />
          <Route path='/Categorylist' component={Categorylist} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;