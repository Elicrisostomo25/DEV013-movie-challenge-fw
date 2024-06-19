// //import { render, screen } from "@testing-library/react";
// import { formatMovie } from "./transformers";


// const pelicula1 = {
//     id: 1,
//     title: "Título de la película",
//     poster_path: "poster.jpg",
//     release_date: "2022-05-09",
//     with_genres: "Acción",
//     vote_average: 8.5,
//     overview: "Resumen de la película",
//     language: "Español",
// };

// describe ('comprobar que la función formatMovie retorne los datos de una película', () => {
//     test('formatMovie devuelve una película con datos ingresados', ()=>{
//         const expectedHTML = `
//           <div class="tarjeta-pelicula">
//             <img src="${pelicula.poster_path}" alt="${pelicula.title}" class="poster">
//             <h3 class="titulo">"${pelicula.title}"</h3>
//             <p class="fecha">"${pelicula.release_date}"</p>
//             <div class="contenido">
//               <h2 class="titulo1">${pelicula.title}</h2>
//               <p><strong>Año:</strong> ${pelicula.release_date}</p>
//               <p><strong>Género:</strong> ${pelicula.with_genres}</p>
//               <p><strong>Votación:</strong> ${pelicula.vote_average}</p>
//               <p><strong>Resumen:</strong> ${pelicula.overview}</p>
//               <p><strong>Lenguaje:</strong> ${pelicula.language}</p>
//             </div>
//           </div>
//         `;
    
//         expect(formatMovie(pelicula1)).toBe(expectedHTML);
//     })
// })