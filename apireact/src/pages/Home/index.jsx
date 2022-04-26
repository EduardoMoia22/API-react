import { Container, MovieList, Movie } from "./style"

export default function Home() {

    const movies = [
        {
            id: 1,
            title: 'It: a coisa - Parte 3',
            image_url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2017/04/poster-it-a-coisa-2-fim.jpg'
        },
        {
            id: 2,
            title: 'Spider-Man: No Way Home',
            image_url: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg'
        },
        {
            id: 3,
            title: 'It: a coisa - Parte 3',
            image_url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2017/04/poster-it-a-coisa-2-fim.jpg'
        }
    ]

    return (
        <Container>
            <h1>Movies</h1>

            <MovieList>

                {
                    movies.map(movie => <Movie key={movie.id}> <a href="https://google.com"><img src={movie.image_url} alt="IT-2" /></a><span>{movie.title}</span></Movie>)
                }
                
            </MovieList>
        </Container>
    );
}