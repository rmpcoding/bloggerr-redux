import { useState } from 'react';



function App() {
  // Hardcode UI.
  // Hard code data, set the UI to use that data.
  // Dynamically get my data.

  const [post, setPost] = useState({
    userId: 1,
    id: 1,
    title: 'Lorem ipsum dolor ',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>This will be our title</h2>
          <p>
            <strong>User ID</strong>
          </p>
          <p>
            <strong>Post ID</strong>
          </p>
          <p>
            {post.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
