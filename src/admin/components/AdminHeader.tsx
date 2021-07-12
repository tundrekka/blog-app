import { startLoggout } from 'admin/auth/loggout'
import { Link } from 'react-router-dom'
import { Button } from 'components/ui/Button'
import styled from 'styled-components'

const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: .5em 0;
`

const Navigation = styled.nav`
   ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      list-style: none;

      li {
         margin: .5em 0;
      }
   }
`


const GreenButton = styled(Button)`
   background: rgb(49, 162, 76);
   color: ${({theme}) => theme.palette.text_white};
`
// const BlueButton = styled(Button)`
//    background: rgb(45, 136, 255);
//    color: ${({theme}) => theme.palette.text_white};
// `
const YellowButton = styled(Button)`
   background: hsl(40, 89%, 52%);
   color: ${({theme}) => theme.palette.text_white};
`



export const AdminHeader: React.FC = () => {
   return (
      <div>
         <Header>
            <h1>Admin page</h1>
            {/* <small>open devTools console</small> */}
            <YellowButton onClick={startLoggout} type="button">
               Logout
            </YellowButton>
         </Header>
         <hr />

         <Navigation className="admin-nav">
            <ul>
               <li>
                  <Link to="/admin/create">
                     <GreenButton>Create</GreenButton>
                  </Link>
               </li>
               <li>

               </li>
               <li><Button>Posts</Button></li>
            </ul>
         </Navigation>
         <hr />
         <br />
      </div>
   )
}
