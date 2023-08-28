import React, { useState,useEffect } from 'react'
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
  const [text, setText] = useState("");
  const data= localStorage.getItem("editProduceData")
  const parshProduceData= JSON.parse(data)
  const [postList,setPostList]=useState(parshProduceData)

  const postData = () => {
    axios
      .post(baseUrl + "yield", { ...postList, yieldNameHindi: text })
      .then(() => {
       navigate("/ProduceTabel")
      });
  };
  const getHindi = () => {
    axios
      .get(baseUrl + `translate?text=${postList.yieldName}&lang=hi`)
      .then((res) => setPostList({...postList,yieldNameHindi:res.data}));
  };
  useEffect(()=>{
    if(postList.yieldName!==""){
    const timeout= setTimeout(()=>{
      getHindi()
    },1000)
    return ()=>clearTimeout(timeout)
  }
  },[postList.yieldName])
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
                              {" "}
                              <div className="accordion-body">
                                <div className="row g-3">
                                  <div className="col-md-12">
                                    <div className="row">
                                      <label
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Party"
                                      >
                                 उपज आईडी०  
                                      </label>
                                      <div className="col-sm-9">
                                        <input
                                        autoFocus id={"input-one"}
                                        onKeyUp={handleKeyUp}
                                        ref={one}
                                          value={postList.yieldId}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              yieldId: e.target.value,
                                            })
                                          }
                                          type="text"
                                          className="form-control"
                                          placeholder="Upaj Id"
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
                                        उपज का नाम   
                                      </label>
                                      <div className="col-sm-9">
                                        <input
                                         id={"input-two"}
                                        onKeyUp={handleKeyUp}
                                        ref={two}
                                          value={postList.yieldName}
                                          onChange={(e) => {
                                            setPostList({
                                              ...postList,
                                              yieldName: e.target.value,
                                            });
                                          }}
                                          type="text"
                                          className="form-control"
                                          placeholder="Upaj Name"
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
                                       उपज का नाम(हिंदी)
                                      </label>
                                      <div className="col-sm-9">
                                      <input
                                          value={postList.yieldNameHindi}
                                          disabled
                                          type="text"
                                          className="form-control"
                                          placeholder="Upaj Name(Hindi)"
                                        />
                                      </div>
                                    </div>
                                  </div>
                               

                                  <div className="col-md-6">
                                    <div className="row">
                                      <label
                                        className="col-sm-6 col-form-label text-sm-end"
                                        htmlFor="collapsible-Country"
                                      >
                                        मंडी टेक्स (%) 
                                      </label>
                                      <div className="col-sm-6">
                                        <input 
                                        id={"input-three"}
                                        onKeyUp={handleKeyUp}
                                        ref={three}
                                          value={postList.mandiTax}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              mandiTax: e.target.value,
                                            })
                                          }
                                          placeholder="Mandi Tax"
                                          className="form-control"
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
                                       निराश्रित शुल्क (%)
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                        id={"input-four"}
                                        onKeyUp={handleKeyUp}
                                        ref={four}
                                        
                                          value={postList.unsecuredFee}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              unsecuredFee: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          placeholder="Unsecured fee"
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
                                        HSN कोड
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                        id={"input-five"}
                                        onKeyUp={handleKeyUp}
                                        ref={five}
                                        
                                          value={postList.hsnCode}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              hsnCode: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          placeholder="HSN Code"
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
                                        GST कर योग्यता
                                      </label>
                                      <div className="col-sm-6">
                                        <select
                                        ref={six}
                                        
                                          value={postList.gstTax}
                                          onChange={(e) =>{
                                            seven.current.focus()
                                            setPostList({
                                              ...postList,
                                              gstTax: e.target.value,
                                            })}
                                          }
                                          className="form-select"
                                         
                                        >
                                          <option value={""} disabled selected>--Select--</option>
                                          <option>Exampt</option>
                                          <option>Nil Rated</option>
                                          <option>Taxable</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="row">
                                      <label
                                        className="col-sm-3 col-form-label text-sm-end"
                                        htmlFor="collapsible-Mobile"
                                      >
                                        IGST
                                      </label>
                                      <div className="col-sm-3">
                                        <input type="number"
                                        id={"input-seven"}
                                        onKeyUp={handleKeyUp}
                                        ref={seven}
                                        
                                          value={postList.igst}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              igst: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          placeholder="IGST"
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
                                        CGST
                                      </label>
                                      <div className="col-sm-3">
                                        <input
                                          id={"input-eight"}
                                          onKeyUp={handleKeyUp}
                                          ref={eight}
                                           type="number"
                                          value={postList.cgst}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              cgst: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          placeholder="CGST "
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
                                        SGST
                                      </label>
                                      <div className="col-sm-3">
                                        <input
                                        id={"input-nine"}
                                        onKeyUp={handleKeyUp}
                                        ref={nine}
                                        
                                        type="number"
                                          value={postList.sgst}
                                          onChange={(e) =>
                                            setPostList({
                                              ...postList,
                                              sgst: e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          placeholder="SGST"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 text-center">
                        <button
                        id={"input-ten"}
                        onKeyUp={handleKeyUp}
                        ref={ten}
                        
                          onClick={() => postData()}
                          type="submit"
                          className="btn btn-success me-sm-3 me-1"
                        >
                          Update
                        </button>
                        <button
                          onClick={() =>navigate('/ProduceTabel')}
                          type="submit"
                          className="btn btn-secondary me-sm-3 me-1"
                        >
                          Close
                        </button>
                      </div>
                      <br/>
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