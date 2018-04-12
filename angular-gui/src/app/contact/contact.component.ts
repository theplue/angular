import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  contacts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/contacts').subscribe(data => {
      this.contacts = data;
    });
  }

}
