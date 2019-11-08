import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const routing = (
  <Router>
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <Route exact path="/" component={App} />
      <Route path="/LandingPage" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Home" component={Home} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();