import {Contact} from "./contact.component";
import {IAction} from "../../store/root.reducer";
import {ContactAction} from "./contact.action";

export interface IContactState {
  contacts: Contact[];
}

export const INITIAL_STATE: IContactState = {
  contacts: []
};

export const ContactsReducer = (state: IContactState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case ContactAction.LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};
