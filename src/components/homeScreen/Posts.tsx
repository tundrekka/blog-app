import { useContext } from 'react';

import { GridCol, GridContainer } from 'theme/grid';
import { PostCard } from 'components/PostCard';

import { IPostCard } from 'types/types';
import { PostContext } from 'context/PostContext';
import { Card } from 'components/PostCard.styles';
import { PaginationPosts } from 'components/PaginationPostsButton';

export const Posts: React.FC = () => {

   const { posts } = useContext(PostContext)

   return (
      <GridContainer mt="2rem">
         {
            posts.length < 1
            ?
            [1, 2].map( (item, itemIdx) => (
               <GridCol key={itemIdx} tablet={6}>
                  <Card>
                     <div className="card-container"></div>
                  </Card>
               </GridCol>
            ))
            : null
         }
         {posts.map((post: IPostCard) => (
            <GridCol key={post.id} tablet={6}>
               <PostCard
                  path={`/post/${post.id}`}
                  {...post}
               />
            </GridCol>
         ))}

         <GridCol phone={12}>
            <PaginationPosts />
         </GridCol>
      </GridContainer>
   );
};
