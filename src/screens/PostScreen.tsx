import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { IURLparams } from 'types/types'

import { MainBanner } from 'components/postScreen/MainBanner'
import { PostContent } from 'components/postScreen/PostContent'
import { Sidebar } from 'components/postScreen/Sidebar'
import { GridCol, GridContainer } from 'theme/grid'
import { useGetPostById } from 'hooks/useGetPostById'

const Container = styled.div`
   background-color: ${(props) => props.theme.palette.themeMode.body_bg};
   padding: 1em 0;
   max-width: 94vw;
   margin: 0 auto;
   min-height: 110vh;

   @media (min-width: 992px) {
      max-width: 85vw;
   }
`
// This is the functional Component
const PostScreen: React.FC = () => {
   const params = useParams<IURLparams>()

   const { post } = useGetPostById()
   return (
      <Container>
         {/* <ScrollToTop /> */}
         {
            // if post is loaded
            (post)
            ? <MainBanner imageUrl={post.imageUrl} title={post.title} />
            : (
               <div style={{marginTop: '3.5rem'}}>
                  <MainBanner title="Loading..." />
               </div>
            )         
         }
         

         <GridContainer className="post">
            <GridCol tablet={9}>
               {
                  (post)
                  ? <PostContent post={post} />
                  : <div>loading</div>
               }
               
            </GridCol>

            <GridCol tablet={3}>
               <Sidebar id={params.postId} />
            </GridCol>
         </GridContainer>
      </Container>
   )
}

export default PostScreen
