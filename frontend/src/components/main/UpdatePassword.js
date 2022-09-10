import { Button, TextField } from '@mui/material';
import { Formik} from 'formik';
import React from 'react'
import app_config from '../../config';
import Swal from "sweetalert2";
import Image2 from "../img/ab2.jpeg";
const url = app_config.backend_url;
const UpdatePassword = () => {
//     const passwordSubmit = async (formdata) => {
//         const response = await fetch(url + "/user/update", {
//             method: "POST",
//             body: JSON.stringify(formdata), headers: { "Content-Type": "application/json" },
//         });
//         if (response.status === 200) {
//             console.log("success");
//             Swal.fire({
//                 icon: "success",
//                 title: "Updated",
//                 text: "Password Changed Successfully!"
//             });
//             setChangePassword(false);
//         } else {
//             console.log("Something Went Wrong")
//         }
// }
    return (
     
        <div className="signin-bg">
      <section className="vh-100">
        <div className="container col-md-6 col-lg-6 col-xs-12 col-sm-6 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            
                            <div className="card">
                                <div className='card-body'>
                                <h1 className="font-weight-bold "style={{ textAlign: "center"}}>Update Password</h1>
                {/* <div class="row g-0"> */}
          <Formik
            //   initialValues={updatePassword} onSubmit={passwordSubmit}
          >
              {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <TextField className='mt-4' fullWidth label="Username"
                          /*id="username" onChange={handleChange} value={values.username}*/
                      />    
                      <TextField className='mt-4' fullWidth label="Old Password"
                         /* id="password" onChange={handleChange} type="password" value={values.password}*/
                      />    
                      <TextField className='mt-4' fullWidth type="password" label="New Password" /*id="newPassword" onChange={handleChange} value={values.password}*/
                      />
                      <TextField className='mt-4' fullWidth type="password" label="Confirm Password" /*id="confirmPassword" onChange={handleChange} value={values.password}*/
                      />    

                  <Button variant ="contained" type='submit' className='mt-5'>Submit</Button>
                      <Button
                          /*variant="contained" color='error'*/ className='mt-5'>Cancel</Button>
              </form>
              )}
              </Formik>
              </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </div>
  )
}

export default UpdatePassword