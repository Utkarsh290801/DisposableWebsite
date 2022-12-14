import React, { useEffect, useState } from "react";
//import 'grapesjs/dist/css/grapes.min.css';
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
import { useNavigate, useParams } from "react-router-dom";
// import {TablePluginRef} from "./Table/consts";
// import addTablePlugin from './Table';
// import { ChartPluginRef } from "./Chart/consts";
// import addChartPlugin from './Chart';

const WebBuilder = () => {
  const navigate = useNavigate();
  const url = app_config.backend_url;
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [webpageData, setWebpageData] = useState(null);
  let e;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const saveToDB = async () => {
    console.log();
    // const SubmitWebpage = async (values) => {
    //   values.user = currentUser._id;
    //   console.log(values);
    // }
    const response = await fetch(url + "/webpage/update/" + webpageData._id, {
      method: "PUT",
      body: JSON.stringify({
        data: editor.getProjectData(),
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    }
    // };
  };

  useEffect(() => {
    if (!pluginLoaded) {
      // addTablePlugin();
      // addChartPlugin();
      setPluginLoaded(true);
    } else if (!editor) {
      e = grapesjs.init({
        // color:'white',
        height: "100vh",
        width: "auto",

        container: "#gjs",
        fromElement: true,
        plugins: [gsWebpage, gsCustome, gsTap, Basics, BaseReactComponent],
        storageManager: {
          id: "gjs-",
          type: "local",
          urlStore:
            "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
          urlLoad:
            "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
          // autosave: true,
          // autoload: true,
          contentTypeJson: true,
          storeComponents: true,
          allowScripts: 1,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
        pluginsOpts: {
          "grapesjs-preset-webpage": {
            blocksBasicOpts: {
              blocks: [
                "column1",
                "column2",
                "column3",
                "column3-7",
                "text",
                "link",
                "image",
                "video",
              ],
              flexGrid: 1,
            },
            blocks: [
              {
                id: "section", // id is mandatory
                label: "<b>Section</b>", // You can use HTML/SVG inside labels
                attributes: { class: "gjs-block-section" },
                content: `<section>
                      <h1>This is a simple title</h1>
                      <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                    </section>`,
              },
              {
                id: "text",
                label: "Text",
                content:
                  '<div data-gjs-type="text">Insert your text here</div>',
              },
              {
                id: "image",
                label: "Image",
                // Select the component once it's dropped
                select: true,
                // You can pass components as a JSON instead of a simple HTML string,
                // in this case we also use a defined component type `image`
                content: { type: "image" },
                // This triggers `active` event on dropped components and the `image`
                // reacts by opening the AssetManager
                activate: true,
              },
            ],
          },
        },
      });
      fetch(url + "/webpage/getbyuser/" + currentUser._id)
        .then((res) => res.json())
        .then((webpage) => {
          console.log(webpage);
          setWebpageData(webpage);
          if (webpage.data) e.loadProjectData(webpage.data);
          setEditor(e);
        });
    }
  });

  return (
    <div>
      {Boolean(webpageData) && (
        <a
          className="btn btn-link"
          target="_blank"
          href={"/live/" + webpageData._id}
        >
          Visit Live Page
        </a>
      )}

      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(editor.getProjectData());
          saveToDB();
        }}
      >
        Save
      </button>
      <div id="gjs" className="h"></div>
      <div id="blocks"></div>
    </div>
  );
};

export default WebBuilder;
