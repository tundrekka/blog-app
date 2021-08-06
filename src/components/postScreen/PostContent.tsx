import moment from 'moment'
import styled from 'styled-components'
import { IPostCardWihoutId } from 'types/types'

const PostContainer = styled.main`
`
const PurpleBackground = styled.div`
   padding: 1em;
   background-color: rgba(75, 35, 75, 0.3);
   border-radius: ${({theme}) => theme.border_radius || '6px'};
`

const Title = styled.h2`
   color: ${({theme}) => theme.palette.themeMode.primary_text};
   margin-bottom: .6em;
`

const Date = styled.p`
   margin: .5em 0;
`

const PostMainContent = styled.div`
   margin-bottom: 1em;
   div * {
      color: green;
   }
`

interface IProps {
   post: IPostCardWihoutId
}

export const PostContent: React.FC<IProps> = ({post}) => {
   return (
      <PostContainer>
         <PurpleBackground>
            <Title>{post.title}</Title>
            <hr />
            <Date className="date">{moment(post.date).format('MMM Do YY')}</Date>
            <PostMainContent>
               {/* <div style={{whiteSpace: 'pre'}}> */}
               <div style={{whiteSpace: 'break-spaces'}}>
                  {post.content}

               </div>
            </PostMainContent>
            <hr />
            
            <div className="comments">
            </div>
         </PurpleBackground>
      </PostContainer>
   )
}
