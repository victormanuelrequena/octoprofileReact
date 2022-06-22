import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { backgroundColorStar, borderColorStar } from '../styles/chart-styles';
import langColors from '../styles/langColors';
import ghPolyglot from 'gh-polyglot';
import getTopStars from '../helps/getReposTopStars';

function Chart() {
	const [repos, setRepos] = useState([])
	const [stats, setStats] = useState([]),
	params = useParams(),

	reposUtilData = [],
	topStars = getTopStars(repos, 5)

	useEffect(() => {
	fetch(`https://api.github.com/users/${params.username}/repos?per_page=100&page=1`)
		.then(res => res.json())
		.then(data => {
			setRepos(data)
			console.log(data)
		})

		const user = new ghPolyglot(`${params.username}`);
		user.userStats((err, stats) => {
			if (err) {
        		console.error('Error:', err);
			};
			setStats(stats);
			console.log(stats)
		});

		user.check((err, stats) => {
			if (err) {
				console.error('Error:', err);
			};
			console.log(stats)
		})

	}, []);

	repos.filter(repo => (
		reposUtilData.push({
			stars: repo.stargazers_count,
			name: repo.name,
			language: repo.language
		})
	));
	// console.log(reposUtilData)
	const reposTop = reposUtilData.filter(repo => {
		if (repo.stars >= topStars[0]) {
			return repo;
		};
		return null;
	});

	topStars.reverse();
	const dataChartStars = reposTop.map(repo => repo.stars);
	const dataChartNames = reposTop.map(repo => repo.name);
	dataChartStars.reverse();
	dataChartNames.reverse();

	const mostStarred = [
				{
					label: '',
					data: dataChartStars,
					backgroundColor: backgroundColorStar,
					borderColor: borderColorStar,
					borderWidth: 1
				}
			]

	//Creating charts doughnut
	const topLanguagesLabels = stats.map(repo => repo.label);
	const topLanguagesValues = stats.map(repo => repo.value);
	const topLanguagesBg = topLanguagesLabels.map(repo => `${langColors.[repo]}B3`);
	const topLanguagesBorder = topLanguagesLabels.map(repo => langColors.[repo]);

	const topLanguages = [
				{
					label: '',
					data: topLanguagesValues,
					backgroundColor: topLanguagesBg,
					borderColor: topLanguagesBorder,
					borderWidth: 1.5
				}
			]

	//Creating doughnut chart
	console.log(topLanguagesLabels)

	const data = topLanguagesLabels.map(lang => {
		const reposLanguage = repos.filter(repo => repo.language === lang);
		const starArr = reposLanguage.map(repo => repo.stargazers_count);
		const starSum = starArr.reduce((acc, el) => acc + el, 0);
		return starSum;
	});

	console.log(data)

	const starPerLanguages = [
		{
			label: '',
			data: data,
			backgroundColor: topLanguagesBg,
			borderColor: topLanguagesBorder,
			borderWidth: 1.5
		}
	]

	return (
		<ChartStyled>
		<div className="chart-box top-language">
		<header>
			<h2>Top Languages</h2>
		</header>
			<div className="chart top-language-chart">
			<Pie
			id="grafica"
			data={{
				labels: topLanguagesLabels,
				datasets: topLanguages,
			}}
			height={400}
			width={500}
			options={{
				maintainAspectRatio: false,
      			plugins: {
      				legend: {
      					position: 'right',
      					align: 'start',
      					labels: {
      						boxWidth: 50,
      						boxHeight: 15,
      						font: {
      							size: 15,
      							family: 'Inter'
      						}
      					},
      				}
      			}

			}}
			/>
			</div>
		</div>
		<div className="chart-box most-starred">
		<header>
			<h2>Most Starred</h2>
		</header>
			<div className="chart">
			<Bar
			id="grafica"
			data={{
				labels: dataChartNames,
				datasets: mostStarred,
			}}
			height={400}
			width={500}
			options={{
				maintainAspectRatio: false,
			}}
			/>
			</div>
		</div>
		<div className="chart-box star-per-language">
		<header>
			<h2>Star per Language</h2>
		</header>
			<div className="chart">
			<Doughnut
			id="grafica"
			data={{
				labels: topLanguagesLabels,
				datasets: starPerLanguages,
			}}
			height={400}
			width={500}
			options={{
				maintainAspectRatio: false,
			}}
			/>
			</div>
		</div>
		</ChartStyled>
	)
}

const ChartStyled = styled.div`
		max-width: 100%;
		height: auto;
		margin: auto;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, minmax(240px, 1fr));
		grid-gap: 2em;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		.chart-box {
			min-width: 300px;
			max-height: 500px;
			border-radius: 6px;
    		box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
			padding: 0em 2em 2em 2em;
			background: white;
			header {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				h2 {
					width: 100%;
					display: inline-block;
					font-family: 'Inter', sans-serif;
					font-weight: 500;
					font-size: 1.6rem;
					margin: .6em .2em .6em .1em;
					border-bottom: 2px dashed rgba(7, 7, 7, .2);
				}
			}
		}
		@media screen and (max-width: 1300px) {
			.chart-box {
			min-width: 210px;
			max-height: 500px;
			header {
				h2 {
					font-size: 1rem;
				}
			}
			}
		}

		@media screen and (max-width: 1000px) {
			grid-template-columns: repeat(2, minmax(240px, 1fr));
			grid-template-rows: 1fr 1fr;
			height: auto;
			.chart-box {
			min-width: 250px;
			max-height: 500px;
			header {
				h2 {
					font-size: 1.2rem;
				}
			}
			}
		}

		@media screen and (max-width: 765px) {
			grid-template-columns: repeat(1, minmax(240px, 1fr));
			grid-template-rows: 1fr 1fr 1fr;
			height: auto;
			padding-top: 2em;
			margin-top: 0em;
			.chart-box {
			min-width: 300px;
			max-height: 500px;
			header {
				h2 {
					font-size: 1.6rem;
				}
			}
			}
		}
		@media screen and (max-width: 400px) {
			.chart-box {
				min-width: 240px;
				max-height: 500px;
			}
		}
	#grafica {
		max-width: 400px;
	}
	// .top-language {
	// 	border: 1px solid red;
	// 	display: flex;
	// 	flex-direction: column;
	// 	.top-language-chart {
	// 		border: 1px solid green;
	// 		display: flex;
	// 		flex-direction: row;
	// 	}
	// }
 `;

export default Chart