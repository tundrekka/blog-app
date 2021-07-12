import { IPostCard } from 'types/types'

export const getFeaturedPost = (posts: Array<IPostCard>) => {
   return posts.find(post => post.featured === 'true') || posts[0]
}