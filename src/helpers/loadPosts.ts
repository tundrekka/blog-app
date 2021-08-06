import { db } from 'firestore/firebase-config'
import { IPostCard, DbRoot } from 'types/types'

let lastDocument: any
export const loadPosts: () => Promise<IPostCard[]> = async () => {
   try {
      const postsSnap = await db
         .collection(`${DbRoot.dbRoot}`)
         .orderBy('date', 'desc')
         .limit(2)
         .get()
      lastDocument = postsSnap.docs[postsSnap.docs.length - 1] || null

      // array of IPostCard
      const posts: any[] = []

      postsSnap.forEach((snapChild) => {
         posts.push({
            id: snapChild.id,
            ...snapChild.data(),
         })
      })
      return posts
   } catch (error) {
      console.warn(error)
      return []
   }
}

interface IPaginationProps {
   (
      posts: IPostCard[],
      setPosts: React.Dispatch<React.SetStateAction<IPostCard[]>>,
      setIsPostsLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setNoMorePosts: React.Dispatch<React.SetStateAction<boolean>>
   ): Promise<void>
}

export const paginationNext: IPaginationProps = async (
   posts,
   setPosts,
   setIsPostsLoading,
   setNoMorePosts
) => {
   setIsPostsLoading(true)
   const postsSnap = await db
      .collection(`${DbRoot.dbRoot}`)
      .orderBy('date', 'desc')
      .startAfter(lastDocument)
      .limit(2)
      .get()

   lastDocument = postsSnap.docs[postsSnap.docs.length - 1] || null

   const postsToConcatenate: any[] = []

   postsSnap.forEach((snapChild) => {
      postsToConcatenate.push({
         id: snapChild.id,
         ...snapChild.data(),
      })
   })

   // giving the type
   const arrayOfPosts: IPostCard[] = postsToConcatenate

   if (arrayOfPosts.length === 0) {
      setNoMorePosts(true)
   }
   setIsPostsLoading(false)
   setPosts([...posts, ...arrayOfPosts])
}
