import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import dailyModuleReducer from "./reducers/DailyModuleReducer";
import timetableReducer from "./reducers/TimeTableReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    auth:authReducer,
    module:dailyModuleReducer,
    timetable:timetableReducer
})

const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;