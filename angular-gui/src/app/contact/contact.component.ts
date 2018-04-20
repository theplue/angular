import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactAction} from "./contact.action";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";

export interface Contact {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @select(['contact', 'contacts']) contacts$: Observable<Contact>;

  contacts: any;
  constructor(private actions: ContactAction) { }

  ngOnInit() {
    this.actions.loadContacts();
    // this.http.get('/contacts').subscribe(data => {
    //   this.contacts = data;
    // });
  }

}
