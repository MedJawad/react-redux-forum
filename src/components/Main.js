import React from "react";
// import { useSelector , useDispatch } from "react-redux";
// import { increment } from "../actions";
import PostList from "./PostList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PostPage from "./PostPage";

function Main() {
  //   const dispatch = useDispatch();
  return (
    <Router>
      <div className="container">
        {/* Counter : {useSelector(state => state.counter)}
      <button onClick={() => dispatch(increment())}>+</button> */}
        <br />
        <Switch>
          <Route path="/post/:postid" exact component={PostPage} />
          <Route path="/" component={PostList} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
