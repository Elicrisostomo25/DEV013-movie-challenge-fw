//Definir un tipo TypeScript llamado Movie para representar una película. tener campos como para la renderización y ...
//Incluir campos título, póster, año de lanzamiento y cualquier otra información relevante necesaria para la interfaz de usuario y la lógica de negocio.
//Exportar el tipo de Película desde el fichero movie.d.ts

export const Movie: {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    genre_ids: string,
    vote_average: number,
    overview: string,
    language: string,
}

