import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { useRef } from "react";
function PartyTabel() {
  useEffect(()=>{getGodownData()},[])
const navigate = useNavigate()
const [godownData,setGodownData]=useState([])
const getGodownData=()=>{
  axios.get(baseUrl + "godown").then((res)=>setGodownData(res.data.data))
}
const delFn=(x)=>{
  axios.delete(baseUrl + "godown/"+x).then(()=>getGodownData())
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
                      <a onClick={()=>navigate("/AddGodown")} >
                        <button
                          type="submit" style={{backgroundColor:"#def2d4"}}
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Godown
                        </button>
                      </a>




                  </div>
                  

                </div>
            
               
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr style={{backgroundColor:"#def2d4"}}>
                        <th>Godown Number</th>
                        <th>Godown Name </th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {godownData.map((i)=>
                      <tr>
                        
                        <td>{i.godownNumber}</td>
                        <td>{i.godownName}</td>
                        <td>
                          <div className="">
                              <a
                              onClick={()=>{
                                localStorage.setItem("editGodownData",JSON.stringify(i))
                                navigate("/EditGodown")
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
