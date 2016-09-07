import {Injectable} from "@angular/core";
import * as PouchDB from "pouchdb";
import * as relationalPouch from "relational-pouch";
import {Movie} from "./movie.class";
import {Observable} from "rxjs";


@Injectable()
export class MovieService {

    private MOVIE_SCHEMA = 'movie';

    private db;

    constructor() {
        this.db = new PouchDB('movies');
        PouchDB.plugin(relationalPouch);
        this.db.setSchema([
            {singular: 'movie', plural: 'movies'}
        ]);
    }

    getMovies(): Observable<Array<Movie>> {
        return new Observable<Array<Movie>>(observer => {
            this.db
                .rel
                .find(this.MOVIE_SCHEMA)
                .then((data) => {
                    observer.next(this.mapToMovies(data.movies));
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
        });
    }

    getMovie(id) {
        return new Observable<Movie>(observer => {
            this.db
                .rel
                .find(this.MOVIE_SCHEMA, id)
                .then((data) => {
                    observer.next(this.mapToMovie(data.movies[0]));
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
        });
    }

    saveMovie(movie: Movie) {
        return new Observable<Movie>(observer => {
            this.db
                .rel
                .save(this.MOVIE_SCHEMA, movie)
                .then((data) => {
                    observer.next(data);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
        });
    }

    deleteMovie(movie: Movie) {
        return new Observable<Movie>(observer => {
            this.db
                .rel
                .del(this.MOVIE_SCHEMA, movie)
                .then(
                    data => observer.complete(),
                    error => observer.error(error)
                )
        });
    }

    private mapToMovie(databaseRow): Movie {
        return new Movie(databaseRow.name, databaseRow.duration, databaseRow.rating, databaseRow.director, databaseRow.id, databaseRow.rev);
    }

    private mapToMovies(databaseRows): Array<Movie> {
        let result: Array<Movie> = [];
        databaseRows.forEach((row) => {
            result.push(this.mapToMovie(row));
        })
        return result;
    }

}