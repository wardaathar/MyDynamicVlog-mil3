"use client"
import React, { useState } from 'react';


interface Comment {
  id: number;
  text: string;
  author: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim() && author.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        text: newComment,
        author: author,
      };
      setComments([...comments, comment]);
      setNewComment('');
      setAuthor('');
    }
  };

  return (
    <div className='container'>
      <h2>Comments</h2>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p><strong>{comment.author}</strong>: {comment.text}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;