import {Injectable} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../store/root.reducer";
import {ContactService} from "./contact.service";

@Injectable()
export class ContactAction {
  static LOAD_CONTACTS = 'LOAD_CONTACTS';

  constructor(private  service: ContactService){}

  loadContacts() {
    this.service.loadContacts();
  }

}
