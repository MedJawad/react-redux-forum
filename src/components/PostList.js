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
      text: "dummy text 1 dummy text 1 dummy text 1 dummy text 1 dummy text 1",
      time : "2020-01-11T00:30:25",
      user : {id : 1 , username : "jawad"},
      group : {id : 1 ,name: "Science"},

    }
  ]);

  //USE EFFECT WITH EMPTY ARRAY IN SECOND ARGUMENT MEANS THAT IT ONLY TRIGGERS ON FIRST RENDER ; EQUIVALENT TO COMPONENTDIDMOUNT
  useEffect(() => {
    fetch("http://localhost:8080/ForUs/Posts/All") // fetch ALL Posts
    //fetch("http://localhost:8080/ForUs/Posts/user?id=getLoggedUserIdFromStore") // fetch ALL Posts of this User
    //fetch("http://localhost:8080/ForUs/Posts/All") // fetch ALL Posts this user should see

    
      .then(results => results.json())
      .then(data => {
        let newPosts = [];
        data.map(post => {
          newPosts = newPosts.concat([
            {
              id: post.id,
              votes: post.voteCount || 0,
              title: post.title || "",
              text: post.text || "",
              time : post.date||"",
              user : post.user,
              group : post.group,
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
              time={post.time}
              username={post.user.username||""}
              groupName={post.group?post.group.name:""}
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
