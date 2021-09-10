import React from 'react';
import {Fragment} from 'react';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/Sidebar';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//import PrivateRoute from "./PrivateRoute";
import Documentation from '../components/pages/Documentation';
import Approvals from '../components/pages/approval/Approvals';
import ApprovalDetails from '../components/pages/approval/ApprovalDetails';
import Login from '../components/pages/Login/Login';
import AddProperty from '../components/pages/Property/AddProperty';
import Exchange from '../components/pages/Dashboard/ExchangeDashboard';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import {AdminUser} from '../components/pages/adminuser';
import {Role} from '../components/pages/role';
import AddAgent from '../components/pages/Agent/AddAgent';
import Agents from '../components/pages/Agent/Agents';
import {FeatureType} from '../components/pages/featuretype';
import {PropertyType} from '../components/pages/propertytype';
import Users from '../components/pages/user/Users';
import AddUser from '../components/pages/user/AddUser';
import Kyc from '../components/pages/Kyc/Kyc';
import Tokenization from '../components/pages/Tokenization/Tokenization';
import Banking from '../components/pages/Banking/Banking';
import Properties from '../components/pages/Property/Properties';
import Approval from '../components/pages/approval/Approval';
import TokenizationProperty from '../components/pages/Tokenization/TokenizationProperty';
import RemovalRequest from '../components/pages/RemovalRequest/RemovalRequest';
import Logs from '../components/pages/Logs/Logs';
import Protected from '../components/pages/protected';
import AgentProtected from '../components/pages/Agentprotected';
import UserProtected from '../components/pages/Userprotected';
import PropertyProtected from '../components/pages/Propertyprotected';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../components/layout/DashboardLayout';
import Investment from '../components/pages/Investment/Investment';
import AddInvestmentProperty from '../components/pages/Investment/TokenizationProcess';

const routes = (
  <>
    <Fragment>
      <Header welcome={true} />
      <main className="wrapper container-lg">
        <SideBar />

        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Dashboard}
            layout={DashboardLayout}
          />
          <PrivateRoute exact path="/dashboard/banking" component={Banking} />
          <PrivateRoute
            exact
            path="/documentation"
            component={Documentation}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/approvals"
            component={ApprovalDetails}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/approval"
            component={Approval}
            layout={DashboardLayout}
          />
          {/* <PrivateRoute exact path="/dashboard/agent" component={Agent} /> */}
          <PrivateRoute
            exact
            path="/dashboard/agent"
            component={Agents}
            layout={DashboardLayout}
          />
          {/* <PrivateRoute exact path="/property" component={Property} /> */}

          <PrivateRoute
            exact
            path="/dashboard/property-listing"
            component={Properties}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/investment-property"
            component={Investment}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/tokenization-process"
            component={AddInvestmentProperty}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/addProperty"
            component={AddProperty}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/addAgent"
            component={AddAgent}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/exchange"
            component={Exchange}
            layout={DashboardLayout}
          />
          <PrivateRoute
            path="/adminuser"
            component={AdminUser}
            layout={DashboardLayout}
          />
          <PrivateRoute
            path="/role"
            component={Role}
            layout={DashboardLayout}
          />
          <PrivateRoute
            path="/featuretype"
            component={FeatureType}
            layout={DashboardLayout}
          />
          <PrivateRoute
            path="/propertytype"
            component={PropertyType}
            layout={DashboardLayout}
          />
          {/*<PrivateRoute path="/user" component={User} /> */}
          <PrivateRoute
            exact
            path="/dashboard/users"
            component={Users}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/add-user"
            component={AddUser}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/kyc"
            component={Kyc}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/tokenization"
            component={Tokenization}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/tokenization/property"
            component={TokenizationProperty}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/removal-request"
            component={RemovalRequest}
            layout={DashboardLayout}
          />
          <PrivateRoute
            exact
            path="/dashboard/logs"
            component={Logs}
            layout={DashboardLayout}
          />
        </Switch>
      </main>
    </Fragment>
  </>
);
export default routes;
