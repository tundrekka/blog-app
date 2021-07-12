import { Router } from 'admin/router/Router'
import { useEffect, useState, memo } from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { firebase } from 'firestore/firebase-config'
import { PublicRoute } from './PublicRoute'
import { LoginScreen } from 'admin/LoginScreen'


const AdminRoute: React.FC = memo(() => {

   const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

   useEffect(() => {
		firebase.auth().onAuthStateChanged( (user) => {
			if(user?.uid) {
            
            setIsLoggedIn(true)

			} else {
            setIsLoggedIn(false)
			}
			setChecking(false)
		} )
	}, [])

   
   if( checking ) return <h2 style={{ paddingTop: '3.5rem'}}>checking...</h2>

   return (
      <Switch>
         <PublicRoute exact path="/admin/login" isAuthenticated={isLoggedIn} component={LoginScreen} />
         <PrivateRoute path="/admin" isAuthenticated={isLoggedIn} component={Router} />
      </Switch>
   )
})

export default AdminRoute
