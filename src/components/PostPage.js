import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import CommentSection from "./CommentSection";

const PostPage = (props) => {
    
    const posts = useSelector(state => state.loadPosts.posts);
    const post = posts.filter( post => {
        return post.id==props.match.params.postid;
    })[0];

    //console.log(post);
    return (
        <div className="bg-info">
            {
            (post&&post.user)
            ?
            <React.Fragment>

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
              <CommentSection postId={post.id} />
              </React.Fragment>
            : "Wrong Post Id"
            }
        </div>
    );
}

export default PostPage;