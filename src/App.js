import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts/Posts';

function App() {
    // Hardcode UI.
    // Hard code data, set the UI to use that data.
    // Dynamically get my data.

    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
                const filteredPosts = response.data.filter(
                    (post) => post.userId === 1
                );
                setMyPosts(filteredPosts);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <Posts posts={posts} title="All Posts" />
                <Posts posts={myPosts} title="My Posts" />
            </div>
        </div>
    );
}

export default App;
