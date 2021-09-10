import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';
import {userLogin} from '../../../redux/actions/Auth';
import {connect, useDispatch} from 'react-redux';

function Login() {
  const [loginData, setLoginData] = useState({
    email: 'dev@delimp.com',
    password: 'Test@289',
  });

  let history = useHistory();
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(userLogin(loginData))
      .then(
        response => {
          toast.success(response.message);
          history.push('/');
        },
        error => {
          if (error.status === 401) {
            toast.error(error.data.message);
          }
          if (error.status === 400) {
            toast.error(error.data.data[0]);
          }
        },
      )
      .catch(err => {
        console.log('err', err);
      });
  };
  return (
    <div>
      <header className="header">
        <div className="container-lg">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand mx-lg-4 mx-auto" href="/">
              <img
                src="/public/images/logo.svg"
                style={{height: '130px'}}
                title="Aqarchain"
                alt="Aqarchain"
              />
            </a>
            <div className="flex-grow-1">
              <div className="row d-flex justify-content-lg-end justify-content-start align-items-center mx-3">
                <div className="col-xl-2 col-lg-2 offset-lg-6 col-12 collapse navbar-collapse">
                  <a
                    className="nav-link language dropdown-toggle"
                    href="#"
                    id="navbarLanguageLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Language
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarLanguageLink">
                    <a className="dropdown-item" href="#">
                      Arabic (عربى)
                    </a>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div id="super-admin-login-section">
        <div className="container-lg" id="super-admin-login-section_container">
          <div className="row no-gutters">
            <div className="col-lg-7 col-md-12 col-12">
              <div className="pb-lg-8 pt-lg-6 px-lg-8 p-4 mx-lg-5 mx-2">
                <div className="form-heading mb-5">
                  <h1 className="font-weight-bold text-dark">Hello,</h1>
                  <h1 className="font-weight-bold text-dark">Welcome Back</h1>
                </div>
                <form className="my-4" onSubmit={loginHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control primary-input has-border-radius-5"
                      id="user-name"
                      onChange={e =>
                        setLoginData({...loginData, email: e.target.value})
                      }
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control primary-input has-border-radius-5"
                      id="password"
                      placeholder="Password"
                      onChange={e =>
                        setLoginData({...loginData, password: e.target.value})
                      }
                    />
                  </div>
                  <div className="my-5">
                    <div className="form-check float-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label cursor-pointer font-weight-bold text-dark"
                        htmlFor="rememberMe">
                        Keep me logged in
                      </label>
                    </div>
                    <span className="form-text text-muted text-center font-weight-bold text-dark float-right cursor-pointer my-lg-0 my-2">
                      Forgot Password?
                    </span>
                  </div>
                </form>
                <button
                  id="signup-button"
                  type="submit"
                  className="btn btn-gradient-secondary w-100 my-5"
                  onClick={loginHandler}>
                  Login
                </button>
                <ToastContainer />
                <p className="form-text text-muted">
                  Don't have an account yet?{' '}
                  <span className="font-weight-bold text-dark cursor-pointer">
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 text-lg-left text-center">
              <img
                className="super-admin-login-artwork"
                src="public/images/superadmin-login-artwork.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
