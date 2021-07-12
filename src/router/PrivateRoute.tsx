import {
   Redirect,
   Route,
} from 'react-router'
import { Paths } from 'admin/types/types'

interface RouteProps {
   isAuthenticated: boolean
   // component: React.ComponentType<any> | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>> | undefined
   component: any,
   path: string
}

export const PrivateRoute = ({
   isAuthenticated,
   component: Component,
   path,
   ...rest
}: RouteProps) => {
   return (
      <Route
         {...rest}
         component={(props: any) =>
            isAuthenticated ? (
               <Component {...props} />
            ) : (
               <Redirect to={Paths.login} />
            )
         }
      />
   )
}
