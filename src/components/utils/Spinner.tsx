import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
   from {
      transform: translateX(-50%) rotate(0deg) ;
   } 
 
   to {
     transform: translateX(-50%) rotate(360deg) ;
   }
`

const StyledSpinner = styled.div`
   border: 4px solid rgba(0, 0, 0, 0.1);
   width: 1.2em;
   height: 1.2em;
   border-radius: 50%;
   border-left-color: #7a78b4;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);

   animation: ${rotate} 1s ease-in-out infinite;
`

// * those styles are inline (public/index.html)

export const Spinner = () => <StyledSpinner className="spinner"></StyledSpinner>
