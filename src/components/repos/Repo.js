import React from 'react';
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import langColors from '../../styles/langColors';

function Repo({ name, stars, forks, size, description, language }) {
  return (
    <RepoStyled langColors={langColors} language={language}>
      <a href=''>
        <div className='name'>
          <svg
            aria-hidden='true'
            classname='octicon'
            height='16'
            role='img'
            viewBox='0 0 12 16'
            width='12'
            style={{
              display: 'inline-block',
              fill: 'currentcolor',
              userSelect: 'none',
              verticalAlign: 'text-bottom',
            }}
          >
            <path
              fill-rule='evenodd'
              d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
            ></path>
          </svg>
          <h5>{name}</h5>
        </div>
        <div className='des-box'>
          <p className='des-repo'>{description}</p>
        </div>
        <div className='footer-repo'>
          <div className='bottom-repo-left'>
            <span className='language-repo'>
              <div></div>
              <p>{language}</p>
            </span>
            <span className='stars-repo'>
              <StarIcon style={{ fontSize: 18, color: '#6a737d' }} />
              <p>{stars.toLocaleString()}</p>
            </span>
            <span className='forks-repo'>
              <svg
                aria-hidden='true'
                class='octicon'
                height='16'
                role='img'
                viewBox='0 0 10 16'
                width='10'
                style={{
                  display: 'inline-block',
                  fill: '#6a737d',
                  userSelect: 'none',
                  verticalAlign: 'text-bottom',
                }}
              >
                <path
                  fill-rule='evenodd'
                  d='M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
                ></path>
              </svg>
              <p>{forks}</p>
            </span>
          </div>
          <div className='bottom-repo-right'>
            <p>{`${size}KB`}</p>
          </div>
        </div>
      </a>
    </RepoStyled>
  );
}

const RepoStyled = styled.li`
  list-style: none;
  min-height: 200px;
  background: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1em 1.4em;
  box-shadow: rgb(0 0 0 / 20%) 0px 10px 30px -15px;
  transition: 0.2s;
  padding: 2em 1.6em;
  &:hover {
    box-shadow: none;
  }
  a {
    text-decoration: none;
    color: #222;
    cursor: pointer;
  }

  .name {
    display: flex;
    align-items: center;
    column-gap: 0.6em;
  }

  h5 {
    margin: 0;
    padding: 0;
    font-family: 'Fira Code', 'Inter', monospace;
    color: rgb(36, 41, 46);
    font-weight: 500;
    font-size: 20px;
  }
  .des-box {
    // border: 1px solid red;
    width: 100%;
    min-height: 80px;
    height: auto;
  }
  .des-repo {
    color: rgb(88, 96, 105);
    font-size: 14px;
    padding: 0;
    padding-top: 0.6em;
    margin: 0;
  }
  .footer-repo {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 0.4em;
    margin-top: 0.4em;
    // border: 1px solid green;
  }
  .language-repo {
    display: flex;
    align-items: center;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${(props) => props.langColors[props.language]};
    }
    p {
      font-size: 13px;
      color: #6a737d;
    }
  }
  .stars-repo {
    display: flex;
    align-items: center;
    p {
      font-size: 13px;
      color: #6a737d;
      padding: 0;
    }
  }
  .forks-repo {
    display: flex;
    align-items: center;
    p {
      font-size: 13px;
      color: #6a737d;
    }
  }
  .bottom-repo-left {
    // border: 1px solid red;
    width: 60%;
    display: flex;
    justify-content: space-between;
    column-gap: 0.6em;
  }
  .bottom-repo-right {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 13px;
      color: #6a737d;
    }
  }
`;

export default Repo;
