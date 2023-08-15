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
import Templates from "./Templates";
import Disabled from "../main/Disabled";

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
        allowScripts: 1,
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

      const initialTemplates = Templates.myTemplate;
      editor.setComponents(initialTemplates); // Set initial template HTML

      editor.BlockManager.add("portfolio", {
        label: "Portfolio Template",
        // media: ``,
        content: Templates.portfolio,
      });

      editor.BlockManager.add("header", {
        label: "Header",
        // media: ``,
        content: Templates.header,
      });
      editor.BlockManager.add("about", {
        label: "About",
        // media: ``,
        content: Templates.about,
      });
      editor.BlockManager.add("team", {
        label: "Cards",
        // media: ``,
        content: Templates.team,
      });
      editor.BlockManager.add("carousel", {
        label: " Carsousel Template",
        // media: ``,
        content: Templates.carousel,
      });
      editor.BlockManager.add("template1", {
        label: "Template",
        // media: ``,
        content: Templates.template1,
      });
      editor.BlockManager.add("wedding", {
        label: "Wedding Template",
        // media: ``,
        content: Templates.slider,
      });

      editor.BlockManager.add("business", {
        label: "Business Template",
        // media: ``,
        content: Templates.business,
      });
      editor.BlockManager.add("my-template", {
        label: "Music Template",
        // media: ``,
        content: Templates.myTemplate,
      });
      editor.on("storage:load", () => {
        // Triggered when data is loaded from the storage
        setWebpageData(webpageData); // Save the loaded data
      });

      setEditor(editor);
      setPluginLoaded(true);
    } else if (webpageData && editor) {
      // Set the user's webpage data as the initial content in the editor
      if (webpageData.data) {
        editor.setComponents(webpageData.data.html);
        editor.setStyle(webpageData.data.css);
        // editor.setComponents(webpageData.data.js);
      }
    }
  }, [pluginLoaded, webpageData]);

  const saveToDB = async () => {
    if (!webpageData) {
      console.log("No webpage data available");
      return;
    }
    const shouldSave = window.confirm(
      "Do you want to save the webpage data and make it live?"
    );

    if (!shouldSave) {
      console.log("Webpage data not saved");
      return;
    }
    // Update the expiryDate to the current date plus 5 minutes
    const newExpiryDate = new Date();
    newExpiryDate.setMinutes(newExpiryDate.getMinutes() + 2);
    const response = await fetch(url + "/webpage/update/" + webpageData._id, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          html: editor.getHtml(),
          css: editor.getCss(),
          js: editor.getJs(),
          editorData: webpageData,
        },
        expiryDate: newExpiryDate, // Update the expiryDate
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
      {/* <div style={{ textAlign: "center", margin: "20px" }}>
        {webpageData && webpageData.data ? (
          new Date() < new Date(webpageData.expiryDate) ? (
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
            <Disabled />
          )
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
      </div> */}
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
