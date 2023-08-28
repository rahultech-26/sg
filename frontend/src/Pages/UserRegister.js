import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "./BaseUrl";
import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
function UserRegister() {
  const [isSubmit,setIsSubmit]=useState(true)

  const [postData, setPostData] = useState({
  });

  useEffect(() => { getRoles() }, [])
  const [roles, setRoles] = useState([])
  const getRoles = () => {
    axios.get(baseUrl + "role").then((res) => setRoles(res.data.data))
  }

  const submitData = () => {
    setIsSubmit(false)
    axios.post(baseUrl + "login", postData).then(() => navigate("/UserTable"))

  }
  const navigate = useNavigate()

  return (
    <>
     {!isSubmit&&
      <div
                style={{
                  zIndex: 10,
                  position: "fixed",
                  width: "100%",
                  height: "100vh",
                  backgroundColor: "rgb(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                 <ThreeCircles
        height="100"
        width="100"
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
           
              </div>}
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="container-xxl flex-grow-1 container-p-y">
              {/* Content */}
              {/* Collapsible Section */}
              <div className="row my-4">
                <div className="col">
                  {/* <h6> Collapsible Section </h6> */}
                  <div className="accordion">
                    {/* Delivery Address */}
                    <div className="card accordion-item">
                      <div
                        id="collapseDeliveryAddress"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingDeliveryAddress"
                        data-bs-parent="#collapsibleSection"
                      >
                        {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                        <div className="accordion-body">
                          <div className="row g-3">

                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  First Name
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        firstName: e.target.value,
                                      })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Last Name
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        lastName: e.target.value,
                                      })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Country"
                                >
                                  Department
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        role: e.target.value,
                                      })
                                    }
                                    className=" form-select"
                                  >
                                    <option selected disabled>--Select--</option>
                                    {roles.map((i) => <option>{i.role}</option>)}

                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Mobile"
                                >
                                  Mobile No.
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        phoneNumber: e.target.value,
                                      })
                                    }
                                    className="form-control"
                                    placeholder="Number"
                                    type="number"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Broker"
                                >
                                  Email
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        emailId: e.target.value,
                                      })
                                    }

                                    className="form-control"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Broker"
                                >
                                  Permanent Address
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        Address: e.target.value,
                                      })
                                    }

                                    className="form-control"

                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Broker"
                                >
                                  User Name
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        username: e.target.value,
                                      })
                                    }

                                    className="form-control"

                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Broker"
                                >
                                  Password
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        password: e.target.value,
                                      })
                                    }

                                    className="form-control"

                                  />
                                </div>
                              </div>
                            </div>



                          </div>
                          <div className="mt-4 text-center">
                            <button disabled={!isSubmit}
                              onClick={() => submitData()}
                              type="submit"
                              className="btn btn-primary me-sm-3 me-1"
                            >
                              Submit
                            </button>
                            <button
                              type="reset"
                              className="btn btn-label-secondary"
                              onClick={() => navigate("/UserTable")}
                            >
                              Cancel
                            </button>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />

      </div>
    </>
  );
}

export default UserRegister;
