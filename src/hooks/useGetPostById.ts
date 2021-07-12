import { getPostById } from 'helpers/getPostById'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IURLparams, IPostCardWihoutId } from 'types/types'

export const useGetPostById = () => {
   const history = useHistory()
   const [post, setPost] = useState<IPostCardWihoutId | null | undefined>(null)
   const params = useParams<IURLparams>()

   useEffect(() => {
      setPost(null)
      getPostById(params.postId).then((resp) => {
         if (resp === null) history.replace('/')

         // the value that will return this hook
         const postData = resp?.data() as IPostCardWihoutId
         setPost(postData)
         
      })
      return () => {}
   }, [params.postId, history])

   return { post, setPost }

}
