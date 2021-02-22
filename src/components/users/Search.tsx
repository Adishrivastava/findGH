import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

export const Search = () => {
	const githubContext = useContext(GithubContext);
	const { searchUsers, showUsers, clearUsers, doAlert } = githubContext;
	const [Text, setText] = useState('');

	const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setText(e.target.value);

	const onSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if (Text === '') {
			doAlert('Please enter something', 'warning');
		} else {
			searchUsers(Text);
			setText('');
		}
	};

	return (
		<div className="search-container">

			<h1 className="text-center">Find any github user here</h1>

			<form onSubmit={onSubmit} className="form">
				<div className="form-group">
					<label htmlFor=""></label>
					<input
						type="text"
						name="text"
						className="form-control search-input"
						onChange={onChange}
						value={Text}
						aria-describedby="helpId"
						placeholder=" > Search for any github user by their name"
					/>
					<small id="helpId" className="form-text pt-3 font-weight-bold text-muted text-center">
						Search for any github user here
					</small>
				</div>

				<button
					type="submit"
					name="searchBtn"
					id="searchBtn"
					className="btn btn-primary form-control search-button"

				>
					<FontAwesomeIcon icon={faSearch} style={{ fontSize: '0.9em', marginRight: '5px' }} /> search
				</button>

				{showUsers && (
					<button
						type="button"
						className="btn btn-danger form-control"
						onClick={clearUsers}
					>
						Clear
					</button>
				)}
			</form>
			<br />
			<br />
		</div >
	);
};

export default Search;
