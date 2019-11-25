import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import './index.css';
import Menu from './components/body/Menu';
import Notfound from './components/error/error';
import App from './App';
import ContactUs from './components/contact/ContactUs';
import AboutUs from './components/about/AboutUs';
import Location from './components/location/Location';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <Router basename="/">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/location" component={Location} />
      <Route path="/about" component={AboutUs} />
      <Route component={Notfound} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
