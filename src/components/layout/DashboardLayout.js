import React from 'react';
import {Fragment} from 'react';
import Header from '../layout/Header';
import SideBar from '../layout/Sidebar';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import Banking from '../pages/Banking';
import Documentation from '../pages/Documentation';
import Approvals from '../pages/approval/Approvals';
import ApprovalDetails from '../pages/approval/ApprovalDetails';
import Login from '../pages/Login/Login';
import Property from '../pages/Property/Property';
import AddProperty from '../pages/Property/AddProperty';
import Exchange from '../pages/Dashboard/ExchangeDashboard';
import Dashboard from '../pages/Dashboard/Dashboard';
import {AdminUser} from '../pages/adminuser';
import {Role} from '../pages/role';
import AddAgent from '../pages/Agent/AddAgent';
import Agent from '../pages/Agent/Agent';
import Agents from '../pages/Agent/Agents';
import {FeatureType} from '../pages/featuretype';
import {PropertyType} from '../pages/propertytype';
import {User} from '../pages/user';
import Users from '../pages/user/Users';
import Kyc from '../pages/Kyc/Kyc';
import Tokenization from '../pages/Tokenization/Tokenization';
import Banking from '../pages/Banking/Banking';
import BlockChain from '../pages/BlockChain';

import DashboardLayout from '../layout/DashboardLayout';
import Properties from '../pages/Property/Properties';
import Approval from '../pages/approval/Approval';
import TokenizationProperty from '../pages/Tokenization/TokenizationProperty';
export default ({children}) => (
  <Router>
    <Fragment>
      <Header welcome={true} />
      <main className="wrapper container-lg">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard/banking" component={Banking} />
          <Route exact path="/documentation" component={Documentation} />
          <Route exact path="/approvals/:id" component={ApprovalDetails} />
          <Route exact path="/dashboard/approval" component={Approval} />
          {/* <Route exact path="/dashboard/agent" component={Agent} /> */}
          <Route exact path="/dashboard/agent" component={Agents} />
          {/* <Route exact path="/property" component={Property} /> */}
          <Route
            exact
            path="/dashboard/property-listing"
            component={Properties}
          />
          <Route exact path="/addProperty" component={AddProperty} />
          <Route exact path="/addAgent" component={AddAgent} />
          <Route exact path="/exchange" component={Exchange} />
          <Route path="/adminuser" component={AdminUser} />
          <Route path="/role" component={Role} />
          <Route path="/featuretype" component={FeatureType} />
          <Route path="/propertytype" component={PropertyType} />
          {/*<Route path="/user" component={User} /> */}
          <Route exact path="/dashboard/users" component={Users} />
          <Route exact path="/dashboard/kyc" component={Kyc} />
          <Route
            exact
            path="/dashboard/tokenization"
            component={Tokenization}
          />
          <Route
            exact
            path="/dashboard/tokenization/property/:id"
            component={TokenizationProperty}
          />
        </Switch>
      </main>
    </Fragment>
  </Router>
);
