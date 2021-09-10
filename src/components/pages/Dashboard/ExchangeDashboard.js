import React from "react";
import { Token, SalesTrending } from "../../common/charts/Charts";

const Exchange = () => {
	return (
		<>
			<section className=" exchange position-relative">
				<div className="col-lg-12 third-exchange">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-12 ">
							<div className=" bg-white outer_radius border mx-3">
								<div className="row">
									<div className="col-lg-12 ">
										<div className="row header_text py-2 m-0">
											<div className="col-lg-4 offset-lg-4">
												<h5 className="text-center px-5">
                          Exchange - Overview
												</h5>
											</div>
											<div className="col-lg-4">
												<button
													type="button"
													className="btn btn-primary btn-sm px-2"
												>
													<small>Click here to View Token Trades</small>
												</button>
											</div>
										</div>

										<div className="d-lg-flex justify-content-between mx-3 px-3 pt-3">
											<div>
												<p className="m-0 pb-2">Aqar Token</p>
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
											<div>
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
											<div>
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
											<div>
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
											<div>
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

			<section className="token">
				<div className="col-lg-12">
					<div className="row mx-0">
						<div className="col-12 col-md-3 col-lg-3  ">
							<div className=" bg-white outer_radius border">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      EMAAR Token
											<span>
												<button
													type="button"
													className="btn btn-success btn-sm px-2 ml-1 "
												>
                          10%
												</button>
											</span>
										</h6>
										<div id="chartContainer3">
											<Token />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-3 col-lg-3 ">
							<div className=" bg-white outer_radius border ">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      DAMAC Token
											<span>
												<button
													type="button"
													className="btn btn-danger btn-sm px-2 ml-1 "
												>
                          10%
												</button>
											</span>
										</h6>
										<div id="chartContainer4">
											<Token />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-3 col-lg-3 ">
							<div className=" bg-white outer_radius border ">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      INJAZ Token
											<span>
												<button
													type="button"
													className="btn btn-success btn-sm px-2 ml-1 "
												>
                          10%
												</button>
											</span>
										</h6>
										<div id="chartContainer5">
											<Token />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-3 col-lg-3 ">
							<div className=" bg-white outer_radius border ">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      RAFAL Token 1
											<span>
												<button
													type="button"
													className="btn btn-success btn-sm px-2 ml-1 "
												>
                          10%
												</button>
											</span>
										</h6>
										<div id="chartContainer6">
											<Token />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="token my-4 capital">
				<div className="col-lg-12">
					<div className="row mx-0">
						<div className="col-12 col-md-6 col-lg-6  ">
							<div className="bg-white outer_radius border">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      Token Market Capital
											<span>
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary btn-sm bg-white"
														>
                              View
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary btn-sm rounded rounded-left-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
											</span>
										</h6>

										<div className="row mx-3">
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Coin Name</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>Aqar Token</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>EMAAR Token</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>DAMAC Token</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>INJAZ Token</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Prices </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>5,000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>3,000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>2,000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>3,000 SAR</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Changes (%)</small>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-success btn-sm px-2 ml-1 "
													>
                            10%
													</button>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-success btn-sm px-2 ml-1 "
													>
                            10%
													</button>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-danger btn-sm px-2 ml-1 "
													>
                            10%
													</button>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-success btn-sm px-2 ml-1 "
													>
                            10%
													</button>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-6 ">
							<div className="bg-white outer_radius border ">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-3 border">
                      Recent Trading Activities
										</h6>

										<div className="row mx-3">
											<div className="col-12 col-md-3 col-lg-3 ">
												<h5>
													<small> Deal ID </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>AQ2345</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>AQ2346</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>AQ2347</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>AQ2348</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-3 col-lg-3 ">
												<h5>
													<small> Trade Time </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>8:40am</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>9:00am</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>7:00pm</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>9:00pm</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-3 col-lg-3 ">
												<h5>
													<small> Last Trade </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>7,000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>4,000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>1,000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>6,000 SAR</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-3 col-lg-3 recent_trading">
												<h5>
													<small> Status</small>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-danger btn-sm  btn-block mt-3"
													>
                            Cancel
													</button>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-warning btn-sm btn-block "
													>
                            Hold
													</button>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-warning btn-sm btn-block "
													>
                            Hold
													</button>
												</h5>
												<h5>
													<button
														type="button"
														className="btn btn-success btn-sm btn-block "
													>
                            Deliver
													</button>
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

			<section className=" token exchange position-relative my-3">
				<div className="col-lg-12 ">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-12 ">
							<div className="bg-white outer_radius border mx-3">
								<div className="row">
									<div className="col-lg-12 ">
										<div className="row header_text py-2 m-0">
											<div className="col-lg-4 offset-lg-4">
												<h5 className="text-center px-5">
                          This Year Trading Graph
												</h5>
											</div>
										</div>

										<div className="my-3">
											<div id="chartContainer7">
												<SalesTrending />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="token my-4 capital">
				<div className="col-lg-12">
					<div className="row mx-0">
						<div className="col-12 col-md-6 col-lg-6  ">
							<div className=" bg-white outer_radius border">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      Sell Orders
											<span>
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary btn-sm bg-white"
														>
                              Sort By
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary btn-sm rounded rounded-left-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
											</span>
										</h6>

										<div className="row mx-3">
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small>Price per token</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>700 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>400 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>100 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>600 SAR</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Token Amount </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>200 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>400 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>500 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>300 SAR</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Total SAR </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>140000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>160000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>50000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>180000 SAR</b>
													</small>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-6 ">
							<div className=" bg-white outer_radius border">
								<div className="row pb-3">
									<div className="col-lg-12 header_text">
										<h6 className="text-center py-2 border">
                      Buy Orders
											<span>
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary btn-sm bg-white"
														>
                              Sort By
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary btn-sm rounded rounded-left-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
											</span>
										</h6>

										<div className="row mx-3">
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small>Price per token</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>700 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>400 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>100 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>600 SAR</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Token Amount </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>200 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>400 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>500 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>300 SAR</b>
													</small>
												</h5>
											</div>
											<div className="col-12 col-md-4 col-lg-4 ">
												<h5>
													<small> Total SAR </small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>140000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>160000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>50000 SAR</b>
													</small>
												</h5>
												<h5 className="pt-1">
													<small>
														<b>180000 SAR</b>
													</small>
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

			<section className="token payment my-4 capital">
				<div className="col-lg-12">
					<div className="row mx-0">
						<div className="col-12 col-md-6 col-lg-6  ">
							<div className=" bg-white outer_radius border">
								<div className="row pb-3">
									<div className="col-lg-12 header_text pb-3 ">
										<h6 className="text-center py-2 border py-3">
                      Transfer Tokens
										</h6>
										<div className="row mx-3">
											<div className="col-md-8 mb-3 pr-0">
												<label for="validationCustomUsername">Payment</label>
												<div className="input-group">
													<div className="input-group-prepend">
														<span
															className="input-group-text bg-white px-4 border-secondary rounded-0"
															id="inputGroupPrepend"
														>
                              SAR
														</span>
													</div>
													<input
														type="text"
														className="form-control bg-light border-secondary rounded-0"
														id="validationCustomUsername"
														placeholder="Enter your Payment"
														aria-describedby="inputGroupPrepend"
														required
													/>
													<div className="invalid-feedback">
                            Please choose a username.
													</div>
												</div>
											</div>
											<div className="col-md-4 mb-3 pl-0 pr-0 payment_tab">
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary px-4 rounded-0 border-secondary border bg-white"
														>
                              AQR
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary rounded-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
										<div className="row mx-3">
											<div className="col-md-8 mb-3 pr-0">
												<label for="validationCustomUsername">
                          Wallet Address
												</label>
												<div className="input-group">
													<div className="input-group-prepend">
														<span
															className="input-group-text bg-white px-4 border-secondary rounded-0"
															id="inputGroupPrepend"
														>
                              SAR
														</span>
													</div>
													<input
														type="text"
														className="form-control bg-light border-secondary rounded-0"
														id="validationCustomUsername"
														placeholder="Enter your Payment"
														aria-describedby="inputGroupPrepend"
														required
													/>
													<div className="invalid-feedback">
                            Please choose a username.
													</div>
												</div>
											</div>
											<div className="col-md-4 mb-3 pl-0 pr-0 payment_tab">
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary px-4 rounded-0 border-secondary border bg-white"
														>
                              AQR
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary rounded-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
										<div className="row mx-3">
											<div className="ml-auto pymnt_btn py-2 pr-5">
												<button type="button" className="btn btn-primary px-2">
                          Transfer
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-6  ">
							<div className="bg-white outer_radius border">
								<div className="row pb-3">
									<div className="col-lg-12 header_text pb-3 ">
										<h6 className="text-center py-2 border py-3">AQR to SAR</h6>
										<div className="row mx-3">
											<div className="col-md-8 mb-3 pr-0">
												<label for="validationCustomUsername">From</label>
												<div className="input-group">
													<div className="input-group-prepend">
														<span
															className="input-group-text bg-white px-4 border-secondary rounded-0"
															id="inputGroupPrepend"
														>
                              SAR
														</span>
													</div>
													<input
														type="text"
														className="form-control bg-light border-secondary rounded-0"
														id="validationCustomUsername"
														placeholder="Enter your Payment"
														aria-describedby="inputGroupPrepend"
														required
													/>
													<div className="invalid-feedback">
                            Please choose a username.
													</div>
												</div>
											</div>
											<div className="col-md-4 mb-3 pl-0 pr-0 payment_tab">
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary px-4 rounded-0 border-secondary border bg-white"
														>
                              AQR
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary rounded-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
										<div className="row mx-3">
											<div className="col-md-8 mb-3 pr-0">
												<label for="validationCustomUsername">To</label>
												<div className="input-group">
													<div className="input-group-prepend">
														<span
															className="input-group-text bg-white px-4 border-secondary rounded-0"
															id="inputGroupPrepend"
														>
                              SAR
														</span>
													</div>
													<input
														type="text"
														className="form-control bg-light border-secondary rounded-0"
														id="validationCustomUsername"
														placeholder="Enter your Payment"
														aria-describedby="inputGroupPrepend"
														required
													/>
													<div className="invalid-feedback">
                            Please choose a username.
													</div>
												</div>
											</div>
											<div className="col-md-4 mb-3 pl-0 pr-0 payment_tab">
												<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
													<div className="input-group-prepend d-inline">
														<button
															type="button"
															className="btn btn-outline-secondary px-4 rounded-0 border-secondary border bg-white"
														>
                              AQR
														</button>
														<button
															type="button"
															className="btn btn-outline-secondary rounded-0 view bg-white dropdown-toggle dropdown-toggle-split"
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
										<div className="row mx-3">
											<div className="ml-auto pymnt_btn py-2 pr-5">
												<button type="button" className="btn btn-primary px-2">
                          Transfer
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className=" token exchange payment position-relative my-3">
				<div className="col-lg-12 ">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-12 ">
							<div className=" bg-white outer_radius border mx-3">
								<div className="row">
									<div className="col-lg-12 ">
										<div className="row header_text py-2 m-0">
											<div className="col-lg-4 offset-lg-4">
												<h5 className="text-center px-5"> Trade Assets</h5>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-12 ">
										<div className="row  py-2 m-0">
											<div className="col-lg-5">
												<div className="row mx-3">
													<div className="col-md-8 mb-3 pr-0">
														<label for="validationCustomUsername">
                              Payment
														</label>
														<div className="input-group">
															<div className="input-group-prepend">
																<span
																	className="input-group-text bg-white px-4 border-secondary rounded-0"
																	id="inputGroupPrepend"
																>
                                  SAR
																</span>
															</div>
															<input
																type="text"
																className="form-control bg-light border-secondary rounded-0"
																id="validationCustomUsername"
																placeholder="Enter your Payment"
																aria-describedby="inputGroupPrepend"
																required=""
															/>
															<div className="invalid-feedback">
                                Please choose a username.
															</div>
														</div>
													</div>
													<div className="col-md-4 mb-3 pl-0 pr-0 payment_tab">
														<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
															<div className="input-group-prepend d-inline">
																<button
																	type="button"
																	className="btn btn-outline-secondary px-3 rounded-0 border-secondary border bg-white"
																>
                                  AQR
																</button>
																<button
																	type="button"
																	className="btn btn-outline-secondary rounded-0 view bg-white dropdown-toggle dropdown-toggle-split"
																	data-toggle="dropdown"
																	aria-haspopup="true"
																	aria-expanded="false"
																>
																	<span className="sr-only">
                                    Toggle Dropdown
																	</span>
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
											</div>
											<div className="col-lg-2">
												<div className="text-center mt-4 pt-2 ">
													<img src="images/right-left.jpg" />
												</div>
											</div>
											<div className="col-lg-5">
												<div className="row mx-3">
													<div className="col-md-8 mb-3 pr-0">
														<label for="validationCustomUsername">
                              Payment
														</label>
														<div className="input-group">
															<div className="input-group-prepend">
																<span
																	className="input-group-text bg-white px-3 border-secondary rounded-0"
																	id="inputGroupPrepend"
																>
                                  SAR
																</span>
															</div>
															<input
																type="text"
																className="form-control bg-light border-secondary rounded-0"
																id="validationCustomUsername"
																placeholder="Enter your Payment"
																aria-describedby="inputGroupPrepend"
																required=""
															/>
															<div className="invalid-feedback">
                                Please choose a username.
															</div>
														</div>
													</div>
													<div className="col-md-4 mb-3 pl-0 pr-0 payment_tab">
														<div className="input-group custom_drop_btn ml-3 py-3 d-inline">
															<div className="input-group-prepend d-inline">
																<button
																	type="button"
																	className="btn btn-outline-secondary px-3 rounded-0 border-secondary border bg-white"
																>
                                  AQR
																</button>
																<button
																	type="button"
																	className="btn btn-outline-secondary rounded-0 view bg-white dropdown-toggle dropdown-toggle-split"
																	data-toggle="dropdown"
																	aria-haspopup="true"
																	aria-expanded="false"
																>
																	<span className="sr-only">
                                    Toggle Dropdown
																	</span>
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
											</div>
										</div>
										<div className="row mx-3">
											<div className="ml-auto pymnt_btn py-2 pr-5">
												<span>
													<small className="text-secondary">
                            You save X amount this transaction
													</small>
												</span>
												<button type="button" className="btn btn-primary px-2">
                          Exchange
												</button>
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
};

export default Exchange;
