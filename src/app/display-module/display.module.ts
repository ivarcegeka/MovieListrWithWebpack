import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {DbModule} from "../db-module/db.module";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListItemComponent} from "./movie-list/movie-list-item/movie-list-item.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieDetailsTableComponent} from "./movie-details/movie-details-table/movie-details-table.component";
import {MovieDetailsTitleComponent} from "./movie-details/movie-details-title/movie-details-title.component";

@NgModule({
    imports: [CommonModule, DbModule, RouterModule],
    declarations: [MovieListComponent, MovieListItemComponent, MovieDetailsComponent, MovieDetailsTableComponent, MovieDetailsTitleComponent],
    exports: [MovieListComponent, MovieDetailsComponent]
})
export class DisplayModule {
}
