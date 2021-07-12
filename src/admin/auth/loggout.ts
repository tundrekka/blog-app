import { firebase } from 'firestore/firebase-config'

export const startLoggout = async () => {
   try {
      await firebase.auth().signOut()
   } catch (error) {
      console.warn('something wrong happened')
   }
}
