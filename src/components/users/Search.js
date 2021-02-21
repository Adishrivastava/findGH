import React, { useContext, useState } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

export const Search = () => {
	const githubContext = useContext(GithubContext);
	const { searchUsers, showUsers, clearUsers, doAlert } = githubContext;
	const [Text, setText] = useState('');

	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if (Text === '') {
			doAlert('Please enter something', 'warning');
		} else {
			searchUsers(Text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<div className="form-group">
					<label htmlFor=""></label>
					<input
						type="text"
						name="text"
						className="form-control"
						onChange={onChange}
						value={Text}
						aria-describedby="helpId"
						placeholder="Search"
					/>
					<small id="helpId" className="form-text text-muted text-center">
						Search for a github user
					</small>
				</div>

				<button
					type="submit"
					name="searchBtn"
					id="searchBtn"
					className="btn btn-primary form-control"
				>
					search
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
		</div>
	);
};

export default Search;
