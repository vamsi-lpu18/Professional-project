// import React, { useState, useEffect } from "react";
// import Card from "./Card";

// const Movies = ({handleAdd,handleRemove,watchList}) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchMovies = async (page) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(
//         `https://www.omdbapi.com/?s=batman&page=${page}&apikey=9cba9513`
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (data.Response === "True") {
//         const detailedMovies = [];
//         for (let movie of data.Search) {
//           const detailsResponse = await fetch(
//             `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=9cba9513`
//           );
//           const details = await detailsResponse.json();
//           // console.log
//           detailedMovies.push({
//             Title: details.Title,
//             Year: details.Year,
//             Poster: details.Poster,
//             Genre: details.Genre,
//             imdbRating: details.imdbRating,
//             // id:details.imdbID
//           });
//         }

//         setMovies(detailedMovies);
//         setTotalPages(Math.ceil(data.totalResults / 10)); 
//       } else {
//         throw new Error(data.Error || "Failed to fetch movies");
//       }
//     } catch (err) {
//       setError(err.message || "Error fetching data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMovies(currentPage);
//   }, [currentPage]);

//   const handlePageChange = (direction) => {
//     if (direction === "prev" && currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     } else if (direction === "next" && currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   if (loading) return <div className="text-center font-bold text-4xl">Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-center">Movies</h1>
//       <div className="flex flex-wrap justify-center gap-4 mt-4">
//         {movies.map((movie, index) => (
//           <Card
//             key={index}
//             poster={movie.Poster}
//             title={movie.Title}
//             year={movie.Year}
//             genre={movie.Genre}
//             rating={movie.imdbRating}
//             handleAdd={handleAdd}
//             handleRemove={handleRemove}
//             watchList={watchList}
//             // id={movie.imdbID}
//             movie={movie}
//           />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center gap-4 mt-6">
//         <button
//           onClick={() => handlePageChange("prev")}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 rounded ${
//             currentPage === 1
//               ? "bg-gray-300 disabled:bg-gray-300 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-700 text-white"
//           }`}
//         >
//           Previous
//         </button>
//         <span className="font-bold">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => handlePageChange("next")}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 rounded ${
//             currentPage === totalPages
//               ? "bg-gray-300 disabled:bg-gray-300 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-700 text-white"
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Movies;
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Movies = ({ handleAdd, handleRemove, watchList }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://www.omdbapi.com/?s=batman&page=${page}&apikey=9cba9513`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "True") {
        const detailedMovies = [];
        for (let movie of data.Search) {
          const detailsResponse = await fetch(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=9cba9513`
          );
          const details = await detailsResponse.json();

          detailedMovies.push({
            id: details.imdbID, // Include imdbID
            Title: details.Title,
            Year: details.Year,
            Poster: details.Poster,
            Genre: details.Genre,
            imdbRating: details.imdbRating,
          });
        }

        setMovies(detailedMovies);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } else {
        throw new Error(data.Error || "Failed to fetch movies");
      }
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (loading) return <div className="text-center font-bold text-4xl">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Movies</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {movies.map((movie) => (
          <Card
            key={movie.id} // Use imdbID as the key
            id={movie.id} // Pass imdbID as a prop
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            genre={movie.Genre}
            rating={movie.imdbRating}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            watchList={watchList}
            movie={movie}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 disabled:bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          Previous
        </button>
        <span className="font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 disabled:bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
