import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
function AddParty() {
  const navigate = useNavigate()
  let one = React.createRef();
  let two = React.createRef();
  let three = React.createRef();
  let four = React.createRef();
  let five = React.createRef();
  let six = React.createRef();
  let seven = React.createRef();
  let eight = React.createRef();
  let nine = React.createRef();
  const data= localStorage.getItem("editGodownData")
  const parshProduceData= JSON.parse(data)
  const [postList,setPostList]=useState(parshProduceData)
  function handleKeyUp(e) {
    e.which = e.which || e.keyCode;

    if (e.which == 13) {
      switch (e.target.id) {
        case "input-one":
          two.current.focus();
          break;
        case "input-two":
          three.current.focus();
          break;
        case "input-three":
          four.current.focus();
          break;
        case "input-four":
          five.current.focus();
          break;
        case "input-five":
          six.current.focus();
          break;
        case "input-six":
            seven.current.focus();
       
          break;
        case "input-seven":
          eight.current.focus();
          break;
        case "input-eight":
          nine.current.focus();
          break;
        case "input-nine":
          one.current.focus();
          break;
    
        default:
          break;
      }
    }
  }
  const postData = () => {
    axios
      .put(baseUrl + "godown/"+postList._id, postList)
      .then(() => {
       navigate("/godowntabel")
      });
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
                        <div className="col-md-12">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  गोदाम०आईडी० 
                                </label>
                                <div className="col-sm-5">
                                  <input autoFocus
                                  id={"input-one"}
                                  onKeyUp={handleKeyUp}
                                  ref={one}
                                  value={postList.godownNumber}
                                   onChange={(e)=>setPostList({...postList,godownNumber:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="गोदाम०आईडी० "
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  गोदाम का नाम 
                                </label>
                                <div className="col-sm-9">
                                  <input
                                  id={"input-two"}
                                  onKeyUp={handleKeyUp}
                                  ref={two}
                                  value={postList.godownName}
                                   onChange={(e)=>setPostList({...postList,godownName:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="गोदाम का नाम "
                                  />
                                </div>
                        
                              </div>
                            </div>
                         
                            <div className="col-md-12">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Country"
                                >
                                 गोदाम का नाम (हिंदी)
                                </label>
                                <div className="col-sm-9">
                               <input
                               id={"input-three"}
                               onKeyUp={handleKeyUp}
                               ref={three}
                                   value={postList.godownNameHindi}
                                   onChange={(e)=>setPostList({...postList,godownNameHindi:e.target.value})}
                               placeholder='गोदाम का नाम(हिंदी)' className='form-control'/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Country"
                                >
                                क्या गोदाम मंडी में है 
                                </label>
                                <div className="col-sm-5">
                               <select
                             ref={four}
                               value={postList.godownInMandi}
                               onChange={(e)=>{five.current.focus();setPostList({...postList,godownInMandi:e.target.value})}}
                               placeholder='गोदाम का नाम' className='form-select'>
                                <option disabled selected>--Select--</option>
                                <option>True</option>
                                <option>False</option>
                                </select>
                                </div>
                              </div>
                            </div>
                            </div>
                            </div>
                            <div className="mt-4 text-center">
                    <button
                    id={"input-five"}
                    onKeyUp={handleKeyUp}
                    ref={five}
                    
                      onClick={() => postData()}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Update
                    </button>
                    <button
                    
                      onClick={() => navigate("/godowntabel")}
                      type="submit"
                      className="btn btn-secondary me-sm-3 me-1"
                    >
                      Close
                    </button>
                      </div>
                      <br/>
                      <br/>
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