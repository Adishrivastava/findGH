import React, { useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

const Alert = () => {
	const githubContext = useContext(GithubContext);
	const { alert } = githubContext;
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className="fa fa-info-circle"></i>
				{alert.msg}
			</div>
		)
	);
};
export default Alert;
