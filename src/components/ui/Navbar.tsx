import { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'
import moon from 'theme/img/moon.svg'
import sun from 'theme/img/sun.svg'

const StyledNavbar = styled.nav`
   background-color: transparent;
`
const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: .5em 0;
   background-color: ${({ theme }) => theme.palette.themeMode.navbar_bg};
   color: ${({ theme }) => theme.palette.themeMode.primary_text};
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 10;
   box-shadow: 0 0 3px black;   

   & > div {
      margin: 0 0.9em;
   }

   .brand-logo {
      margin-left: .5em;
   }

`

const StyledButton = styled(Button)`
   font-size: .7rem;
   text-transform: uppercase;
`

interface IProps {
   setThemeMode: React.Dispatch<React.SetStateAction<string>>
}

export const Navbar: React.FC<IProps> = memo(({ setThemeMode }) => {

   return (
      <StyledNavbar id="navbar-id">
         <NavContainer>
            <div className="brand">
               <Link to="/">
                  <StyledButton>Ismael Blog</StyledButton>
               </Link>
            </div>
            <div>
               <Button
                  type="button"
                  onClick={() => {
                     setThemeMode( (themeMode) => (themeMode === 'dark') ? themeMode = 'light' : 'dark' )
                  }}
               >
                  <span>
                    <img src={ moon } alt="moon" style={{width: '1.2em', height: '1.2em'}} />
                  </span>
                  <span>
                    <img src={ sun } alt="sun" style={{width: '1.2em', height: '1.2em'}} />
                  </span>
               </Button>
               <span className="brand-logo"></span>
            </div>
         </NavContainer>
      </StyledNavbar>
   )
})
