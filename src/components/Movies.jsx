import Movie from "./Movie";

const Movies = ({ movies }) => {
  // console.log(movies);
  return (
    <div className="container mx-auto py-20 ">
      <h1 className="flex items-center justify-center text-center text-5xl text-rose-600 mb-10 p-5">
        Movies that transcends time: (<span>{movies.length}</span>)
        </h1>
      <div className="grid grid-cols-5 gap-5">
        {movies.map((movie)=>(
          <Movie key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default Movies;
