
import React, { useState } from 'react';

const WatchList = ({ watchList, setWatchList }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [
    'Action', 'Drama', 'Adventure', 'Sci-fic', 'Crime', 'Fantasy',
    'Thriller', 'Horror', 'Comedy', 'Family', 'Mystery', 'Romance',
    'Animation', 'War', 'Short',
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSortAscending = () => {
    const sortedList = [...watchList].sort((a, b) => {
      const ratingA = parseFloat(a.imdbRating) || 0;
      const ratingB = parseFloat(b.imdbRating) || 0;
      return ratingA - ratingB;
    });
    setWatchList(sortedList);
  };

  const handleSortDescending = () => {
    const sortedList = [...watchList].sort((a, b) => {
      const ratingA = parseFloat(a.imdbRating) || 0;
      const ratingB = parseFloat(b.imdbRating) || 0;
      return ratingB - ratingA;
    });
    setWatchList(sortedList);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filteredWatchList = watchList.filter((movie) => {
    const matchesSearch = movie.Title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesGenre =
      selectedGenres.length === 0 ||
      selectedGenres.some((genre) =>
        movie.Genre.toLowerCase().includes(genre.toLowerCase())
      );
    return matchesSearch && matchesGenre;
  });

  return (
    <>
      {/* Genre Filters */}
      <div className="flex justify-center flex-wrap-reverse gap-2 items-center p-3">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`${
              selectedGenres.includes(genre)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-500 text-white'
            } w-[90px] h-8 text-center rounded-[10px] text-md mt-3.5 cursor-pointer hover:scale-110 transition`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center p-1.5">
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          className="outline-none border border-gray-300 rounded-xl mt-2 mb-3 bg-gray-200 w-[250px] h-[50px] px-3"
          placeholder="Search movies"
        />
      </div>

      {/* Movie List Table */}
      <div className="border border-gray-300 rounded-lg p-4">
        <table className="w-full text-center border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2 flex justify-center items-center gap-2">
                <button
                  className="cursor-pointer hover:scale-110 transition-transform"
                  onClick={handleSortAscending}
                >
                  ⬆️
                </button>
                <span>Ratings</span>
                <button
                  className="cursor-pointer hover:scale-110 transition-transform"
                  onClick={handleSortDescending}
                >
                  ⬇️
                </button>
              </th>
              <th className="py-2">Year</th>
              <th className="py-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {filteredWatchList.length > 0 ? (
              filteredWatchList.map((movie, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="flex items-center p-3">
                    <div
                      className="w-[100px] h-[120px] rounded-lg mr-4 bg-cover bg-center"
                      style={{ backgroundImage: `url(${movie.Poster})` }}
                    />
                    <span>{movie.Title}</span>
                  </td>
                  <td>{movie.imdbRating || 'N/A'}</td>
                  <td>{movie.Year || 'N/A'}</td>
                  <td>{movie.Genre || 'N/A'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-gray-500">
                  No movies match your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
