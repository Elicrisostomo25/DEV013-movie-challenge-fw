import {useEffect} from 'react';
import {formatMovie} from '../utils/transformers'
import { Movie } from '../models/Movie';
// para obtener datos de películas desde el endpoint /discover/movie
//no recibir parámetro y devolver una Promise que resuelva un array de objetos de tipo Movie

const API_KEY = '63678adfb9fb329b14118688d228cc7c';
const URL_KEY = 'https://api.themoviedb.org/3';
const llamado_URL = `${URL_KEY}/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY3OGFkZmI5ZmIzMjliMTQxMTg2ODhkMjI4Y2M3YyIsInN1YiI6IjY2MDJjZWRkNjJmMzM1MDE3ZDU0YjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jVy7rtwPFuZj3ATnIwsk87852ZIfDvmMXJ2SoMHDiqw'
  }
};
  
const getMovies= () => {
  useEffect(() => { // Función asincrónica para obtener películas
    const getApi= async () => {
      try {
        const response = await fetch(llamado_URL, options);
        const data = await response.json();
        console.log(data);
        
        // const formateData= result.results.map(pelicula:typeof Movie => formatMovie(pelicula));

      } catch (error) {
        console.log(error)
      }
    };
    getApi();
  }, []); //el segundo argumento está vacío para que el efecto se ejecute solo una v

return 
}
export default getMovies;