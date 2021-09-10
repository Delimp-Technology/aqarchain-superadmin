import React from 'react';
import {connect, useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({token, component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      component={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: props.location},
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  const {auth} = state;
  return {
    token: auth.token,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
