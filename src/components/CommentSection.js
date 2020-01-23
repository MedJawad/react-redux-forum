import React, { useEffect } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../actions";
import { BeatLoader } from "react-spinners";

const CommentSection = (props) => {

    const dispatch = useDispatch();
    let user = useSelector(state => state.loginUser);
  
    useEffect(() => {
  
  
      dispatch(fetchComments(props.postId,user.sessionId));
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const comments = useSelector(state => state.commentsByPost.items);
    const isFetching = useSelector(state => state.commentsByPost.isFetching);
    return (
        <div>
            {
                (isFetching || !comments)
                ?<BeatLoader />
                :comments.map(
                    comment => <Comment key={comment.id} votes={comment.votes} text={comment.text} time={comment.date} user={comment.user} />
                )
            }
        </div>
    );
}

export default CommentSection;