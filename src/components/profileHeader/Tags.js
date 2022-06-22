import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import TodayIcon from '@material-ui/icons/Today';
import styled from 'styled-components';

function Tags({ profileData }) {
  const tagStyles = {
    fontSize: 22,
    color: '#b4cbe6',
  };

  return (
    <TagsStyled>
      <p className='tag'>
        <BusinessIcon style={tagStyles} />
        {profileData.company}
      </p>
      <p className='tag'>
        <LocationOnIcon style={tagStyles} />
        {profileData.location}
      </p>
      <p className='tag'>
        <TodayIcon style={tagStyles} />
        {profileData.created_at}
      </p>
    </TagsStyled>
  );
}

const TagsStyled = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 0.4em;
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
    padding: 0.2em;
    column-gap: 0.4em;
  }
  @media screen and (max-width: 765px) {
    .tag {
      font-size: 0.9rem;
      display: block;
      text-align: center;
      width: 100%;
    }
  }
`;

export default Tags;
