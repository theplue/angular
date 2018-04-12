import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "@progress/kendo-angular-buttons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreateContactComponent} from "./create-contact.component";


@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
  ]
})
export class CreateContactModule {

}
