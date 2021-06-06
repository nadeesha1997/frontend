import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import dailyModuleReducer from "./reducers/DailyModuleReducer";
import timetableReducer from "./reducers/TimeTableReducer"
import subjectListReducer from "./reducers/SubjectListReducer";
import moduleDropReducer from "./reducers/ModuleDropReducer";
import mailReducer from "./reducers/MailReducer";
import selectedUserReducer from "./reducers/SelectedUserReducer";
import OnlineSessionReducer from "./reducers/OnlneSessionReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    auth:authReducer,
    module:dailyModuleReducer,
    timetable:timetableReducer,
    subjectList:subjectListReducer,
    moduleDrop:moduleDropReducer,
    mail:mailReducer,
    selectedUser:selectedUserReducer,
    online:OnlineSessionReducer
})

const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;