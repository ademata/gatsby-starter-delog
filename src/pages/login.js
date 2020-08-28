// import React, { useState } from 'react'
// import FormInput from '../components/form-input/form-input'
// //import './login-style.scss'

// const LoginPage = () => {

//     const [userCredentials, setCredentials] = useState({ 
//         email: '', password: ''
//     });

//     //const { email, password } = userCredentials
    
//     const handleSubmit = event => {
//         event.preventDefault();

//         setCredentials({ email: '', password: '' })
//     }

//     const handleChange = event => {
//         const {value, name } = event.target;

//         setCredentials({...userCredentials, [name]: value} )
//     }

//     return (
//         <div className='login-style'>
//             <h2>I already have an account</h2>
//             <span>Sign in with your email and password</span>

//             <FormInput onSubmit={handleSubmit}>
//             <label>Email</label>
//                 <input name='email' type='email' value="email" required />
//                 <label>Email</label>
//                 <input
//                     name='password'
//                     type='password'
//                     value='password'
//                     handleChange={handleChange}
//                     required
//                 />
//                 <input type="submit" value="Submit Form" />
//             </FormInput>

//         </div>
//     )
// }
// export default LoginPage




/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */

import React, {useState, useContext} from 'react'
import {navigate} from 'gatsby'
import {Header, Form, Input, Button, Segment, Message, Container} from 'semantic-ui-react'
//import SEO from '../components/SEO'
//import {login} from '../../lib/moltin'
//import AuthContext from '../components/Context/AuthContext'
import Layout from '../components/layout'
//import useForm from '../components/Hooks/useForm'
import 'semantic-ui-css/semantic.min.css'

const LoginPage = ({location}) => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])
  //const {updateToken} = useContext(AuthContext)

  const formLogin = () => {
    setLoading(true)
    // login({email: values.email, password: values.password})
    //   .then(({id, token}) => {
    //     localStorage.setItem('customerToken', token)
    //     localStorage.setItem('mcustomer', id)
    //     updateToken()
    //     navigate('/myaccount/')
    //   })
    //   .catch(e => {
    //     setLoading(false)
    //     setApiError(e.errors || e)
    //   })
  }
//   const {values, handleChange, handleSubmit, errors} = useForm(
//     formLogin,
//     validate,
//   )

  const handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return (
        <Message
          error
          header="Sorry"
          content="Please check your login details and try again."
        />
      )
    }
    return errors.map(e => (
      <Message error header={e.title} content={e.detail} key={e.status} />
    ))
  }
  return (
 //   <Layout location={location}>
 //     <SEO title="Login" />
 <Layout>  
      <div class="ui container" style={{marginTop: "100px"}}>
      <Header as="h1">Log in to your account</Header>
      <Form
        // onSubmit={handleSubmit}
        loading={loading}
        // error={apiError.length !== 0 || Object.entries(errors).length !== 0}
      >
        {/* {apiError.length !== 0 ? handleErrors(errors) : null} */}
        <Segment>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              fluid
              name="email"
              type="email"
              autoFocus
            //   onChange={handleChange}
            //   value={values.email || ''}
            />
          </Form.Field>
          {/* {errors.email && (
            <p data-testid="error" style={{color: 'red'}}>
              {errors.email}
            </p>
          )} */}
          <Form.Field>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              fluid
              name="password"
              type="password"
            //   value={values.password || ''}
            //   onChange={handleChange}
            />
          </Form.Field>
          {/* {errors.password && <p style={{color: 'red'}}>{errors.password}</p>} */}
          <button class="ui button" type="submit" style={{backgroundColor: "#381696"}}>
            <span style={{color: "#e9e7f4"}}>Login</span>
          </button>
        </Segment>
      </Form>
    </div>
   </Layout>
  )
}

export default LoginPage

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  return errors
}
