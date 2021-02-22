import React, { Fragment } from 'react';
import Loader from "react-loader-spinner";
const Spinner = () => (
	<Fragment>
		<div className="loader-container">
			<Loader type="Bars" color="#333333" height={80} width={80} />
		</div>
	</Fragment>
);

export default Spinner;
