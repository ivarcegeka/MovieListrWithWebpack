import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DbModule} from "../db-module/db.module";
import {EditFormComponent} from "./editform/edit-form.component";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, DbModule],
    declarations: [EditFormComponent],
    exports: [EditFormComponent]
})
export class EditingModule {
}
