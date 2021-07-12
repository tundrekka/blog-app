// styled.d.ts
import "styled-components";

export interface IThemeMode {
   primary_text: string;
   secondary_text: string;
   secondary_text_dark: string;
   body_bg: string;
   navbar_bg: string;
}

interface IPalette {
   posts_card_title: string;
   card_bg: string;

   text_white: string;
   text_gray: string;
   text_gray_dark: string;
   text_black: string;

   dark?: boolean;
   
   themeMode: IThemeMode
}

declare module "styled-components" {
   export interface DefaultTheme {
      palette: IPalette;
      border_radius: string;
   }
}