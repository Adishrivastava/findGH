import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import RepoItem from './RepoItem';

export interface Props {
	searchText?: string;
}

const Repos: React.FC<Props> = ({ searchText }) => {
	const { repos } = useContext(GithubContext);

	const [searchedRepos, setSearchRepos] = useState(repos);

	const levenshteinDistance = (str1 = '', str2 = '') => {
		const track = Array(str2.length + 1)
			.fill(null)
			.map(() => Array(str1.length + 1).fill(null));
		for (let i = 0; i <= str1.length; i += 1) {
			track[0][i] = i;
		}
		for (let j = 0; j <= str2.length; j += 1) {
			track[j][0] = j;
		}
		for (let j = 1; j <= str2.length; j += 1) {
			for (let i = 1; i <= str1.length; i += 1) {
				const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
				track[j][i] = Math.min(
					track[j][i - 1] + 1, // deletion
					track[j - 1][i] + 1, // insertion
					track[j - 1][i - 1] + indicator // substitution
				);
			}
		}
		// console.log(
		// 	str1,
		// 	str2,
		// 	track[str2.length][str1.length],
		// 	str1.length - str2.length - 1
		// );
		return track[str2.length][str1.length] < str1.length - str2.length + 2;
	};

	// // if repo is empty
	// const handleNoRepos = async () => {
	//    await getUserRepos('ujjwalnahar');
	// }

	// seaarching by full_name and language
	const handleSearch = () => {
		const searchedRepos = repos.filter(
			(repo: any) =>
				repo.full_name.toLowerCase().search(searchText?.toLowerCase()) >
					-1 ||
				repo?.language?.toLowerCase().search(searchText?.toLowerCase()) > -1
		);

		setSearchRepos([...searchedRepos]);
	};

	useEffect(() => {
		if (repos.length === 0) {
			// handleNoRepos();
		}

		if (searchText) {
			let filteredSearch = repos.filter((repo: any) =>
				levenshteinDistance(
					repo.name.toLowerCase(),
					searchText.toLowerCase()
				)
			);

			console.log(filteredSearch);

			setSearchRepos([...filteredSearch]);
		} else {
			setSearchRepos([...repos]);
		}

		if (repos.length === 0 && searchText) {
			handleSearch();
		}
	}, [repos, searchText]);

	return (
		<div className="container p-5 repo-grid">
			{searchedRepos &&
				searchedRepos.map((repo: any, index: number) => (
					<RepoItem key={repo.id} index={index} repo={repo} />
				))}
		</div>
	);
};

export default Repos;
