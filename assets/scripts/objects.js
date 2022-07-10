const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  const movies = [];

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
        title,
        [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler)
