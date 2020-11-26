import React from 'react';
import faker from 'faker';
import Comments from './Comments.js';
import ApprovalCard from './ApprovalCard.js'

const App = () => {
  return (
    <div className="ui container comments">
      < ApprovalCard>
      < Comments
        author="sadgirl"
        timeA="Today at 9:35 PM"
        txt="i'm... so.... tired..."
        avatar={faker.image.people()}
      />
      </ApprovalCard>
      < ApprovalCard>
      < Comments
        author="Alex"
        timeA="Yesterday at 6:41 PM"
        txt="let's get it woooo"
        avatar={faker.image.people()}
      />
      </ApprovalCard>
      < ApprovalCard>
        < Comments
          author="Jane"
          timeA="Today at 4:20 AM"
          txt="this kid playing basketball indoors is ruining my vibes"
          avatar={faker.image.people()}
        />
</ApprovalCard>
    </div>
  );
};

export default App;
