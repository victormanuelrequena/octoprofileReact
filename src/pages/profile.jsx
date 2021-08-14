import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Chart from '../components/chart-bar';
import Header from '../components/profileHeader/Header';
import Repos from '../components/repos/Repos';
import Loading from './loading';

export default function Profile() {
	const [profileData, setProfileData] = useState([]);
	const [loader, setLoader] = useState(true);
	const params = useParams()

	useEffect(() => {
		async function getUserData() {
		setLoader(true);
		const res = await fetch(`https://api.github.com/users/${params.username}`)
		const data = await res.json()
		await setProfileData(data)
		setLoader(false);
		}
		getUserData();

	},[]);

	return (
		<>
		{
			loader
			? <Loading />
			: <ProfileStyled>
			  <Header profileData={profileData} />
			  <div className="graphs">
			  <Chart />
			  </div>
			  <Repos params={params} />
			  </ProfileStyled>
		}
		</>
	)
}

const ProfileStyled = styled.div`
	.graphs {
		// border: 1px solid red;
		max-width: 88%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: auto;
		transform: translateY(-5em);
	}
`;