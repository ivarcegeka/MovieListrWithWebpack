import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ActionBarComponent} from "./actionbar/action-bar.component";
import {MovieListrComponent} from "./movielistr/movielistr.component";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ActionBarComponent, MovieListrComponent, PageNotFoundComponent],
    exports: [MovieListrComponent, PageNotFoundComponent]
})
export class MainModule {
}
