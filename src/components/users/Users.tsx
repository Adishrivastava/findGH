import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

export const Users: React.FC = () => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="users-list">
				{users.map((user: any) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

export default Users;
