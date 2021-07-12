import { useState } from 'react'

type FormProps<T> = [
   T,
   (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
   () => void
]

export const useForm = <T>( initialState: T ): FormProps<T>  => {

   const [values, setValues] = useState(initialState)

   const reset = () => {
      setValues(initialState)
   }

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }

   return [values, handleInputChange, reset]

}
