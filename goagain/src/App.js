import React from 'react';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.cats()}/>
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

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.cats()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Bam
          </a>
          <div className="metadata">
            <span className="date">6:00AM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.cats()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Dan
          </a>
          <div className="metadata">
            <span className="date">6:00AM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

export default App;
