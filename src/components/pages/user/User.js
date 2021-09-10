import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Listing from "./Listing";
import Add from "./Add";
//  import View from "./View";
class User extends React.Component {
	render() {
		return <div>
			<Route exact path={this.props.match.path} component={Listing} />
			 <Route exact path={`${this.props.match.path}/add`} component={Add} />
			{/* <Route exact path={`${this.props.match.path}/view/:id`} component={View} />  */}
		</div>;
	}
}

export default User;