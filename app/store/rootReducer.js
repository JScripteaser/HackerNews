import {combineReducers} from "redux"
import newsReducer from '../containers/getNews/reducer'


export const rootReducer = combineReducers({
    data: newsReducer
});
