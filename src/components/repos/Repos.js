import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ghPolyglot from 'gh-polyglot';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListRepos from './ListRepos';
import useParams from 'react-router-dom';

const ReposStyled = styled.div`
	width: 88%;
	margin: auto;
	position: relative;
	.order-line {
		display: flex;
		align-items: center;
	}
	h2 {
		display: inline-block;
		font-family: 'Inter';
		font-size: 2.2rem;
		font-weight: 500;
		border-bottom: 3px dashed rgba(7, 7, 7, .2);
	}
	p {
		font-family: 'Inter';
		font-size: 1.6rem;
		color: #ccc;
		padding-left: .4em;
	}
	.select-filter, .btn-filter {
		width: 100px;
		padding: .3em .2em .3em .6em;
		border: 1px solid rgba(124,127,198, .4);
		border-radius: 10px;
		position: relative;
		font-size: .8rem;
		color: rgb(0, 112, 243);
		cursor: pointer;
		display: flex;
		background: transparent;
		align-items: center;
		justify-content: space-between;
		&:hover {
			background: rgba(0, 118, 255, 0.1);
		}
	}
	.btn-filter {
		width: 120px;
		background: transparent;
		border-radius: 0px;
		border: none;
		padding: .6em 2em .6em .4em;
		&:hover {
			background: rgba(0, 118, 255, .1);
		}
	}
	.list {
		position: relative;
		// border: 1px solid red;
		margin-left: 2em;
	}
	.list-options {
		// border: 1px solid red;
		position: absolute;
		top: 100%;
		padding: 0;
		margin: 0;
		transform: translateY(1px);
		background: rgba(0, 118, 255, 0.1);
		border-radius: 10px;
		display: none;
		z-index: 1;
	}
	.option-filter {
		// border: 1px solid green;
		list-style: none;
	}
	@media screen and (max-width: 765px) {
		.select-filter, .btn-filter {
		width: 100px;
		padding: .4em .1em .4em .3em;
	}
	}
`;

function Repos({ params }) {
const [allRepos, setAllRepos] = useState([]);
const [filter, setFilter] = useState('Stars');
console.log(params)
const listOptRef = useRef();

const reposFiltered = filterRepos(filter);

function compare ( a, b ) {
	return a - b;
}

function filterRepos(filter = 'Stars') {
	const filteredValues = allRepos.map((repo) => {
		if (filter === 'Stars') return (
			repo.stargazers_count
		)

		if (filter === 'Forks') return (
			repo.forks
		)

		if (filter === 'Size') return (
			repo.size
		)
	})
	return filteredValues.sort(compare)
};

useEffect(() => {
	const repos = new ghPolyglot('bchiang7');
	repos.getAllRepos((err, repos) => {
		if (err) {
			console.error(`Error: ${err}`);
		};
		setAllRepos(repos);
	});
}, []);

const handleShowOptions = (e) => {
	if(listOptRef.current.style.display === 'none') {
		listOptRef.current.style.display = 'block';
	} else {
		listOptRef.current.style.display = 'none';
	}
};

const selectOption = (e) => {
	setFilter(e.target.value)
	handleShowOptions(e)
}

	return (
		<>
		<ReposStyled>
			<div className="order-line">
			<h2>Top Repos</h2>
			<p>by</p>
			<div className="list">
			<button
			onClick={handleShowOptions}
			className="select-filter"
			value={filter}
			>
			{filter || 'Stars'}
			<ArrowDropDownIcon />
			</button>
			<ul className="list-options" ref={listOptRef}>
				<li className="option-filter">
					<button
					className="btn-filter"
					value="Stars"
					onClick={selectOption}
					>
					Stars
					</button>
				</li>
				<li className="option-filter">
					<button
					className="btn-filter"
					value="Forks"
					onClick={selectOption}
					>
					Forks
					</button>
				</li>
				<li className="option-filter">
					<button
					className="btn-filter"
					value="Size"
					onClick={selectOption}
					>
					Size
					</button>
				</li>
			</ul>
			</div>
			</div>
			<ListRepos
			reposFiltered={reposFiltered}
			allRepos={allRepos}
			filterText={filter}
			/>
		</ReposStyled>
			<br />
			<br />
			<br />
			</>
	)
}

export default Repos