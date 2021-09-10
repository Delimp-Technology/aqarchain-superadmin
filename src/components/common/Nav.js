import React from 'react';
import UserInfo from '../common/UserInfo';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="list-unstyled components">
      <UserInfo />

      <li>
        {/* <a href="#homeSubmenu" aria-expanded="false">Dashboard
                    </a> */}
        <NavLink to="/" activeClassName="not-active">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/exchange" activeClassName="active">
          Exchange
        </NavLink>
      </li>

      <li>
        <NavLink to="/property" activeClassName="active">
          Property
        </NavLink>
      </li>
      <li>
        <NavLink to="/user" activeClassName="active">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/agent" activeClassName="active">
          Agents
        </NavLink>
      </li>
      <li>
        <NavLink to="/approvals" activeClassName="active">
          Approvals
        </NavLink>
      </li>
      <li>
        <NavLink to="/banking" activeClassName="active">
          Banking
        </NavLink>
      </li>
      <li>
        <NavLink to="/documentation" activeClassName="active">
          Documentation
        </NavLink>
      </li>
      <li>
        {/*  */}

        <div className="pos-f-t">
          <nav className="navbar">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              Admin User
            </button>
          </nav>
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="p-4">
              <NavLink to="/adminuser" activeClassName="active">
                Admin User
              </NavLink>
              <NavLink to="/role" activeClassName="active">
                Role
              </NavLink>
              <NavLink to="/featuretype" activeClassName="active">
                Feature Type
              </NavLink>
              <NavLink to="/propertytype" activeClassName="active">
                Property Type
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default Nav;
