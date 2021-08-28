import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ id, userId, title, body }) => {
    return (
        <div>
            <h2>This will be our title</h2>
            <p>
                <strong>User ID</strong>
            </p>
            <p>
                <strong>Post ID</strong>
            </p>
            <p>{body}</p>
        </div>
    );
};

Post.propTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;
