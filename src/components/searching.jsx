import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

import helpRest from '../helps/helpRest';
import { Redirect } from 'react-router-dom'

const SearchingStyled = styled.div`
	// border: 1px solid red;
	width: 100%;
	height: 100vh;
	background: var(--bgSearching);
	display: flex;
	justify-content: center;
	align-items: center;
	.search-box {
		// border: 1px solid red;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 1em;
		width: 40%;
		height: 400px;
	}
	.find_profile_input {
		border: none;
		outline: none;
		font-size: 20px;
	}
	.search_h1 {
		display: block;
		text-align: center;
		font-size: 2.8em;
		color: var(--white);
		font-weight: 500;
	}
	.form {
		display: flex;
		justify-content: center;
	}
	.find_profile_input {
		width: 90%;
		margin: 0 auto;
		background: #063254;
		font-size: 2.3em;
		color: #0cbccc;
		padding: .2em 0;
		line-height: 1.8em;
		text-align: center;
		border-radius: 4px;
		font-family: monospace;
	}
`;

const Searching = ({ setGlobalData }) => {
	const [goToProfile, setGoToProfile] = useState(false);
	const [findProfile, setFindProfile] = useState({
		username: ''
	});

	function handleFindProfile({ target }) {
		const { name, value } = target;

		setFindProfile({
			...findProfile,
			[name]: value
		});
	};

	// helpRest().get(`https://api.github.com/users/${findProfile.username}`)
	// 	.then(data => {
	// 		setGlobalData(data)
	// });

	function handleSubmitProfile(e) {
		e.preventDefault();
		setGoToProfile(true);
	};

	return (
		<SearchingStyled>
			<div className="search-box">
				<GitHubIcon style={{color: "#107ACC", fontSize: 80, width: "100%"}} />
				<h1 className="search_h1">Find Your OctoProfile</h1>

				<form onSubmit={handleSubmitProfile} className="form">
				<input
				type="text"
				name="username"
				className="find_profile_input"
				onChange={handleFindProfile}
				autoFocus
				/>
				</form>
			</div>
			{
				goToProfile && (
					<Redirect from='/' to={`/profile/${findProfile.username}`}></Redirect>
				)
			}
		</SearchingStyled>
	)
};

export default Searching;

