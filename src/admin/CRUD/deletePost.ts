import { db } from "firestore/firebase-config"


export const startDeletePost = async(id: string, history: any) => {
   try {
      await db.doc(`posts/${id}`).delete()
      history.push('/admin/create')
      console.log('deleted post')
      window.location.reload()
      
   } catch (error) {
      console.log('error deleting the post')
   }
}