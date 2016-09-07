import {Component, Input} from "@angular/core";
import {Movie} from "../../../db-module/movie.class";

@Component({
    moduleId: module.id.toString(),
    selector: 'display-movie-list-item',
    templateUrl: 'movie-list-item-component.html',
    styleUrls: ['movie-list-item.css']
})
export class MovieListItemComponent {

    @Input() movie: Movie;
}