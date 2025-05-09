import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieSearch } from "../../api/api-movies";
import NavLink from "../../components/NavLink/NavLink";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";
  const [moviesList, setMoviesList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieName === "") {
      return;
    }
    setMoviesList([]);
    setLoading(true);
    const getMovieByKeyword = async (movieName) => {
      try {
        await getMovieSearch(movieName).then((data) => {
          if (!data.length) {
            setLoading(false);
            setIsError(true);
            return;
          }
          setIsError(false);
          setMoviesList(data);
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    getMovieByKeyword(movieName);
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };

  return (
    <main className={css.container}>
      <div className={css.moviesPage}>
        <NavLink onSubmit={handleSubmit} />
        <MovieList movies={moviesList} />
        {isError && <ErrorMessage />}
        {loading && <Loader />}
      </div>
    </main>
  );
}
