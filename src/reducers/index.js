import { combineReducers } from "redux";
import searchFilter from "./searchReducer";
import { counter } from "./counterReducer";
import {loginUser} from "./loginReducer";
import { selectedPost } from "./selectedPostReducer";
import { commentsByPost } from "./commentsReducer";
import { loadPosts } from "./postReducer";

const allReducers = combineReducers({
    // visiblePosts : searchReducer,
    // p
    counter : counter,
    search : searchFilter,
    loginUser : loginUser,
    commentsByPost,
    selectedPost,
    loadPosts,
});

export default allReducers;