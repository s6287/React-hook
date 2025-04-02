import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function Datafetch() {

    const [post, setPost] = useState([])
    
    useEffect(function () {
        fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
            return response.json()
        }).then(function (data) {
            setPost(data)
        })
    },[])



  return (
      <>
          
          <ul>
                {post.map(function (posts) {
                    return (
                        <li key={posts.id}>{posts.title}</li> 
                    );
                })}
            </ul>
      </>
  )
}

export default Datafetch