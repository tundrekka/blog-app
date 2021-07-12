import React from 'react'

type MyProps = {}
type MyState = {
   error: any
   errorInfo: any
}

export class ErrorBoundary extends React.Component<MyProps, MyState> {
   // constructor(props) {
   //   super(props);
   //   this.state = { error: null, errorInfo: null };
   // }
   state: MyState = {
      error: null,
      errorInfo: null
   }

   componentDidCatch(error: any, errorInfo: any) {
      // Catch errors in any components below and re-render with error message
      this.setState({
         error: error,
         errorInfo: errorInfo,
      })
      // You can also log error messages to an error reporting service here
   }

   render() {
      if (this.state.errorInfo) {
         return (
            <div>
               <h2>Something went wrong.</h2>
               <button
                  className="btn btn-primary"
                  onClick={() => {
                     window.location.reload()
                  }}
               >
                  Try Reloading
               </button>
            </div>
         )
      }
      return this.props.children
   }
}
