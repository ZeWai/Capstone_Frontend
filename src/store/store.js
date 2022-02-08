import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { authReducer } from './auth/reducer'
import { userReducer } from './user/reducer'
import { OverviewReducer } from "./Overview/reducers"
import { FraminfoReducer } from "./Farminfo/reducers";
import { ProgressReducer } from "./Progress/reducers"
import { zoneReducer } from "./getzone/reducers"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authStore: authReducer,
    userStore: userReducer,
    OverStore: OverviewReducer,
    FramStore: FraminfoReducer,
    ProgressStore: ProgressReducer,
    zoneStore: zoneReducer,
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
    // composeEnhancers(applyMiddleware(thunk))
)