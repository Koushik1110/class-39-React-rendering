const Movie = ({movie}) => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out">
      <p className="text-xs font-semibold bg-rose-600 text-white h-5 w-5 flex items-center justify-center rounded-full">{movie.id}</p>
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="text-gray-500">{movie.year}</p>
    </div>
  );
};

export default Movie;
