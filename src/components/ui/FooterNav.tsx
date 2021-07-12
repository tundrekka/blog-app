import { useHideFooter } from 'hooks/useHideFooter'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'

const StyledFooter = styled.div`
   background-color: ${({ theme }) => theme.palette.themeMode.navbar_bg};
   color: ${({ theme }) => theme.palette.themeMode.primary_text};
   position: fixed;
   bottom: 0;
   left: 0;
   padding: .5em 0;
   width: 100%;
   transition: all 300ms ease;
   color: black;

   display: flex;
   justify-content: center;

   &.hide {
      transform: translate3d(0, 100%, 0);
   }
`
export const FooterNav: React.FC = memo(() => {

   const show = useHideFooter()

   return (
      <StyledFooter className={` ${show ? '' : 'hide'}`}>
         <div>
            <Link to="/">
               <Button>HOME</Button>
            </Link>
         </div>
      </StyledFooter>
   )
})
