import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../db-module/movie.service";

@Component({
    moduleId: module.id.toString(),
    selector: 'display-movie-details',
    templateUrl: 'movie-details-component.html',
    styleUrls: ['movie-details.css'],
    providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {

    public movie;
    public error;

    constructor(private route: ActivatedRoute,
                private movieService: MovieService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route
            .params
            .subscribe(params => {
                let selectedId = params['id'];
                this.movie = this.movieService.getMovie(selectedId);
            });
    }

}