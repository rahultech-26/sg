import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { baseUrl } from './BaseUrl'
import { useNavigate } from 'react-router-dom'
function AddPartyPurchase() {
    useEffect(()=>{getBroker();getParty()},[])
    const date = new Date()
    const dd = date.getDate()
    const ndd = dd<10?`0${dd}`:dd
    const mm = date.getMonth()
    const nmm = mm<10?`0${mm}`:mm
    const yy = date.getFullYear()
    const finalDate = `${yy}-${nmm}-${ndd}`
    const navigate=useNavigate()
    const [postData,setPostData]=useState({
        saudaDate: finalDate,
        brokerName: "",
        partyName: "",
        cashDiscount: "",
        freightCondition: "",
        freight: "",
        rate: "",
        quantity: ""
    })
    const [validator,setValidator]=useState(false)
    const [isSubmit,setIsSubmit]=useState(true)
    const [brokerData,setBrokerData]=useState([])
    const getBroker = ()=>{
        axios.get(baseUrl + "broker").then((res)=>setBrokerData(res.data.data.filter((i)=>i.type==="Purchase")))
    }
    const getParty = ()=>{
        axios.get(baseUrl + "party").then((res)=>setPartyData(res.data.data.filter((i)=>i.type==="Purchase")))
    }
    const [partyData,setPartyData]=useState([])
    const postDataFn =()=>{
        if (postData.saudaDate !== "" & postData.brokerName !== "" & postData.partyName !== "" & postData.cashDiscount !== "" & postData.freightCondition !== "" & postData.freight !== "" & postData.rate !== "" & postData.quantity !== ""){
        setIsSubmit(false)
        axios.post(baseUrl+"partypurchase",postData).then(()=>navigate("/PartyPurchase"))}
        else{setValidator(true)}
    }
  return (
    <div>
        <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container" >
          <Sidebar />
          <div className="layout-page">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row my-4">
                <div className="col">
                  {/* <h6> Collapsible Section </h6> */}
                  <div className="accordion">
                    {/* Delivery Address */}
                    <div className="card accordion-item">
                      <div id="collapseDeliveryAddress" className="accordion-collapse collapse show" aria-labelledby="headingDeliveryAddress" data-bs-parent="#collapsibleSection">
                        {/* <h5 class="card-header">Sale Form</h5> */}
                        <div className="accordion-body">
                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="collapsible-Sauda">Trade
                                  Date</label>
                                <div className="col-sm-9">
                                  <input type="date" value={postData.saudaDate} onChange={(e) => setPostData({ ...postData, saudaDate: e.target.value })} className="form-control" />
                                  <span style={{ display: validator & postData?.saudaDate === "" ? "" : "none", color: "red" }}>* feild is required</span>
                                </div>

                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="collapsible-Broker">Broker Name</label>
                                <div className="col-sm-9">
                                  <select value={postData.brokerName} onChange={(e) => setPostData({ ...postData, brokerName: e.target.value })} id="collapsible-Broker" className=" form-select" data-allow-clear="true">

                                    <option selected >--Select--</option>
                                    {brokerData.map((i) => <option>{i.partyName}</option>)}
                                  </select>
                                  <span style={{ display: validator & postData?.brokerName === "" ? "" : "none", color: "red" }}>* feild is required</span>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="collapsible-Party">Party Name</label>
                                <div className="col-sm-9">
                                  <select value={postData.partyName} onChange={(e) => setPostData({ ...postData, partyName: e.target.value })} className=" form-select">

                                    <option selected>--Select--</option>
                                    {partyData.map((i) => <option>{i.partyName}</option>)}


                                  </select>
                                  <span style={{ display: validator & postData?.partyName === "" ? "" : "none", color: "red" }}>* feild is required</span>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="cd">CD</label>
                                <div className="col-sm-9">
                                  <select value={postData.cashDiscount} onChange={(e) => setPostData({ ...postData, cashDiscount: e.target.value })} className="form-select">
                                    <option selected >--select--</option>
                                    <option>NO CD</option>
                                    <option>0.5</option>
                                    <option>1</option>
                                    <option>1.5</option>
                                    <option>2</option>
                                    <option>2.5</option>
                                    <option>3</option>
                                  </select>
                                  <span style={{ display: validator & postData?.cashDiscount === "" ? "" : "none", color: "red" }}>* feild is required</span>


                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="FREIGHTCONDITION">FREIGHT CONDITION</label>
                                <div className="col-sm-9">
                                  <select value={postData.freightCondition} className=" form-select" onChange={(e) => setPostData({ ...postData, freightCondition: e.target.value })}>

                                    <option selected >--Select--</option>
                                    <option>Spot Rate</option>
                                    <option>Factory Rate</option>
                                  </select>
                                  <span style={{ display: validator & postData?.freightCondition === "" ? "" : "none", color: "red" }}>* feild is required</span>


                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="collapsible-FREIGHT">FREIGHT</label>
                                <div className="col-sm-9">
                                  <input value={postData.freight} onChange={(e) => setPostData({ ...postData, freight: e.target.value })} type="number" className="form-control" />
                                  <span style={{ display: validator & postData?.freight === "" ? "" : "none", color: "red" }}>* feild is required</span>

                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="RATE">RATE</label>
                                <div className="col-sm-9">
                                  <input value={postData.rate} onChange={(e) => setPostData({ ...postData, rate: e.target.value })} type="number" className="form-control" />
                                  <span style={{ display: validator & postData?.rate === "" ? "" : "none", color: "red" }}>* feild is required</span>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" >QUANTITY<br /> (in Ton)</label>
                                <div className="col-sm-9">
                                  <input value={postData.quantity} onChange={(e) => setPostData({ ...postData, quantity: e.target.value })} type="number" className="form-control " placeholder="number" />
                                  <span style={{ display: validator & postData?.quantity === "" ? "" : "none", color: "red" }}>* feild is required</span>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <label className="col-sm-3 col-form-label text-sm-end" >Remark</label>
                                <div className="col-sm-9">
                                  <textarea value={postData.remark} onChange={(e) => setPostData({ ...postData, remark: e.target.value })} className="form-control" rows={4} />

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <a>
                              <button disabled={!isSubmit} type="submit" className="btn btn-primary me-sm-3 me-1" onClick={() => postDataFn()}>Submit</button>
                            </a>
                            <button type="reset" className="btn btn-label-secondary" onClick={() => navigate("/PartyPurchase")}>Cancel</button>
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

export default AddPartyPurchase