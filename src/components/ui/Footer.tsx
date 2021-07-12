import styled from "styled-components"

const StyledFooter = styled.footer`
   background: ${({theme}) => theme.palette.dark ? 'black': '#a3a3a3'};
   color: ${({theme}) => theme.palette.dark ? 'white': 'black'};
   padding: 2rem;
`

const Footer: () => JSX.Element = () => {
   return (
      <StyledFooter>
         <div>
            <small>Website made with React, Typescript and Google Firebase</small>
         </div>
      </StyledFooter>
   )
}

export default Footer