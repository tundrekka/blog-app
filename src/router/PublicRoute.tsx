import { Route, Redirect } from 'react-router-dom';
import { Paths } from 'admin/types/types'

interface IProps {
   isAuthenticated: boolean;
   component: any;
   path: string;
   exact: boolean;
}

export const PublicRoute: React.FC<IProps> = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props: any) => (
                ( !isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to={Paths.create} /> )
            )}
        
        />
    )
}
