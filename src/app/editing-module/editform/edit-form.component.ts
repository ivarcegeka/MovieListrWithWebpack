import {Component, OnInit} from "@angular/core";
import {Movie} from "../../db-module/movie.class";
import {MovieService} from "../../db-module/movie.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'edit-form-component.html',
    styleUrls: ['edit-form.css'],
    providers: [MovieService]
})
export class EditFormComponent implements OnInit {

    public model;
    public error;

    constructor(private movieService: MovieService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route
            .params
            .subscribe(params => {
                let selectedId = params['id'];
                if (selectedId) {
                    this.movieService
                        .getMovie(selectedId)
                        .subscribe(
                            value => this.model = value,
                            error => this.error = true
                        );
                } else {
                    this.resetModel();
                }
            });
    }


    private resetModel() {
        this.model = new Movie("", 0, 0, "");
    }

    public onSubmit() {
        let isAdd = this.model.id == null;
        this.movieService
            .saveMovie(this.model)
            .subscribe(
                null,
                error => {
                    this.error = true;
                    console.log(error);
                },
                () => {
                    if (isAdd) {
                        this.router.navigateByUrl('');
                    } else {
                        this.router.navigateByUrl('/details/'.concat(this.model.id));
                    }
                });
    }

}