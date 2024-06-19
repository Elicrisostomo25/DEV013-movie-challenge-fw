
//import {getMovies} from './services/APIService'
import './App.css'
import  getMovies from './services/APIService'

//const token = process.env.VITE_TOKEN_API;

function App() {
  getMovies();
  console.log(getMovies);
  return (
    <>
    <p>Catalogo películas</p>
    </>
  
  )
}

export default App
