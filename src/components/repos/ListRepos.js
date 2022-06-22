import React from 'react';
import styled from 'styled-components';
import Repo from './Repo';

function ListRepos({ reposFiltered, allRepos, filterText }) {
  const reposValues = [];

  for (let i = 0; i < 8; i++) {
    reposValues.push(reposFiltered[reposFiltered.length - 1 - i]);
  }

  const reposList = allRepos.filter((repo, i) => {
    if (filterText === 'Stars' && repo.stargazers_count >= reposValues[reposValues.length - 1]) return repo;

    if (filterText === 'Forks' && repo.forks >= reposValues[reposValues.length - 1]) return repo;
    if (filterText === 'Size' && repo.size >= reposValues[reposValues.length - 1]) return repo;
  });

  function compare(a, b) {
    return a.stargazers_count - b.stargazers_count;
  }
  reposList.sort(compare);
  reposList.reverse();

  return (
    <ListReposStyled>
      {reposList.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          size={repo.size}
          language={repo.language}
          forks={repo.forks}
          description={repo.description}
          stars={repo.stargazers_count}
        />
      ))}
    </ListReposStyled>
  );
}

const ListReposStyled = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 1em;
`;

export default ListRepos;
