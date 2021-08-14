import React from 'react';
import styled from 'styled-components';

const InfoStyled = styled.div`
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-width: 375px;
		max-width: 490px;
		height: auto;
		margin: auto;
		padding-top: 2em;
		padding-bottom: 6em;
		box-sizing: border-box;
			.info-box {
				min-width: 80px;
				min-height: 60px;
				width: 20%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #252646;
				padding: 1.2em 1.4em;
				border-radius: 6px;
				.profile-info, .info-tag {
					padding: 0;
					margin: 0;
					font-size: 1.4rem;
					color: white;
				}
			.info-tag {
				color: #819fa6;
				font-size: .8rem;
				font-weight: 400;
				line-height: 1.4em;
				padding-top: .6em;
				text-transform: uppercase;
			}
		}
		@media screen and (max-width: 765px) {
			.info-box {
				min-width: 80px;
				padding: .8em 1em;
				.profile-info, .info-tag {
					font-size: 1rem;
				}
			.info-tag {
				font-size: .8rem;
			}
			}
		}
		@media screen and (max-width: 400px) {
			.info-box {
				min-width: 20px;
				padding: .6em .6em;
				.profile-info, .info-tag {
					font-size: .8rem;
				}
			.info-tag {
				font-size: .5rem;
			}
			}
		}
		@media screen and (max-width: 360px) {
			min-width: 365px;
		}
`;

function Info({ profileData }) {
	return (
		<InfoStyled>
			<div className="info-box">
				<p className="profile-info">{profileData.public_repos}</p>
				<p className="info-tag">Repositories</p>
			</div>
			<div className="info-box">
				<p className="profile-info">{profileData.followers}</p>
				<p className="info-tag">Followers</p>
			</div>
			<div className="info-box">
				<p className="profile-info">{profileData.following}</p>
				<p className="info-tag">Following</p>
			</div>
		</InfoStyled>
	)
}

export default Info