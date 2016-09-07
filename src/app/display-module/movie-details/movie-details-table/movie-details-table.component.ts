import {Component, Input} from "@angular/core";
import {Movie} from "../../../db-module/movie.class";

@Component({
    moduleId: module.id.toString(),
    selector: 'display-movie-details-table',
    templateUrl: 'movie-details-table-component.html'
})
export class MovieDetailsTableComponent {

    @Input() movie: Movie;
    public error;

    constructor() {
    }

    public getStarArray(rating) {
        var result = new Array(rating);
        for(var i = 0; i < result.length; i++) {
            result[i] = true;
        }
        var nrOfEmptyStars = 10 - rating;
        for (let i = 0; i < nrOfEmptyStars; i++) {
            result.push(false);
        }
        return result;
    }

}