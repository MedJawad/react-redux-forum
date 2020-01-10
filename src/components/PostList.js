import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      votes: 500,
      title: "dummy title 1",
      text: "dummy text 1 dummy text 1 dummy text 1 dummy text 1 dummy text 1"
    }
  ]);

  //USE EFFECT WITH EMPTY ARRAY IN SECOND ARGUMENT MEANS THAT IT ONLY TRIGGERS ON FIRST RENDER ; EQUIVALENT TO COMPONENTDIDMOUNT
  useEffect(() => {
    fetch("http://localhost:8080/ForUs/FindPosts")
      .then(results => results.json())
      .then(data => {
        let newPosts = [];
        data.map(post => {
          newPosts = newPosts.concat([
            {
              id: post.id,
              votes: post.voteCount || 0,
              title: post.title || "",
              text: post.text || ""
            }
          ]);
        }); // end of data.map

        setPosts(posts.concat(newPosts));
      });
  }, []);

  const filter = useSelector(state => state.search);

  const dispatch = useDispatch();

  return (
    <div className="container">
      {posts.map(post => {
        if (("" + post.title).includes(filter)) {
          return (
            <Post
              key={post.id}
              votes={post.votes}
              title={post.title}
              text={post.text}
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default PostList;
