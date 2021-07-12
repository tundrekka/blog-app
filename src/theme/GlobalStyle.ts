import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
   }
   html {
      @media (min-width: 992px) {
         font-size: 1.2rem;
      }
   }
   body {
      background-color: ${({ theme }) => theme.palette.themeMode.body_bg};
      color: ${({ theme }) => theme.palette.themeMode.primary_text};
      margin: 0;
      padding: 0;
      position: relative;
   }

   a {
      text-decoration: none;
      color: inherit
   }

   h1,h2,h3,h4,h5,h6 {
      color: ${({ theme }) => theme.palette.themeMode.primary_text}
   }
   
   #root {
      max-width: 1300px;
      margin: 0 auto;
   }
   
   // scrollbar styles
   ::-webkit-scrollbar {
      -webkit-appearance: none;
   }

   ::-webkit-scrollbar:vertical {
      width: 12px;
   }

   ::-webkit-scrollbar-button:increment,::-webkit-scrollbar-button {
      display: none;
   } 

   ::-webkit-scrollbar-thumb {
      background-color: #5f7d8f;
      border-radius: 5px;
   }

   ::-webkit-scrollbar-track {
      background: #090112;  
   }
`
