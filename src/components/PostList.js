import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../actions";
import { BeatLoader } from "react-spinners";

function  PostList() {

  const dispatch = useDispatch();
  let user = useSelector(state => state.loginUser);

  useEffect(() => {


    dispatch(fetchPosts(user.sessionId));
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = useSelector(state => state.loadPosts.posts);
  const filter = useSelector(state => state.search);
  const isFetching = useSelector(state => state.loadPosts.isFetching);
  return (
    <div className="container">
      {
      (isFetching || !posts)
      ?<BeatLoader size={40} color={"#11aabc"} margin={"20px"} loading={isFetching} />
      :(
        posts.map(post => {
        if (("" + post.title).includes(filter)) {
          return (
            <Post
              key={post.id}
              id={post.id}
              votes={post.voteCount}
              title={post.title}
              text={post.text}
              time={post.date}
              user={post.user}
              groupName={post.group?post.group.name:""}
              />
              
          );
        } else {
          return "";
        }
      }))
      }
    </div>
  );
}

export default PostList;
