import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "@progress/kendo-angular-buttons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContactDetailComponent} from "./contact-detail.component";


@NgModule({
  declarations: [
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
  ]
})
export class ContactDetailModule {

}
