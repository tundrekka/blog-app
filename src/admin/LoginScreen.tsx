import { Button } from 'components/ui/Button'
import { useForm } from 'hooks/useForm'
import styled from 'styled-components'
import { startLogin } from './auth/login'
// import { loguear } from './auth/login'
import { Layout } from './components/Layout'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 86.6vh;
`

const LoginDiv = styled.div`
   background-color: ${({theme}) => theme.palette.themeMode.navbar_bg};
   padding: 1em;
   border-radius: 6px;
   box-shadow: ${({theme}) => (theme.palette.dark) ? '0 0 4px 2px rgba(255,255,255,.5)' : '0 0 4px 2px rgba(0,0,0,.5)'};

   h3 {
      text-align: center;
      margin-bottom: .8em;
   }
`

const Input = styled.input`
   font-size: 1.02rem;
   margin-bottom: .8em;
`

const ButtonBlock = styled(Button)`
   width: 100%;
   margin-bottom: .8em;
`

interface LoginForm {
   email: string,
   password: string
}

export const LoginScreen: React.FC = () => {

   const initialState: LoginForm = {
      email: '',
      password: '',
   } 

   const [formValues, handleInputChange] = useForm(initialState)

   const { email, password } = formValues 

   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      startLogin( email, password )
      
   }

   return (
      <Layout>
         <Container>
            <LoginDiv>
               <h3>Login</h3>
               <form onSubmit={handleLogin}>
                  <div>
                     <Input onChange={handleInputChange} value={email} autoComplete="off" type="email" placeholder="email" name="email" id="email" />
                  </div>
                  <div>
                     <Input onChange={handleInputChange} value={password} type="password" placeholder="password" name="password" id="password" />
                  </div>
                  <div>
                     <ButtonBlock type="submit">Login</ButtonBlock>
                  </div>
               </form>
               {/* <ButtonBlock onClick={loguear}>Loguearse hardcoded</ButtonBlock> */}
            </LoginDiv>
         </Container>
      </Layout>
   )
}
