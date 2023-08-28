import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
function AddParty() {
  const navigate = useNavigate()
  
  const data= localStorage.getItem("editMarkData")
  const parshProduceData= JSON.parse(data)
  const [postList,setPostList]=useState(parshProduceData)
  const postData=()=>{
    axios.put(baseUrl + "mark/"+postList._id,postList).then(()=>navigate("/MarkTable"))
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
                                  Mark
                                </label>
                                <div className="col-sm-9">
                                  <input
                                  value={postList.mark}
                                   onChange={(e)=>setPostList({...postList,mark:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="Mark"
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
                              Submit
                            </button>
                            <button
                            onClick={()=>navigate("/MarkTable")}
                              type="reset"
                              className="btn btn-label-secondary"
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
   </div>
  )
}

export default AddParty