import React from "react";

const AddAgent = () => {
	return (
		<section className=" exchange property-list new-property">
			<div className="col-lg-12 third-exchange">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12 ">
						<div className="shadow-lg bg-white outer_radius border mx-3">
							<div className="row">
								<div className="col-lg-12 ">
									<div className="row header_text px-4 pl-5 py-2 m-0 d-flex justify-content-between">
										<div>
											<h5 className="text-center mt-1">Add New Agent</h5>
										</div>
									</div>
									<div className="p-5">
										<div className="row mb-2">
											<div className="form-group col-md-5">
												<input
													type="text"
													className="form-control"
													id="inputEmail4"
													placeholder="First Name "
												/>
											</div>
											<div className="form-group col-md-5">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Last Name "
												/>
											</div>
										</div>

										<div className="row mb-2">
											<div className="form-group col-md-5">
												<input
													type="text"
													className="form-control"
													id="inputEmail4"
													placeholder="Phone Number  "
												/>
											</div>
											<div className="form-group col-md-5">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Last Name"
												/>
											</div>
										</div>

										<div className="row mb-2">
											<div className="form-group col-md-3">
												<input
													type="date"
													className="form-control"
													id="inputEmail4"
												/>
											</div>
											<div className="form-group col-md-2">
												<input
													type="number"
													className="form-control"
													id="inputPassword4"
													placeholder="Age"
												/>
											</div>
											<div className="form-group col-md-2 pr-0">
												<input
													type="text"
													className="form-control bg-white"
													placeholder="Gender"
													id="inputEmail4"
													readonly=""
												/>
											</div>

											<div className="form-group col-md-2 pl-0">
												<div className="form-group">
													<select className="form-control" id="sel1">
														<option>Male</option>
														<option>Female</option>
														<option>Other</option>
													</select>
												</div>
											</div>
										</div>

										<h5 className="mb-4 pb-3">Account Information</h5>

										<div className="row mb-2">
											<div className="form-group col-md-5">
												<input
													type="email"
													className="form-control"
													id="inputEmail4"
													placeholder="Enter your mail id
                                        "
												/>
											</div>
											<div className="form-group col-md-5">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Enter your mail id
                                        "
												/>
											</div>
										</div>

										<div className="row mb-2">
											<div className="form-group col-md-5">
												<input
													type="text"
													className="form-control"
													id="inputEmail4"
													placeholder="Phone  "
												/>
											</div>
											<div className="form-group col-md-5">
												<input
													type="password"
													className="form-control"
													id="inputPassword4"
													placeholder="Confirm Password"
												/>
											</div>
										</div>

										<div className="row mt-5 rounded-0  jumbotron">
											<div className="text-center w-100 mb-4">
												<img src="images/file-img.jpg" />
											</div>

											<div className="col-lg-6 offset-lg-4">
												<input
													type="file"
													className="form-control-file"
													id="inputGroupFile02"
												/>
											</div>
										</div>

										<div className="row mt-4">
											<div className="d-flex">
												<button
													type="button"
													className="btn btn-warning mx-4 px-4"
												>
                          Submit
												</button>
												<button
													type="button"
													className="btn btn-outline-dark px-4"
												>
                          Cancel
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AddAgent;
