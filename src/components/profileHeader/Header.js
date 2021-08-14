import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Tags from './Tags';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const HeaderStyled = styled.div`
		width: 100%;
		height: auto;
		padding-bottom: 4em;
		background: rgb(26, 30, 44);
		.top-bar {
			width: 100%;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding: 0 2em;
			box-sizing: border-box;
		}
		.avatar-image {
			border: 8px solid #354099;
			display: block;
			margin: 0 auto;
			width: 140px;
			height: 140px;
			border-radius: 50%;
		}
		.box-social-media {
			// border: 1px solid green;
			padding: 1em;
			width: 80%;
			margin: auto;
			height: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			.profile-name {
				width: 100%;
				text-align: center;
				font-size: 2.6rem;
				color: white;
				font-weight: 500;
			}
			.twitter-username {
				text-align: center;
				width: 100%;
				color: #0070f3;
				padding-top: .4em;
				margin: 0;
				font-size: 1.8rem;
				font-family: monospace;
			}
		}

		@media screen and (max-width: 375px) {
			min-height: 100vh;
			.tags {
				width: 70%;
				padding-top: 0;
			}
			.info {
				width: 94%;
				justify-content: space-between;
				padding: 0;
				padding-top: 1em;
				column-gap: .6em;
				.info-box {
					// border: 2px solid green;
					min-width: 50px;
					padding: .8em .8em;
					.profile-info, .info-tag {
						font-size: 1rem;
					}
					.profile-info {
						font-weight: bold;
					}
					.info-tag {
						font-size: .9rem;
						font-family: 'Inter';
						font-weight: 300;
					}
				}
			}
	}
`;

function Header({ profileData }) {
	return (
		<HeaderStyled>
		<div className="top-bar">
			<ArrowBackIcon style={{color: '#fff', cursor: 'pointer'}} />
		</div>
		<img className="avatar-image" src={profileData.avatar_url} alt="" />
		<div className="box-social-media">
			<strong className="profile-name">{profileData.name}</strong>
		<p className="twitter-username">{`@${profileData.twitter_username}`}</p>
		</div>
		<Tags profileData={profileData} />
		<Info profileData={profileData} />
		</HeaderStyled>
	)
}

export default Header