import React from 'react';
// import FullName from '../common/FullName';
import {useDispatch, useSelector} from 'react-redux';
//import {logOut} from "../../../../redux/actions";
import {useHistory, useLocation, Link} from 'react-router-dom';
import FullName from '../common/FullName';

const Sidebar = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  const logout = () => {
    //console.log("working");
    dispatch({type: 'LOGOUT'});
    history.push('/login');
  };

  const CustomLink = ({url, className, id, title}) => {
    return (
      <li className="nav-item">
        <Link to={url} className={className} id={id}>
          {title}
        </Link>
      </li>
    );
  };
  return (
    <nav id="sidebar">
      <div className="sidebar-top text-center">
        <div className="user-details-card has-border-radius p-4">
          <div className="user-profile-pic-section">
            <img
              className="user-profile-pic"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt=""
            />
            <span>
              <img
                alt=""
                className="edit-profile-pic"
                src="public/images/icon-edit-profile-picture-dashboard.svg"
              />
            </span>
          </div>
          <div className="user-details mt-2">
            <p className="mb-0 font-weight-bold">
              <FullName />
            </p>
          </div>
        </div>
      </div>
      <ul
        className="nav nav-tabs nav-tabs dashboard-nav-tabs flex-column has-border-radius mt-5 mb-5"
        id="company-nav-tabs"
        role="tablist">
        <CustomLink
          url="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          id="company-nav-tab-dashboard-tab"
          title="Dashboard"
        />
        <CustomLink
          url="/dashboard/property-listing"
          className={`nav-link ${
            location.pathname === '/dashboard/property-listing' ? 'active' : ''
          }`}
          id="company-nav-tab-properties-uploaded-tab"
          title="Properties"
        />
        <CustomLink
          url="/dashboard/investment-property"
          className={`nav-link ${
            location.pathname === '/dashboard/investment-property'
              ? 'active'
              : ''
          }`}
          id="company-nav-tab-properties-uploaded-tab"
          title="Investments"
        />
        <CustomLink
          url="/dashboard/users"
          className={`nav-link ${
            location.pathname === '/dashboard/users' ? 'active' : ''
          }`}
          id="company-nav-tab-my-profile-tab"
          title="Users"
        />
        <CustomLink
          url="/dashboard/agent"
          className={`nav-link ${
            location.pathname === '/dashboard/agent' ? 'active' : ''
          }`}
          id="company-nav-tab-agent-management-tab"
          title="Agents"
        />
        <CustomLink
          url="/dashboard/approval"
          className={`nav-link ${
            location.pathname === '/dashboard/approval' ? 'active' : ''
          }`}
          id="company-nav-tab-agent-management-tab"
          title="Approvals"
        />
        <CustomLink
          url="/dashboard/kyc"
          className={`nav-link ${
            location.pathname === '/dashboard/kyc' ? 'active' : ''
          }`}
          id="user-dashboard-nav-tab-kyc-tab"
          title="KYC"
        />

        <CustomLink
          url="/dashboard/tokenization"
          className={`nav-link ${
            location.pathname === '/dashboard/tokenization' ? 'active' : ''
          }`}
          id="user-dashboard-nav-tab-tokenization-tab-1"
          title="Tokenization"
        />
        <CustomLink
          url="/dashboard/tokenization/property"
          className={`nav-link ${
            location.pathname === '/dashboard/tokenization/property'
              ? 'active'
              : ''
          }`}
          id="user-dashboard-nav-tab-tokenization-tab-1"
          title="Tokenization Property"
        />
        <CustomLink
          url="/documentation"
          className={`nav-link ${
            location.pathname === '/documentation' ? 'active' : ''
          }`}
          id="user-dashboard-nav-tab-my-portfolio-tab"
          title="Documents"
        />
        <CustomLink
          url="/dashboard/banking"
          className={`nav-link ${
            location.pathname === '/dashboard/banking' ? 'active' : ''
          }`}
          id="user-dashboard-nav-tab-my-wallet-tab"
          title="Banking"
        />
        <CustomLink
          url="/dashboard/removal-request"
          className={`nav-link ${
            location.pathname === '/dashboard/removal-request' ? 'active' : ''
          }`}
          id="user-dashboard-nav-tab-my-wallet-tab"
          title="Removal Requests"
        />
        <CustomLink
          url="/dashboard/logs"
          className={`nav-link ${
            location.pathname === '/dashboard/logs' ? 'active' : ''
          }`}
          id="user-dashboard-nav-tab-my-wallet-tab"
          title="Logs"
        />
      </ul>
      <ul className="nav nav-tabs dashboard-nav-tabs has-border-radius flex-column">
        <li className="nav-item">
          <div className="nav-link" id="logout">
            <Link
              to={'/login'}
              onClick={() => {
                localStorage.clear();
              }}>
              Log Out
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
