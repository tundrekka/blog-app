import { useEffect } from 'react'
import { Spinner } from './Spinner'

export const Fallback: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div
         style={{
            minHeight: '110vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
         }}
      >
         <Spinner />
      </div>
   )
}
