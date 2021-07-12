import styled from 'styled-components'

const LayoutDiv = styled.div`
   background-color: ${(props) => props.theme.palette.themeMode.body_bg};
   padding: 1em 0;
   max-width: 94vw;
   margin: 0 auto;
   padding-top: 10vh;
   min-height: 86.6vh;

   @media (min-width: 992px) {
      max-width: 85vw;
   }
`

// TODO: crear un SIdebar 
export const Layout: React.FC = ({ children }) => {
   return (
      <LayoutDiv>
         {children}
      </LayoutDiv>
   )
}
