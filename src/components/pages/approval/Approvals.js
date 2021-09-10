import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom";
import Card from "../../common/Card";
import {connect} from "react-redux";
import {getApprovelList} from "../../../redux/actions";

class Approvals extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			data: [],
	  };
	}

	componentDidMount(){
		this.props.getApprovelList().then(response => {
		    this.setState({data: response.data});
	   }).catch(error => {
		   console.log("error", error);
	   });
	}

	render() {
		const {data} = this.state;
		return (
			<Card title="Approvel">
		       <div className=" mx-1 pt-3">
					<div className="table-responsive custom_table">
						<table className="table  table-sm border table-bordered text-center">
							<thead className="thead-light">
								<tr>
									<th scope="col">Request No </th>
									<th scope="col">Request Date </th>
									<th scope="col">Request Details </th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Aqarreq01</td>
									<td>01-05-2020 </td>
									<td>Approved my KYC </td>
									<td>
										<div className="btn-group">
																 <Link to="/approvals/test">
																 <button
													type="button"
													className="btn btn-primary btn-1 btn-sm"
												>
																	View
												</button>
																 </Link>
											<button
												type="button"
												className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<div className="dropdown-menu">
													<a href="#" className="dropdown-item">
										  Action
													</a>
													<a href="#" className="dropdown-item">
										  Another action
													</a>
												</div>
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<table className="table  table-sm border table-bordered text-center">
							<thead className="thead-light">
								<tr>
									<th scope="col">Property Title </th>
									<th scope="col">Request Date </th>
									<th scope="col">Property Type </th>
									<th scope="col">Property Valuation</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								{
									data.map(item => {
										return (
											<tr key={item._id}>
												<td>{item.propertyTitle}</td>
												<td>{item.createdAt}</td>
												<td>{item.propertyType}</td>
												<td>{item.valuation.value}</td>
												<td>
													<div className="btn-group">
														<Link to={`/approvals/${item._id}`}>
															<button type="button" className="btn btn-primary btn-1 btn-sm">
																	View
															</button>
														</Link>
														<button
															type="button"
															className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
														>
															<div className="dropdown-menu">
																<a href="#" className="dropdown-item">
										                              Action
																</a>
																<a href="#" className="dropdown-item">
										                           Another action
																</a>
															</div>
														</button>
													</div>
												</td>
											</tr>
							
										);
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</Card>
										
									
		);
	}

}

export default connect(null, {getApprovelList})(Approvals);
