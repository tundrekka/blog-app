import styled from 'styled-components'
// import bgImage from 'theme/img/gon.jpg'

interface ICardProps {
   margin?: string
   imageUrl?: string
   sidebar?: boolean
}

export const Card = styled.div<ICardProps>`
   border-radius: ${({ theme }) => theme.border_radius};
   background-image: url(${(props) => props.imageUrl});
   background-color: ${({ theme }) => theme.palette.card_bg};
   background-position: center center;
   margin: ${(props) => props.margin || '0 0.7em 1em'};
   background-size: 110%;
   transition: background-size 150ms ease-in-out;
   ${(props) => props.sidebar && `background-size: cover;`}

   box-shadow: ${({ theme }) =>
      theme.palette.dark ? '1px 1px 4px .5px #494949a2' : '1px 1px 4px .5px black'};

   &:hover,
   &:focus,
   &:focus-visible,
   &:focus-within {
      ${(props) => !props.sidebar && `background-size: 105%;`}
      box-shadow: ${({ theme }) =>
      theme.palette.dark ? '0 0 5.5px #ffffffba' : '0 0 4px 2px #000'};
   }

   .card-container {
      outline: none;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: ${({ theme }) => theme.border_radius || '6px'};
      min-height: 150px;
      color: ${({ theme }) => theme.palette.text_gray_dark};
      cursor: pointer;
      display: block;
      padding: 1em 0.7em;
      transition: background-color 150ms ease;
      &:hover {
         background-color: rgba(0, 0, 0, 0.3);
      }

      .continue-reading-link {
         font-size: 0.9rem;
         color: lightblue;
      }
   }
`

export const Title = styled.h3`
   margin-bottom: 0.6em;
   font-size: 1.4rem;
   color: ${({ theme }) => theme.palette.posts_card_title};
`

export const Date = styled.p`
   font-size: 1rem;
   margin-bottom: 0.2em;
   color: ${({ theme }) => theme.palette.text_gray};
`

export const Excerpt = styled.p`
   color: ${({ theme }) => theme.palette.text_white};
   margin-bottom: 0.9em;
   font-size: 0.925rem;
`
