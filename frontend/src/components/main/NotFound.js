import React from 'react'
import "./NotFound.css";
const NotFound = () => {

  return (
    <div id='notfound' style={{backgroundColor:""}}>
        {/* <h1 style={{textAlign:"center", textDecoration:'3px underline'}}> Page Not Found</h1>
        <img style={{marginLeft:"" , marginTop:"%", width:"100%"}} src='https://klizos.com/wp-content/uploads/funny-404-error-page-GIF.gif' alt=''/> */}
                <p id="error">E <span>r</span>ror</p>
        <p  id="code">4<span>0</span><span>4</span></p>
    </div>
  )
}

export default NotFound