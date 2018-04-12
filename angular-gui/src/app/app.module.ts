import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GridModule} from "@progress/kendo-angular-grid";
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import {ContactDetailModule} from "./contact-detail/contact-detail.module";
import {CreateContactModule} from "./create-contact/create-contact.module";
import {ContactModule} from "./contact/contact.module";

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-create',
    component: CreateContactComponent,
    data: { title: 'Create Contact' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
