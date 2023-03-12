import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LayersIcon from '@mui/icons-material/Layers';
import WebIcon from '@mui/icons-material/Web';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Data as UserData } from ".././utils/data";
import BarChart from "../Graph/BarChart";
import Deposits from "../Graph/Deposits";
// import ManageArtist from "./ManageArtist";
import axios from "axios";
// import AdminManageSongs from "./ManageSongs";
import AnimatedNumbers from "react-animated-numbers";
import DoughnutChart from "../Graph/DoughnutChart";
import app_config from "../../config";
import ManageUser from "./ManageUser";

const AdminDashboard = () => {
  const url = app_config.backend_url;
  const [artistList, setArtistList] = useState([]);
  const [queryList, setQueryList] = useState([]);
  const [userList, setUserList] = useState([]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // const getArtistGetAll = async () => {
  //   const response = await fetch(url + "/artist/getall");
  //   const data = await response.json();
  //   console.log("artist", data);
  //   setArtistList(data);
  // };
  const getQueryList = async () => {
    const response = await fetch(url + "/contact/getall");
    const data = await response.json();
    console.log("query", data);
    setQueryList(data);
  };
  const getUserData = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    console.log("user", data);
    setUserList(data);
    setChartData({
      labels: data.map((data) => new Date(data.DOB).getFullYear()),
      datasets: [
        {
          label: "User Gained",
          data: UserData.map((data) => Math.floor(Math.random() * 50)),
        },
      ],
    });
  };

  useEffect(() => {
    // axios
    //   .get(url + "/user/getall")
    //   .then((res) => {
    //     console.log(res.data);
    //     setuserDatafromAPI(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // getArtistGetAll();
    getQueryList();
    getUserData();
  }, []);

  var userLength = Object.keys(userList).length;
  console.log("Total user", userLength);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [234, 543, 34534, 43, 57, 395, 53],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [234, 543, 34534, 43, 57, 395, 53],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const data2 = {
    labels: ["Pop", "Blues", "Jazz", "Classical", "Western", "hjkl"],
    datasets: [
      {
        label: "Total",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    // <div className="container">
    <div className="row" style={{backgroundColor:"#f1f1f1"}}>
      <div className="col-md-3  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center", backgroundColor:"#2f5679",color:"white" }}
          ><PeopleAltIcon fontSize="large"/>
            <div style={{ fontWeight: "bold", fontSize: "1.5rem", }}>
            Total User
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={userLength}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center",backgroundColor:"#27a69a", color:"white" }}
          ><WebIcon fontSize="large"/>
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Total Template
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={artistList.length}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center",backgroundColor:"#614983", color:"white"  }}
          ><QueryStatsIcon fontSize="large"/>
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
             Total Query
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={queryList.length}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-sm-6">
          <div
            className="card mt-4 p-5 d-flex flex-row justify-content-between"
            style={{ alignItems: "center",backgroundColor:"black", color:"white" }}
          ><LayersIcon fontSize="large"/>
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
             Total Live Pages
            </div>
            <div>
              <AnimatedNumbers
                animateToNumber={artistList.length}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </div>
          </div>
        </div>
      

      
        <div className="card-md-12">
          <div className="card mt-4 p-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage Query</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{/* <AdminManageSongs /> */}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      

      {/* <div className="row">
        <div className="col-12">
          <div className="card mt-4 p-4">Manage User Registration Request</div>
        </div>
      </div> */}
      
        <div className="col-md-6">
          <div className="card mt-4 p-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage Template</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ height: "20rem", overflowY: "auto" }}>
                    {/* <ManageArtist /> */}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-4 p-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h4>Manage User</h4>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div style={{ height: "20rem", overflowY: "auto" }}>
                    <ManageUser />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      
      
        <div className="col-md-6 col-sm-12">
          <div className="card mt-4 p-4">
            {userList.length > 0 ? <BarChart chartData={chartData} /> : ""}
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card mt-4 p-4">
            <center style={{ maxHeight: "18rem" }}>
              <DoughnutChart chartData={data2} />
            </center>
          </div>
      </div>
      <div className="col-md-6 col-sm-12">
          <div className="card mt-4 p-4">
            <center style={{ maxHeight: "18rem" }}>
              <Deposits/>
            </center>
          </div>
        </div>
      </div>
    //</div>
  );
};

export default AdminDashboard;
