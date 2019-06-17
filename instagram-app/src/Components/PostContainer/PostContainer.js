import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = () => {
    return (
        <div className='post-container'>
        <img className='thumbnail-image' src='https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg'/>
        <h3 className='comment-user-name'>philscoffee</h3>
        <img className='image' src='https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg'/>
        <CommentSection />
        </div>
    );

}

export default PostContainer;