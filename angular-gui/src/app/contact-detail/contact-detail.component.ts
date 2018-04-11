import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../contact/contact.component";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = {
    id: "",
    name: "",
    address: "",
    city: "",
    phone: "",
    email: ""
  };
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

  getContactDetail(id) {
    this.http.get('/contacts/'+id).subscribe((data: Contact) => {
      this.contact = data;
    });
  }

}
