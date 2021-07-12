import { Link } from 'react-router-dom'
import { IPostCard } from 'types/types'
import { Card, Title, Date, Excerpt } from './PostCard.styles'


type IProps = IPostCard & { margin?: string; sidebar?: boolean, path: string}

export const PostCard: React.FC<IProps> = ({
   title,
   id,
   date,
   excerpt,

   //routePath
   path,

   // cardProps
   imageUrl,
   margin,
   sidebar
}) => {
   return (
      <Card sidebar={sidebar} imageUrl={imageUrl} margin={margin}>
         {/* React Router Link */}
         <Link to={path} className="card-container">
            <Title className="title">{title}</Title>

            <Date className="date">{date}</Date>

            <Excerpt className="excerpt">{excerpt}</Excerpt>

            <p className="continue-reading-link">Continue Reading...</p>
         </Link>
      </Card>
   )
}
