import { UpdatePostScreen } from 'admin/UpdatePostScreen'
import { getPostById } from 'helpers/getPostById'
import { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IURLparams, IPostCardWihoutId } from 'types/types'

interface Props {}

export const UpdateScreenLoading: React.FC<Props> = memo(() => {

   // here is loading the post, and then it will call the main <UpdatePostScreen />
   // it is to initializate the form with values
   const [postLoaded, setPostLoaded] = useState<IPostCardWihoutId | null>(null)
   const params = useParams<IURLparams>()
   useEffect(() => {
      getPostById(params.postId).then(resp => {
         const postRef = resp?.data() as IPostCardWihoutId
         setPostLoaded(postRef)
      })
      window.scrollTo(0,0)
   
   }, [params.postId])
   
   if(!postLoaded) {
      return <h3>Wait loading Post</h3>
   }
   return (
      <div>
         <UpdatePostScreen post={postLoaded} postId={params.postId} />
      </div>
   )
})
