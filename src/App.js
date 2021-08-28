import { useState } from 'react';
import axios from 'axios';
import Post from './components/Post/Post';

function App() {
    // Hardcode UI.
    // Hard code data, set the UI to use that data.
    // Dynamically get my data.

    const [posts, setPost] = useState([
        {
            userId: 1,
            id: 1,
            title: 'Lorem ipsum dolor ',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            userId: 1,
            id: 1,
            title: 'Lorem ipsum dolor ',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
    ]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {posts.map((post) => {
                        return <Post {...post} key={post.id} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
