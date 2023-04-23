'use client'

import Image from 'next/image'

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
      {
        comments.map(comment => (
          <div key={comment.id} style={{ display: 'flex', flexDirection: 'column', border: `1px solid rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`, borderRadius: '15px', marginTop: '10px', padding: '15px' }}>
            <Image width='50' height='50' alt={comment.name} src={`https://api.dicebear.com/6.x/big-smile/svg?seed=${comment.email}.svg`} />
            <h4>{comment.name}</h4>
            <small>{comment.body}</small>
          </div>

        ))
      }
    </div>
  )
}

export default Post
