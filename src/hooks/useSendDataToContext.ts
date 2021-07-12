import { PostContext } from 'context/PostContext'
import { loadPosts } from 'helpers/loadPosts'
// import { createExcerpt } from 'data/createExcerpt';
// import { getPostsAsync } from 'data/getPosts';
import { useContext, useEffect } from 'react'

export const useSendDataToContext = () => {
   const { posts, setPosts } = useContext(PostContext)
   // If the posts does not exist on the context, fetch the data, else use the PostContext

   useEffect(() => {
      if (posts.length < 1) {
         
         loadPosts()
            .then((resp) => {
               setPosts(resp)
            })
            .catch(() => console.log('error obteniendo posts'))
      }
   }, [posts, setPosts])

   return { posts, setPosts }
}
