import React from 'react';
import { useSelector , useDispatch } from "react-redux";
import { increment } from '../actions';
import PostList from "./PostList";

function Main() {

    const dispatch = useDispatch();
        return (
            <div className="container">
                Counter : {useSelector(state => state.counter)}
                <button onClick={() => dispatch(increment())}>+</button>
                <br/> 

                <PostList />
            </div>
        )
}

export default Main;