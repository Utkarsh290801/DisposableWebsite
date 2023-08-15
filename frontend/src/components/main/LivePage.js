import React, { useEffect, useState } from "react";
import htmlToReact from "html-to-react";

import app_config from "../../config";
import { useParams } from "react-router-dom";
import Disabled from "./Disabled";

const LivePage = () => {
  const url = app_config.backend_url;
  const [pageHTML, setPageHTML] = useState("");
  const [pageCSS, setPageCSS] = useState("");
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const htmlToReactParser = new htmlToReact.Parser();
  const [expired, setExpired] = useState(false); 
  // const reactElement = ;

  const { pageid } = useParams();

  const fetchPageData = async () => {
    const res = await fetch(url + "/webpage/getbyid/" + pageid);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setPage(data);
    setPageHTML(data.data.html);
    setPageCSS(data.data.css);
    // Check if the current date is past the expiry date
    if (new Date() > new Date(data.expiryDate)) {
      setExpired(true);
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  console.log(pageid);

  const displayPage = () => {};

  return (
    <div>
      {/* <style>{pageCSS}</style>
      {htmlToReactParser.parse(pageHTML)} */}
       {expired ? ( // Conditionally render either the page content or the Disabled component
        <Disabled />
      ) : (
        <>
          <style>{pageCSS}</style>
          {htmlToReactParser.parse(pageHTML)}
        </>
      )}
    </div>
  );
};

export default LivePage;
