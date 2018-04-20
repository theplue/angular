import {NgModule} from '@angular/core';
import {RootEpics} from "./root.epics";
import {IAppState, rootReducer} from "./root.reducer";
import {DevToolsExtension, NgRedux, NgReduxModule} from "@angular-redux/store";
import { createLogger } from 'redux-logger';
import {createEpicMiddleware} from "redux-observable";


@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics) {

    store.configureStore(
      rootReducer,
      {},
      [
        createLogger(),
        createEpicMiddleware(rootEpics.combineEpics())
      ],
      [devTools.isEnabled() ? devTools.enhancer() : f => f]
    );
  }
}
