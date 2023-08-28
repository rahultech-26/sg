import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import AddUnderGroup1 from "./AddUnderGroup1";

function AddParty(props) {
  const navigate = useNavigate(props);
  const [isSubmit, setIsSubmit] = useState(true);
  const [postList, setPostList] = useState({
    Id:"",
    partyName:"",
    underGroup:"",
    broker:"",
    registrationType:"",
    fssai:"",
    mobileNumber:"",
    manNo:"",
    street:"",
    city:"",
    pincode:"",
    state:"",
    country:"",
    gst:"",
    panNo:"",
    email:"",
    bankDetail:"",
    whatsAppNo:"",
        });

  
  const postData = () => {
    axios
      .post(baseUrl + "transporter", postList)
      .then(() => {
        props.propTransporterFn();
        refreshFn();
      });
  };
  const putData = () => {
    axios
      .put(baseUrl + "transporter/" + postList._id,
        postList
        
      )
      .then(() => {
        props.propTransporterFn();
        refreshFn();
      });
  };
  const delData = () => {
    axios.delete(baseUrl + "transporter/" + postList._id).then(() => {
      props.propTransporterFn();
      refreshFn();
    });
  };



  const refreshFn = () => {
    setPostList({
Id:"",
partyName:"",
underGroup:"",
broker:"",
registrationType:"",
fssai:"",
partyNumber:"",
manNo:"",
street:"",
city:"",
pincode:"",
state:"",
country:"",
gst:"",
panNo:"",
email:"",
bankDetail:"",
whatsAppNo:"",
    })
  };
  useEffect(()=>{getUnderGroup()},[])
  const [underGroupList, setUnderGroupList] = useState([]);
  const [isAppUnderGroup, setIsAppUnderGroup] = useState(false);

  const getUnderGroup = () => {
    axios.get(baseUrl + "undergroup").then((res) => setUnderGroupList(res.data.data));
};
  const propUnderGroupFn = () => {
    getUnderGroup();
  };
  return (
    <div>
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
                        <div className="col-md-4">
                          <select
                            className="col-md-12 form-select"
                            value={postList.partyName}
                            onChange={(e) =>
                              setPostList(
                                props.transporterList.filter(
                                  (i) => i._id === e.target.value
                                )[0]
                              )
                            }
                          >
                            <option value={""} selected disabled >
                              -select-
                            </option>
                            {props.transporterList.map((i) => (
                              <option value={i._id}>{i.partyName}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-8">
                        <div className="accordion-body">
                  <div className="row g-3">
         
               
                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Party"
                        >
                          Transporter 
                        </label>
                        <div className="col-sm-9">
                          <input autoFocus
                            value={postList.partyName}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                partyName: e.target.value,
                              })
                            }
                            type="text"
                            className="form-control"
                            placeholder="Transporter Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          <label
                                                style={{
                                                  color: "green",
                                                  fontWeight: "bolder",
                                                  fontSize: 13,cursor:"pointer",
                                                }}
                                                onClick={() =>
                                                  setIsAppUnderGroup(true)
                                                }
                                              >
                                                +
                                              </label>
                                              &nbsp;
                          Under Group
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.underGroup}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                underGroup: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Under Group"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                         Broker
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.broker}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                broker: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Broker"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          Registration Type
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.registrationType}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                registrationType: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Registration Type"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          FSSAI
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.fssai}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                fssai: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="FSSAI"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          Mobile No.
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.partyNumber}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                partyNumber: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          MAN No.
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.manNo}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                manNo: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="MAN Number"
                            
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          Street
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.street}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                street: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Street"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6"> 
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          City
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.city}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                city: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="City"
                          />
                        </div>
                      </div>
                    </div> 
                    
                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          Pin Code
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.pincode}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                pincode: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Pin Code"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          state
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.state}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                state: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="State"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          country
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.country}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                country: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          GST IN
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.gst}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                gst: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="GST IN"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          PAN No.
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.panNo}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                panNo: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Pan Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.email}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                email: e.target.value,
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
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          Bank Detail
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            value={postList.bankDetail}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                bankDetail: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Bank Details"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-start"
                          htmlFor="collapsible-Mobile"
                        >
                          WhatsApp No. 
                        </label>
                        <div className="col-sm-9">
                          <input
                            value={postList.whatsAppNo}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                whatsAppNo: e.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="WhatsApp Number"
                          />
                        </div>
                      </div>
                    </div>

                   

                  </div>
     
                </div>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => postData()}
                      disabled={postList._id}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => putData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-warning me-sm-3 me-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => delData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-danger me-sm-3 me-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => refreshFn()}
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      Refresh
                    </button>
                    <button
                      onClick={() => props.setIsAppTransporter(false)}
                      type="reset"
                      className="btn btn-info"
                    >
                      Back
                    </button>
                  </div>
                  <br />
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
  </div>
  );
}

export default AddParty;
