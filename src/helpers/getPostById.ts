import { db } from "firestore/firebase-config"

import { DbRoot } from 'types/types'


export const getPostById = async ( id: string ) => {
   try {
      const docRef = await db.doc(`${DbRoot.dbRoot}/${id}`).get()
      
      if(!docRef.data()) {
         throw new Error('error fetching')   
      }
      
      // convirtiendo la respuesta de firestore en un objecto IPostCardWihoutId
      // const post = docRef.data() as IPostCard;
      // return post
      return docRef

   } catch (error: Error | any) {
      console.warn(error.message)
      return null
   }

}