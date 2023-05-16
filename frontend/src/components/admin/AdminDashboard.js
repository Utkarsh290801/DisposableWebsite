import React, { useEffect, useState, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LayersIcon from "@mui/icons-material/Layers";
import WebIcon from "@mui/icons-material/Web";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Deposits from "../Graph/Deposits";
import AnimatedNumbers from "react-animated-numbers";
import DoughnutChart from "../Graph/DoughnutChart";
import app_config from "../../config";
import AllUserList from "./AllUserList";
import { Chart, registerables } from "chart.js";
import ViewBlockedUsers from "./ViewBlockedUsers";
import { NavLink } from "react-router-dom";

Chart.register(...registerables);

const AdminDashboard = () => {
  const url = app_config.backend_url;
  const [artistList, setArtistList] = useState([]);
  const [queryList, setQueryList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);

  const chartRef = useRef(null);

  // const [chartData, setChartData] = useState({
  //   labels: [],
  //   datasets: [],
  // });

  const getTestimonialList = async () => {
    const response = await fetch(url + "/testimonial/getall");
    const data = await response.json();
    // console.log("testimonial", data);
    setTestimonialList(data);
  };
  const getQueryList = async () => {
    const response = await fetch(url + "/contact/getall");
    const data = await response.json();
    // console.log("query", data);
    setQueryList(data);
  };
  const getUserData = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    // console.log("user", data);
    setUserList(data);
    // setChartData({
    //   labels: data.map((data) => new Date(data.DOB).getFullYear()),
    //   datasets: [
    //     {
    //       label: "User Gained",
    //       data: UserData.map((data) => Math.floor(Math.random() * 50)),
    //     },
    //   ],
    // });
  };

  // ************************************ Line Chart of new User according to day*************************************************
  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
      createChart();
    }
  }, [userList]);
  const countUsersByDay = () => {
    const userCountByDay = [];
    userList.forEach((user) => {
      const userDay = new Date(user.createdAt).toLocaleDateString();
      const index = userCountByDay.findIndex((item) => item.day === userDay);
      if (index > -1) {
        userCountByDay[index].count++;
      } else {
        userCountByDay.push({ day: userDay, count: 1 });
      }
    });
    return userCountByDay;
  };
  const createChart = () => {
    const userCountByDay = countUsersByDay();

    if (userCountByDay.length === 0) {
      return; // Exit if no user data available
    }

    const chartData = {
      labels: userCountByDay.map((item) => item.day),
      datasets: [
        {
          label: "New Users",
          data: userCountByDay.map((item) => item.count),
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
        },
      ],
    };

    const options = {
      // Customize chart options as needed
    };

    if (chartRef.current) {
      chartRef.current.chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: options,
      });
    }
  };

  // **************************************************Line chart code end****************************************************
  useEffect(() => {
    getQueryList();
    getUserData();
    getTestimonialList();
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
    <div className="row" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="col-md-3  col-sm-6">
        <div
          className="card mt-4 p-5 d-flex flex-row justify-content-between"
          style={{
            alignItems: "center",
            backgroundColor: "#2f5679",
            color: "white",
          }}
        >
          <PeopleAltIcon fontSize="large" />
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
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
          style={{
            alignItems: "center",
            backgroundColor: "#27a69a",
            color: "white",
          }}
        >
          <WebIcon fontSize="large" />
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
          style={{
            alignItems: "center",
            backgroundColor: "#614983",
            color: "white",
          }}
        >
          <QueryStatsIcon fontSize="large" />
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
          style={{
            alignItems: "center",
            backgroundColor: "#e8bf43",
            color: "white",
          }}
        >
          <QueryStatsIcon fontSize="large" />
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Total Feedback
          </div>
          <div>
            <AnimatedNumbers
              animateToNumber={testimonialList.length}
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
          style={{
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <LayersIcon fontSize="large" />
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
                <h4>View Active Users</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ height: "20rem", overflowY: "auto" }}>
                  <AllUserList />
                </div>
              </Typography>
            </AccordionDetails>
            <NavLink className="btn btn-warning m-1" to="/admin/manageuser">
              ManageUser
            </NavLink>
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
                <h4>Total Blocked User</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ height: "20rem", overflowY: "auto" }}>
                  <ViewBlockedUsers />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-md-6 col-sm-12">
        <div className="card mt-4 p-4">
          {userList.length > 0 ? <canvas ref={chartRef}></canvas> : ""}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h4>View List of New Users</h4>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ height: "10rem", overflowY: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map(
                        (user) =>
                          new Date(user.createdAt) >
                            new Date() - 24 * 60 * 60 * 1000 && (
                            <tr key={user.id}>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>
                                {new Date(user.createdAt).toLocaleString()}
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
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
            <Deposits />
          </center>
        </div>
      </div>
    </div>
    //</div>
  );
};

export default AdminDashboard;
