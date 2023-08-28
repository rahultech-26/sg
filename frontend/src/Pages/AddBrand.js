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
          one.current.focus();
          break;
          default:
          break;
      }
    }
  }
  const [text, setText] = useState("");
  const [postList, setPostList] = useState({
    brandId:"",
    brandName:""
  });
  const [validator,setValidator]=useState(false)

  const postData = () => {
    if(postList.brandName!==""){
    axios
      .post(baseUrl + "brand", postList)
      .then(() => {
      navigate("/brandtabel")
      });}
      else{
        setValidator(true)
      }
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
                        <br/>
                        <br/>
                        <div className="col-md-12">
                        <div className="row g-3">
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Brand Name
                                </label>
                                <div className="col-sm-9">
                                  <input
                                   id={"input-two"}
                                   onKeyUp={handleKeyUp}
                                   ref={two}
                                  value={postList.brandName}
                                   onChange={(e)=>setPostList({...postList,brandName:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="Brand Name"
                                  />
                                   <span
                                        style={{
                                          display:
                                            validator &
                                            (postList.brandName === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
                                </div>
                        
                              </div>
                            </div>
                         
                          
                           
                          </div>
                            </div>
                            <div className="mt-4 text-center">
                    <button
                      onClick={() => postData()}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Submit
                    </button>
                    <button
                    id={"input-four"}
                    onKeyUp={handleKeyUp}
                    ref={four}
                    
                      onClick={() => navigate("/brandtabel")}
                      type="submit"
                      className="btn btn-secondary me-sm-3 me-1"
                    >
                      Cancel
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