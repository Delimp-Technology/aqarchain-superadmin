import React from "react";
import Loader from "react-loader-spinner";
const Loading = () => {
	return (
		<div className="loaderHolder">
			<div className="loaderMain">
				<Loader
					type="Circles"
					color="#f9cc38"
					height={100}
					width={100}
				/>
			</div>
		</div>
	);
};
export default Loading;
