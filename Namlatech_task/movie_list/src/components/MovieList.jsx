
import { useEffect, useState } from "react";
import { getCollectionDetails } from "../api";



const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const collectionId = 10; 
  useEffect(() => {
    async function fetchData() {
    const data = await getCollectionDetails(collectionId);
    setMovies(data.parts); 
  }
  fetchData();
  }, []);

  return (
    <div className="container my-4">

    <h2 className="mb-4 text-center"> Movie List</h2>

    <div className="row">

        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
          <div className="card shadow-lg h-100">

      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      className="card-img-top" alt={movie.title}/>
              
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        
        <p className="text-muted text-0-9" >{movie.overview}</p>
      </div>
              
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
