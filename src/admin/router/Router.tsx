import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'admin/components/Layout'
import { CreatePostScreen } from 'admin/CreatePostScreen'
import { Paths } from 'admin/types/types'
import { AdminHeader } from 'admin/components/AdminHeader'
import { AdminSidebar } from 'admin/components/Sidebar'
import { UpdateScreenLoading } from 'admin/components/UpdateScreenLoading'
import { GridContainer, GridCol } from 'theme/grid'

// TODO: Refactore and optimize AdminScreens, (success messages and error messages)
// now is working opening the console

export const Router: React.FC = () => {
   return (
      <div>
         <Layout>
            <AdminHeader />
            <GridContainer>
               <GridCol tablet={8}>
                  <Switch>
                     <Route exact path={Paths.create} component={CreatePostScreen} />
                     <Route exact path={Paths.update} component={UpdateScreenLoading} />
                     <Redirect to={Paths.create} />
                  </Switch>
               </GridCol>
               <GridCol tablet={4}>
                  <div style={{marginLeft: '.75em'}}>
                     <AdminSidebar />
                  </div>
               </GridCol>
            </GridContainer>
         </Layout>
      </div>
   )
}
