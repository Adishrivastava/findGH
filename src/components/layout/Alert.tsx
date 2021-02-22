import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

const Alert: React.FC = () => {
	const githubContext = useContext(GithubContext);
	const { alert } = githubContext;
	return (
		alert !== null ? (
			<div className={`alert alert-${alert.type} alert-div`}>
				<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
				{alert.msg}
			</div>
		) : (<div></div>)
	);
};
export default Alert;
