// import { Card, CardContent, TextField } from "@mui/material";
// import { Formik } from "formik";
// import React, { useState } from "react";
// import Swal from "sweetalert2";

// const UserProfile = () => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(sessionStorage.getItem("user"))
//   );

//   const [selFile, setSelFile] = useState("");
//   const uploadFile = (e) => {
//     const file = e.target.files[0]
//     setSelFile(file.name)
//     const fd = new FormData()
//     fd.append("myfile", file)
//     fetch("http://localhost:5000/util/uploadfile", {
//       method: "POST",
//       body: fd,
//     }).then((res) => {
//       if (res.status === 200) {
//         console.log("uploaded")
//       }
//     })
//   }

//   const onFormSubmit = (value) => {
//     fetch("http://localhost:5000/user/update" + currentUser._id, {
//       method: "PUT",
//       body: JSON.stringify(value),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((res) => {
//       if (res.status === 200) {
//         res.json().then((data) => {
//           console.log(data);
//           setCurrentUser(data);
//           sessionStorage.setItem("user", JSON.stringify(data));
//         });
//       }
//       Swal.fire({
//         icon: "success",
//         title: "Welldone!",
//         text: "You have successfully Updated",
//       });
//     });
//   };
//   return (
//     <div className="col-md-10 mx-auto">
//       <Card>
//         <CardContent>
//           <div className="row">
//             <p className="my-4 h2">Edit Profile</p>
//             <hr />
//             <div className="col-md-5">
//               <img src="http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgwL4r2DN1qg91OOqIViiv0Uxw-9yqo-PiQ&usqp=CAU" className="avatar img-circle img-thumbnail" alt="avatar" />
//               <br/>
//               <label className="mt-3">Change Image</label>
//               <input className="form-control" type="file" />
//             </div>
//             <div className="col-md-7">
//               <Formik
//                 // initialValues={currentUser}
//                 initialValues={{
//                   username: "Raju",
//                   email: "raju@mail.com",
//                   password: "1234",
//                 }}
//                 onSubmit={onFormSubmit}
//               >
//                 {({ values, handleChange, handleSubmit }) => (
//                   <form onSubmit={handleSubmit}>
//                     <TextField
//                       className="mt-4 w-100"
//                       label="Full Name"
//                       variant="filled"
//                       name="name"
//                       onChange={handleChange}
//                       value={values.username}
//                     />

//                     <TextField
//                       className="mt-4 w-100"
//                       label="Email"
//                       variant="filled"
//                       name="email"
//                       onChange={handleChange}
//                       value={values.email}
//                     />
//                     <TextField
//                       className="mt-4 w-100"
//                       type="password"
//                       label="Password"
//                       name="password"
//                       variant="filled"
//                       onChange={handleChange}
//                       value={values.password}
//                     />

//                     <div className="text-center">
//                       <button className="btn btn-primary mt-5 w-100">
//                         Update
//                       </button>
//                     </div>
//                   </form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UserProfile;
