import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  //console.log("Comments.js, comments: ", comments);

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => {
        //console.log("Comment.js, comment: ", comment)
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  );
};

export default Comments;
