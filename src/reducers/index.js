import { combineReducers } from "redux";
import searchFilter from "./searchReducer";
import { counter } from "./counterReducer";
const allReducers = combineReducers({
    // visiblePosts : searchReducer,
    // p
    counter : counter,
    search : searchFilter
});

export default allReducers;