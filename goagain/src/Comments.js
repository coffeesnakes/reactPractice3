import React from 'react';
import faker from 'faker';

const Comment = () => {
  return (

    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.cats()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
          </a>
        <div className="metadata">
          <span className="date">6:00AM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  )
};

export default Comment;