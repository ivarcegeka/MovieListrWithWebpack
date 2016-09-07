import {Component, OnInit} from "@angular/core";
import {MovieService} from "../../db-module/movie.service";
import {Movie} from "../../db-module/movie.class";
import {Observable} from "rxjs";

@Component({
    moduleId: module.id.toString(),
    selector: 'display-movie-list',
    templateUrl: 'movie-list-component.html',
    styleUrls: ['movie-list.css'],
    providers: [MovieService]
})
export class MovieListComponent implements OnInit{

    public movies:Observable<Array<Movie>>;

    constructor(private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.movies = this.movieService.getMovies();
    }
}