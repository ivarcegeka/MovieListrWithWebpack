import {Component, Input} from "@angular/core";
import {MovieService} from "../../../db-module/movie.service";
import {Movie} from "../../../db-module/movie.class";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id.toString(),
    selector: 'display-movie-details-title',
    templateUrl: 'movie-details-title-component.html',
    styleUrls: ['movie-details-title.css'],
    providers: [MovieService]
})
export class MovieDetailsTitleComponent {

    @Input() movie: Movie;

    constructor(private movieService: MovieService, private router: Router) {
    }

    public deleteMovie(movie) {
        this.movieService
            .deleteMovie(movie)
            .subscribe(
                null,
                error => console.log(error),
                () => this.router.navigateByUrl('/movies'));
    }
}