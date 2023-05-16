const Templates = {
  myTemplate: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Modern Responsive Template</title>
      <style>
      body {
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
        background: #333;
        color: #fff;
        font-size: 1em;
        line-height: 1.5;
        text-align: center;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
      h1, h2, h3 {
        margin: 0;
        padding: 1em 0;
      }
      p {
        margin: 0;
        padding: 1em 0;
      }
      .btn {
        display: inline-block;
        background: #333;
        color: #fff;
        text-decoration: none;
        padding: 1em 2em;
        border: 1px solid #666;
        margin: .5em 0;
      }
      .btn:hover {
        background: #eaeaea;
        color: #333;
      }
      
      /* Header */
      #showcase {
        min-height: 450px;
        color: #fff;
        text-align: center;
      }
      #showcase .bg-image {
        position: absolute;
        background: #333 url("https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 450px;
        z-index: -1;
        opacity: 0.5;
      }
      #showcase h1 {
        padding-top: 100px;
        padding-bottom: 0;
      }
      #showcase .content-wrap,
      #section-a .content-wrap {
        padding: 0 1.5em;
      }
      
      /* Section A */
      #section-a {
        background: #eaeaea;
        color: #333;
        padding-bottom: 2em;
      }
      
      /* Section B */
      #section-b {
        padding: 2em 1em 1em;
      }
      #section-b ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      #section-b li {
        margin-bottom: 1em;
        background: #fff;
        color: #333;
      }
      .card-content {
        padding: 1.5em;
      }
      
      /* Section C */
      #section-c {
        background: #fff;
        color: #333;
        padding: 2em;
      }
      
      /* Section D */
      #section-d .box {
        padding: 2em;
        color: #fff;
      }
      #section-d .box:first-child {
        background: #2690d4;
      }
      
      /* Footer */
      #main-footer {
        padding: 2em;
        background: #111;
        color: #fff;
        text-align: center;
      }
      #main-footer a {
        color: #2690d4;
        text-decoration: none;
      }
      
      /* Media Queries */
      
      @media(min-width: 700px) {
        .grid {
          display: grid;
          grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
        }
        #section-a .content-text {
          columns: 2;
          column-gap: 2em;
        }
        #section-a .content-text p {
          padding-top: 0;
        }
        .content-wrap,
        #section-b ul {
          grid-column: 2/4;
        }
        .box,
        #main-footer div {
          grid-column: span 2;
        }
        #section-b ul {
          display: flex;
          justify-content: space-around;
        }
        #section-b li {
          width: 31%;
        }
      }
    
        @media (max-width: 768px) {
          h1 {
            font-size: 32px;
          }
          p {
            font-size: 16px;
          }
        }
    
        /* Animation */
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
    
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
    
        .slide-in {
          animation: slideIn 1s ease-out;
        }
    
        @keyframes slideIn {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(0);
          }
        }
      </style>
    </head>
    <body>
    <header id="showcase" class="grid">
<div class="bg-image"></div>
<div class="content-wrap">
  <h1>Heading</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
  <a href="#section-b" class="btn">Get Started</a>
</div>
</header>

<main id="main">
<section id="section-a" class="grid">
  <div class="content-wrap">
    <h2 class="content-title"> Title Heading</h2>
    <div class="content-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</section>

<section id="section-b" class="grid">
  <ul>
    <li>
      <div class="card">
        <img src="https://images.unsplash.com/photo-1518714352098-3d0339fb00bc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        <div class="card-content">
          <h3 class="card-title">Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </li>

    <li>
      <div class="card">
        <img src="https://images.unsplash.com/photo-1529213107127-1fa84f8f0297?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
        <div class="card-content">
          <h3 class="card-title">Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
        </div>
      </div>
    </li>

    <li>
      <div class="card">
        <img src="https://images.unsplash.com/photo-1536702781574-773180cb35d4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        <div class="card-content">
          <h3 class="card-title">Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </li>
  </ul>
</section>

<section id="section-c" class="grid">
  <div class="content-wrap">
    <h2 class="content-title">About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</section>

<section id="section-d" class="grid">
  <div class="box">
    <h2 class="content-title">Features</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>email@email.com</p>
  </div>
  <div class="box">
    <h2 class="content-title">Services</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</section>
</main>

<footer id="main-footer" class="grid">
<div>Footer</div>
<div>Footer Copyright &nbsp;&nbsp;&nbsp;<a target="_blank" href="">Link</a></div>
</footer>
    </body>
    </html>
    `,
  portfolio: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- css -->
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
        <!-- font -->
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
        <!-- icon -->
        <script src="https://kit.fontawesome.com/235004aab8.js" crossorigin="anonymous"></script>
        <title>Personal Website Template</title>
    <style>body, div, h1, h2, ul, li, i, a, p, h3, footer {
        padding: 0;
        margin: 0;
        border: 0;
    }
    body {
        background-image: url(https://i.ibb.co/zQ4kq0b/nnn.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
    
    /* scorll */
    ::-webkit-scrollbar {
      width: 7px;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #121212;
    }
    
    /* scorll */
    
    body a {
        color: white;
         text-decoration: none;
    
         
    }
    
    body ul li {
           list-style:none;
        margin-top: 10px;
    }
    
    p {
        font-size: 55px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    #center_content {
          padding-left: 60px;
    }
    
    
    .info_div {
       position: fixed;
       width: 35%;
       height: 100%;
       overflow: hidden;
    }
    
    
    .profile_info {
        text-align: left;
        margin-top: 120px;
    }
    
    .profile_info img {
    margin-left: 20px;
    }
    
    .profile_info h1 {
        font-size: 30px;
        margin-left: 30px;
    }
    
    .profile_info h2 {
        margin-left: 30px;
        font-size: 20px;
    }
    
    
    .profile_info h2 a:hover{
        text-decoration: underline;
    }
    
    .icon {
        margin-top: 25px;
        margin-left: 30px;
    }
    
    
    
    .icon ul li i {
        text-shadow: 1px 1px 1px #ccc;
        font-size: 20px;
        padding-right:10px;
    }
    
    .icon ul li a {
         font-size: 20px;
    }
    
    .social_link {
        text-align: center;
        margin-top: 70px;
            font-size: 25px;
    }
    .social_link a {
       margin: 0 40px 0 0;
    }
    
    .main_content {
        position: relative;
        width: 64%;
        height: 100%;
        Float: right
        
    }
    
    
    .about h3 {
        padding-top: 110px;
    }
    
    .about div {
        height: 100%;
        width: 90%;
        border-radius:0.5em;
        background-color: #121212;
    }
    
    .about div p {
        font-size: 20px;
        margin: 20px 20px 20px 20px;
    }
    
    .skills ul {
        height: 100%;
        width: 60%;
        border-radius:0.5em;
        background-color: #121212;
            padding-bottom: 5px;
    
    }
    .skills ul li {
        font-size: 20px;
        margin: 20px 20px 20px 20px;
        
    }
    .skills ul li:first-child {
            padding-top: 20px;
    }
    
    .products div {
    
        height: 100%;
        width: 90%;
        border-radius:0.5em;
        background-color: #121212;
    }
    
    .products div p {
            font-size: 20px;
            margin: 20px 20px 20px 20px;
    }
    
    
    
    .contact ul {
        height: 100%;
        width: 30%;
        border-radius:0.5em;
        background-color: #121212;
         padding-bottom: 5px;
    
    }
    
    .contact ul li {
        font-size: 20px;
        margin: 20px 20px 20px 20px;
        
    }
    .contact ul li:first-child {
            padding-top: 20px;
    }
    
    footer p {
        text-align: center;
        font-size: 15px;
        margin-top: 40px;
    }</style>
    </head>
    <body>
        <div class="info_div">
            <div class="profile_info">
            <img src="https://i.ibb.co/cXX24C2/413bf8c4-294b-4963-b35c-29f2a2756359-200x200.png" alt="profile picture">
            <h1>Utkarsh Arora</h1>
            <h2><a href="https://github.com/Utkarsh290801">@utarora3</h2></a>
            </div>
            <div class="icon">
              <ul>
                  <li>
                    <i class="fab fa-github"><a href="https://github.com/Utkarsh290801"></i>Github</a></li>
                  <li>
                    <i class="fas fa-map-marker-alt"><a href=""></i>Lucknow</a></li>
              </ul>
    
            </div>
    
            <div class="social_link">
               <a href="#">
                <i class="fas fa-laptop-code"></i>
               </a>
               <a href="#">
                <i class="fab fa-facebook"></i>
               </a>
                <a href="#">
                <i class="fab fa-twitter"></i>
                </a>
            </div>
        </div>
        <div class="main_content">
          <div class="about" id="center_content">
            <h3>Welcome</h3>
            <p>About Me.</p>
            <div>
              <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Iste velit consequuntur quaerat impedit possimus
                harum cum vero iusto saepe excepturi necessitatibus nostrum hic,
                 sed perspiciatis fugiat accusamus architecto suscipit quam.
                </p>
            </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Iste velit consequuntur quaerat impedit possimus
                        harum cum vero iusto saepe excepturi necessitatibus nostrum hic,
                        sed perspiciatis fugiat accusamus architecto suscipit quam.
                      </p>
                    </div>
          </div>
                <div class="skills" id="center_content">
                  <p>Skills.</p>
                   <ul>
                     <li>HTML,CSS, Javascript</li>
                     <li>Java</li>
                     <li>Good writing skills</li>
                     <li>Good communication skills</li>
    
                   </ul>
                </div>
                            <div class="products" id="center_content">
                              <p>My products and coverages.</p>
                               <div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                   Recusandae, ipsam maiores? Est nesciunt soluta blanditiis
                                   sed iusto voluptatem repellendus ullam corporis saepe similique non,
                                    modi totam distinctio deleniti quia laudantium!</p>
                               </div>
                             <div>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Recusandae, ipsam maiores? Est nesciunt soluta blanditiis
                                 sed iusto voluptatem repellendus ullam corporis saepe similique non,
                                 modi totam distinctio deleniti quia laudantium!</p>
                             </div>
                                  <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      Recusandae, ipsam maiores? Est nesciunt soluta blanditiis
                                      sed iusto voluptatem repellendus ullam corporis saepe similique non,
                                      modi totam distinctio deleniti quia laudantium!</p>
                                  </div>
                                     <div>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Recusandae, ipsam maiores? Est nesciunt soluta blanditiis
                                         sed iusto voluptatem repellendus ullam corporis saepe similique non,
                                         modi totam distinctio deleniti quia laudantium!</p>
                                     </div>
                                </div>
                 <div class="contact" id="center_content">
                   <p>Contact me.</p>
                   <ul>
                     <li>~Phone Number~<br><a href="#">+123456789</a></li>
                     <li>~Email me~<br><a href="mailto:skills@web.com">utarora3@gmail</a></li>
                   </ul>
                 </div>
              <footer>
                <p>Made By <a href="https://www.facebook.com/">Utkarsh Arora</a></p>
              </footer>
        </div>
    </body>
    
    </html>`,
  template1: `<!DOCTYPE html>
    <html lang="en" dir="ltr">
    
    <head>
      <meta charset="utf-8">
      <meta name="description" content="HTML/CSS">
      <meta name="author" content="Anil">
      <title>Website -Template</title>
      <link rel="stylesheet" href="css/style.css">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
    <style>html{
        scroll-behavior: smooth;
      }
      *{margin: 0;padding: 0;box-sizing: border-box;font-family: 'Poppins', sans-serif;}
      a{text-decoration: none;}
      a:hover{text-decoration: none;}
      li{list-style: none;}
      p{
        font-size: 0.9rem;
        line-height: 1.6;
        font-weight: 400;
        color: #606060;
      }
      .extradiv h2, .servicediv h2{
        font-size: 0.9rem;
        margin: 20px 0 15px 0;
        font-weight: bold;
        line-height: 1.1;
        word-spacing: 4px;
      }
      i{
        color: #2fccd0;
      }
      
      /* XXXXXXXXXXXXXXXXXXXXX common style ends here XXXXXXXXXXXXXXXXXXX */
      .header{
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(rgba(0,168,255,0.3), rgba(0,168,255,0.3)), url("../image/header-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        clip-path: polygon(100% 0, 100% 77%, 50% 100%, 0 75%, 0 0);
        position: relative;
      }
      .header::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.4;
        z-index: -1;
        background: linear-gradient(to right,  #1e5799 0%, #3ccdbb 0%, #16c9f6 100%);
      }
      .navbar::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.4;
        z-index: -1;
        background: linear-gradient(to right,  #1e5799 0%, #3ccdbb 0%, #16c9f6 100%);
      }
      .nav-item a{
        color: #fff!important;
        font-weight: bold;
      }
      .header-section{
        width: 100%;
        height: inherit;
        color: #fff;
        text-align: center;
        position: relative;
      }
      .center-div{
        position: absolute;
        width: 100%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
      }
      .header-buttons a{
        border: 1px solid #fff;
        border-radius: 100px;
        margin: 0 5px;
        padding: 12px 35px;
        outline: none;
        color: #fff;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4;
        text-align: center;
      }
      .header-buttons a:hover{
        text-decoration: none;
        color: #50d1c0;
        background-color: #fff;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
      }
      .center-div p{
        font-size: 1.3rem;
        padding: 10px 0 20px 0;
        color: #fff;
      }
      /* ********************* three extra header div starts ******************** */
      
      .header-extradiv{
        width: 100%;
        height: auto;
        margin: 100px 0;
        text-align: center;
      }
      .extradiv p{text-align: justify;}
      .extradiv{
        background-color: #fff;
        border: none;
        padding: 30px!important;
        border-radius: 3px;
        transition: 0.3s;
      }
      .extradiv:hover{
        box-shadow: -10px 0px 20px 0 rgba(0,0,0,0.3);
        transform: translateY(-20px);
      }
      
      /* ********************* three extra header div ends ******************** */
      
      /* ******************* service offer css start ********************** */
      
      .serviceoffers{
        background-color: #f7f7f9;
        padding: 50px 0;
        margin-bottom: 50px;
      }
      .headings{
        margin-bottom: 50px;
      }
      .headings h1{
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
      }
      .names h1{
        color: #2e2e2e;
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: bold;
      }
      .service-icons{
      
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .progress{
        height: 0.6rem!important;
        margin-bottom: 25px!important;
      }
      /* ******************* service offer css ends ********************** */
      
      /* ********************* project (completed) starts ****************************** */
      
      .project-work{
        margin: 100px 0;
      }
      .project-work h1{
        font-size: 2rem;
        text-align: center;
      }
      /* ********************* project (completed) ends ****************************** */
      
       /* ********************* our pricing starts ******************************  */
      
      .pricing{
        width: 100%;
        height: 100vh;
        padding: 50px;
        position:  relative;
      }
      .pricing::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background: linear-gradient(160deg, #16c9f6 55%, #fff 0%);
      }
      .money{
        font-size: 40px;
        line-height: 1;
        color: #606060;
      }
      .card{
        transition: 0.4s ease;
      
      }
      .card-header{
        font-size: 1.6rem;
        font-weight: bold;
        background: #fff!important;
        padding: 25px 0!important;
      }
      .card-body{
        padding: 30px 0!important;
      }
      .card-body li{
        margin: 10px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.6;
        color: #606060;
      }
      .card-footer{
        background: #fff!important;
        padding: 30px 0!important;
      }
      .card-footer a{
        border: 1px solid #50c1d0;
        border-radius: 100px;
        margin: 0 5px;
        padding: 12px 35px;
        outline: none;
        color: #50d1c0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4;
        text-align: center;
      }
      .card:hover .card-footer a{
        text-decoration: none;
        color: #fff;
        background-color: #50d1c0;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
      }
      .card:hover{
        transform: translateY(-20px);
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
      }
      .card:hover .card-header, .card:hover .money{
        color: #50d1c0;
      }
      .card-second{
        transform: translateY(-20px);
        /* box-shadow: 0 0 20px 0 rgba(0,0,0,0.3); */
      }
       /* ********************* our pricing ends ****************************** */
      
      
        /* ********************* our happy clients starts ******************************  */
      
      .happyclients{
        width: 100%;
        height: 100vh;
        padding: 80px 0;
      }
      .box{
        text-align: center;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.3);
        border-radius: 2px;
        transition: 0.3s ease;
      }
      .box:hover{
        background: #16c9f6;
      }
      .box:hover p{
        color: #fff;
      }
      .carousel-indicators{
        position: absolute;
        right: 0;
        bottom: -60px!important;
      }
      .carousel-indicators li{
        background-color: #16c9f6!important;
      }
      .box a{
        position: relative;
      }
      .box a img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 20px;
      }
      .box a::after{
        content: "\f10d";
        font-family: FontAwesome;
        width: 40px;
        height: 40px;
        background: linear-gradient(to right, #1e5799 0%, #3ccdbb 0%, #16c9f6 100%);
        color: #fff;
        position: absolute;
        top: 120%;
        left: 70%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .box h1{
        font-size: 18px;
        font-weight: 700;
        color: #000;
        margin-bottom: 10px;
      }
      .box h2{
        font-size: 13px;
        font-weight: 400;
        color: #666666;
        margin-bottom: 20px;
      }
        /* ********************* our happy clients ends ******************************  */
      
      
       /* ********************* contact us starts ******************************  */
      
      .contactus{
        width: 100%;
        height: 100vh;
        padding: 80px 0;
        position: relative;
      }
      .contactus::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background: linear-gradient(330deg, #16c9f6 55%, #fff 0%);
      }
      .form-button button{
        border: 1px solid #50c1d0;
        border-radius: 100px;
        margin: 0 5px;
        padding: 12px 35px;
        outline: none;
        color: #50d1c0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4;
        text-align: center;
        background: transparent;
      }
      form:hover .form-button button{
        background: #fff;
        color: #50d1c0;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
      }
      ::placeholder{
        font-size: 0.85rem;
      }
       /* ********************* contact us ends ******************************  */
      
      /* ********************* newsletter starts ****************************** */
      
      .newsletter{
        width: 100%;
        height: auto;
        margin: 80px 0;
      }
      .newsletter-input{
        border-radius: 100px 0px 0px 100px!important;
        min-width: 150px;
        min-height: 45px;
      }
      .input-group-text{
        color: #fff!important;
        background: #5bc0de!important;
        border-radius: 0 100px 100px 0!important;
        min-width: 130px;
        min-height: 45px;
      }
      .input-group-text:hover{
        cursor: pointer;
        opacity: 0.8;
      }
      
      /* *********************  newsletter ends ****************************** */
      
      /* *********************  footer starts ****************************** */
      
      .footersection{
        width: 100%;
        height: auto;
        padding: 70px 0 20px 0;
        background: #00abff;
        position: relative;
      }
      .footersection p{
        color: #fff;
      }
      .footer-navlinks{
        text-align: center;
      }
      .footersection li a{
        font-size: 0.9rem;
        line-height: 1.6;
        font-weight: 400;
        color: #fff;
        text-transform: capitalize;
      }
      .footersection h3{
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 25px;
        font-size: 1.2rem!important;
        font-weight: 600;
        text-shadow: 0 2px 5px rgba(0,0,0,0.4);
      }
      #myBtn{
        /* display: none; */
        position: fixed;
        bottom: 20px;
        right: 40px;
        z-index: 10;
        border: none;
        color: #fff;
        background: #00abff;
        padding: 10px;
        border-radius: 10px;
      }
      #myBtn:hover{
        background: #606060;
      }
      /* *********************  footer ends ****************************** */
      
      
      /* ****************** Media Queries ********************** */
      @media (max-width: 768px) {
        .nav-item{
          text-align: center!important;
        }
        .pricing, .happyclients, .contactus{
          height: auto;
          margin-top: 50px;
        }
        .card-second{
          transform: translateY(0px);
          margin: 30px 0;
        }
        .contactus p{
          padding: 0 50px;
        }
        .footer-navlinks{
          text-align: left;
        }
        .footer-div{
          margin: 30px 0;
        }
      }
      </style>
    </head>
    <body>
      <div class="header" id="topheader">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="container text-uppercase p-2">
            <a class="navbar-brand font-weight-bold text-white" href="#">AniWeb</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#servicediv">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pricingdiv">Price</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#newsletterdiv">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contactdiv">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section class="header-section">
          <div class="center-div">
            <h1 class="font-weight-bold">We are the web developers</h1>
            <p>We creates the world best websites</p>
            <div class="header-buttons">
              <a href="#newsletterdiv">AboutUs</a>
              <a href="#contactdiv">ContactUs</a>
            </div>
          </div>
        </section>
      </div>
    
      <!-- ***************** header part end ************************** -->
    
      <!-- ********************* three extra header div starts ******************** -->
    
      <section class="header-extradiv">
        <div class="container">
          <div class="row">
            <div class="extradiv col-lg-4 col-md-4 col-12">
              <a href="#"><i class="fa-3x fa fa-desktop"></i></a>
              <h2>EASY TO USE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="extradiv col-lg-4 col-md-4 col-12">
              <a href="#"><i class="fa-3x fa fa-trophy"></i></a>
              <h2>AWESOME DESIGN</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="extradiv col-lg-4 col-md-4 col-12">
              <a href="#"><i class="fa-3x fa fa-magic"></i></a>
              <h2>EASY TO CUSTOMIZE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
      </section>
    
      <!-- ********************* three extra header div starts ******************** -->
    
      <!-- ********************* offer section starts ****************************** -->
    
      <section class="serviceoffers" id="servicediv">
        <div class="container headings text-center">
          <h1 class="text-center font-weight-bold">WHAT DO WE OFFER</h1>
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-10 offset-lg-0 offset-1">
              <div class="names my-3">
                <h1>HTML</h1>
                <div class="progress w-75">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">100%</div>
                </div>
              </div>
              <div class="names my-3">
                <h1>CSS</h1>
                <div class="progress w-75">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">90%</div>
                </div>
              </div>
              <div class="names my-3">
                <h1>JAVASCRIPT</h1>
                <div class="progress w-75">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">80%</div>
                </div>
              </div>
              <div class="names my-3">
                <h1>REACTJS</h1>
                <div class="progress w-75">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">50%</div>
                </div>
              </div>
              <div class="names my-3">
                <h1>NODEJS</h1>
                <div class="progress w-75">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">40%</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 servicediv">
              <div class="row">
                <div class="col-lg-2 col-2 service-icons">
                  <i class="fa-3x fa fa-desktop"></i>
                </div>
                <div class="col-lg-10 col-10">
                  <h2>Website Development</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-2 col-2 service-icons">
                  <i class="fa-3x fa fa-wifi"></i>
                </div>
                <div class="col-lg-10 col-10">
                  <h2>Digital Marketing</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-2 col-2 service-icons">
                  <i class="fa-3x fa fa-phone"></i>
                </div>
                <div class="col-lg-10 col-10">
                  <h2>Support 24/7</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- ********************* offer section ends ****************************** -->
    
      <!-- ********************* project (completed) starts ****************************** -->
    
      <section class="project-work">
        <div class="container headings text-center">
          <p class="text-center font-weight-bold">MORE THAN 2,000 WEBSITES CREATED</p>
        </div>
        <div class="container d-flex justify-content-around align-items-center text-center">
          <div>
            <h1 class="count">1500</h1>
            <p>CMS Installation</p>
          </div>
    
          <div>
            <h1 class="count">2500</h1>
            <p>Awards Won</p>
          </div>
    
          <div>
            <h1 class="count">700</h1>
            <p>Happy Clients</p>
          </div>
    
          <div>
            <h1 class="count">500</h1>
            <p>Working On</p>
          </div>
        </div>
      </section>
      <!-- ********************* project (completed) ends ****************************** -->
    
    
      <!-- ********************* our pricing start ****************************** -->
    
      <section class="pricing" id="pricingdiv">
        <div class="container headings text-center">
          <h1 class="text-center font-weight-bold text-white">OUR BEST PRICING</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="card text-center">
                <div class="card-header">BASIC</div>
                <div class="card-body">
                  <li>$<span class="money">20</span>/website</li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </div>
                <div class="card-footer">
                  <a href="#">Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12 card-second">
              <div class="card text-center">
                <div class="card-header">STANDARD</div>
                <div class="card-body">
                  <li>$<span class="money">40</span>/website</li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </div>
                <div class="card-footer">
                  <a href="#">Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card text-center">
                <div class="card-header">UNLIMITED</div>
                <div class="card-body">
                  <li>$<span class="money">60</span>/website</li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </div>
                <div class="card-footer">
                  <a href="#">Purchase</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ********************* our pricing end ****************************** -->
    
      <!-- ********************* our happy clients starts ****************************** -->
    
      <section class="happyclients">
        <div class="container headings text-center">
          <h1 class="text-center font-weight-bold">OUR HAPPY CLIENTS</h1>
          <p class="text-center text-captalize pt-1">Our Satisfied Customer Says</p>
        </div>
        <div id="demo" class="carousel slide" data-ride="carousel">
    
          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
    
          <!-- The slideshow -->
          <div class="carousel-inner container">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="box">
                    <a href="#"><img src="image/clients-thumb.jpg" class="img-fluid img-thumbnail"></a>
                    <p class="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>Anil Swami</h1>
                    <h2>Web Developer</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
    
        </div>
      </section>
    
    
      <!-- ********************* our happy clients end ****************************** -->
    
      <!-- ********************* contact us starts ****************************** -->
    
      <section class="contactus" id="contactdiv">
        <div class="container headings text-center">
          <h1 class="text-center font-weight-bold">CONTACT US</h1>
          <p class="text-center text-captalize pt-1">We're here to help and answer any question you might have. we look forward to hearing from you.</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
    
              <form action="/action_page.php">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Enter Your Name" id="username" autocomplete="off" required>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter Email" id="email" autocomplete="off" required>
                </div>
                <div class="form-group">
                  <input type="number" class="form-control" placeholder="Enter Mobile Number" id="mobile" autocomplete="off" required>
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="4" placeholder="Enter Your Message" id="comment"></textarea>
                </div>
                <div class="d-flex justify-content-center form-button">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
    
        </div>
      </section>
    
      <!-- ********************* contact us ends ****************************** -->
    
      <!-- ********************* newsletter starts ****************************** -->
    
      <section class="newsletter" id="newsletterdiv">
        <div class="container headings text-center">
          <h1 class="text-center font-weight-bold">SUBSCRIBE TO OUR NEWS LETTER</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-12 ">
              <div class="input-group mb-3">
                <input type="text" class="form-control newsletter-input" placeholder="Your Email">
                <div class="input-group-append">
                  <span class="input-group-text">Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ********************* newsletter ends ****************************** -->
    
    
      <!-- ********************* foter starts ****************************** -->
    
      <footer class="footersection" id="footerdiv">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 footer-div">
              <div>
                <h3>ABOUT ANIWEB</h3>
                <p>The world has become so fast paced that people don't want to stand by reading a page of information to be they would much rather look at a presentstion and understand the message.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 footer-div">
              <div class="footer-navlinks">
                <h3>NAVIGATION LINKS</h3>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Price</a></li>
                <li><a href="#">About</a></li>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12 footer-div">
              <div>
                <h3>NEWSLETTER</h3>
                <p>For business professionals caught between high OEM price and mediocre print and graphic output.</p>
                <div class="container newsletter-main">
                  <div class="row">
                    <div class="col-lg-12 col-12 ">
                      <div class="input-group mb-3">
                        <input type="text" class="form-control newsletter-input" placeholder="Your Email">
                        <div class="input-group-append">
                          <span class="input-group-text">Subscribe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p>Copyright &copy;2020 All rights reserved | This template is made with love by Anil Swami (www.aniweb.in)</p>
          </div>
          <div class="scrolltop float-right">
            <i class="fa fa-arrow-up" onclick="topFunction()" id="myBtn"></i>
          </div>
        </div>
      </footer>
    
      <!-- ********************* footer ends ****************************** -->
    
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" integrity="sha256-jDnOKIOq2KNsQZTcBTEnsp76FnfMEttF6AV2DF2fFNE=" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js" integrity="sha256-JtQPj/3xub8oapVMaIijPNoM0DHoAtgh/gwFYuN5rik=" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      <script type="text/javascript">
      $('.count').counterUp({
        delay:10,
        time:300
      })
      // Get the button:
      mybutton = document.getElementById("myBtn");
    
      //When the user scrolls down 20px from the top of the document, show the buttons
      window.onscroll = function() {scrollFunction()};
    
      function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      //When the user clicks on the button, scroll to the top of the document
      function topFunction(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
      </script>
    </body>
    </html>
    `,
  header: `
    <style>* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        text-decoration: none;
        list-style: none;
      }
      
      .header {
        position: sticky;
        top: 0;
        width: 100%;
        box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
        background-color: #151418;
        z-index: 1;
      }
      
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
      }
      
      .logo a {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
      }
      
      .logo a span {
        color: #8739fa;
      }
      
      .menu {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .menu a {
        display: block;
        padding: 7px 15px;
        font-size: 17px;
        font-weight: 500;
        transition: 0.2s all ease-in-out;
        color: #fff;
      }
      
      .menu:hover a {
        opacity: 0.4;
      }
      
      .menu a:hover {
        opacity: 1;
        color: #fff;
      }
      
      .menu-icon {
        display: none;
      }
      
      #menu-toggle {
        display: none;
      }
      
      #menu-toggle:checked ~ .menu {
        transform: scale(1, 1);
      }
      
      @media only screen and (max-width: 950px) {
        .menu {
          flex-direction: column;
          background-color: #151418;
          align-items: start;
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          z-index: 1;
          transform: scale(1, 0);
          transform-origin: top;
          transition: transform 0.3s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
      
        .menu a {
          margin-left: 12px;
        }
      
        .menu li {
          margin-bottom: 10px;
        }
      
        .menu-icon {
          display: block;
          color: #fff;
          font-size: 28px;
          cursor: pointer;
        }
      }
      </style><header class="header">
    <nav>
      <div class="logo">
        <a href="index.html">Humayun.<span>K</span></a>
      </div>
      <input type="checkbox" id="menu-toggle">
      <label for="menu-toggle" class="menu-icon">&#9776;</label>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Connect</a></li>
      </ul>
    </nav>
  </header>`,
  team: `<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <style>.row.heading h2 {
    color: #fff;
    font-size: 52.52px;
    line-height: 95px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 0px;
    padding-bottom: 20px;
    text-transform: uppercase;
}
ul{
  margin:0;
  padding:0;
  list-style:none;
}
.heading.heading-icon {
    display: block;
}
.padding-lg {
	display: block;
	padding-top: 60px;
	padding-bottom: 60px;
}
.practice-area.padding-lg {
    padding-bottom: 55px;
    padding-top: 55px;
}
.practice-area .inner{ 
     border:1px solid #999999; 
	 text-align:center; 
	 margin-bottom:28px; 
	 padding:40px 25px;
}
.our-webcoderskull .cnt-block:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    border: 0;
}
.practice-area .inner h3{ 
    color:#3c3c3c; 
	font-size:24px; 
	font-weight:500;
	font-family: 'Poppins', sans-serif;
	padding: 10px 0;
}
.practice-area .inner p{ 
    font-size:14px; 
	line-height:22px; 
	font-weight:400;
}
.practice-area .inner img{
	display:inline-block;
}


.our-webcoderskull{
  background: #111;
  
}
.our-webcoderskull .cnt-block{ 
   float:left; 
   width:100%; 
   background:#fff; 
   padding:30px 20px; 
   text-align:center; 
   border:2px solid #d5d5d5;
   margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
   width:148px; 
   height:148px; 
   border-radius:100%; 
   display:inline-block;
   margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{ 
   width:148px; 
   height:148px; 
   border-radius:100%; 
}
.our-webcoderskull .cnt-block h3{ 
   color:#2a2a2a; 
   font-size:20px; 
   font-weight:500; 
   padding:6px 0;
   text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
  text-decoration:none;
	color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
	color:#337ab7;
}
.our-webcoderskull .cnt-block p{ 
   color:#2a2a2a; 
   font-size:13px; 
   line-height:20px; 
   font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
	margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{ 
    display:inline-block; 
	width:auto; 
	margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{ 
   font-size:24px; 
   color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
   color:#025a8e;
}
</style>
  <!------ Include the above in your HEAD tag ---------->
  
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <section class="our-webcoderskull padding-lg">
    <div class="container">
      <div class="row heading heading-icon">
          <h2>Our Team</h2>
      </div>
      <ul class="row">
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Mohamed Yousef
  </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Mohamed Yousef
   </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Mohamed Yousef
   </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
         </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Mohamed Yousef
   </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </section>`,
  slider: `<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
body,h1,h2{font-family: "Raleway", sans-serif}
body, html {height: 100%}
p {line-height: 2}
.bgimg, .bgimg2 {
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
.bgimg { background: #333 url("https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ");}
.bgimg2 {background-image: url("https://www.w3schools.com/w3images/flowers.jpg")}
</style>
</head>
<body>

<!-- Header / Home-->
<header class="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
  <div class="w3-display-middle w3-text-white w3-center">
    <h1 class="w3-jumbo">Jane & John</h1>
    <h2>Are getting married</h2>
    <h2><b>17.07.2017</b></h2>
  </div>
</header>

<!-- Navbar (sticky bottom) -->
<div class="w3-bottom w3-hide-small">
  <div class="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
    <a href="#home" style="width:25%" class="w3-bar-item w3-button">Home</a>
    <a href="#us" style="width:25%" class="w3-bar-item w3-button">Jane & John</a>
    <a href="#wedding" style="width:25%" class="w3-bar-item w3-button">Wedding</a>
    <a href="#rsvp" style="width:25%" class="w3-bar-item w3-button w3-hover-black">RSVP</a>
  </div>
</div>

<!-- About / Jane And John -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min" id="us">
  <div class="w3-content">
    <h1 class="w3-center w3-text-grey"><b>Jane & John</b></h1>
    <img class="w3-round w3-grayscale-min" src="https://www.w3schools.com/w3images/wedding_couple2.jpg" style="width:100%;margin:32px 0">
    <p><i>You all know us. And we all know you. We are getting married lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.</i>
    </p><br>
    <p class="w3-center"><a href="#wedding" class="w3-button w3-black w3-round w3-padding-large w3-large">Wedding Details</a></p>
  </div>
</div>

<!-- Background photo -->
<div class="w3-display-container bgimg2">
  <div class="w3-display-middle w3-text-white w3-center">
    <h1 class="w3-jumbo">You Are Invited</h1><br>
    <h2>Of course..</h2>
  </div>
</div>

<!-- Wedding information -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="wedding">
  <div class="w3-content">
    <h1 class="w3-text-grey"><b>THE WEDDING</b></h1>
    <img class="w3-round-large w3-grayscale-min" src="https://www.w3schools.com/w3images/wedding_location.jpg" style="width:100%;margin:64px 0">
    <div class="w3-row">
      <div class="w3-half">
        <h2>When</h2>
        <p>Wedding Ceremony - 2:00pm</p>
        <p>Reception & Dinner - 5:00pm</p>
      </div>
      <div class="w3-half">
        <h2>Where</h2>
        <p>Some place, an address</p>
        <p>Some where, some address</p>
      </div>
    </div>
  </div>
</div>

<!-- RSVP section -->
<div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
  <h1>HOPE YOU CAN MAKE IT!</h1>
  <p class="w3-large">Kindly Respond By May, 2023</p>
  <p class="w3-xlarge">
    <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">RSVP</button>
  </p>
</div>

<!-- RSVP modal -->
<div id="id01" class="w3-modal">
  <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="padding:32px;max-width:600px">
    <div class="w3-container w3-white w3-center">
      <h1 class="w3-wide">CAN YOU COME?</h1>
      <p>We really hope you can make it.</p>
      <form>
        <input class="w3-input w3-border" type="text" placeholder="Name(s)" name="name">
      </form>
      <p><i>Sincerely, John & Jane</i></p>
      <div class="w3-row">
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-green">Going</button>
        </div>
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-red">Can't come</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-16">
  <p>Powered by <a href="" title="CSS" target="_blank" class="w3-hover-text-green">css</a></p>
</footer>
<div class="w3-hide-small" style="margin-bottom:32px"> </div>

</body>
</html>

  `,
  about: `<!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  .column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
  }
  
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
  }
  
  .about-section {
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .container::after, .row::after {
    content: "";
    clear: both;
    display: table;
  }
  
  .title {
    color: grey;
  }
  
  .button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }
  
  .button:hover {
    background-color: #555;
  }
  
  @media screen and (max-width: 650px) {
    .column {
      width: 100%;
      display: block;
    }
  }
  </style>
  </head>
  <body>
  
  <div class="about-section">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  
  <h2 style="text-align:center">Our Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
        <div class="container">
          <h2>Jane Doe</h2>
          <p class="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
        <div class="container">
          <h2>Mike Ross</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
    
    <div class="column">
      <div class="card">
        <img src="/w3images/team3.jpg" alt="John" style="width:100%">
        <div class="container">
          <h2>John Doe</h2>
          <p class="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  
  </body>
  </html>
  `,
  business: `<!DOCTYPE html>
  <html>
  <title>W3.CSS Template</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
  
  body, html {
    height: 100%;
    line-height: 1.8;
  }
  
  /* Full height image header */
  .bgimg-1 {
    background-position: center;
    background-size: cover;
    background: #333 url("https://www.w3schools.com/w3images/mac.jpg");
    min-height: 100%;
  }
  
  .w3-bar .w3-button {
    padding: 16px;
  }
  </style>
  <body>
  
  <!-- Navbar (sit on top) -->
  <div class="w3-top">
    <div class="w3-bar w3-white w3-card" id="myNavbar">
      <a href="#home" class="w3-bar-item w3-button w3-wide">LOGO</a>
      <!-- Right-sided navbar links -->
      <div class="w3-right w3-hide-small">
        <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
        <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
        <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
        <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>
        <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
      </div>
      <!-- Hide right-floated links on small screens and replace them with a menu icon -->
  
      <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
  
  <!-- Sidebar on small screens when clicking the menu icon -->
  <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
    <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT</a>
    <a href="#team" onclick="w3_close()" class="w3-bar-item w3-button">TEAM</a>
    <a href="#work" onclick="w3_close()" class="w3-bar-item w3-button">WORK</a>
    <a href="#pricing" onclick="w3_close()" class="w3-bar-item w3-button">PRICING</a>
    <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
  </nav>
  
  <!-- Header with full-height image -->
  <header class="w3-display-container w3-grayscale-min" id="home" style=background-image:url('https://www.w3schools.com/w3images/mac.jpg');>
    <div class="w3-display-left w3-text-white" style="padding:48px">
      <span class="w3-jumbo w3-hide-small">Start something that matters</span><br>
      <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br>
      <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
      <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
    </div> 
    <div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:24px 48px">
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
  </header>
  
  <!-- About Section -->
  <div class="w3-container" style="padding:128px 16px" id="about">
    <h3 class="w3-center">ABOUT THE COMPANY</h3>
    <p class="w3-center w3-large">Key features of our company</p>
    <div class="w3-row-padding w3-center" style="margin-top:64px">
      <div class="w3-quarter">
        <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
        <p class="w3-large">Responsive</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
      <div class="w3-quarter">
        <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
        <p class="w3-large">Passion</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
      <div class="w3-quarter">
        <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
        <p class="w3-large">Design</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
      <div class="w3-quarter">
        <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
        <p class="w3-large">Support</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
    </div>
  </div>
  
  <!-- Promo Section - "We know design" -->
  <div class="w3-container w3-light-grey" style="padding:128px 16px">
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>We know design.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore.</p>
        <p><a href="#work" class="w3-button w3-black"><i class="fa fa-th"> </i> View Our Works</a></p>
      </div>
      <div class="w3-col m6">
        <img class="w3-image w3-round-large" src="/w3images/phone_buildings.jpg" alt="Buildings" width="700" height="394">
      </div>
    </div>
  </div>
  
  <!-- Team Section -->
  <div class="w3-container" style="padding:128px 16px" id="team">
    <h3 class="w3-center">THE TEAM</h3>
    <p class="w3-center w3-large">The ones who runs this company</p>
    <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="/w3images/team2.jpg" alt="John" style="width:100%">
          <div class="w3-container">
            <h3>John Doe</h3>
            <p class="w3-opacity">CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
          </div>
        </div>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
          <div class="w3-container">
            <h3>Anja Doe</h3>
            <p class="w3-opacity">Art Director</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
          </div>
        </div>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="/w3images/team3.jpg" alt="Mike" style="width:100%">
          <div class="w3-container">
            <h3>Mike Ross</h3>
            <p class="w3-opacity">Web Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
          </div>
        </div>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="/w3images/team4.jpg" alt="Dan" style="width:100%">
          <div class="w3-container">
            <h3>Dan Star</h3>
            <p class="w3-opacity">Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Promo Section "Statistics" -->
  <div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
    <div class="w3-quarter">
      <span class="w3-xxlarge">14+</span>
      <br>Partners
    </div>
    <div class="w3-quarter">
      <span class="w3-xxlarge">55+</span>
      <br>Projects Done
    </div>
    <div class="w3-quarter">
      <span class="w3-xxlarge">89+</span>
      <br>Happy Clients
    </div>
    <div class="w3-quarter">
      <span class="w3-xxlarge">150+</span>
      <br>Meetings
    </div>
  </div>
  
  <!-- Work Section -->
  <div class="w3-container" style="padding:128px 16px" id="work">
    <h3 class="w3-center">OUR WORK</h3>
    <p class="w3-center w3-large">What we've done for people</p>
  
    <div class="w3-row-padding" style="margin-top:64px">
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_mic.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A microphone">
      </div>
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_phone.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A phone">
      </div>
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_drone.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A drone">
      </div>
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_sound.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Soundbox">
      </div>
    </div>
  
    <div class="w3-row-padding w3-section">
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_tablet.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A tablet">
      </div>
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_camera.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A camera">
      </div>
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_typewriter.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A typewriter">
      </div>
      <div class="w3-col l3 m6">
        <img src="/w3images/tech_tableturner.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="A tableturner">
      </div>
    </div>
  </div>
  
  <!-- Modal for full size images on click-->
  <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
    <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" class="w3-image">
      <p id="caption" class="w3-opacity w3-large"></p>
    </div>
  </div>
  
  <!-- Skills Section -->
  <div class="w3-container w3-light-grey w3-padding-64">
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <h3>Our Skills.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
        tempor incididunt ut labore et dolore.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
        tempor incididunt ut labore et dolore.</p>
      </div>
      <div class="w3-col m6">
        <p class="w3-wide"><i class="fa fa-camera w3-margin-right"></i>Photography</p>
        <div class="w3-grey">
          <div class="w3-container w3-dark-grey w3-center" style="width:90%">90%</div>
        </div>
        <p class="w3-wide"><i class="fa fa-desktop w3-margin-right"></i>Web Design</p>
        <div class="w3-grey">
          <div class="w3-container w3-dark-grey w3-center" style="width:85%">85%</div>
        </div>
        <p class="w3-wide"><i class="fa fa-photo w3-margin-right"></i>Photoshop</p>
        <div class="w3-grey">
          <div class="w3-container w3-dark-grey w3-center" style="width:75%">75%</div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Pricing Section -->
  <div class="w3-container w3-center w3-dark-grey" style="padding:128px 16px" id="pricing">
    <h3>PRICING</h3>
    <p class="w3-large">Choose a pricing plan that fits your needs.</p>
    <div class="w3-row-padding" style="margin-top:64px">
      <div class="w3-third w3-section">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-black w3-xlarge w3-padding-32">Basic</li>
          <li class="w3-padding-16"><b>10GB</b> Storage</li>
          <li class="w3-padding-16"><b>10</b> Emails</li>
          <li class="w3-padding-16"><b>10</b> Domains</li>
          <li class="w3-padding-16"><b>Endless</b> Support</li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">$ 10</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-black w3-padding-large">Sign Up</button>
          </li>
        </ul>
      </div>
      <div class="w3-third">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-red w3-xlarge w3-padding-48">Pro</li>
          <li class="w3-padding-16"><b>25GB</b> Storage</li>
          <li class="w3-padding-16"><b>25</b> Emails</li>
          <li class="w3-padding-16"><b>25</b> Domains</li>
          <li class="w3-padding-16"><b>Endless</b> Support</li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">$ 25</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-black w3-padding-large">Sign Up</button>
          </li>
        </ul>
      </div>
      <div class="w3-third w3-section">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-black w3-xlarge w3-padding-32">Premium</li>
          <li class="w3-padding-16"><b>50GB</b> Storage</li>
          <li class="w3-padding-16"><b>50</b> Emails</li>
          <li class="w3-padding-16"><b>50</b> Domains</li>
          <li class="w3-padding-16"><b>Endless</b> Support</li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">$ 50</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-black w3-padding-large">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- Contact Section -->
  <div class="w3-container w3-light-grey" style="padding:128px 16px" id="contact">
    <h3 class="w3-center">CONTACT</h3>
    <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
    <div style="margin-top:48px">
      <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Chicago, US</p>
      <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
      <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
      <br>
      <form action="/action_page.php" target="_blank">
        <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"></p>
        <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"></p>
        <p>
          <button class="w3-button w3-black" type="submit">
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
      <!-- Image of location/map -->
      <img src="https://www.w3schools.com/w3images/map.jpg" class="w3-image w3-greyscale" style="width:100%;margin-top:48px">
    </div>
  </div>
  
  <!-- Footer -->
  <footer class="w3-center w3-black w3-padding-64">
    <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
    <div class="w3-xlarge w3-section">
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
  </footer>
   
  <script>
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  </script>
  
  </body>
  </html>
  `,
  carousel: `<!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <style>html {
    height: 100%;
  }
  
  body {
    height: 100%;
    color: #5a5a5a;
  }
  
  /* CUSTOMIZE THE NAVBAR
  -------------------------------------------------- */
  
  /* Special class on .container surrounding .navbar, used for positioning it into place. */
  .navbar-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 20;
  }
  
  /* Flip around the padding for proper display in narrow viewports */
  .navbar-wrapper > .container {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-wrapper .navbar {
    padding-right: 15px;
    padding-left: 15px;
  }
  .navbar-wrapper .navbar .container {
    width: auto;
  }
  
  .navbar-nav>li>a, .navbar-brand {
    color: #fff;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  
  .nav>li>a:focus, .nav>li>a:hover {
    background-color: rgba(199, 199, 199, 0.4) !important;
    border-radius: 5px;
  }
  
  
  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */
  
  /* Carousel base class */
  .carousel {
    margin-bottom: 60px;
  }
  
  .carousel, .carousel .item, .carousel .item .active, .carousel-inner { 
    height:100%;
  }
  
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    z-index: 10;
  }
  
  .carousel-inner {
    height:100%;
  }
  
  /* Declare heights */
  .carousel .item {
    height:100%;
  }
  
  .carousel .fill { 
    width:100%;
    height:100%;
    background-size:cover;
    background-position: center center;
  }
  
  .carousel .first-slide {
    background-image:url("https://mdbcdn.b-cdn.net/img/new/slides/043.webp")
  }
  
  .carousel .second-slide {
    background-image:url("https://mdbcdn.b-cdn.net/img/new/slides/043.webp")
  }
  
  .carousel .third-slide {
    background-image:url("https://mdbcdn.b-cdn.net/img/new/slides/043.webp")
  }
  
  
  /* MARKETING CONTENT
  -------------------------------------------------- */
  
  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 20px;
    text-align: center;
  }
  .marketing h2 {
    font-weight: normal;
  }
  .marketing .col-lg-4 p {
    margin-right: 10px;
    margin-left: 10px;
  }
  
  
  /* Featurettes
  ------------------------- */
  
  .featurette-divider {
    margin: 80px 0; /* Space out the Bootstrap <hr> more */
  }
  
  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -1px;
  }
  
  
  /* RESPONSIVE CSS
  -------------------------------------------------- */
  
  @media (min-width: 768px) {
    /* Navbar positioning foo */
    .navbar-wrapper {
      margin-top: 20px;
    }
    .navbar-wrapper .container {
      padding-right: 15px;
      padding-left: 15px;
    }
    .navbar-wrapper .navbar {
      padding-right: 0;
      padding-left: 0;
    }
  
    /* The navbar becomes detached from the top, so we round the corners */
    .navbar-wrapper .navbar {
      border-radius: 4px;
    }
  
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 20px;
      font-size: 21px;
      line-height: 1.4;
    }
  
    .featurette-heading {
      font-size: 50px;
    }
  }
  
  @media (min-width: 992px) {
    .featurette-heading {
      margin-top: 120px;
    }
  }</style>
  <body>
    <div class="navbar-wrapper">
      <div class="container">
  
        <nav class="navbar navbar-light navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
      </div>
    </div>
  
  
    <!-- Carousel
      ================================================== -->
    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="fill first-slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>Example headline.</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="fill second-slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="fill third-slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- /.carousel -->
  
  
    <!-- Marketing messaging and featurettes
      ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
  
    <div class="container marketing">
  
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <img class="img-circle" src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="Generic placeholder image" width="140" height="140">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="img-circle" src="https://mdbcdn.b-cdn.net/img/new/slides/044.webp" alt="Generic placeholder image" width="140" height="140">
          <h2>Heading</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="img-circle" src="https://mdbcdn.b-cdn.net/img/new/slides/045.webp" alt="Generic placeholder image" width="140" height="140">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->
  
  
      <!-- START THE FEATURETTES -->
  
      <hr class="featurette-divider">
  
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
        </div>
      </div>
  
      <hr class="featurette-divider">
  
      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
        </div>
      </div>
  
      <hr class="featurette-divider">
  
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
        </div>
      </div>
  
      <hr class="featurette-divider">
  
      <!-- /END THE FEATURETTES -->
  
  
      <!-- FOOTER -->
      <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2017 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
  
    </div>
    <!-- /.container -->
  <script>$(document).ready(function(event) {
    var top_header = $(".carousel .fill");
  
    $(window).scroll(function() {
      var st = $(this).scrollTop();
      top_header.css({
        "background-position": "center calc(50% + " + st * 0.8 + "px)"
      });
    });
  });
  </script>
  
    <!-- Bootstrap core JavaScript
      ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <script src="https://getbootstrap.com/docs/3.3/assets/js/vendor/holder.min.js"></script>
  </body>`,
};

export default Templates;
