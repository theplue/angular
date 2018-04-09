import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    GridModule
  ]
})
export class ContactModule {

}
