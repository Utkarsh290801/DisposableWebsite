


//  *********************************************************************************************************************************************************************************************************


//                         It is also working page 




//         its route is   http://localhost:3000/user/webb











import React, { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-webpage";
import gsCustome from "grapesjs-custom-code";
import "grapesjs-preset-webpage/dist";
import gsTap from "grapesjs-tabs";
import Basics from "grapesjs-blocks-basic";
import BaseReactComponent from "./base-react-component";
import app_config from "../../config";

const WebBuild = () => {
  const url = app_config.backend_url;
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [webpageData, setWebpageData] = useState(null);
  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (!pluginLoaded) {
      const editor = grapesjs.init({
        container: "#gjs",
        fromElement: true,
        height: "100vh",
        width: "auto",
        storageManager: false, // Disable storage manager for simplicity
        plugins: [gsWebpage, gsCustome, gsTap, Basics, BaseReactComponent],
        pluginsOpts: {
          gsWebpage: {
            /* options */
          },
          gsCustomCode: {
            /* options */
          },
          gsTap: {
            /* options */
          },
          // ...other plugins options
        },
      });

      const myTemplate = `<!DOCTYPE html>
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
    <h1>Тезис</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
    <a href="#section-b" class="btn">Узнать больше</a>
  </div>
</header>

<main id="main">
  <section id="section-a" class="grid">
    <div class="content-wrap">
      <h2 class="content-title"> Возможности</h2>
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
            <h3 class="card-title">Услуга 1</h3>
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
            <h3 class="card-title">Услуга 2</h3>
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
            <h3 class="card-title">Услуга 3</h3>
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
      <h2 class="content-title">О Нас</h2>
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
      <h2 class="content-title">Контакт мэйл.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>email@email.com</p>
    </div>
    <div class="box">
      <h2 class="content-title">Другие контакты</h2>
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
  <div>Другие контакты</div>
  <div>Другие контакты&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://vk.com/id482402398">Danil</a></div>
</footer>
      </body>
      </html>
      `;
      editor.setComponents(myTemplate); // Set initial template HTML

      editor.on("storage:load", () => {
        // Triggered when data is loaded from the storage
        setWebpageData(webpageData); // Save the loaded data
      });

      setEditor(editor);
      setPluginLoaded(true);
    }
  }, [pluginLoaded]);

  const saveToDB = async () => {
    if (!webpageData) {
      console.log("No webpage data available");
      return;
    }

    const response = await fetch(url + "/webpage/update/" + webpageData._id, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          html: editor.getHtml(),
          css: editor.getCss(),
          js: editor.getJs(),
          editorData: webpageData,
        },
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      console.log("Webpage data saved successfully");
    }
  };

  const fetchWebpageData = async () => {
    const res = await fetch(url + "/webpage/getbyuser/" + currentUser._id);
    const data = await res.json();
    setWebpageData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWebpageData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        {/* {Boolean(webpageData) ? (
          <a
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#333",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "background-color 0.3s ease",
            }}
            target="_blank"
            href={"/live/" + webpageData._id}
          >
            Visit Live Page
          </a>
        ) : (
          <p
            style={{
              fontSize: "18px",
              color: "#ff0000",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Webpage is not live. Save it first.
          </p>
        )} */}
        {webpageData && webpageData.data ? (
          <a
            style={{
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#333",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "background-color 0.3s ease",
            }}
            target="_blank"
            href={"/live/" + webpageData._id}
          >
            Visit Live Page
          </a>
        ) : (
          <p
            style={{
              fontSize: "18px",
              color: "#ff0000",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {webpageData && webpageData.data
              ? "Webpage is not live. Save it first."
              : "No live page. "}
          </p>
        )}
      </div>

      <div
        id="gjs"
        style={{
          height: "100vh",
          width: "100%",
        }}
      ></div>

      <button
        style={{
          display: "block",
          margin: "0 auto",
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#333",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
          transition: "background-color 0.3s ease",
        }}
        onClick={saveToDB}
      >
        {Boolean(webpageData) ? "Save" : "Update"}
      </button>
    </div>
  );
};
export default WebBuild;
