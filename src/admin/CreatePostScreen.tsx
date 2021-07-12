import { useForm } from 'hooks/useForm'
import { Form } from './components/Form'
import { IFormProps } from 'admin/types/types'
import { createPost } from './CRUD/createPost'

export const CreatePostScreen: React.FC = () => {
   const initialFormState: IFormProps = {
      title: '',
      content: '',
      excerpt: '',
      imageUrl: '',
      featured: 'false'
   }

   const [formValues, handleInputChange, reset] = useForm(initialFormState)

   return (
      <div>
         <hr />
         <p style={{margin: '.3em 0', textAlign: 'center'}}>CREATE POST SCREEN</p>
         <hr />
         <Form
            formValues={formValues}
            handleInputChange={handleInputChange}
            submitCallback={createPost}
            resetForm={reset}
         />
      </div>
   )
}
