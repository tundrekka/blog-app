import moment from 'moment'
import { db } from 'firestore/firebase-config'
import { TCreatePost, IFormProps } from 'admin/types/types'
import { DbRoot } from 'types/types'


// post: IFormProps
export const updatePost: (post: IFormProps, postId: string) => Promise<void> = async (post, postId) => {
   try {
      const updatedPost: TCreatePost = {
         ...post,
         date: moment().format('MMM Do YY'),
      }
      await db.doc(`${DbRoot.dbRoot}/${postId}`).update( updatedPost )
      console.log('se actualizo')
   } catch (error) {
      console.warn('error updating post')
   }
}