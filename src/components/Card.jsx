
import React from 'react';

const Card = ({ 
  poster, 
  title, 
  year, 
  genre, 
  rating, 
  handleAdd, 
  handleRemove, 
  watchList, 
  movie, 
  id 
}) => {
  const isInWatchList = (movie) => {
    return watchList.some((item) => item.id === movie.id); 
  };

  return (
    <div className="flex flex-col m-5 w-[200px]">
      <div
        className="w-full h-[300px] flex justify-end bg-cover bg-center rounded-2xl hover:scale-110 transition hover:cursor-pointer"
        style={{ backgroundImage: `url(${poster})` }}
      >
        {isInWatchList(movie) ? (
          <div
            className="mr-2.5 mt-2.5 bg-white  w-[20px] h-[25px] rounded hover:scale-150  transition flex items-center justify-center  font-bold"
            onClick={() => handleRemove(movie)}
          >
            &#x2716; 
          </div>
        ) : (
          <div
            className="mr-2.5 mt-2.5 bg-white w-[20px] h-[25px] rounded hover:scale-150 hover:bg-white transition flex items-center justify-center text-red-600 font-bold"
            onClick={() => handleAdd(movie)}
          >
            &#128525; 
          </div>
        )}
      </div>

      <h1 className="mt-2 text-lg font-bold text-center">{title}</h1>
      <p className="text-sm text-gray-600 text-center">Year: {year}</p>
      <p className="text-sm text-gray-600 text-center">Genre: {genre}</p>
      <p className="text-sm text-gray-600 text-center">Rating: {rating || 'N/A'}</p>
    </div>
  );
};

export default Card;
