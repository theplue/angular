import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { GridModule } from '@progress/kendo-angular-grid';
import {ButtonModule} from "@progress/kendo-angular-buttons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    ButtonModule,
    BrowserAnimationsModule
  ]
})
export class ContactModule {

}
