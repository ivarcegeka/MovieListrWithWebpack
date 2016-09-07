import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MovieListrComponent} from "./main-module/movielistr/movielistr.component";
import {routing, appRoutingProviders} from "./app.routing";
import {MainModule} from "./main-module/main.module";
import {EditingModule} from "./editing-module/editing.module";
import {DisplayModule} from "./display-module/display.module";

@NgModule({
    imports: [MainModule, BrowserModule, DisplayModule, EditingModule, routing],
    providers: [appRoutingProviders],
    bootstrap: [MovieListrComponent]
})
export class AppModule {
}
