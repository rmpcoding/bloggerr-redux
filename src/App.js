import { useEffect } from 'react';
import Posts from './components/Posts/Posts';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from './redux/actions';

function App() {
    // Hardcode UI.
    // Hard code data, set the UI to use that data.
    // Dynamically get my data.

    const posts = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="row">
                <Posts posts={posts} title="All Posts" />
                {/* <Posts posts={myPosts} title="My Posts" /> */}
            </div>
        </div>
    );
}

export default App;
