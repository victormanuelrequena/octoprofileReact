import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import TodayIcon from '@material-ui/icons/Today';
import styled from 'styled-components';

const TagsStyled = styled.div`
		width: 50%;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		padding-top: .4em;
		.tag {
			color: #b4cbe6;
			display: flex;
			font-family: 'Inter';
			font-weight: 400;
			flex-wrap: no-wrap;
			align-items: center;
			justify-content: center;
			font-size: 1rem;
			margin: 0;
			padding: .2em;
			column-gap: .4em;
		}
		@media screen and (max-width: 765px) {
			.tag {
				font-size: .9rem;
				display: block;
				text-align: center;
				width: 100%;
			}
		}
`;

function Tags({ profileData }) {
	const tagStyles = {
		fontSize: 22,
		color: '#b4cbe6'
	};

	return (
		<TagsStyled>
			<p className="tag">
				<BusinessIcon style={tagStyles} />
				{profileData.company}
			</p>
			<p className="tag">
				<LocationOnIcon style={tagStyles} />
				{profileData.location}
			</p>
			<p className="tag">
				<TodayIcon style={tagStyles} />
				{profileData.created_at}
			</p>
		</TagsStyled>
	)
}

export default Tags