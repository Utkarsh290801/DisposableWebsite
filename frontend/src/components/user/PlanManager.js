import React, { useEffect, useState } from "react";
import app_config from "../../config";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
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

  // const displayPlan = () => {
  //   if (loading) {
  //     return (
  //       <div class="text-center">
  //         <div class="spinner-border text-primary " role="status">
  //           <span class="visually-hidden">Loading...</span>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <tr key={subscriptionDetails._id}>
  //           <td>{subscriptionDetails.plan.title}</td>
  //           <td>{subscriptionDetails.user}</td>
  //           <td>
  //             {new Date(subscriptionDetails.createdAt).toLocaleDateString()}
  //           </td>
  //           <td>{subscriptionDetails.expired}</td>
  //         </tr>
  //       </div>
  //     );
  //   }
  // };

  const displatPlanDetails = () => {
    if (loading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <MDBContainer className="my-5">
          <MDBRow className="text-center">
            <MDBCol md="4" className="mb-5 mb-md-0 mx-auto">
              <MDBCard className="testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#6d5b98" }}
                ></div>

                <div className="avatar mx-auto bg-white">
                  <MDBCardImage
                    // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    src={
                      currentUser.avatar ? url + "/" + currentUser.avatar : ""
                    }
                    className="rounded-circle img-fluid "
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <MDBCardBody>
                  <h4 className="mb-4">
                    Plan : {subscriptionDetails.plan.title}
                  </h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    Subscription ID : {subscriptionDetails._id}
                  </p>
                  <p className="dark-grey-text mt-4">
                    User ID : {subscriptionDetails.user}
                  </p>
                  <p className="dark-grey-text mt-4">
                    Created At :{" "}
                    {new Date(
                      subscriptionDetails.createdAt
                    ).toLocaleDateString()}
                  </p>
                  <p className="dark-grey-text mt-4">
                    Expired : {subscriptionDetails.expired}
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  };

  return <div>{displatPlanDetails()}</div>;
};

export default PlanManager;
