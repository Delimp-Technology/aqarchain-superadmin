import React, { useState, useEffect } from "react";
import { ComissionEarned, TotalProperties } from "../../common/charts/Charts";
import {connect} from "react-redux";
import {getConfigData} from "../../../redux/actions";
import { withTranslation} from "react-i18next";
class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			data: "",
		};
	}
	componentDidMount() {
		this.props.getConfigData().then(result => {
			console.log(result);
		}).catch( error => {
			console.log(error);
		});
	}
  countValues = config => {
  	console.log(config);
  	if(config) {
  		let buySellCount = {
  			buy: config.length > 0 ? config[0].count : 0,
  			sell: config.length > 1 ? config[1].count : 0,
  		};
  		return buySellCount;
  	} else {
  		return {buy: 0, sell: 0};
  	}
  	// const buyCount = config.map(item => {
  	//   console.log(item)
  	// })
  }
  render () {
  	const {config} = this.props.configData;
	  const propertyConfig = this.countValues(config);
	  const {t} = this.props;
  	return (
  		<>

  			<section className="position-relative">
  				<div className="col-lg-12 third_sec">
  					<div className="row">
  						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
  							<div className=" bg-white outer_radius border my-sm-3 my-md-0 mb-md-3 mx-sm-0 mx-lg-3 pt-2">
  								<div className="row border-bottom mx-0">
  									<div className="col-xl-6 offset-xl-1 col-lg-6 col-sm-6">
  										<h5 className=""> { t("comman.properties")} </h5>
  									</div>
  									<div className="col-xl-5 col-lg-6 col-sm-6">
  										<button
  											type="button"
  											className="btn btn-success btn-sm px-2 mb-2"
  										>
  											{t("comman.newpropertyCount", {count: "100"})}
  										</button>
  									</div>
  								</div>
  								<div className="row px-md-3 py-2 px-sm-3 ">
  									<div className="col-xl-6 offset-xl-1 col-lg-6 mt-1 col-sm-6">
  										<h4>
  											{propertyConfig.buy}
  											<span>
  												<small> {t("comman.for")}, {t("comman.rent")} </small>
  											</span>
  										</h4>
  									</div>
  									<div className="col-xl-5 col-lg-6 col-sm-6">
  										<button
  											type="button"
  											className="btn btn-outline-warning btn-sm mt-2"
  										>
                        200 {t("comman.rented")}
  										</button>
  									</div>
  								</div>
  								<div className="row px-md-3 pb-3 px-sm-3">
  									<div className="col-xl-6 offset-xl-1 col-lg-6 col-sm-6">
  										<h4>
  											{propertyConfig.sell}
  											<span>
  												<small> {t("comman.for")}, {t("comman.sell")} </small>
  											</span>
  										</h4>
  									</div>
  									<div className="col-xl-5 col-lg-6 col-sm-6">
  										<button
  											type="button"
  											className="btn btn-outline-danger btn-sm px-3"
  										>
                        200 {t("comman.sold")}
  										</button>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
  							<div className=" bg-white outer_radius my-sm-3 my-md-0 border mx-lg-3 pt-2">
  								<div className="row border-bottom mx-0">
  									<div className="col-lg-12 py-1">
  										<h5 className="text-center "> {t("comman.sellers")} </h5>
  									</div>
  								</div>
  								<div className="row py-2">
  									<div className="col-lg-12">
  										<h4 className="text-center"> 200 </h4>
  									</div>
  								</div>
  								<div className="row d-flex justify-content-center  pb-4">
  									<div className="mx-3 ">
  										<button
  											type="button"
  											className="btn btn-outline-warning btn-sm mr-auto"
  										>
                        180 {t("comman.active")}
  										</button>
  									</div>
  									<div className="">
  										<button
  											type="button"
  											className="btn btn-outline-danger btn-sm"
  										>
                        20 {t("comman.inactive")}
  										</button>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
  							<div className=" bg-white outer_radius border mx-lg-3 pt-2">
  								<div className="row border-bottom mx-0">
  									<div className="col-lg-12 py-1 ">
  										<h5 className="text-center "> {t("comman.buyers")} </h5>
  									</div>
  								</div>
  								<div className="row py-2">
  									<div className="col-lg-12">
  										<h4 className="text-center"> 400 </h4>
  									</div>
  								</div>
  								<div className="row d-flex justify-content-center pb-4">
  									<div className="mx-3">
  										<button
  											type="button"
  											className="btn btn-outline-warning btn-sm"
  										>
                        370 {t("comman.active")}
  										</button>
  									</div>
  									<div className="">
  										<button
  											type="button"
  											className="btn btn-outline-danger btn-sm"
  										>
                        30 {t("comman.inactive")}
  										</button>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>
  
  			<section className="total_app">
  				<div className="col-lg-12">
  					<div className="row">
  						<div className="col-12 col-md-6 col-lg-6 ">
  							<div className="shadow-lg bg-white outer_radius my-sm-3 my-md-0 border-warning border mx-lg-3 pt-3">
  								<div className="row pb-3 ">
  									<div className="col-lg-6 offset-lg-1 col-md-6 col-sm-6 px-sm-4">
  										<h5 className=""> Total App Downloads </h5>
  										<div className="d-flex mt-3">
  											<div>
  												<div>
  													<img src="images/app.jpg" className="img-fluid" />
  												</div>
  											</div>
  											<div>
  												<h5 className="mx-3"> 900 </h5>
  											</div>
  											<div>
  												<img src="images/dwnlod.jpg" className="img-fluid" />
  											</div>
  											<div>
  												<h5 className="ml-3"> 1.2K </h5>
  											</div>
  										</div>
  									</div>
  									<div className="col-lg-5 col-md-6 col-sm-6">
  										<h2 className="px-md-4 "> 2100 </h2>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="col-12 col-md-6 col-lg-6 ">
  							<div className="shadow-lg bg-white outer_radius border border-warning mx-3 pt-3 pb-2">
  								<div className="row">
  									<div className="d-flex justify-content-between w-100 mx-5">
  										<div>
  											<div>
  												<img src="images/view.jpg" className="img-fluid" />
  											</div>
  											<h6 className="m-0 pt-2">1.5k</h6>
  											<p className="m-0 ">
  												<small>Views </small>
  											</p>
  										</div>
  										<div>
  											<div>
  												<img src="images/likes.jpg" className="img-fluid" />
  											</div>
  											<h6 className="m-0 pt-2 ">3.4k</h6>
  											<p className="m-0">
  												<small>Likes </small>
  											</p>
  										</div>
  										<div>
  											<div>
  												<img src="images/comment.jpg" className="img-fluid" />
  											</div>
  											<h6 className="m-0 pt-2">400</h6>
  											<p className="m-0">
  												<small>Comment </small>
  											</p>
  										</div>
  										<div>
  											<div>
  												<img src="images/agent.jpg" className="img-fluid" />
  											</div>
  											<h6 className="m-0 pt-2 ">2500</h6>
  											<p className="m-0">
  												<small>Agents</small>
  											</p>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>
  			<section className="total_property my-4 ">
  				<div className="col-lg-12">
  					<div className="row">
  						<div className="col-12 col-md-6 col-lg-6 ">
  							<div className=" bg-white outer_radius border mx-3">
  								<div className="row pb-3">
  									<div className="col-lg-12 header_text">
  										<h5 className="text-center"> {t("comman.total")} {t("comman.properties")} </h5>
  										<div className="d-flex justify-content-between mx-3">
  											<p className="m-0 text-secondary">
  												<small>{t("comman.commercial")} </small>
  											</p>
  											<p className="m-0 text-secondary">
  												<small>{t("comman.residential")} </small>
  											</p>
  											<p className="m-0 text-secondary">
  												<small>{t("comman.purchased")} </small>
  											</p>
  											<p className="m-0 text-secondary">
  												<small>{t("comman.rented")} </small>
  											</p>
  										</div>
  										<div className="text-center mt-3">
  											<div id="chartcontainer1">
  												<ComissionEarned />
  											</div>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="col-12 col-md-6 col-lg-6 ">
  							<div className=" bg-white outer_radius border mx-3 ">
  								<div className="row pb-3">
  									<div className="col-lg-12 header_text">
  										<h5 className="text-center"> {t("comman.commission")} {t("comman.earned")}</h5>
  										<div className="d-flex justify-content-between p-4">
  											<div>
  												<h6 className="text-secondary">Total Trade Value</h6>
  												<big>
  													<b>1,55,000SAR</b>
  												</big>
  											</div>
  											<div>
  												<div className="input-group mb-3">
  													<div className="input-group-prepend">
  														<button
  															type="button"
  															className="btn btn-outline-secondary"
  														>
                                View
  														</button>
  														<button
  															type="button"
  															className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
  															data-toggle="dropdown"
  															aria-haspopup="true"
  															aria-expanded="false"
  														>
  															<span className="sr-only">Toggle Dropdown</span>
  														</button>
  														<div className="dropdown-menu">
  															<a className="dropdown-item" href="#">
                                  Action
  															</a>
  															<a className="dropdown-item" href="#">
                                  Action
  															</a>
  															<a className="dropdown-item" href="#">
                                  Action
  															</a>
  
  															<a className="dropdown-item" href="#">
                                  Action
  															</a>
  														</div>
  													</div>
  												</div>
  											</div>
  										</div>
  										<div className="text-center px-1">
  											<div id="chartContainer2">
  												<TotalProperties />
  											</div>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>
  			<section className="my-4 exchange ">
  				<div className="col-lg-12">
  					<div className="row">
  						<div className="col-12 col-md-12 col-lg-12 ">
  							<div className="bg-white outer_radius border mx-3">
  								<div className="row pb-3">
  									<div className="col-lg-12 col-md-12">
  										<div className="row header_text py-2 m-0">
  											<div className="col-lg-4 offset-lg-4 col-md-6">
  												<h5 className="text-center px-5">
                            Exchange - Overview
  												</h5>
  											</div>
  											<div className="col-lg-4 col-md-4">
  												<button
  													type="button"
  													className="btn btn-primary btn-sm px-2"
  												>
  													<small>Click here to View Token Trades</small>
  												</button>
  											</div>
  										</div>
  
  										<div className="d-lg-flex d-md-inline-flex justify-content-between mx-3 px-3 pt-3">
  											<div className="px-md-2">
  												<p className="m-0 pb-2 ">Aqar Token</p>
  												<h5>
                            500$
  													<span>
  														<button
  															type="button"
  															className="btn btn-success btn-sm px-2 ml-1 "
  														>
                                10%
  														</button>
  													</span>
  												</h5>
  											</div>
  											<div className="px-md-2">
  												<p className="m-0 pb-2">DAMAC Token</p>
  												<h5>
                            160$
  													<span>
  														<button
  															type="button"
  															className="btn btn-danger btn-sm px-2 ml-1"
  														>
                                25%
  														</button>
  													</span>
  												</h5>
  											</div>
  											<div className="px-md-2">
  												<p className="m-0 pb-2">Injaz Token</p>
  												<h5>
                            240$
  													<span>
  														<button
  															type="button"
  															className="btn btn-success btn-sm px-2 ml-1"
  														>
                                10%
  														</button>
  													</span>
  												</h5>
  											</div>
  											<div className="px-md-2">
  												<p className="m-0 pb-2">Rafal Token</p>
  												<h5>
                            100$
  													<span>
  														<button
  															type="button"
  															className="btn btn-success btn-sm px-2 ml-1"
  														>
                                10%
  														</button>
  													</span>
  												</h5>
  											</div>
  											<div className="px-md-2">
  												<p className="m-0 pb-2">Kingdom Token</p>
  												<h5>
                            100$
  													<span>
  														<button
  															type="button"
  															className="btn btn-success btn-sm px-2 ml-1"
  														>
                                10%
  														</button>
  													</span>
  												</h5>
  											</div>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>
  		
		  </>
  	);
  }
 
}
const mapStateToProps = ({app}) => {
	const { configData , adminUser} = app;
	return {
		configData, adminUser
	};
};
export default withTranslation("common")(connect(mapStateToProps, {getConfigData})(Dashboard));
