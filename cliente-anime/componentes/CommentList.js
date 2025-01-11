import React, { useState } from "react";
import { createComment } from "../api/api";

function CommentList({ anime }) {
  const [comments, setComments] = useState(anime.comments || []);
  const [newComment, setNewComment] = useState({ user_name: "", comment: "" });

  const handleAddComment = () => {
    const commentData = { ...newComment, anime: anime.id };
    createComment(commentData).then((response) =>
      setComments([...comments, response.data])
    );
  };

  return (
    <div>
      <h3>Comentarios</h3>
      <ul>
        {comments.map((com) => (
          <li key={com.id}>
            {com.user_name}: {com.comment}
          </li>
        ))}
      </ul>
      <input
        placeholder="Name"
        value={newComment.user_name}
        onChange={(e) => setNewComment({ ...newComment, user_name: e.target.value })}
      />
      <textarea
        placeholder="Comment"
        value={newComment.comment}
        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default CommentList;