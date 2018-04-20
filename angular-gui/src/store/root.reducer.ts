import {combineReducers, Reducer} from "redux";
import {ContactsReducer, IContactState} from "../app/contact/contact.reducer";


export interface IAction {
  type: string;
  payload?: any;
}

export interface IAppState{
  contacts?: IContactState
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  contacts: ContactsReducer
});
