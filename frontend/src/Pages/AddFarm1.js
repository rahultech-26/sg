import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { baseUrl } from './BaseUrl'
import { useNavigate } from 'react-router-dom'
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import state from "./state.json"
import city from "./State-City.json"
function AddFarm(props) {
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
  let twentytwo = React.createRef();
  let twentythree = React.createRef();
  let twentyfour = React.createRef();
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
          twentytwo.current.focus();
          break;
        case "input-twentytwo":
          twentythree.current.focus();
          break;
        case "input-twentythree":
          twentyfour.current.focus();
          break;
        case "input-twentyfour":
          one.current.focus();
          break;
        default:
          break;
      }
    }
  }
  useEffect(()=>{getDataFn()},[])
const [validator,setValidator]=useState(false)
  const [postList, setPostList] = useState({});

  const postData = () => {
    if(postList.farmNo!==""&postList.farmName!==""&postList.farmNameHindi!==""){
      axios
      .post(baseUrl + "farm",{...postList,farmName:postList.farmName.trim(),farmNameHindi:postList.farmNameHindi.trim() })
      .then(() => {
        props.propFarmFn();
        refreshFn();
      });
    }
    else{
      setValidator(true)
    }
    
  };
  const putData = () => {
    if(postList.farmNo!==""&postList.farmName!==""&postList.farmNameHindi!==""){

    axios
      .put(baseUrl + "farm/" + postList._id,{...postList,farmName:postList.farmName.trim(),farmNameHindi:postList.farmNameHindi.trim()}
      )
      .then(() => {
        props.propFarmFn();
        refreshFn();
      });}else{setValidator(true)}
  };
  const delData = () => {
    axios.delete(baseUrl + "farm/" + postList._id).then(() => {
      props.propFarmFn();
      refreshFn();
    });
  };

  
  const refreshFn = () => {
    getDataFn()
    one.current.focus()
    setValidator(false)
    setPostList({
      ...postList,
      farmName:"",
      farmNameHindi:"",
      mandiLicenceNo:"",
      mandiName:"",
      manNo:"",
      mobileNo:"",
      mobileNo1:"",
      city:"",
      state:"",
      panNo:"",
      pinCode:"",
      address:"",
      state:"",
      gstin:"",
      conatactNo:"",
      email:"",
      tanNo:"",
      fssai:"",
      bank:"",
      accountNo:"",
      ifsc:"",
    })

  };
 
  const getDataFn = ()=>{
      axios.get(baseUrl+"farm").then((res)=>setPostList({   farmName:"",
      farmNameHindi:"",farmNo:res.data.data.length>0?+res.data.data[res.data.data.length-1].farmNo+1:1}))
  }
  

  return (
    <div>
    <div className="layout-wrapper layout-content-navbar  ">
    <div className="layout-container">
      <Sidebar />
      <div className="layout-page scrollhide">
        <div className="container-xxl flex-grow-1 ">
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
                      <div className="row g-1">
                        <div className="col-md-4">
                          <select
                            className="col-md-12 form-select"
                            value={postList.farmName}
                            onChange={(e) =>
                              setPostList(
                                props.farmList.filter(
                                  (i) => i._id === e.target.value
                                )[0]
                              )
                            }
                          >
                            <option  selected  >
                              -select-
                            </option>
                            {props.farmList.map((i) => (
                              <option value={i._id}>{i.farmName}</option>
                            ))}
                          </select>
                          
                        </div>
                        <div className="col-md-8">
                        <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Party"
                            >
                             कंपनी आई डी.
                            </label>
                            <div className="col-sm-9">
                              <input autoFocus id={"input-one"}
                                        onKeyUp={handleKeyUp}
                                        ref={one}
                              value={postList.farmNo}
                            
                                className="form-control"
                                placeholder="Farm Id"
                              />
                               <span
                                        style={{
                                          display:
                                            validator &
                                            (postList?.farmNo === "")
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
                        <div className="col-md-7">
                          <div className="row">
                            <label
                              className="col-sm-5 col-form-label text-sm-end"
                              htmlFor="collapsible-Country"
                            >
                             फर्म का नाम 
                            </label>
                            <div className="col-sm-7">
                              <input placeholder='Farm Name'
                              id={"input-two"}
                              onKeyUp={handleKeyUp}
                              ref={two}
                                className=" form-control"
                                value={postList.farmName}
                                onChange={(e)=>setPostList({...postList,farmName:e.target.value})}
                              />
                               <span
                                        style={{
                                          display:
                                            validator &
                                            (postList?.farmName === "")
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
                        <div className="col-md-5">
                          <div className="row">
                          <ReactTransliterate
                                          renderComponent={(props) => (
                                            <input
                                            placeholder=' Farm Name Hindi'
                                              className=" form-control"
                                              {...props}
                                            />
                                          )}
                                          value={postList.farmNameHindi} 
                                          onChangeText={(text) => {
                                            setPostList({
                                              ...postList,
                                              farmNameHindi: text,
                                            });
                                          }}
                                          lang="hi"
                                        />
                                         <span
                                        style={{
                                          display:
                                            validator &
                                            (postList?.farmNameHindi === "")
                                              ? ""
                                              : "none",
                                          color: "red",
                                        }}
                                      >
                                        * feild is required
                                      </span>

                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              मंडी नाम 
                            </label>
                            <div className="col-sm-9">
                              <input 
                              id={"input-three"}
                              onKeyUp={handleKeyUp}
                              ref={three}
                                className="form-control"
                                value={postList.mandiName}
                                onChange={(e)=>setPostList({...postList,mandiName:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             मंडी लाइसेंस न.   
                            </label>
                            <div className="col-sm-6">
                              <input
                               id={"input-four"}
                               onKeyUp={handleKeyUp}
                               ref={four}
                                className="form-control"
                                value={postList.mandiLicenceNo}
                                onChange={(e)=>setPostList({...postList,mandiLicenceNo:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                           MAN No.  
                            </label>
                            <div className="col-sm-6">
                              <input
                              id={"input-five"}
                              onKeyUp={handleKeyUp}
                              ref={five}
                                className="form-control"
                                value={postList.manNo}
                                onChange={(e)=>setPostList({...postList,manNo:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             GSTIN
                            </label>
                            <div className="col-sm-6">
                              <input
                              id={"input-six"}
                              onKeyUp={handleKeyUp}
                              ref={six}
                                className="form-control"
                                value={postList.gstin}
                                onChange={(e)=>setPostList({...postList,gstin:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             FSSAI
                            </label>
                            <div className="col-sm-6">
                              <input
                              id={"input-seven"}
                              onKeyUp={handleKeyUp}
                              ref={seven}
                                className="form-control"
                                value={postList.fssai}
                                onChange={(e)=>setPostList({...postList,fssai:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             मोबाइल न. 
                            </label>
                            <div className="col-sm-6">
                              <input
                                  id={"input-eight"}
                                  onKeyUp={handleKeyUp}
                                  ref={eight}
                                className="form-control"
                                value={postList.mobileNo}
                                onChange={(e)=>setPostList({...postList,mobileNo:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             मोबाइल न. 
                            </label>
                            <div className="col-sm-6">
                              <input
                              id={"input-nine"}
                              onKeyUp={handleKeyUp}
                              ref={nine}
                                className="form-control"
                                value={postList.mobileNo1}
                                onChange={(e)=>setPostList({...postList,mobileNo1:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                      
                        <div className="col-md-12">
                          <div className="row">
                            <label
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             पता
                            </label>
                            <div className="col-sm-9">
                              <input 
                              id={"input-ten"}
                              onKeyUp={handleKeyUp}
                              ref={ten}
                              placeholder='Address...'
                                className="form-control"
                                value={postList.address}
                                onChange={(e)=>setPostList({...postList,address:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              राज्य
                            </label>
                            <div className="col-sm-6">
                              <select placeholder='State'
                               id={"input-twelve"}
                               onKeyUp={handleKeyUp}
                               ref={twelve}
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
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             शहर
                            </label>
                            <div className="col-sm-6">
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
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                             ईमेल
                            </label>
                            <div className="col-sm-6">
                              <input
                                id={"input-thirteen"}
                                onKeyUp={handleKeyUp}
                                ref={thirteen}
                              placeholder='Email'
                                className="form-control"
                                value={postList.email}
                                onChange={(e)=>setPostList({...postList,email:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              PAN No.
                            </label>
                            <div className="col-sm-6">
                              <input
                                 id={"input-fourteen"}
                                 onKeyUp={handleKeyUp}
                                 ref={fourteen}
                              placeholder='PAN No.'
                                className="form-control"
                                value={postList.panNo}
                                onChange={(e)=>setPostList({...postList,panNo:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              TAN No.
                            </label>
                            <div className="col-sm-6">
                              <input
                              id={"input-fifteen"}
                              onKeyUp={handleKeyUp}
                              ref={fifteen}
                              placeholder='TAN No.'
                                className="form-control"
                                value={postList.tanNo}
                                onChange={(e)=>setPostList({...postList,tanNo:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              PinCode
                            </label>
                            <div className="col-sm-6">
                              <input
                               id={"input-sixteen"}
                               onKeyUp={handleKeyUp}
                               ref={sixteen}
                              placeholder='Pin Code'
                                className="form-control"
                                value={postList.pinCode}
                                onChange={(e)=>setPostList({...postList,pinCode:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              Bank
                            </label>
                            <div className="col-sm-6">
                              <input
                               id={"input-seventeen"}
                               onKeyUp={handleKeyUp}
                               ref={seventeen}
                              placeholder='Name & City'
                                className="form-control"
                                value={postList.bank}
                                onChange={(e)=>setPostList({...postList,bank:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              Account No
                            </label>
                            <div className="col-sm-6">
                              <input
                               id={"input-eightteen"}
                               onKeyUp={handleKeyUp}
                               ref={eightteen}
                                className="form-control"
                                value={postList.accountNo}
                                onChange={(e)=>setPostList({...postList,accountNo:e.target.value})}
                               
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-6 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              IFSC
                            </label>
                            <div className="col-sm-6">
                              <input
                               id={"input-nineteen"}
                               onKeyUp={handleKeyUp}
                               ref={nineteen}
                                className="form-control"
                                value={postList.ifsc}
                                onChange={(e)=>setPostList({...postList,ifsc:e.target.value})}
                               
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
                               id={"input-twenty"}
                               onKeyUp={handleKeyUp}
                               ref={twenty}
                      onClick={() => postData()}
                      disabled={postList._id}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Save
                    </button>
                    <button
                       id={"input-twentyone"}
                       onKeyUp={handleKeyUp}
                       ref={twentyone}
                      onClick={() => putData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-warning me-sm-3 me-1"
                    >
                      Update
                    </button>
                    <button
                     id={"input-twentytwo"}
                     onKeyUp={handleKeyUp}
                     ref={twentytwo}
                      onClick={() => delData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-danger me-sm-3 me-1"
                    >
                      Delete
                    </button>
                    <button
                    id={"input-twentythree"}
                    onKeyUp={handleKeyUp}
                    ref={twentythree}
                      onClick={() => refreshFn()}
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      Refresh
                    </button>
                    <button
                    id={"input-twentyfour"}
                    onKeyUp={handleKeyUp}
                    ref={twentyfour}
                      onClick={() => props.setIsAppFarm(false)}
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
  )
}

export default AddFarm