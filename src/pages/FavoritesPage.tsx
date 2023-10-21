import React from 'react';
import { useAppSelector } from '../hooks/redux';

function FavoritePage() {
  const { favorites } = useAppSelector((state) => state.gitHub);

  if (favorites.length === 0) return <p className="text-center">No items</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((f) => {
          return (
            <li key={f}>
              <a href={f} target="_blank" rel="noreferrer">
                {f}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FavoritePage;
