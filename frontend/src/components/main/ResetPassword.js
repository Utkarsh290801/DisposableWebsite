import { Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'

const ResetPassword = () => {
  return (
    <div className="signin-bg">
      <section className="vh-100">
        <div className="container col-md-6 col-lg-6 col-xs-12 col-sm-6 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            
                            <div className="card">
                                <div className='card-body'>
                <h1 className="font-weight-bold " style={{ textAlign: "center" }}>Forgot your password?</h1>
                <p className='mt-4' style={{textAlign:"center",fontSize:'1em'}}>
                  Please enter the email address associated
                  with your account and We will email you a
                  link to reset your password.
                </p>
                
          <Formik
            //   initialValues={changePassword} onSubmit={passwordSubmit}
          >
              {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <TextField className='mt-4' fullWidth label="Enter Your Email"
                          /*id="email" onChange={handleChange} value={values.email}*/
                      />    
                         

                  <Button variant ="contained" type='submit' className='mt-4 mx-auto d-flex'fullWidth>Send Request</Button>
                      <Button
                          /*variant="contained" color='error'*/ className='mt-2 mx-auto d-flex'>Back</Button>
              </form>
              )}
              </Formik>
              </div>
              </div>
            </div>
          </div>
       
      </section>
    </div>
  )
}

export default ResetPassword