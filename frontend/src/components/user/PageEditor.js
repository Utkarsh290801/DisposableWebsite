import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import { Link, useNavigate } from "react-router-dom";
import app_config from "../../config";
import blocks from 'grapesjs-blocks-basic';
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";

const PageEditor = () => {
  const url = app_config.backend_url;

  const navigate = useNavigate();

  const editorContainer = useRef(null);
  const editor = useRef(null);

  const [pluginLoaded, setPluginLoaded] = useState(false);
  // const [editor, setEditor] = useState(null);
  const [webpageData, setWebpageData] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const saveToDB = async () => {
    // const html = editor.current.getHtml();
    // console.log(editor.current.getCss());
    // console.log(html);
    return;
    const response = await fetch(url + "/webpage/update/" + webpageData._id, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          html: editor.getHtml(),
          css: editor.getCss(),
          js: editor.getJs(),
        },
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

  const fetchPageData = () => {
    fetch(url + "/webpage/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((webpage) => {
        console.log(webpage);
        setWebpageData(webpage);
        // if (webpage.data) e.loadProjectData(webpage.data);
        // setEditor(e);
      });
  };

  useEffect(() => {
    console.log(grapesjs);
    editor.current =  grapesjs.init({
      container: editorContainer.current,
      // container: '#cool',
      // Add your desired grapes.js configuration options here
      draggable: true,
      plugins: [blocks],
      fromElement: true,
      components: [
        {
          type: 'text',
          content: '<h1>Hello, World!</h1>'
        },
        {
          type: 'image',
          src: 'https://picsum.photos/200'
        }
      ]
    });

    // return () => {
    //   editor.current.destroy();
    // };
  }, []);

  return (
    <div>
      ckn
      <div>
        {Boolean(webpageData) && (
          <Link
            className="btn btn-link"
            target="_blank"
            href={"/live/" + webpageData._id}
          >
            do not Visit Live Pagw
          </Link>
        )}

        <button className="btn btn-primary" onClick={saveToDB}>
          Save
        </button>
        <div ref={editorContainer} id="cool" />
      </div>
    </div>
  );
};

export default PageEditor;
