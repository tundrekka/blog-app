import { useState, useRef, useEffect, useCallback } from 'react'

export const useHideFooter = () => {
   const [show, setShow] = useState(false)
   const lastScroll = useRef(0)

   const hideOnScroll = useCallback(() => {
      const currentScroll = window.pageYOffset

      if (currentScroll === 0) {
         setShow(false)
         lastScroll.current = currentScroll
         return
      }

      if (currentScroll > lastScroll.current) {
         // down
         setShow(false)
      } else if (currentScroll < lastScroll.current) {
         // up
         setShow(true)
      }

      lastScroll.current = currentScroll
      
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', hideOnScroll)

      return () => {
         window.removeEventListener('scroll', hideOnScroll)
      }
   }, [hideOnScroll])

   return show
}
