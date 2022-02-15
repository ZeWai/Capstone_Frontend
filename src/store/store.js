import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { userReducer } from "./user/reducer";
import { OverviewReducer } from "./Overview/reducers";
import { FarminfoReducer } from "./Farminfo/reducers";
import { ProgressReducer } from "./Progress/reducers";
import { zoneReducer } from "./getzone/reducers";
import { cropReducer } from "./Getcrop/reducers";
import { farmlogReducer } from "./Farmlog/reducers";
import { ScheduledReducer } from "./Scheduled/reducers";
import { clientListReducer, farmerListReducer } from "./Client/reducers";
import { Todoeducer } from "./Todo/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authStore: authReducer,
  userStore: userReducer,
  OverStore: OverviewReducer,
  FarmStore: FarminfoReducer,
  ProgressStore: ProgressReducer,
  zoneStore: zoneReducer,
  cropStore: cropReducer,
  clientStore: clientListReducer,
  farmerStore: farmerListReducer,
  ScheduledStore: ScheduledReducer,
  farmlogStore: farmlogReducer,
  TodoStore:Todoeducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
  // composeEnhancers(applyMiddleware(thunk))
);
