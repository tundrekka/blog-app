import { Button } from 'components/ui/Button'
import { LoadPostsContext } from 'context/LoadPostsContext'
import { PostContext } from 'context/PostContext'
import { paginationNext } from 'helpers/loadPosts'
import { useContext, useState, useEffect } from 'react'
import { Spinner } from './utils/Spinner'

export const PaginationPosts: React.FC = () => {
   const { posts, setPosts } = useContext(PostContext)
   const { noMorePosts, setNoMorePosts } = useContext(LoadPostsContext)
   const [isPostsLoading, setIsPostsLoading] = useState(false)
   const handlePagination = () => {
      paginationNext(posts, setPosts, setIsPostsLoading, setNoMorePosts)
   }
   useEffect(() => {
      (posts.length === 0) ? setIsPostsLoading(true) : setIsPostsLoading(false)
   }, [posts.length])
   
   return (
      <div style={{ textAlign: 'center', marginTop: '.25em', marginBottom: '.25em' }}>

         { isPostsLoading 
            // if is fetching posts show the spinner
            ? (
            <div style={{height: '1.8em', position: 'relative'}}>
               <Spinner />
            </div>
            ) 
            // else if...
            : (!isPostsLoading && !noMorePosts) 
            ? (
               <Button disabled={isPostsLoading} onClick={handlePagination}>
                  Load More posts!
               </Button>
            )
            // else if...
            : (noMorePosts) && (<h4>No more posts</h4>)

            
         }
         

      </div>
   )
}
