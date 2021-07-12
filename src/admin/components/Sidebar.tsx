import { PostCard } from 'components/PostCard'
import styled from 'styled-components'
import { GridContainer, sizes, GridCol } from 'theme/grid'
import { IPostCard } from 'types/types'
import { Card } from 'components/PostCard.styles'
import { useSendDataToContext } from 'hooks/useSendDataToContext'
import { memo } from 'react'
import { PaginationPosts } from 'components/PaginationPostsButton'


const SidebarContainer = styled.aside`
   margin-top: 1.2em;

   @media (min-width: ${sizes.tablet}px) {
      margin-left: 0.8rem;
      margin-top: 0;
   }
`
// ! ADMINSIDEBAR
export const AdminSidebar: React.FC = memo(() => {

   const { posts } = useSendDataToContext()

   return (
      <SidebarContainer className="sidebar">
         <GridContainer>
            {posts.length < 1
               ? [1, 2, 3, 4].map((item, itemIdx) => (
                    <GridCol key={itemIdx} phone={12}>
                       <Card margin="0 0 1em 0">
                          <div className="card-container"></div>
                       </Card>
                    </GridCol>
                 ))
               : posts.map((post: IPostCard) => (
                    <GridCol key={post.id} phone={12}>
                       <PostCard path={`/admin/update/${post.id}`} sidebar={true} margin="0 0 1em 0" {...post} />
                    </GridCol>
                 ))}
            <GridCol phone={12}>
               <PaginationPosts />
            </GridCol>   
         </GridContainer>
      </SidebarContainer>
   )
})