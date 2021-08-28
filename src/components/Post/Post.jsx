import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ id, userId, title, body }) => {
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>
                <strong>User ID: {userId}</strong>
            </p>
            <p>
                <strong>Post ID: {id}</strong>
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
