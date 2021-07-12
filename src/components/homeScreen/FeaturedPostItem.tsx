import { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IPostCard } from 'types/types'

interface IStyledFeaturedProps {
   imageUrl?:string
}

const FeaturedPost = styled.div<IStyledFeaturedProps>`
   background-image: url(${props => props.imageUrl});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-color: ${({theme}) => theme.palette.card_bg};
   position: relative;
   width: 100%;
   flex-basis: 100%;
   min-height: 100vh;
   display: flex;
   align-items: center;
   text-align: center;
`

const FeaturedPostContainer = styled.div`
   padding: 3.4em 1.4em;
   width: 100%;
   background-image: linear-gradient(transparent 0%, rgba(0, 0, 0, .8) 15%,rgba(0, 0, 0, .8) 50%,rgba(0, 0, 0, .8) 85%, transparent 100%);
   .title, .excerpt {
      margin-bottom: 1.4em;
   }
   
   .title {
      color: ${({theme}) => theme.palette.text_white};
      text-transform: uppercase;
   }
   .excerpt {
      color: ${({theme}) => theme.palette.text_gray};
   }
   .continue-reading {
      color: lightblue;
   }
`

interface IProps {
   featuredPost: IPostCard
}

export const FeaturedPostItem: React.FC<IProps> = memo(({featuredPost}) => {
   return (
      <FeaturedPost imageUrl={featuredPost?.imageUrl}>
         <FeaturedPostContainer >
            {
               featuredPost
               ? <Link to={`/post/${featuredPost.id}`}>
                <h2 className="title">
                  {featuredPost.title}
               </h2>
               <div className="excerpt">{featuredPost?.excerpt}</div>
               <div className="continue-reading">Continue reading...</div>
               </Link>
               : 
               <>
                  <h2 className="title">-</h2>
                  <div className="excerpt">-</div>
                  <div className="continue-reading">-</div>
               </>
            }
         </FeaturedPostContainer>
      </FeaturedPost>
   )
})
