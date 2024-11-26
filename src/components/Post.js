import React from 'react'
import '../css/Post.css'

const Post = ({post}) => {
  return (
    <article className='Post'>
        <h3>{post.title}</h3>
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">
            {
               (post.body).length <= 100
                ? post.body
                : `${(post.body).slice(0, 100)}...`
            }
        </p>
    </article>
  )
}

export default Post