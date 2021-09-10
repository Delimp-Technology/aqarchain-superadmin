import React from "react";
const Card = (props) => {
	return (
		<section className=" exchange property-list new-property">
			<div className="col-lg-12 third-exchange position-relative">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12 ">
						<div className="shadow-lg bg-white outer_radius border mx-3">
							<div className="row">
								<div className="col-lg-12 ">
									<div className="row header_text px-4 pl-5 py-2 m-0 d-flex justify-content-between">
										<div>
											<h5 className="text-center mt-1">{props.title}</h5>
										</div>
										<div >
											<div className="d-flex">
												<h6 className="mx-3 pt-2"> Show</h6>
												<div className="header-drop">
													<select className="custom-select px-4  mr-sm-2" id="inlineFormCustomSelect">
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
													</select>
												</div>
												<h6 className="mx-3 pt-2"> Entries </h6>
											</div>
										</div>
									</div>
									<div className="p-5">
										{props.children}
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
export default Card;