import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";
import compList from "./CompList";

const WebpageManager = () => {
  const [webpageData, setwebpageData] = useState([]);
  const [selComponent, setSelComponent] = useState(null);
  const [selIndex, setSelIndex] = useState(null);
  const [pageInfo, setPageInfo] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [assets, setAssets] = useState([]);
  const [assetLoading, setAssetLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selText, setSelText] = useState("");
  console.log(currentUser);

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/asset/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setAssets(data);
          setAssetLoading(false);
        });
      }
    });
  };

  const createComponent = (component, i) => {
    if (component.tag === "img") {
      console.log(component.src);
      return React.createElement(component.tag, {
        src: url + "/uploads/" + component.src,
        class: component.classes.join(" "),
        onClick: () => {
          setSelComponent(component);
          setSelIndex(i);
        },
      });
    }

    if (component.tag === "a") {
      console.log("component.a");
      return React.createElement(
        component.tag,
        {
          href: component.href,
          target: "_blank",
          class: component.classes.join(" "),
          onClick: () => {
            setSelComponent(component);
            setSelIndex(i);
          },
        },
        [component.children]
      );
    }

    return React.createElement(
      component.tag,
      {
        class: component.classes.join(" "),
        onClick: () => {
          setSelComponent(component);
          setSelIndex(i);
        },
      },
      [component.children]
    );
  };

  const loadSavedPage = () => {
    fetch(url + "/webpage/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setPageInfo(data);
          setPageLoading(false);
          setwebpageData(data.data);
        });
      }
    });
  };

  useEffect(() => {
    loadSavedPage();
    fetchData();
  }, []);

  const [componentList, setComponentList] = useState(compList);
  console.log(compList);

  const renderJSX = (components) => {
    console.log(components);
    return components.map(
      ({ name, classes, tag, content, children, src, href }, i) => {
        if (content) {
          return createComponent(
            {
              name,
              classes,
              tag,
              src,
              href,
              ...{ children: content },
            },
            i
          );
        } else if (tag === "img") {
          return createComponent(
            {
              name,
              classes,
              tag,
              src,
            },
            i
          );
        } else if (children) {
          console.log(renderJSX(children));
          const obj = {
            name: name,
            classes: classes,
            tag: tag,
            src: src,
            href: href,
            children: renderJSX(children),
          };
          // console.log(obj);
          return createComponent(obj, i);
        }
      }
    );
  };

  const addNew = (component) => {
    console.log(component);
    setwebpageData([...webpageData, component]);
  };

  const showSelected = () => {
    console.log(selIndex);
    if (!selComponent) return;
    if (selComponent.name === "Button") {
      return (
        <div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) =>
                updateComponent("content", e.target.value, selIndex)
              }
            />
          </div>
          <h3>
            Color :{" "}
            {["primary", "secondary", "danger", "warning", "dark"].map(
              (col) => (
                <button
                  className={"btn btn-" + col}
                  onClick={(e) =>
                    updateComponent("class", ["btn", "btn-" + col], selIndex)
                  }
                >
                   
                </button>
              )
            )}
          </h3>
          <button
            className="btn btn-danger mt-5"
            onClick={(e) => deleteComponent(selIndex)}
          >
            <i class="fas fa-trash"></i>  Delete
          </button>
        </div>
      );
    } else if (
      ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(selComponent.tag)
    ) {
      return (
        <div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) =>
                updateComponent("content", e.target.value, selIndex)
              }
            />
          </div>
          <h3>
            Color :{" "}
            {["primary", "secondary", "danger", "warning", "dark", "muted"].map(
              (col) => (
                <button
                  className={"btn btn-" + col}
                  onClick={(e) =>
                    updateComponent("class", ["text-" + col], selIndex)
                  }
                >
                   
                </button>
              )
            )}
          </h3>
          <button
            className="btn btn-danger mt-5"
            onClick={(e) => deleteComponent(selIndex)}
          >
            <i class="fas fa-trash"></i>  Delete
          </button>
        </div>
      );
    } else if (selComponent.name === "Link") {
      return (
        <div>
          <div className="input-group">
            <input
              className="form-control mb-3"
              placeholder="Content"
              onChange={(e) =>
                updateComponent("content", e.target.value, selIndex)
              }
            />
            <input
              className="form-control mb-3"
              placeholder="Link"
              onChange={(e) =>
                updateComponent("href", e.target.value, selIndex)
              }
            />
          </div>
          <h3>
            Color :{" "}
            {["primary", "secondary", "danger", "warning", "dark", "muted"].map(
              (col) => (
                <button
                  className={"btn btn-" + col}
                  onClick={(e) =>
                    updateComponent("class", ["text-" + col], selIndex)
                  }
                >
                   
                </button>
              )
            )}
          </h3>
          <button
            className="btn btn-danger mt-5"
            onClick={(e) => deleteComponent(selIndex)}
          >
            <i class="fas fa-trash"></i>  Delete
          </button>
        </div>
      );
    } else if (selComponent.name === "Image") {
      return (
        <div>
          <div className="input-group">
            <input
              className="form-control mb-3"
              placeholder="Image Link"
              onChange={(e) => updateComponent("src", e.target.value, selIndex)}
            />
            <div className="row mt-4">
              {assets.map((asset) => (
                <div className="col-md-2">
                  <img
                    onClick={(e) =>
                      updateComponent("src", asset.file, selIndex)
                    }
                    className="img-fluid"
                    src={url + "/uploads/" + asset.file}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <input
              className="form-control mb-3"
              placeholder="Link"
              onChange={(e) =>
                updateComponent("href", e.target.value, selIndex)
              }
            />
          </div>

          <button
            className="btn btn-danger mt-5"
            onClick={(e) => deleteComponent(selIndex)}
          >
            <i class="fas fa-trash"></i>  Delete
          </button>
        </div>
      );
    }
  };

  // const addNewLecture = (sect_index) => {
  //   const newLecture = {
  //     name: "Untitled Lecture",
  //     description: "Lecture Description",
  //     content: "",
  //     resources: [],
  //   };

  //   const sections = {};
  //   sections[sect_index] = { lectures: { $push: [newLecture] } };

  //   const newData = update(curriculum, {
  //     sections: sections,
  //   });

  //   setCurriculum(newData);
  // };

  const updateComponent = (prop, val, index) => {
    let tempData = webpageData;

    if (prop === "class") {
      tempData[index].classes = tempData[index].classes + val;
      console.log(tempData);
    }

    if (prop === "content") {
      tempData[index].content = val;
      console.log(tempData);
    }

    if (prop === "href") {
      tempData[index].href = val;
      console.log(tempData);
    }

    if (prop === "src") {
      tempData[index].src = val;
      console.log(tempData);
    }

    setwebpageData([...tempData]);
  };

  const deleteComponent = (index) => {
    let tempData = webpageData;
    tempData.splice(index, 1);
    setwebpageData([...tempData]);
  };

  const savePage = () => {
    fetch(url + "/webpage/update/" + pageInfo._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: webpageData }),
    }).then((res) => {
      if (res.status === 200)
        res.json().then((data) => {
          console.log(data);
        });
    });
  };

  const preview = () => {
    if (!pageLoading)
      return (
        <a
          className="btn btn-warning"
          rel="noreferrer"
          target="_blank"
          href={"/view/" + pageInfo._id}
        >
          Webpage Preview
        </a>
      );
    return <p>Loading...</p>;
  };

  return (
    <div>
      <button className="btn btn-success float-end" onClick={savePage}>
        Save Page
      </button>
      {preview()}

      <h1>Webpage Manager</h1>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <ul className="list-group">
                  {componentList.map((comp) => (
                    <li className="list-group-item">
                      <span>{comp.name}</span>
                      <span className="float-end">
                        <button
                          className="btn btn-success"
                          onClick={(e) => addNew(comp)}
                        >
                          Add
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">{renderJSX(webpageData)}</div>
        </div>
        <div className="card mt-5">
          <div className="card-body">{showSelected()}</div>
        </div>
      </div>
    </div>
  );
};

export default WebpageManager;
