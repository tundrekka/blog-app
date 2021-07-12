import styled from 'styled-components'
import { useEffect, useMemo, memo } from 'react'
import { useSendDataToContext } from 'hooks/useSendDataToContext'

import { PostCard } from 'components/PostCard'
import { GridCol, GridContainer, sizes } from 'theme/grid'
import { Card } from 'components/PostCard.styles'

// import { scrollY } from 'helpers/scrollToTop'

import { IPostCard } from 'types/types'
import { PaginationPosts } from 'components/PaginationPostsButton'

// styled-comp
const SidebarContainer = styled.aside`
   margin-top: 1.2em;

   @media (min-width: ${sizes.tablet}px) {
      margin-left: 0.8rem;
      margin-top: 0;
   }
`

interface IProps {
   id: string
}

// FC
export const Sidebar: React.FC<IProps> = memo(({ id }) => {

   useEffect(() => {
      window.scrollTo(0,0)
   }, [id])

   // If the posts does not exist on the context, fetch the data, else use the PostContext
   const { posts } = useSendDataToContext()

   // memoize the function to don't call it unnecesarily
   const sidebarPosts = useMemo(() => {
      return posts.filter((post) => post.id !== id)
   }, [posts, id])

   return (
      <SidebarContainer className="sidebar">
         <GridContainer>
            {
               sidebarPosts.length < 1
                  ? (
                     [1, 2].map((item, itemIdx) => (
                        <GridCol key={itemIdx} phone={12}>
                           <Card margin="0 0 1em 0">
                              <div className="card-container"></div>
                           </Card>
                        </GridCol>
                     ))
                  )
                  : (
                     sidebarPosts.map((post: IPostCard) => (
                        <GridCol key={post.id} phone={12}>
                           <PostCard path={`/post/${post.id}`} sidebar={true} margin="0 0 1em 0" {...post} />
                        </GridCol>
                     ))
                  )
            }
            <GridCol phone={12}>
               <PaginationPosts />
            </GridCol>     
         </GridContainer>
      </SidebarContainer>
   )
})
