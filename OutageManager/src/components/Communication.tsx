```tsx
import React, { useState } from 'react';

interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
}

const Communication: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (text: string, author: string) => {
    const newComment: Comment = {
      id: Math.random().toString(),
      text,
      author,
      timestamp: new Date(),
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div>
      <h2>Comments and Discussions</h2>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <p>By: {comment.author}</p>
            <p>At: {comment.timestamp.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div>
        <input type="text" placeholder="Add a comment" />
        <button onClick={() => handleAddComment('Test comment', 'Test author')}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Communication;
```