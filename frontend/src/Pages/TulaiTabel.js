import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { useRef } from "react";
function PartyTabel() {
  useEffect(()=>{getTulaiData()},[])
const navigate = useNavigate()
const [tulaiData,setTulaiData]=useState([])
const getTulaiData=()=>{
  axios.get(baseUrl + "tulai").then((res)=>setTulaiData(res.data.data))
}
const delFn=(x)=>{
  axios.delete(baseUrl + "tulai/"+x).then(()=>getTulaiData())
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
                      <a onClick={()=>navigate("/AddTulai")} >
                        <button
                        style={{backgroundColor:"#def2d4"}}
                          type="submit"
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Tulai
                        </button>
                      </a>




                  </div>
                  

                </div>
            
               
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr style={{backgroundColor:"#def2d4"}}>
                        <th>Tulai Id.</th>
                        <th>Labour Rate </th>
                        <th>Labour Rate (Print) </th>
                        <th>Labour Type </th>
                        <th>Tulai Rate </th>
                        <th>Tulai Rate (Print) </th>
                        <th>Tulai Type </th>
                  
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {tulaiData.map((i)=>
                      <tr>
                        
                        <td>{i.tulaiId}</td>
                        <td>{i.labourRate}</td>
                        <td>{i.labourRatePrint}</td>
                        <td>{i.labourType}</td>
                        <td>{i.tulaiRate}</td>
                        <td>{i.tulaiRatePrint}</td>
                        <td>{i.tulaiType}</td>
                        
                        
                        <td>
                          <div className="">
                              <a
                              onClick={()=>{
                                localStorage.setItem("editTulaiData",JSON.stringify(i))
                                navigate("/EditTulai")
                              }}
                                style={{
                                  color: "#696cff",
                                  cursor: "Pointer",
                                }}
                              >
                                <i class="fa fa-edit" />
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
