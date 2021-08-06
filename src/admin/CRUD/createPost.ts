import { db } from 'firestore/firebase-config'
import { TCreatePost, IFormProps } from 'admin/types/types'
import { DbRoot } from 'types/types'
// import moment from 'moment'


// post: IFormProps
export const createPost: (post: IFormProps) => Promise<true | undefined> = async (post) => {
   try {
      const newPost: TCreatePost = {
         ...post,
         // date: moment().format('MMM Do YY'),
         date: new Date().getTime(),
      }
      await db.collection(`${DbRoot.dbRoot}`).add( newPost )
      console.log('created')
      return true
   } catch (error) {
      console.warn('error creating post')
   }
}
