import React from 'react';
import SearchSmall from '../common/SearchSmall';
import Notification from '../common/Notification';
import Settings from '../common/Settings';
import WelcomeComponent from '../common/Welcome.component';
const Header = () => {
  return (
    <header className="header">
      <div className="container-lg">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand mx-auto" href="/">
            <img
              src={require('../../assets/images/logo.svg')}
              style={{height: '130px'}}
              title="Aqarchain"
              alt="Aqarchain"
            />
          </a>
          <div className="flex-grow-1">
            <div className="row d-flex justify-content-between align-items-center mx-3">
              <div className="col-lg-5 offset-lg-2 col-8 d-lg-block d-none">
                <SearchSmall />
              </div>
              <div className="col-lg-3 col-12 text-right my-lg-0 my-3">
                <a href="#" className="mr-4">
                  <span className="sr-only">Notifications</span>
                  <img
                    src={require('../../assets/images/icon-admin-notifications-bell.svg')}
                    alt="Notifications"
                  />
                </a>
                <a href="#" className="mr-4">
                  <span className="sr-only">Settings</span>
                  <img
                    src={require('../../assets/images/icon-admin-settings-cog.svg')}
                    alt="Settings"
                  />
                </a>
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="navbar-toggler">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <WelcomeComponent />
    </header>
  );
};
export default Header;
