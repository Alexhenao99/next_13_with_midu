'use client'

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // throw new Error('Error fetching comments') //! Ejemplo para un Error

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

const Post = async ({ params }) => {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <div style={{ border: '1px solid #444', borderRadius: '15px', padding: '10px', marginTop: '15px' }}>
      <ul>
        {
          comments.map(comment => (
            <li key={comment.id}>
              <h4>{comment.name}</h4>
              <small>{comment.body}</small>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Post
