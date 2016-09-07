import {Routes, RouterModule} from "@angular/router";
import {MovieListComponent} from "./display-module/movie-list/movie-list.component";
import {MovieDetailsComponent} from "./display-module/movie-details/movie-details.component";
import {EditFormComponent} from "./editing-module/editform/edit-form.component";
import {PageNotFoundComponent} from "./main-module/pagenotfound/pagenotfound.component";

const appRoutes: Routes = [
    {path: '', component: MovieListComponent},
    {path: 'movies', component: MovieListComponent},
    {path: 'details/:id', component: MovieDetailsComponent},
    {path: 'add', component: EditFormComponent},
    {path: 'edit/:id', component: EditFormComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
