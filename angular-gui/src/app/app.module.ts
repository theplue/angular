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
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent
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
