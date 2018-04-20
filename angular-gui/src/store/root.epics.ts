import {Injectable} from "@angular/core";
import {combineEpics} from "redux-observable";

@Injectable()
export class RootEpics {
  constructor(
    // private _shipEpics: ShipEpics,
  ) {}

  public combineEpics() {
    return combineEpics(
    );
  }
}
