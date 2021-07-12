import { firebase } from 'firestore/firebase-config'

export const startLogin = ( email: string, password: string ) => {
   firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch((err) => {
         console.warn('??? bad login')
      })
}
