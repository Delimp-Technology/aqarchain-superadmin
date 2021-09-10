import React from "react";
import upArrow from "../../assets/images/up-arrow.jpg";

const Banking = () => {
	return (
		<section className="position-relative banking">
			<div className="col-lg-12 third_sec">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-4 ">
						<div className=" bg-white outer_radius border mx-3 pt-2">
							<div className="row">
								<div className="col-lg-12 py-1 ">
									<h5 className="text-center border-bottom pb-2">
                    Escrow Account
									</h5>
								</div>
							</div>
							<div className="row py-2">
								<div className="col-lg-12">
									<h3 className="py-2  text-center"> SAR 54.6k</h3>
								</div>
							</div>
							<div className="row d-flex justify-content-center pb-4">
								<div className="mx-3 show-btn">
									<button type="button" className="btn btn-primary ">
                    Show more
									</button>
								</div>
								<div className="py-1">
									<button type="button" className="btn btn-success btn-sm">
                    10%
									</button>
								</div>
								<div className="py-1 pl-3">
									<img src={upArrow} />
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 ">
						<div className=" bg-white outer_radius border mx-3 pt-2">
							<div className="row">
								<div className="col-lg-12 py-1 ">
									<h5 className="text-center border-bottom pb-2">
                    AQR Balance
									</h5>
								</div>
							</div>
							<div className="row py-2">
								<div className="col-lg-12">
									<h3 className="py-2  text-center"> SAR 35k</h3>
								</div>
							</div>
							<div className="row d-flex justify-content-center pb-4">
								<div className="mx-3 show-btn">
									<button type="button" className="btn btn-primary ">
                    Show more
									</button>
								</div>
								<div className="py-1">
									<button type="button" className="btn btn-success btn-sm">
                    10%
									</button>
								</div>
								<div className="py-1 pl-3">
									<img src={upArrow} />
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 ">
						<div className=" bg-white outer_radius border mx-3 pt-2">
							<div className="row">
								<div className="col-lg-12 py-1">
									<h5 className="text-center  border-bottom pb-2">
                    AQR Issued
									</h5>
								</div>
							</div>
							<div className="row py-2">
								<div className="col-lg-12">
									<h3 className="py-2  text-center"> 21.2k</h3>
								</div>
							</div>
							<div className="row d-flex justify-content-center pb-4">
								<div className="mx-3 show-btn">
									<button type="button" className="btn btn-primary ">
                    Show more
									</button>
								</div>
								<div className="py-1">
									<button type="button" className="btn btn-success btn-sm">
                    10%
									</button>
								</div>
								<div className="py-1 pl-3">
									<img src={upArrow} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Banking;
