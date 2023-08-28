import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import state from "./state.json"
import city from "./State-City.json"

function AddParty(props) {
  useEffect(()=>{getBroker();getUnderGroup()},[])
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
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(true);
  const [validator, setValidator] = useState(false);
  const localdata = localStorage.getItem("partydata")
  const parsedata = JSON.parse(localdata)
  const [postList, setPostList] = useState(parsedata);

  
  const postData = () => {
    setIsSubmit(false)
    axios
      .put(baseUrl + "partysaiyyad/"+postList._id, postList)
      .then(() => {
        navigate("/partysaiyyad")
        refreshFn();
      });
  };
  const [underGroupList, setUnderGroupList] = useState([]);

  const getUnderGroup = () => {
    axios.get(baseUrl + "undergroup").then((res) => setUnderGroupList(res.data.data));
};
const [brokerList,setBrokerList]=useState([])

const getBroker =()=>{
  axios.get(baseUrl + "brokersaiyyad").then((res)=>setBrokerList(res.data.data))
}

  const refreshFn = () => {
    one.current.focus()
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
                          <input autoFocus
                          id={"input-one"}
                          onKeyUp={handleKeyUp}
                          ref={one}
                            value={postList.partyName}
                            onChange={(e) =>
                              setPostList({
                                ...postList,
                                partyName: e.target.value,
                              })
                            }
                            type="text"
                            className="form-control"
                            placeholder="Party Name"
                          />
                          <span
                                        style={{
                                          display:
                                            validator &
                                            (postList.partyName === "")
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

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          Under Group
                        </label>
                        <div className="col-sm-9">
                          <select
                          id={"input-two"}
                          onKeyUp={handleKeyUp}
                          ref={two}
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
                            <option>{i.undergroup}</option>)}
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
                         Broker
                        </label>
                        <div className="col-sm-9">
                          <select
                          ref={three}
                            value={postList.broker}
                            onChange={(e) =>{
                              four.current.focus()
                              setPostList({
                                ...postList,
                                broker: e.target.value,
                              })
                            }}
                            className="form-select"
                            placeholder="Broker"
                          >
                            <option>--Select--</option>
                            <option>No Broker</option>
                            {brokerList.map((i)=><option>{i.brokerName}</option>)}
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
                          Registration Type
                        </label>
                        <div className="col-sm-9">
                          <select
                          ref={four}
                          value={postList.registrationType}
                            onChange={(e) =>{
                              five.current.focus()
                              setPostList({
                                ...postList,
                                registrationType: e.target.value,
                              })}
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          FSSAI
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-five"}
                          onKeyUp={handleKeyUp}
                          ref={five}
                          
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          Mobile No.
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-six"}
                          onKeyUp={handleKeyUp}
                          ref={six}
                          
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          MAN No.
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-seven"}
                          onKeyUp={handleKeyUp}
                          ref={seven}
                          
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          Street
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-eight"}
                          onKeyUp={handleKeyUp}
                          ref={eight}
                          
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
                               id={"input-nine"}
                               onKeyUp={handleKeyUp}
                               ref={nine}
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          Pin Code
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-ten"}
                          onKeyUp={handleKeyUp}
                          ref={ten}
                          
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
                                id={"input-eleven"}
                                onKeyUp={handleKeyUp}
                                ref={eleven}
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          country
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-twelve"}
                          onKeyUp={handleKeyUp}
                          ref={twelve}
                          
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          GST IN
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-thirteen"}
                          onKeyUp={handleKeyUp}
                          ref={thirteen}
                          
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          PAN No.
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-fourteen"}
                          onKeyUp={handleKeyUp}
                          ref={fourteen}
                          
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
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-fifteen"}
                          onKeyUp={handleKeyUp}
                          ref={fifteen}
                          
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
{/* 
                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-end"
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
                    </div> */}

                    <div className="col-md-6">
                      <div className="row">
                        <label
                          className="col-sm-3 col-form-label text-sm-end"
                          htmlFor="collapsible-Mobile"
                        >
                          WhatsApp No. 
                        </label>
                        <div className="col-sm-9">
                          <input
                          id={"input-sixteen"}
                          onKeyUp={handleKeyUp}
                          ref={sixteen}
                          
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
                    <div className="col-md-6">
                                        <div className="row">
                                          <div className="col-sm-12">
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-12 col-form-label text-sm-center"
                                            >
                                              {" "}
                                              <input
                                                 id={"input-seventeen"}
                                                 onKeyUp={handleKeyUp}
                                                 ref={seventeen}
                                                checked={postList.taxType==="TCS"}
                                                onClick={()=>{
                                                  if(postList.taxType==="TCS"){
                                                    setPostList({...postList,taxType:""})
                                                  }else{
                                                    setPostList({...postList,taxType:"TCS"})
                                                  }
                                                
                                                }}
                                                className="col-sm-2"
                                                type="checkbox"
                                              />
                                              TCS
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                    <div className="col-md-6">
                                        <div className="row">
                                          <div className="col-sm-12">
                                            <label
                                              style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 13,
                                              }}
                                              className="col-sm-12 col-form-label text-sm-center"
                                            >
                                              {" "}
                                              <input
                                              id={"input-eightteen"}
                                              onKeyUp={handleKeyUp}
                                              ref={eightteen}
                                                checked={postList.taxType==="TDS"}
                                                onClick={()=>{
                                                  if(postList.taxType==="TDS"){
                                                    setPostList({...postList,taxType:""})
                                                  }else{
                                                    setPostList({...postList,taxType:"TDS"})
                                                  }
                                                
                                                }}
                                                className="col-sm-2"
                                                type="checkbox"
                                              />
                                              TDS
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                   

                 
              
                  </div>
     
                </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                    id={"input-eightteen"}
                    onKeyUp={handleKeyUp}
                    ref={eightteen} 
                      onClick={() => postData()}
                      disabled={!isSubmit}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Update
                    </button>
                    <button
                    id={"input-nineteen"}
                    onKeyUp={handleKeyUp}
                    ref={nineteen}
                    
                      onClick={() => navigate("/partysaiyyad")}
                      type="submit"
                      className="btn btn-secondary me-sm-3 me-1"
                    >
                    Close
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
