export default class API {
    static root = 'http://www.omdbapi.com/?apikey=4098c09a';

    static search(input){
        let url = this.root + '&s=' + input;
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json.Search;
            });
    }

    static view(input){
        let url = this.root + '&i=' + input;
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return {
                            Title: json.Title,
                            Poster: json.Poster,
                            Metascore: json.Metascore,
                            imdbRating: json.imdbRating,
                            Year: json.Year,
                            Genre: json.Genre,
                            Runtime: json.Runtime,
                            Released: json.Released,
                            Plot: json.Plot,
                            Director: json.Director,
                            Writer: json.Writer,
                            Actors: json.Actors,
                        }
            });
    }
}

// https://www.themoviedb.org
// API Key: 2487ee2d02aacb9f43a70933b688c67a
// API Read Access Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDg3ZWUyZDAyYWFjYjlmNDNhNzA5MzNiNjg4YzY3YSIsInN1YiI6IjViY2RlNGFkYzNhMzY4Mjg2YTAyODVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bs6cNmGqg03atYcKLy6vEZEuRdJVeW4C3uEqb9PnAzA