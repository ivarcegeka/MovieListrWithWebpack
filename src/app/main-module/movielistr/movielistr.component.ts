import {Component} from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: 'main-movielistr',
    templateUrl: 'movielistr-component.html',
    styleUrls: ['movielistr.css']
})
export class MovieListrComponent {

    constructor() {
        console.log('in constructor');
    }

}