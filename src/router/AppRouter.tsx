import React, { Suspense, useState } from 'react'
import {
   HashRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom'

import { Navbar } from 'components/ui/Navbar'
import { PostContext } from 'context/PostContext'
import { E_URLParams, IPostCard } from 'types/types'
import { FooterNav } from 'components/ui/FooterNav'
import { sizes } from 'theme/grid'

import { LazyLoad } from 'components/utils/LazyLoad'
import { Fallback } from 'components/utils/SuspenseFallback'
import { LoadPostsContext } from 'context/LoadPostsContext'
import { ErrorBoundary } from 'components/utils/ErrorBoundary'

const Footer = React.lazy(() => {
   return import('components/ui/Footer')
})

// screens
const HomeScreen = React.lazy(() => {
   return import('screens/HomeScreen')
})
const AdminRoute = React.lazy(() => {
   return import('./AdminRoute')
})
const PostScreen = React.lazy(() => {
   return import('screens/PostScreen')
})




interface IProps {
   setThemeMode: React.Dispatch<React.SetStateAction<string>>
}

export const AppRouter: React.FC<IProps> = ({setThemeMode}) => {

   // state to the postContextProvider
   const [posts, setPosts] = useState<IPostCard[]>([])

   // state to LoadPostContextProvider
   const [noMorePosts, setNoMorePosts] = useState(false)


   return (
      <Router>
         <Navbar setThemeMode={setThemeMode} />
         <PostContext.Provider
            value={{
               posts,
               setPosts,
            }}
         >
            <LoadPostsContext.Provider value={{
               noMorePosts,
               setNoMorePosts
            }}>
               <ErrorBoundary >
                  <Suspense fallback={<Fallback />}>
                     <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route
                           exact
                           path={`/post/:${E_URLParams.postId}`}
                           component={PostScreen}
                        />
                        <Route path="/admin" component={AdminRoute} />
                        <Redirect to="/" />
                     </Switch>
                  </Suspense>
               </ErrorBoundary>
            </LoadPostsContext.Provider>
         </PostContext.Provider>

         {
            window.innerWidth > sizes.laptop
            ? null
            : <FooterNav />
         }
         <div id="footerHeightLazyLoad" style={{height: '1.5rem'}}></div>
         <ErrorBoundary>
            <Suspense fallback={`espera titan ta calgando el footer cabron`}>
               <LazyLoad>
                  <Footer />
               </LazyLoad>
            </Suspense>
         </ErrorBoundary>
         
      </Router>
   )
}
