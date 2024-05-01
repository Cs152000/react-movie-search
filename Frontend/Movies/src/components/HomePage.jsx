import React, { useState } from 'react';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
 

  const searchMovies = async (e) => {
    try {
      
      const response = await fetch(`https://www.omdbapi.com/?apikey=4eb65943&s=${query}`);
    const data=await response.json();
  setMovies(data.Search)
  console.log(data.Search)
    } catch (error) {
      console.log('Error fetching data:');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div className='bg-purple-500  '>
      <div  className='text-center'>
        <input className='text-black'
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(e=>setQuery(e.target.value))}
        />
        <button className='bg-black px-4 py-1 mx-2 rounded-xl text-white' onClick={handleSubmit} type="submit">Search</button>
      </div>
      <ul className=' w-full grid grid-cols-3  max-sm:grid max-sm:grid-cols-1 py-5 gap-1 mx-10'>
        {movies.map((movie,index) => (
          <li key={index} className="w-[250px] h-[375px]  rounded-2xl overflow-hidden shadow-xl mb-2 ">
            <img className='w-full h-[250px]' src={movie.Poster} alt={movie.Title} />
            <div className=' px-5 py-2 bg-white h-[125px] '>
              <h2 className=" text-base font-medium mb-1">{movie.Title}</h2>
              <p className="text-gray-400 text-base">{movie.Year}</p>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
