// import React, { useEffect, useState } from "react";
// import "grapesjs/dist/css/grapes.min.css";
// import grapesjs from "grapesjs";
// // import 'grapesjs-some-plugin';
// import "./WebBuild.css";
// const WebBuild = () => {
//   const [editor, setEditor] = useState(null);

//   useEffect(() => {
//     setEditor(
//       grapesjs.init({
//         // Indicate where to init the editor. You can also pass an HTMLElement
//         container: "#gjs",
//         // Get the content for the canvas directly from the element
//         // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
//         components: "<h1>Hello World Component!</h1>",
//         fromElement: true,
//         // Size of the editor
//         height: "500px",
//         width: "auto",
//         // Disable the storage manager for the moment
//         storageManager: false,
//         // Avoid any default panel
//         layerManager: {
//           appendTo: ".layers-container",
//         },
//         // We define a default panel as a sidebar to contain layers
//         panels: {
//           defaults: [
//             {
//               id: "layers",
//               el: ".panel__right",
//               // Make the panel resizable
//               resizable: {
//                 maxDim: 350,
//                 minDim: 200,
//                 tc: 0, // Top handler
//                 cl: 1, // Left handler
//                 cr: 0, // Right handler
//                 bc: 0, // Bottom handler
//                 // Being a flex child we need to change `flex-basis` property
//                 // instead of the `width` (default)
//                 keyWidth: "flex-basis",
//               },
//             },
//             {
//               id: "panel-switcher",
//               el: ".panel__switcher",
//               buttons: [
//                 {
//                   id: "show-layers",
//                   active: true,
//                   label: "Layers",
//                   command: "show-layers",
//                   // Once activated disable the possibility to turn it off
//                   togglable: false,
//                 },
//                 {
//                   id: "show-style",
//                   active: true,
//                   label: "Styles",
//                   command: "show-styles",
//                   togglable: false,
//                 },
//                 {
//                   id: "show-traits",
//                   active: true,
//                   label: "Traits",
//                   command: "show-traits",
//                   togglable: false,
//                 },
//               ],
//             },
//             {
//               id: "panel-devices",
//               el: ".panel__devices",
//               buttons: [
//                 {
//                   id: "device-desktop",
//                   label: "D",
//                   command: "set-device-desktop",
//                   active: true,
//                   togglable: false,
//                 },
//                 {
//                   id: "device-mobile",
//                   label: "M",
//                   command: "set-device-mobile",
//                   togglable: false,
//                 },
//               ],
//             },
//           ],
//         },
//         deviceManager: {
//           devices: [
//             {
//               name: "Desktop",
//               width: "", // default size
//             },
//             {
//               name: "Mobile",
//               width: "320px", // this value will be used on canvas width
//               widthMedia: "480px", // this value will be used in CSS @media
//             },
//           ],
//         },
//         traitManager: {
//           appendTo: ".traits-container",
//         },
//         blockManager: {
//           appendTo: "#blocks",
//           blocks: [
//             {
//               id: "section", // id is mandatory
//               label: "<b>Section</b>", // You can use HTML/SVG inside labels
//               attributes: { class: "gjs-block-section" },
//               content: `<section>

//               <h1>This is a simple title</h1>
//                           <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
//                         </section>`,
//             },
//             {
//               id: "text",
//               label: "Text",
//               content: '<div data-gjs-type="text">Insert your text here</div>',
//             },
//             {
//               id: "image",
//               label: "Image",
//               // Select the component once it's dropped
//               select: true,
//               // You can pass components as a JSON instead of a simple HTML string,
//               // in this case we also use a defined component type `image`
//               content: { type: "image" },
//               // This triggers `active` event on dropped components and the `image`
//               // reacts by opening the AssetManager
//               activate: true,
//             },
//           ],
//         },
//         // The Selector Manager allows to assign classes and
//         // different states (eg. :hover) on components.
//         // Generally, it's used in conjunction with Style Manager
//         // but it's not mandatory
//         selectorManager: {
//           appendTo: ".styles-container",
//         },
//         styleManager: {
//           appendTo: ".styles-container",
//           sectors: [
//             {
//               name: "Dimension",
//               open: false,
//               // Use built-in properties
//               buildProps: [
//                 "width",
//                 "min-height",
//                 "padding",
//                 "margin",
//                 "height",
//                 "display",
//                 "position",
//               ],
//               // Use `properties` to define/override single property
//               properties: [
//                 {
//                   // Type of the input,
//                   // options: integer | radio | select | color | slider | file | composite | stack
//                   type: "integer",
//                   name: "The width", // Label for the property
//                   property: "width", // CSS property (if buildProps contains it will be extended)
//                   units: ["px", "%"], // Units, available only for 'integer' types
//                   defaults: "auto", // Default value
//                   min: 0, // Min value, available only for 'integer' types
//                 },
//               ],
//             },
//             {
//               name: "Extra",
//               open: false,
//               buildProps: ["background-color", "box-shadow", "custom-prop"],
//               properties: [
//                 {
//                   id: "custom-prop",
//                   name: "Custom Label",
//                   property: "font-size",
//                   type: "select",
//                   defaults: "32px",
//                   // List of options, available only for 'select' and 'radio'  types
//                   options: [
//                     { value: "12px", name: "Tiny" },
//                     { value: "18px", name: "Medium" },
//                     { value: "32px", name: "Big" },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       })
//     );
//     editor.Panels.addPanel({
//       id: "panel-top",
//       el: ".panel__top",
//     });
//     editor.Panels.addPanel({
//       id: "basic-actions",
//       el: ".panel__basic-actions",
//       buttons: [
//         {
//           id: "visibility",
//           active: true, // active by default
//           className: "btn-toggle-borders",
//           label: "<u>B</u>",
//           command: "sw-visibility", // Built-in command
//         },
//         {
//           id: "export",
//           className: "btn-open-export",
//           label: "Exp",
//           command: "export-template",
//           context: "export-template", // For grouping context of buttons from the same panel
//         },
//         {
//           id: "show-json",
//           className: "btn-show-json",
//           label: "JSON",
//           context: "show-json",
//           command(editor) {
//             editor.Modal.setTitle("Components JSON")
//               .setContent(
//                 `<textarea style="width:100%; height: 250px;">
//                 ${JSON.stringify(editor.getComponents())}
//               </textarea>`
//               )
//               .open();
//           },
//         },
//       ],
//     });
//     // Define commands
//     editor.Commands.add("show-layers", {
//       getRowEl(editor) {
//         return editor.getContainer().closest(".editor-row");
//       },
//       getLayersEl(row) {
//         return row.querySelector(".layers-container");
//       },

//       run(editor, sender) {
//         const lmEl = this.getLayersEl(this.getRowEl(editor));
//         lmEl.style.display = "";
//       },
//       stop(editor, sender) {
//         const lmEl = this.getLayersEl(this.getRowEl(editor));
//         lmEl.style.display = "none";
//       },
//     });
//     editor.Commands.add("show-styles", {
//       getRowEl(editor) {
//         return editor.getContainer().closest(".editor-row");
//       },
//       getStyleEl(row) {
//         return row.querySelector(".styles-container");
//       },

//       run(editor, sender) {
//         const smEl = this.getStyleEl(this.getRowEl(editor));
//         smEl.style.display = "";
//       },
//       stop(editor, sender) {
//         const smEl = this.getStyleEl(this.getRowEl(editor));
//         smEl.style.display = "none";
//       },
//     });
//     // Define command
//     // ...
//     editor.Commands.add("show-traits", {
//       getTraitsEl(editor) {
//         const row = editor.getContainer().closest(".editor-row");
//         return row.querySelector(".traits-container");
//       },
//       run(editor, sender) {
//         this.getTraitsEl(editor).style.display = "";
//       },
//       stop(editor, sender) {
//         this.getTraitsEl(editor).style.display = "none";
//       },
//     });
//     // Commands
//     editor.Commands.add("set-device-desktop", {
//       run: (editor) => editor.setDevice("Desktop"),
//     });
//     editor.Commands.add("set-device-mobile", {
//       run: (editor) => editor.setDevice("Mobile"),
//     });
//   }, []);

//   return (
//     <div>
//       <div class="panel__top">
//         <div class="panel__basic-actions"></div>
//         <div class="panel__devices"></div>
//         <div class="panel__switcher"></div>
//       </div>

//       <div class="editor-row">
//         <div class="editor-canvas">
//           <div id="gjs">
//             <h1>Hello World Component!</h1>
//           </div>
//         </div>
//         <div class="panel__right">
//           <div class="layers-container"></div>
//           <div class="styles-container"></div>
//           <div class="traits-container"></div>
//         </div>
//       </div>
//       <div id="blocks"></div>
//     </div>
//   );
// };

// export default WebBuild;
// import React, { useState } from "react";

// const templates = [
//   { id: 1, name: "Template 1", content: ["Header", "Paragraph", "Image"] },
//   { id: 2, name: "Template 2", content: ["Header", "Paragraph", "Image", "Paragraph"] },
//   { id: 3, name: "Template 3", content: ["Header", "Paragraph", "Image", "Image"] }
// ];

// const App = () => {
//   const [elements, setElements] = useState([]);

//   const handleAddElement = element => {
//     setElements([...elements, element]);
//   };

//   const handleAddTemplate = template => {
//     setElements([...elements, ...template.content]);
//   };

// return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "20%", backgroundColor: "lightgray" }}>
//         <h3>Elements</h3>
//         <button onClick={() => handleAddElement("Header")}>Add Header</button>
//         <button onClick={() => handleAddElement("Paragraph")}>
//           Add Paragraph
//         </button>
//         <button onClick={() => handleAddElement("Image")}>Add Image</button>
//         <hr />
//         <h3>Templates</h3>
//         {templates.map(template => (
//           <button key={template.id} onClick={() => handleAddTemplate(template)}>
//             {template.name}
//           </button>
//         ))}
//       </div>
//       <div style={{ width: "80%", backgroundColor: "lightblue" }}>
//         {elements.map((element, index) => (
//           <div key={index}>{element}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useRef, useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";

const templates = [
  {
    name: "Template 1",
    html: `<h1>Template 1</h1><p>This is template 1</p>`,
    css: `h1{color: red;} p{color: blue;}`,
  },
  {
    name: "Template 2",
    html: `<h1>Template 2</h1><p>This is template 2</p>`,
    css: `h1{color: green;} p{color: yellow;}`,
  },
];

const WebsiteBuilder = () => {
  const editorRef = useRef(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!selectedTemplate) {
      return;
    }
    const newEditor = grapesjs.init({
      container: editorRef.current,
      components: selectedTemplate.html,
      style: selectedTemplate.css,
    });

    setEditor(newEditor);

    return () => {
      newEditor.destroy();
    };
  }, [selectedTemplate]);

  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
    if (editor) {
      editor.destroy();
    }
  };

  return (
    <>
      <div>
        {templates.map((template) => (
          <button
            key={template.name}
            onClick={() => handleTemplateSelection(template)}
          >
            {template.name}
          </button>
        ))}
      </div>
      <div ref={editorRef} />
    </>
  );
};

export default WebsiteBuilder;
