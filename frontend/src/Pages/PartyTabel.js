import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import { baseUrl } from "./BaseUrl";
function PartyTabel() {
  useEffect(()=>{getPartData()},[])
const navigate = useNavigate()
const [partyData,setPartyData]=useState([])
const getPartData=()=>{
  axios.get(baseUrl + "party").then((res)=>setPartyData(res.data.data))
}
const delFn=(x)=>{
  axios.delete(baseUrl + "party/"+x).then(()=>getPartData())
}
  return (
    <>

      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">

            <div className="container-xxl flex-grow-1 container-p-y">
              {/* Striped Rows */}
              <div className="card">

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
                      <a onClick={()=>navigate("/AddParty")} >
                        <button
                          type="submit"
                          className="btn btn-primary me-sm-3 me-1"
                        >
                          Add Party
                        </button>
                      </a>




                  </div>
                  

                </div>
            
               
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr className="table-primary">
                        <th>S No.</th>
                        <th>Party Name </th>
                        <th>Mobile No.</th>
                        <th>Type</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {partyData.map((i)=>
                      <tr>
                        <td className="td"></td>
                        <td>{i.partyName}</td>
                        <td>{i.type}</td>
                        <td>{i.mobileNo}</td>
                        
                        <td>
                          <div className="">
                              <a
                              onClick={()=>{
                                localStorage.setItem("editPartyData",JSON.stringify(i))
                                navigate("/EditParty")
                              }}
                                style={{
                                  color: "#696cff",
                                  cursor: "Pointer",
                                }}
                              >
                                <i class="fa fa-pencil" />
                              </a>
                              <a onClick={()=>{
                                if(window.confirm("are you sure")){
                              delFn(i._id)}}} className=""  style={{
                                cursor: "Pointer",
                              }}>
                                <i className="bx bx-trash me-1" />
                              </a>
                          </div>
                        </td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <br />
              <br />
              {/*/ Striped Rows */}
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />
      </div>
    </>
  );

}

export default PartyTabel;
