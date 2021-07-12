import styled from 'styled-components'

interface IStyledTitleProps {
   imageUrl?: string
}

const TitleContainer = styled.div<IStyledTitleProps>`
   background-color: ${({theme}) => theme.palette.card_bg};
   background-image: url(${props => props.imageUrl});
   background-position: center center;
   background-size: cover;
   border-radius: ${({theme}) => theme.border_radius || '6px'};
   margin-top: 3.5em;
   margin-bottom: 1.2em;

   &:hover .blackOverlay {
      background-color: transparent;
   }

   .blackOverlay {
      transition: background-color 125ms ease;
      background-color: rgba(0,0,0,.5);
      border-radius: ${({theme}) => theme.border_radius || '6px'};
   }
`
const BigTitle = styled.h1`
   padding: 3em 1em;
   color: ${({theme}) => theme.palette.text_white};
`

interface IProps {
   title: string;
   imageUrl?: string
}

export const MainBanner: React.FC<IProps> = ({title, imageUrl}) => {
   return (
      <TitleContainer imageUrl={imageUrl}>
         <div className="blackOverlay">
            <BigTitle>{title}</BigTitle>
         </div>
      </TitleContainer>
   )
}
