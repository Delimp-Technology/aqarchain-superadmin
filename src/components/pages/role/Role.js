import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import RoleList from "./RoleList";
import AddRole from "./AddRole";
import View from "./View";
class Role extends React.Component {
	render() {
		return <div>
			<Route exact path={this.props.match.path} component={RoleList} />
			<Route exact path={`${this.props.match.path}/addrole`} component={AddRole} />
			<Route exact path={`${this.props.match.path}/view/:id`} component={View} />
		</div>;
	}
}

export default Role;