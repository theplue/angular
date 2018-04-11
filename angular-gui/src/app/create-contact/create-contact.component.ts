import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Contact} from "../contact/contact.component";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = {
    id: "",
    name: "",
    address: "",
    city: "",
    phone: "",
    email: ""
  };
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContact() {
    this.http.post('/contacts', this.contact)
      .subscribe((res: Contact) => {
          this.router.navigate(['/contact-detail', res.id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
