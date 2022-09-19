// import { Button, Card, CardContent, Grid, InputAdornment, TextField } from "@mui/material";
// import { Container } from "@mui/system";
// import React from "react";
// import {AccountCircle, Create, EmailOutlined, LocalPhone, Subject }from '@mui/icons-material';

// const ContactUs = () => {
//   return (
//     <Container style={{marginTop:"13vh"}} 
//       // style={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
//     >
//       <Card >
//         <Grid container
//           // spacing={0} direction='row' alignItems='center' justifyContent='center' style={{ minHeight: '100vh' }}
//         >
//           <Grid item lg={8}>
//             <CardContent>
//               {/* Header */}
//               <div class="form-header blue accent-1">
//                 <h3 class="mt-2">
//                   <i class="fas fa-envelope"></i> Write to us:
//                 </h3>
//               </div>

//               {/* <!-- Grid row --> */}
//               <Grid container>
//                 {/* <!-- Grid column --> */}
//                 <Grid item md={6}>
//                   <TextField
//                     label="Your Name"
//                     variant="standard"
//                     className="md-form mb-5"
//                     id="form-contact-name"
//                     InputProps={{
//                                   endAdornment: (
//                                     <InputAdornment position="end">
//                                       <AccountCircle />
//                                     </InputAdornment>
//                                   ),
//                                 }}
//                   />
//                 </Grid>

//                 {/* <!-- Grid column --> */}
//                 <Grid item md={6}>
//                   <TextField
//                     label="Your Email"
//                     variant="standard"
//                     className="md-form mb-5"
//                     id="form-contact-email"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <EmailOutlined />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//                 {/* <!-- Grid column --> */}
//               </Grid>
//               {/* <!-- Grid row --> */}

//               <Grid container>
//                 <Grid item md={6}>
//                   <TextField
//                     label="Your Phone"
//                     variant="standard"
//                     className="md-form mb-5"
//                     id="form-contact-phone"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <LocalPhone />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//                 <Grid item md={6}>
//                   <TextField
//                     label="Your Subject"
//                     variant="standard"
//                     className="md-form mb-5"
//                     id="form-contact-subject"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <Subject />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//               </Grid>

//               <Grid container>
//                 <TextField
//                   label="Your Message"
//                   variant="outlined"
//                   className="w-100 md-form mb-5"
//                   id="form-contact-message"
//                   type="textarea"
//                   multiline
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <Create/>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   className="w-50 btn-primary btn-lg mx-auto"
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </CardContent>
//           </Grid>

//           <Grid item lg={4} textAlign="center" color="white" bgcolor="#27293d">
//             <CardContent>
//               <h3 className="font-weight-bold my-4 pb-2">
//                 Contact information
//               </h3>
//               <ul className="text-lg-left list-unstyled ml-4">
//                 <li>
//                   <p>
//                     <i class="fas fa-map-marker-alt pr-2"></i>India, 226021,
//                     U.P.
//                   </p>
//                 </li>
//                 <li>
//                   <p>
//                     <i class="fas fa-phone pr-2"></i>+ 01 234 567 89
//                   </p>
//                 </li>
//                 <li>
//                   <p>
//                     <i class="fas fa-envelope pr-2"></i>contact@example.com
//                   </p>
//                 </li>
//               </ul>
//               <hr className="hr-light my-4" />
//               <ul className="list-inline text-center list-unstyled">
//                 <li className="list-inline-item">
//                   <a className="p-2 fa-lg tw-ic">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="p-2 fa-lg li-ic">
//                     <i class="fab fa-linkedin-in"> </i>
//                   </a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="p-2 fa-lg ins-ic">
//                     <i class="fab fa-instagram"> </i>
//                   </a>
//                 </li>
//               </ul>
//             </CardContent>
//           </Grid>
//         </Grid>
//       </Card>

//       {/* </section> */}
//     </Container>
//   );
// };

// export default ContactUs;
import { Container,  TextField, Button, Grid, CardContent } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

import React from "react";

const ContactUs = () => {
  const contactupStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const userForm = {
    name: "",
    email: "",
    mobile:"",
    subject: "",
    message: "",
  };

  
 
  const feedbackSubmit = async(formdata, { setSubmitting }) => {
    console.log(formdata);
    setSubmitting(true);
   
    // asynchronous function returns promise
   const response = await fetch(url + "/contact/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("data saved");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "send successfully!!",
      });
      
    } else if (response.status) {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
    setSubmitting(false);
  };
 
  const formBody = ({ values, handleSubmit, handleChange , isSubmitting}) => {
  return (
    <Container >
    <div class="mb-4 " >
      <p class=" font-weight-bold text-center my-4" style={{letterSpacing:"3px", color:"", fontSize:"70px", fontWeight:"200px", fontFamily:"'Calligraffitti', cursive"}} >
        Get in Touch
      </p>

      <p class="text-center w-responsive mx-auto mb-5" style={{letterSpacing:"3px",fontFamily:"Tapestry", color:"red", fontSize:"20px", fontWeight:"200px"}}>
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>

      <div class="row">
        <div class="col-md-8 mb-md-0 mb-5">

          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={5}>
                <TextField
                  className="w-50 "
                    type="text"
                    id="name"
                    label="Your Name"
                   varient="outlined"
                   onChange={handleChange}
                   value={values.name}/>
            
                  <TextField
                  className="w-50 "
                    type="email"
                    id="email"
                    label="Your Email"
                   varient="outlined" 
                   onChange={handleChange}
                   value={values.email}/>
              </Stack>
              <Stack direction="column" spacing={3} >
              <TextField
                  sx={{mt:3}}
                  className="w-100 "
                    type="number"
                    id="mobile"
                    label="Your Contact No"
                   varient="outlined"
                   onChange={handleChange}
                   value={values.mobile}/>
              <TextField
                  className="w-100 "
                    type="text"
                    id="subject"
                    label="Subject"
                   varient="outlined"
                   onChange={handleChange}
                   value={values.subject}/>
              <TextField
                  className="w-100 "
                    type="text"
                    id="message"
                    label="Your Message"
                    multiline
                    rows={2}
                   varient="outlined"
                   onChange={handleChange}
                   value={values.message}/>
                   </Stack>            
             
          <Stack sx={{mt:5}}>
        <Button 
        variant="contained" 
        color="warning" 
        size="large" 
        endIcon={<SendIcon />}>
        Contact Us
        </Button>
        </Stack>
          </form>

        </div>

        <div class="col-md-4 text-center">
          <ul class="list-unstyled mb-0">
            <li>
            <Grid item xl={15} textAlign="center" color="white" bgcolor="#27293d">
            <CardContent>
              <h3 className="font-weight-bold my-4 pb-2">
                Contact information
              </h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                    <Grid item xl={15}>
            <LocationOnIcon sx={{ fontSize: 55 }} color=""/>
           <Button variant="text" color="inherit" href="#contained-buttons">
           India, 226021, U.P.
           </Button>
           </Grid>
           
            </li>

            <li>
            <Grid item xl={15}>
            <CallIcon sx={{ fontSize: 55 }} color=""/>
           <Button variant="text" color="inherit" href="#contained-buttons">
           +1 624737832
           </Button>
           </Grid>
           
           </li>

            <li>
            <Grid item xl={15}>
            <EmailIcon sx={{ fontSize: 55 }} color=""/>
           <Button variant="text" color="inherit" href="#contained-buttons">
           Admin@admin.com
           </Button>
           </Grid>
          
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item" style={{ fontSize: 25 }}>
                  <a className="p-2 fa-lg tw-ic">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item" style={{ fontSize: 25 }}>
                  <a className="p-2 fa-lg li-ic">
                    <i class="fab fa-linkedin-in"> </i>
                  </a>
                </li>
                <li className="list-inline-item" style={{ fontSize: 25 }}>
                  <a className="p-2 fa-lg ins-ic">
                    <i class="fab fa-instagram"> </i>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Grid>
         
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Container>

   
  );
};
     return (
   
      <Formik initialValues={userForm} onSubmit={feedbackSubmit}>
        {formBody}
      </Formik>
  );
};

export default ContactUs;