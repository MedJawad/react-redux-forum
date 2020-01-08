import React , {useState} from 'react';
import { useSelector , useDispatch } from "react-redux";
import { increment } from '../actions';
import Post from "./Post";

function PostList() {
    const [posts, setPosts] = useState(
        [
            {votes : 500,title: "dummy title 1",text:"dummy text 1 dummy text 1 dummy text 1 dummy text 1 dummy text 1"},
            {votes : 450,title: "I’m Rex Orange County, a singer/musician who writes music and I am here to answer all your questions. AMA!",text:"Hey guys, Rex Orange County aka Alex here. My US tour starts tomorrow and I’m here to answer any questions you might have about my music, the tour, or my new album Pony"},
            {votes : 300,title: "3 years ago I quit my job & started writing poems for strangers in public parks. ",text:"Last year I began to notice how many pick-up artists were in the park. There so many of them who were there almost every day, spending hours targeting women. I started calling them out, and then staging interventions when they would make approaches."},
    ]);

    const filter = useSelector(state => state.search);

    const dispatch = useDispatch();

        return (
            <div className="container">
               {posts.map(post => {
                   if ( (""+post.title).includes(filter) ) {
                       return ( <React.Fragment>
                           <Post votes={post.votes} title={post.title} text={post.text} /> 
                           <br/> 
                           </React.Fragment>
                           );
                   } else {
                       return "";
                   }
               })} 
            </div>
        )
}

export default PostList;