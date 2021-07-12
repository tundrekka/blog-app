import { memo } from 'react'
import { useSendDataToContext } from 'hooks/useSendDataToContext'
import { GridContainer } from 'theme/grid'
import { FeaturedPostItem } from './FeaturedPostItem'
import { Posts } from './Posts'
import { getFeaturedPost } from 'helpers/getFeaturedPost'

// TODO: Pagination of posts

export const Home: React.FC = memo(({children}) => {

   // If the posts does not exist on the context, fetch the data, else use the PostContext
   const { posts } = useSendDataToContext()

   return (
      <>
         <GridContainer as="main">
            <FeaturedPostItem featuredPost={getFeaturedPost(posts)} />

            {/* Posts */}
            <Posts />
         </GridContainer>
         {children}
      </>
   )
})
