import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/EditPost.css'
import Missing from './Missing'

const EditPost = ({ posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
    return (
        <main className="EditPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='editPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="editTitle">Title:</label>
                        <input
                            type="text"
                            name="editTitle"
                            id="postTitle"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="editBody">Title:</label>
                        <textarea
                            id="editBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle && 
                <Missing />
            }
        </main>)
}

export default EditPost