import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import AddUnderGroup1 from "./AddUnderGroup1";
import state from "./state.json"
import city from "./State-City.json"
function AddBrokerSaiyyad1(props) {
  const navigate = useNavigate(props);
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
        case "input-nine":
          ten.current.focus();
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
  const [validator, setValidator] = useState(false);
  const [isSubmit, setIsSubmit] = useState(true);
  const [postList, setPostList] = useState({
    Id:"",
    underGroup:"",
    registrationType:"",
    fssai:"",
    brokerNumber:"",
    accNo:"",
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
    brokerName:"",
        });

  
  const postbroker = () => {
    if(postList.brokerName!==""){
      axios
      .post(baseUrl + "brokersaiyyad", {...postList,brokerName:postList.brokerName.trim()})
      .then(() => {
        props.propBrokerFn();
        refreshFn();
      });
  
    }
    else{
      setValidator(true)
    }
  }
  const putData = () => {
    if(postList.brokerName!==""){

    axios
      .put(baseUrl + "brokersaiyyad/" + postList._id,
      {...postList,brokerName:postList.brokerName.trim()}
        
      )
      .then(() => {
        props.propBrokerFn();
        refreshFn();
      });}else{
        setValidator(true)
      }
  };
  const delData = () => {
    axios.delete(baseUrl + "brokersaiyyad/" + postList._id).then(() => {
      props.propBrokerFn();
      refreshFn();
    });
  };



  const refreshFn = () => {
    setPostList({
      Id:"",
      underGroup:"",
      registrationType:"",
      fssai:"",
      brokerNumber:"",
      accNo:"",
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
      brokerName:"",
    })
  };
  useEffect(()=>{getUnderGroup()},[])
  const [underGroupList, setUnderGroupList] = useState([]);
  const [isAppUnderGroup, setIsAppUnderGroup] = useState(false);

  const getUnderGroup = () => {
    axios.get(baseUrl + "undergroup").then((res) => setUnderGroupList(res.data.data));
};
const [postList1, setPostList1] = useState({
  undergroup:""
});

const postData1 = () => {
  axios
    .post(baseUrl + "undergroup", postList1)
    .then(() => {
      getUnderGroup()
      refreshFn1();
    });
};
const putData1 = () => {
  axios
    .put(baseUrl + "undergroup/" + postList1._id,
      postList1,
      
    )
    .then(() => {
      getUnderGroup()
      refreshFn1();
    });
};
const delData1 = () => {
  axios.delete(baseUrl + "undergroup/" + postList1._id).then(() => {
    getUnderGroup()
    refreshFn1();
  });
};

const refreshFn1 = () => {
  setPostList1({
    undergroup:""
  })
};
  return (
    <div>
        {isAppUnderGroup ? (
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
                                 value={postList1.undergroup}
                                 onChange={(e) =>
                                   setPostList1(
                                     underGroupList.filter(
                                       (i) => i._id === e.target.value
                                     )[0]
                                   )
                                 }
                               >
                                 <option value={""} selected>
                                   -select-
                                 </option>
                                 {underGroupList.map((i) => (
                                   <option value={i._id}>{i.undergroup}</option>
                                 ))}
                               </select>
                             </div>
                             <div className="col-md-8">
                                   <div className="row">
                                     <label
                                       className="col-sm-3 col-form-label text-sm-end"
                                       htmlFor="collapsible-Party"
                                     >
                                       Under Group
                                     </label>
                                     <div className="col-sm-9">
                                       <input autoFocus
                                       id={"input-one"}
                                       onKeyUp={handleKeyUp}
                                       ref={one}
                                       value={postList1.undergroup}
                                        onChange={(e)=>setPostList1({...postList1,undergroup:e.target.value})}
                                         type="text"
                                         className="form-control"
                                       />
                                     </div>
                             
                                   </div>
                                 </div>
                           </div>
                         </div>
                       </div>
                       <div className="mt-4 text-center">
                         <button
                         
                         id={"input-two"}
                         onKeyUp={handleKeyUp}
                         ref={two}
                           onClick={() => postData1()}
                           disabled={postList1._id}
                           type="submit"
                           className="btn btn-success me-sm-3 me-1"
                         >
                           Save
                         </button>
                         <button
                         id={"input-three"}
                         onKeyUp={handleKeyUp}
                         ref={three}
                         
                           onClick={() => putData1()}
                           disabled={!postList1._id}
                           type="submit"
                           className="btn btn-warning me-sm-3 me-1"
                         >
                           Update
                         </button>
                         <button
                         id={"input-four"}
                         onKeyUp={handleKeyUp}
                         ref={four}
                         
                           onClick={() => delData1()}
                           disabled={!postList1._id}
                           type="submit"
                           className="btn btn-danger me-sm-3 me-1"
                         >
                           Delete
                         </button>
                         <button
                         id={"input-five"}
                         onKeyUp={handleKeyUp}
                         ref={five}
                         
                           onClick={() => refreshFn1()}
                           type="submit"
                           className="btn btn-primary me-sm-3 me-1"
                         >
                           Refresh
                         </button>
                         <button
                         id={"input-six"}
                         onKeyUp={handleKeyUp}
                         ref={six}
                         
                           onClick={() => {
                  
                             setIsAppUnderGroup(false)
                           }}
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
      ):(
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
                            value={postList.brokerName}
                            onChange={(e) =>
                              setPostList(
                                props.brokerList.filter(
                                  (i) => i._id === e.target.value
                                )[0]
                              )
                            }
                          >
                            <option value={""} selected disabled >
                              -select-
                            </option>
                            {props.brokerList.map((i) => (
                              <option value={i._id}>{i.brokerName}</option>
                            ))}
                          </select>
                          <span
                                        style={{
                                          display:
                                            validator &
                                            (postList.brokerName === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>
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
                               Broker Name
                             </label>
                             <div className="col-sm-9">
                               <input
                                 value={postList.brokerName}
                                 onChange={(e)=>setPostList({...postList,brokerName:e.target.value})}
                                 type="text"
                                 className="form-control"
                                 placeholder="Broker Name"
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
                                                  fontSize: 13,
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
                               <select
                                 value={postList.underGroup}
                                 onChange={(e) =>
                                   setPostList({
                                     ...postList,
                                     underGroup: e.target.value,
                                   })
                                 }
                                 className="form-select"
                                 placeholder="Under Group"
                               >
                                <option>--Select--</option>
                                {underGroupList.map((i)=>
                                <option>{i.undergroup}</option>
                                )}
                               </select>
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
                               <select
                                 value={postList.registrationType}
                                 onChange={(e) =>
                                   setPostList({
                                     ...postList,
                                     registrationType: e.target.value,
                                   })
                                 }
                                 className="form-select"
                                 placeholder="Registration Type"
                               >
                                <option selected disabled value={""}>--Select--</option>
                            <option>Not Applicable</option>
                            <option>Regular</option>
                            <option>Compostion</option>
                            <option>Unregistered</option>
                               </select>
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
                                 value={postList.brokerNumber}
                                 onChange={(e) =>
                                   setPostList({
                                     ...postList,
                                     brokerNumber: e.target.value,
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
                               Acc No.
                             </label>
                             <div className="col-sm-9">
                               <input
                                 value={postList.accNo}
                                 onChange={(e) =>
                                   setPostList({
                                     ...postList,
                                     accNo: e.target.value,
                                   })
                                 }
                                 className="form-control"
                                 placeholder="Acc. Number"
                                 
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
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              State
                            </label>
                            <div className="col-sm-9">
                              <select placeholder='State'
                                className="form-select"
                                value={postList.state}
                                onChange={(e)=>setPostList({...postList,state:e.target.value})}
                               
                              >
                                <option>--Select--</option>
                                {state.map((i)=>
                                <option>{i}</option>)}
                              </select>
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
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             City
                            </label>
                            <div className="col-sm-9">
                              <select
                              placeholder='city...'
                                className="form-select"
                                value={postList.city}
                                onChange={(e)=>setPostList({...postList,city:e.target.value})}
                               
                              >
                                <option>--Select--</option>
                                {city.filter((i)=>i.state===postList.state).map((i)=>
                                <option>{i.name}</option>
                                )}
                              </select>
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
                      onClick={() => postbroker()}
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
                      onClick={() => props.setIsAppBroker(false)}
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
  </div>)}
  </div>
  );
}

export default AddBrokerSaiyyad1;
