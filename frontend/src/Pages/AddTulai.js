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
  let ten = React.createRef();
  let eleven = React.createRef();
  let twelve = React.createRef();
  let thirteen = React.createRef();
  let fourteen = React.createRef();
  let fifteen = React.createRef();
  let sixteen = React.createRef();
  let seventeen = React.createRef();
  let eightteen = React.createRef();
  let nineteen = React.createRef();
  let twenty = React.createRef();
  let twentyone = React.createRef();
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
        case "input-nine":{
          if(postList._id){
            eleven.current.focus();
          }
          else {
            ten.current.focus();
          }
        }
         
          break;
        case "input-ten":
          eleven.current.focus();
          break;
        case "input-eleven":
          twelve.current.focus();
          break;
        case "input-twelve":
          thirteen.current.focus();
          break;
        case "input-thirteen":
          fourteen.current.focus();
          break;
        case "input-fourteen":
          fifteen.current.focus();
          break;
        case "input-fifteen":
          sixteen.current.focus();
          break;
        case "input-sixteen":
          seventeen.current.focus();
          break;
        case "input-seventeen":
          eightteen.current.focus();
          break;
        case "input-eightteen":
          nineteen.current.focus();
          break;
        case "input-nineteen":
        twenty.current.focus();
          break;
        case "input-twenty":
          twentyone.current.focus();
          break;
        case "input-twentyone":
          one.current.focus();
          break;
        default:
          break;
      }
    }
  }
  const [postList, setPostList] = useState({

  });

  const [isSubmit,setIsSubmit]=useState(true)
  const postData = () => {
    if(postList.tulaiId||postList.tulaiId!==""){
      setIsSubmit(false)
    axios
      .post(baseUrl + "tulai", postList)
      .then(() => {
       navigate("tulaitabel")
      });}
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
                        <div className="col-md-12">
                        <div className="accordion-body">
                          <div className="row g-3">
                            <div className="col-md-12">
                              <div className="row">
                                <label
                                  className="col-sm-2 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                तुलाई दर आई०डी० 
                                </label>
                                <div className="col-sm-6">
                                  <input
                                         autoFocus
                                         id={"input-one"}
                                         onKeyUp={handleKeyUp}
                                         ref={one}
                                  value={postList.tulaiId}
                                   onChange={(e)=>setPostList({...postList,tulaiId:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder=" तुलाई दर आई०डी० "
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-6 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  हिम्माली दर 
                                </label>
                                <div className="col-sm-6">
                                  <input
                                         id={"input-two"}
                                         onKeyUp={handleKeyUp}
                                         ref={two}
                                  value={postList.labourRate}
                                   onChange={(e)=>setPostList({...postList,labourRate:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="हिम्माली दर "
                                  />
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-6 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  हिम्माली दर(Print)
                                </label>
                                <div className="col-sm-6">
                                  <input
                                  id={"input-three"}
                                  onKeyUp={handleKeyUp}
                                  ref={three}
                                  value={postList.labourRatePrint}
                                   onChange={(e)=>setPostList({...postList,labourRatePrint:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="हिम्माली दर(Print)"
                                  />
                                </div>
                        
                              </div>
                            </div>
                         
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-6 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  हिम्माली प्रकार 
                                </label>
                                <div className="col-sm-6">
                                  <select
                                  ref={four}
                                  
                                  value={postList.labourType}
                                   onChange={(e)=>{five.current.focus();setPostList({...postList,labourType:e.target.value})}}
                                    type="text"
                                    className="form-select"
                                    placeholder=" हिम्माली प्रकार "
                                  >
                                    <option selected disabled>--Select--</option>
                                    <option>Per Bag</option>
                                    <option>Per Quantal</option>
                                    <option>Fix</option>
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-6 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                 तुलाई दर 
                                </label>
                                <div className="col-sm-6">
                                  <input
                                  id={"input-five"}
                                  onKeyUp={handleKeyUp}
                                  ref={five}
                                  
                                  value={postList.tulaiRate}
                                   onChange={(e)=>setPostList({...postList,tulaiRate:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="तुलाई दर "
                                  />
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-6 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  तुलाई दर (Print)
                                </label>
                                <div className="col-sm-6">
                                  <input
                                  id={"input-six"}
                                  onKeyUp={handleKeyUp}
                                  ref={six}
                                  
                                  value={postList.tulaiRatePrint}
                                   onChange={(e)=>setPostList({...postList,tulaiRatePrint:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="तुलाई दर (Print)"
                                  />
                                </div>
                        
                              </div>
                            </div>
                         
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-6 col-form-label text-sm-end"
                                  htmlFor="collapsible-Country"
                                >
                                  तुलाई प्रकार 
                                </label>
                                <div className="col-sm-6">
                               <select
                               ref={seven}
                               
                               value={postList.tulaiType}
                               onChange={(e)=>{eight.current.focus();setPostList({...postList,tulaiType:e.target.value})}}
                               placeholder='Godown Address' className='form-control'>
                                  <option selected disabled>--Select--</option>
                                    <option>Per Bag</option>
                                    <option>Per Quantal</option>
                                    <option>Fix</option>
                                  </select>
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
                      onClick={() => navigate("/tulaitabel")}
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
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />

      </div>
   </div>
  )
}

export default AddParty