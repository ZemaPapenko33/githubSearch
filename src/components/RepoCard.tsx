import React, { useState } from 'react';
import { useAction } from '../hooks/action';
import { useAppSelector } from '../hooks/redux';
import { IRepos } from '../models/models';

function RepoCard({ repo }: { repo: IRepos }) {
  const { addFavorite, removeFavorite } = useAction();
  const { favorites } = useAppSelector((state) => state.gitHub);
  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    setIsFav(false);
  };

  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer">
      <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Fork: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold mr-2">{repo.watchers}</span>
          Commits: <span className="font-bold">{repo.commits_url}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
      </div>

      {!isFav && (
        <button
          className="py-1 px-4 bg-yellow-400 mr-2 rounded hover:shadow-dm transition-all"
          onClick={addToFavorite}>
          Add Favorites
        </button>
      )}
      {isFav && (
        <button
          className="py-1 px-4 bg-red-400 rounded hover:shadow-dm transition-all"
          onClick={removeFromFavorite}>
          Remove
        </button>
      )}
    </a>
  );
}

export default RepoCard;
