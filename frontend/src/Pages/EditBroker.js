import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
function EditParty() {
  const navigate = useNavigate()
  const localData = localStorage.getItem("editBrokerData")
  const parseData = localData?JSON.parse(localData):[]
  const [postList,setPostList]=useState(parseData)
  const postData=()=>{
    axios.put(baseUrl + "broker/"+postList._id,postList).then(()=>navigate("/BrokerTabel"))
  }
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
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Party Name
                                </label>
                                <div className="col-sm-9">
                                  <input
                                  value={postList.partyName}
                                   onChange={(e)=>setPostList({...postList,partyName:e.target.value})}
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
                                  Type
                                </label>
                                <div className="col-sm-9">
                                  <select
                                     value={postList.type}
                                     onChange={(e)=>setPostList({...postList,type:e.target.value})}
                                    className=" form-select"
                                  >
                                    <option disabled selected>--select--</option>
                                    <option>Sale</option>
                                    <option>Purchase</option>
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
                                   value={postList.mobileNo}
                                   onChange={(e)=>setPostList({...postList,mobileNo:e.target.value})}
                                    className="form-control"
                                    placeholder="Number"
                                    type="number"
                                  />
                                </div>
                              </div>
                            </div>
                           
                          </div>
                          <div className="mt-4 text-center">
                            <button
                            onClick={()=>postData()}
                              type="submit"
                              className="btn btn-primary me-sm-3 me-1"
                            >
                              Update
                            </button>
                            <button
                            onClick={()=>navigate("/BrokerTabel")}
                              type="reset"
                              className="btn btn-label-secondary"
                            >
                              Close
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
   </div>
  )
}

export default EditParty