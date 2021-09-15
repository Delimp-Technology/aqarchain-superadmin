import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './assets/css/theme.css';
import './assets/css/dashboard.css';
import './assets/css/custom.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import routes from './routing/Routing';
import {ToastContainer} from 'react-toastify';
import Login from './components/pages/Login/Login';
import {connect} from 'react-redux';
import {getRolesList} from './redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            {routes}
          </Switch>
        </Router>
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, {getRolesList})(App);
