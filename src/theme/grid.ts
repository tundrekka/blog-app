import styled, { css } from 'styled-components';

// types
type Cols = 
   | 1 | 2 | 3 
   | 4 | 5 | 6 
   | 7 | 8 | 9 
   | 10 | 11 | 12 

// interfaces
interface ISizesProps {
   phone?: Cols;
   tablet?: Cols;
}

export const sizes = {
   // aliases
   smaller: 500, // Just for phones < 500px
   phone: 501,
   tablet: 768,
   laptop: 1000,
   desktop: 1270,
   giant: 1500,
   veryGiant: 2000,
}

export const dinamycGrid = css<ISizesProps>`

   flex: 0 0 100%;
   max-width: 100%;

   ${(props) => {
      if( props.phone ) {
         return css`
            flex: 0 0 ${(props.phone / 12 ) * 100}%;
            max-width: ${(props.phone / 12 ) * 100}%;
         `
      }
   }}
   ${(props) => {
      if( props.tablet ) {
         return css`
            @media (min-width: ${sizes.tablet}px) {
               flex: 0 0 ${(props.tablet / 12 ) * 100}%;
               max-width: ${(props.tablet / 12 ) * 100}%;
            }
         `
      }
   }}
`
interface IGridContainerProps {
   mt?: string;
}
export const GridContainer = styled.div<IGridContainerProps>`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   margin-top: ${props => props.mt};
`

export const GridCol = styled.div<ISizesProps>`
   ${props => {

      if( Object.keys(props).length < 3 ) {
         return
      }
      return () => dinamycGrid      
   }}
`


