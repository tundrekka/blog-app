import styled from 'styled-components'
import { memo } from 'react'
import { Form } from './components/Form'
import { IFormProps } from 'admin/types/types'
import { useForm } from 'hooks/useForm'
import { IPostCardWihoutId } from 'types/types'
import { Button } from 'components/ui/Button'
import { startDeletePost } from './CRUD/deletePost'
import { updatePost } from './CRUD/updatePost'
import { useHistory } from 'react-router-dom'

const RedButton = styled(Button)`
   background: rgb(240, 40, 73);
   color: ${({ theme }) => theme.palette.text_white};
   margin: 0.5em auto;
`

interface IProps {
   post: IPostCardWihoutId
   postId: string
}

export const UpdatePostScreen: React.FC<IProps> = memo(({ post, postId }) => {
   // This component waits for the <UpdateScreenLoading />
   /* 
      when <UpdateScreenLoading /> fetch de post, this Component will be called and rendered
      with the post values
    */
   // it is to initializate the form with values to update it or delete it
   const history = useHistory()
   const initialFormState: IFormProps = {
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      imageUrl: post.imageUrl,
      featured: 'false'
   }

   const [formValues, handleInputChange, reset] = useForm(initialFormState)

   return (
      <div>
         <hr />
         Update/Delete post screen
         <hr />
         <div style={{ textAlign: 'center' }}>
            <RedButton
               onClick={() => {
                  startDeletePost(postId, history)
               }}
            >
               Delete
            </RedButton>
         </div>
         <Form
            formValues={formValues}
            handleInputChange={handleInputChange}
            submitCallback={updatePost}
            resetForm={reset}
            postId={postId}
         />
      </div>
   )
})
