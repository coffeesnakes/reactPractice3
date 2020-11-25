import React from 'react';
import faker from 'faker';
import Comments from './Comments.js';

const App = () => {
  return (
    <div className="ui container comments">
      < Comments author="sadgirl" />
      < Comments author="Alex"/>
      < Comments author="Jane"/>

    </div>
  );
};

export default App;
