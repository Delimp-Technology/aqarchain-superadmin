import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {getApprovelDetails, changeInitializationStatus} from "../../../redux/actions";
import Card from "../../common/Card";

class ApprovalDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amenities: [],
			data: [],
		};
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		console.log("working", id);
		this.props.getApprovelDetails(id).then(response => {
			console.log("fjksd", response);
			this.setState({data: response.data});
		}).catch(error => {
			console.log(error);
		});
	}
    handleAction = (e) => {
    	console.log(e.target.value);
    	const {data} = this.state;
    	const params = {
    		"initializationStatus": e.target.value
    	};
    	this.props.changeInitializationStatus(params, data[0]._id).then(response => {
    		console.log("fjksd", response);
    		//this.setState({data: response.data});
    		alert(response.message);
    	}).catch(error => {
    		console.log(error);
    	});
    }

    render(){
    	//console.log("data", this.state.data);
    	const {data} = this.state;
    	console.log("dataa", data);
    	return (
    		<Card title="Ownership Details">
    			<div className=" mx-1 pt-3"> 
    				<div className="table-responsive custom_table"> 
    					<table className="table  table-sm border table-bordered text-center">
    						<thead className="thead-light">
    							<tr>
    								<th scope="col">Sr No.</th>
    								<th scope="col">Property Owner Name</th>
    								<th scope="col">Property Name / Title</th>
    								<th scope="col">Property Type</th>
    								<th scope="col">Property Valuation</th>
    								<th scope="col">Ownership %</th>
    							</tr>
    						</thead>
    						<tbody>
    							{
    								data.length > 0 ?
    									data[0].propertyOwnership.map((item, index) => {
    										return (
    											<tr key={index}>
    												<th scope="row">1</th>
    												<td>Mohammad</td>
    												<td>{data[0].propertyTitle}</td>
    												<td>{data[0].propertyType}</td>
    												<td>{(data[0].valuation.value/100)*item.percent}</td>
    												<td>{item.percent}%</td>
    											</tr>
								
    										);
    									}): null
    							}
    							{
    								data.length > 0 ?  (
    									<tr>
    										<th scope="row"></th>
    										<td colspan="3">TOTAL</td>
    										<td>{data[0].valuation.value}</td>
    										<td>100%</td>
    									</tr>
    								) : null
    							}
    						</tbody>
    					</table>
    				</div>                                          
    			</div>

    			<div className=" mx-1 pt-3"> 
    				<div className="table-responsive custom_table"> 
    					<table className="table  table-sm border table-bordered text-center">
    						<thead className="thead-light">
    							<tr>
    								<th scope="col">Sr No.</th>
    								<th scope="col">Document Title</th>
    								<th scope="col">Verified by Admin</th>
    								<th scope="col">Remark</th>
    								<th scope="col">Status</th>
    							</tr>
    						</thead>
    						<tbody>
    							<tr>
    								<th scope="row">1</th>
    								<td>Title Deed</td>
    								<td>Username</td>
    								<td><input type="text" name="" placeholder="Textbox" /></td>
    								<td><a href="#" className="btn btn-success btn-grp">Approve</a></td>
    							</tr>
    							<tr>
    								<th scope="row">2</th>
    								<td>Power of Attorney</td>
    								<td>Username</td>
    								<td><input type="text" name="" placeholder="Textbox" /></td>
    								<td><a href="#" className="btn btn-danger btn-grp">Reject</a></td>
    							</tr>
    							<tr>
    								<th scope="row">3</th>
    								<td>NOC</td>
    								<td>Username</td>
    								<td><input type="text" name="" placeholder="Textbox" /></td>
    								<td><a href="#" className="btn btn-success btn-grp">Approve</a></td>
    							</tr>
    							<tr>
    								<th scope="row">4</th>
    								<td>Valuation Report</td>
    								<td>Username</td>
    								<td><input type="text" name="" placeholder="Textbox" /></td>
    								<td><a href="#" className="btn btn-success btn-grp">Approve</a></td>
    							</tr>
    						</tbody>
    					</table>
    				</div>                                          
    			</div>
    			<div className="container">
    				<div className="row p-20">
    					<div className="col-md-5">
    						<div className="form-group">
    							<select className="form-control" onChange={(e) => this.handleAction(e)}>
							     	<option>Request Action</option>
								    <option value="0">Hold</option>
    								<option value="1">Enable Tokenization Process</option>
    							</select>
    						</div>
    					</div>
    					<div className="col-md-7">
    						<div className="form-group">
    							<div className="card-box text-center">
    								<p>Property is on HOLD awaiting more documents</p>
    								<p>Kindly Submit more Documents regarding the Title, NOC is expired please update new valid NOC</p>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</Card>

	
									
    	);
    }
	
}

const mapStateToProps = ({app}) => {
	const { configData } = app;
	return {
		configData
	};
}; 
export default connect(mapStateToProps, {getApprovelDetails, changeInitializationStatus})(ApprovalDetails);
