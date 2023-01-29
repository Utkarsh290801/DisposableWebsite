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
import BaseReactComponent from "../user/base-react-component";
import app_config from "../../config";
import { useParams } from "react-router-dom";
// import {TablePluginRef} from "./Table/consts";
// import addTablePlugin from './Table';
// import { ChartPluginRef } from "./Chart/consts";
// import addChartPlugin from './Chart';

const LivePage = () => {
  const url = app_config.backend_url;
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);
  let e;

  const { pageid } = useParams();

  // console.log(pageid);

  const fetchPageData = async () => {
    setLoading(true);
    const res = await fetch(url+'/webpage/getbyid/'+pageid);
    console.log(res.status);
    try{
      if(res.status === 200){
        const data = await res.json();
        console.log(data);
        setPage(data);
        setLoading(false);
      }
      
    }
    catch{
      console.log('some error occured!');
    }
  }

  useEffect(() => {
    fetchPageData();
  }, [])
  


  return <div>

  </div>;
};

export default LivePage;
