import { DefaultTheme } from "styled-components";
import { IThemeMode } from '../styled'

const darkMode: IThemeMode = {
   primary_text: '#E4E6EB',
   secondary_text: '#d3d4d6',
   secondary_text_dark: '#B0B3B8',
   body_bg: 'rgb(24, 25, 26)',
   navbar_bg: 'rgba(36, 37, 38, .5)',
}

const lightMode: IThemeMode = {
   primary_text: 'rgb(24, 25, 26)',
   secondary_text: '#242526',
   secondary_text_dark: 'rgba(36, 37, 38, .5)',
   body_bg: '#E4E6EB',
   navbar_bg: 'rgba(211, 212, 214, 0.7)',
}

 const theme: DefaultTheme = {
   palette: {
      posts_card_title: '#E4E6EB',
      card_bg: '#242526',

      text_white: '#E4E6EB',
      text_gray: '#d3d4d6',
      text_gray_dark: '#B0B3B8',
      text_black: 'black',

      dark: true,

      themeMode: darkMode
   },
   border_radius: '6px'
}

export const getTheme = (mode?: string): DefaultTheme => {
   return {
      ...theme,
      palette: {
         ...theme.palette,
         themeMode: (mode === 'light') ? lightMode :  darkMode,
         dark: (mode === 'light') ? false : true,
      },
   }
}