import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

import helpRest from '../helps/helpRest';
import { Redirect } from 'react-router-dom'

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

	function handleSubmitProfile(e) {
		e.preventDefault();
		setGoToProfile(true);
	};

	return (
		<SearchingStyled>
			<SearchBox>
				<GitHubIcon style={{color: "#107ACC", fontSize: 80, width: "100%"}} />
				<Title>Find Your OctoProfile</Title>
				<FormSearch onSubmit={handleSubmitProfile}>
				<FindProfile
				type="text"
				name="username"
				onChange={handleFindProfile}
				autoFocus
				/>
				</FormSearch>
			</SearchBox>
			{
				goToProfile && (
					<Redirect from='/' to={`/octoprofileReact/profile/${findProfile.username}`}></Redirect>
				)
			}
		</SearchingStyled>
	)
};

const SearchingStyled = styled.div`
	width: 100%;
	height: 100vh;
	background: var(--bgSearching);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SearchBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1em;
	width: 40%;
	height: 400px;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Title = styled.h1`
	display: block;
	text-align: center;
	font-size: 2.8em;
	color: var(--white);
	font-weight: 500;
`;

const FormSearch = styled.form`
	display: flex;
	justify-content: center;
`;

const FindProfile = styled.input`
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
	border: none;
	outline: none;
`;

export default Searching;