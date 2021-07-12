import styled from 'styled-components'
import { IFormProps } from 'admin/types/types'
import { Button } from 'components/ui/Button'
import { memo } from 'react'
import { useState } from 'react'

const SForm = styled.form`
   input {
      width: 100%;
      font-size: 1.025rem;
      margin-bottom: 0.75em;
   }
   .content textarea {
      width: 100%;
      font-size: 0.82rem;
   }

   .featured > div {
      label,
      input {
         display: block;
         width: 100%;
         text-align: center;
         cursor: pointer;
      }
      &:first-of-type {
         border-bottom: 1px solid whitesmoke;
      }
   }
`

interface Props {
   formValues: IFormProps
   handleInputChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => void
   submitCallback(post: IFormProps, postId?: string): Promise<void | true | undefined>
   resetForm?(): void
   postId?: string
}

export const Form: React.FC<Props> = memo(({
   formValues,
   handleInputChange,
   submitCallback,
   resetForm,
   postId,
}) => {
   const [successMessage, setSuccessMessage] = useState(false)
   const { title, content, excerpt, imageUrl } = formValues

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (
         title === '' ||
         content === '' ||
         excerpt === '' ||
         title.length < 5 ||
         content.length < 5 ||
         excerpt.length < 5
      ) {
         console.warn('Invalid Inputs')
         return
      }

      //update post
      if(postId) submitCallback(formValues, postId)
      else {
         //create post
         (async() => {
            const success = await submitCallback(formValues)
            if (resetForm && success) {
               resetForm()
               setSuccessMessage(true)
               setTimeout(() => {
                  setSuccessMessage(false)
               }, 3000);
            }
         })()
      }

      
   }

   return (
      <div>
         {
            successMessage &&
            <h4>Success!!</h4>
         }
         <SForm onSubmit={handleSubmit}>
            <div className="title">
               <input
                  onChange={handleInputChange}
                  autoComplete="off"
                  name="title"
                  value={title}
                  type="text"
                  placeholder="title"
               />
            </div>

            <div className="content">
               <textarea
                  onChange={handleInputChange}
                  value={content}
                  name="content"
                  id="content"
                  cols={30}
                  rows={10}
               ></textarea>
            </div>
            <div className="excerpt">
               <p>content</p>
               <input
                  onChange={handleInputChange}
                  name="excerpt"
                  value={excerpt}
                  type="text"
                  placeholder="excerpt"
               />
            </div>

            <div className="imageUrl">
               <input
                  onChange={handleInputChange}
                  name="imageUrl"
                  value={imageUrl}
                  type="text"
                  placeholder="imageUrl"
               />
            </div>
            <div className="featured">
               <p>featured post?</p>
               <hr />
               <div>
                  <label htmlFor="true">true</label>
                  <input
                     value="true"
                     onChange={handleInputChange}
                     type="radio"
                     name="featured"
                     id="true"
                  />
               </div>
               <div>
                  <label htmlFor="false">false</label>
                  <input
                     value="false"
                     onChange={handleInputChange}
                     defaultChecked
                     type="radio"
                     name="featured"
                     id="false"
                  />
               </div>
            </div>
            <Button type="submit">Submit form</Button>
         </SForm>
      </div>
   )
})
