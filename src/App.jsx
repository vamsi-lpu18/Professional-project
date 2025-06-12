
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  let [watchList, setWatchList] = useState([]);

  const handleAdd = (movieObj) => {
    setWatchList((prev) => {
      const updatedList = [...prev, movieObj];
      localStorage.setItem("movie", JSON.stringify(updatedList));
      console.log(watchList);
      return updatedList;
    });
  };

  const handleRemove = (movieObj) => {
    setWatchList((prev) => {
      const updatedList = prev.filter((movie) => movie.id !== movieObj.id);
      localStorage.setItem("movie", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("movie");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/watchList" element={<WatchList watchList={watchList} setWatchList={setWatchList} />} />
          <Route
            path="/Movies"
            element={
              <>
                <Banner />
                <Movies
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  watchList={watchList}
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
