import React from "react";

const AddProperty = () => {
	return (
		<section className="exchange property-list new-property">
			<div className="col-lg-12 third-exchange position-relative">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12">
						<div className="shadow-lg bg-white outer_radius border mx-3">
							<div className="row">
								<div className="col-lg-12">
									<div className="row header_text px-4 pl-5 py-2 m-0 d-flex justify-content-between">
										<div>
											<h5 className="text-center mt-1">Adding New Property</h5>
										</div>
									</div>
									<div className="p-5">
										<div className="row">
											<div className="form-group col-md-4">
												<input
													type="email"
													className="form-control"
													id="inputEmail4"
													placeholder="Property Name / Title "
												/>
											</div>
											<div className="form-group col-md-4">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Property Location
                                          "
												/>
											</div>
										</div>
										<div className="row">
											<div className="form-group col-md-12">
												<div className="form-group pt-3">
													<textarea
														className="form-control"
														placeholder="Property Description
                                              "
														id="exampleFormControlTextarea5"
														rows="3"
													></textarea>
												</div>
											</div>
										</div>
										<div className="row mb-4">
											<div className="form-check form-check-inline custom_control">
												<label
													className="form-check-label"
													for="inlineCheckbox1"
												>
													<h5 className="ml-2 pl-1">Property Information</h5>
												</label>
												<input
													className="form-check-input"
													type="radio"
													name="exampleRadios"
													id="exampleRadios1"
													value="option1"
													checked=""
												/>
												<label
													className="form-check-label"
													for="inlineCheckbox1"
												>
													<h5>For Rent</h5>
												</label>
											</div>
											<div className="form-check form-check-inline custom_control">
												<input
													className="form-check-input"
													type="radio"
													name="exampleRadios"
													id="exampleRadios2"
													value="option1"
												/>
												<label
													className="form-check-label"
													for="inlineCheckbox2"
												>
													<h5>For Sell</h5>
												</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="form-group col-md-3">
												<input
													type="email"
													className="form-control"
													id="inputEmail4"
													placeholder="Price / Rent "
												/>
											</div>
											<div className="form-group col-md-3">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Bedroom"
												/>
											</div>
											<div className="form-group col-md-3">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Square Feet"
												/>
											</div>
										</div>
										<div className="row">
											<div className="form-group col-md-3">
												<input
													type="email"
													className="form-control"
													id="inputEmail4"
													placeholder="Car Parking"
												/>
											</div>
											<div className="form-group col-md-3">
												<input
													type="text"
													className="form-control"
													id="inputPassword4"
													placeholder="Year Built"
												/>
											</div>
										</div>
										<div className="row">
											<div className="form-group col-md-12">
												<div className="form-group pt-3">
													<textarea
														className="form-control"
														placeholder="Property Address"
														id="exampleFormControlTextarea5"
														rows="3"
													></textarea>
												</div>
											</div>
										</div>
										<div className="row ml-1 amentites">
											<h5 className="w-100">Property Amenities</h5>
											<div className="mt-2">
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Swimming Pool
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Parking
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Elevator
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Wifi
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Basement
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Garden
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Internal Stairs
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="checkbox"
														id="inlineCheckbox1"
														value="option1"
													/>
													<label
														className="form-check-label"
														for="inlineCheckbox1"
													>
                            Internal Stairs
													</label>
												</div>
												<div className="form-check form-check-inline">
													<button type="button" className="btn btn-secondary">
                            Add More
													</button>
												</div>
											</div>
										</div>

										<div className="row mt-5 rounded-0 jumbotron">
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

export default AddProperty;
