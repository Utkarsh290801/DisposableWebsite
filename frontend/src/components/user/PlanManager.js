import React, { useEffect, useState } from "react";
import app_config from "../../config";

const PlanManager = () => {
  const url = app_config.backend_url;

  const [subscriptionDetails, setSubscriptionDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch(url + "/plan/getbyuser/" + currentUser._id);
    const data = await response.json();
    console.log(data);
    setSubscriptionDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayPlan = () => {
    if (loading) {
      return (
        <div class="text-center">
          <div class="spinner-border text-primary " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <tr key={subscriptionDetails._id}>
            <td>{subscriptionDetails.plan.title}</td>
            <td>{subscriptionDetails.user}</td>
            <td>
              {new Date(subscriptionDetails.createdAt).toLocaleDateString()}
            </td>
            <td>{subscriptionDetails.expired}</td>
          </tr>
        </div>
      );
    }
  };
  return (
    <div>
      <h1>Plan Manager</h1>
      <div className="row">
        <div className="col-md">
          <table className="table ">
            <thead>
              <tr>
                <th>Plan</th>
                <th>User</th>
                <th>CreatedAt</th>
                <th>Expired</th>
              </tr>
            </thead>
            <tbody>{displayPlan()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanManager;
