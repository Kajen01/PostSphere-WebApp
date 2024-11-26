import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Missing from './Missing'
import '../css/PostPage.css'

const PostPage = ({handleDelete, handleEdit, posts}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className="PostPage">
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/editpost/${post.id}`}><button className="editButton">Edit</button></Link>
            <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        }
        {!post &&
          <Missing />
        }
      </article>
    </main>

  )
}

export default PostPage