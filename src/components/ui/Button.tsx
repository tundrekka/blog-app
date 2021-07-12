import styled from "styled-components";


export const Button = styled.button`
   cursor: pointer;
   padding: .75em 1.1em;
   user-select: none;
   background-color: ${({theme}) => (theme.palette.dark) ? '#E4E6EB': 'rgb(24, 25, 26)'};
   color: ${({theme}) => (theme.palette.dark) ? 'rgb(24, 25, 26)': '#E4E6EB'};
   border: none;
   border-radius: 4px;
   font-weight: 700;
   box-shadow: 1px 1px 3px gray;
`