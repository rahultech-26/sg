import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import { baseUrl } from "./BaseUrl";

function FarmTable() {
    useEffect(()=>{getData()},[])
    const navigate = useNavigate()
    const [data,setData]=useState([])
    const getData=()=>{
      axios.get(baseUrl + "farm").then((res)=>setData(res.data.data))
    }
    const delFn=(x)=>{
      axios.delete(baseUrl + "farm/"+x).then(()=>getData())
    }
  return (
    <div>
        
        <div className="layout-wrapper layout-content-navbar  ">
    <div className="layout-container">
      <Sidebar />
      <div className="layout-page">

        <div className="container-xxl flex-grow-1 container-p-y">
          {/* Striped Rows */}
          <div className="card">

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
                  <a onClick={()=>navigate("/AddFarm")} >
                    <button
                    style={{backgroundColor:"#def2d4"}}
                      type="submit"
                      className="btn btn me-sm-3 me-1"
                    >
                      Add Farm
                    </button>
                  </a>




              </div>
              

            </div>
        
           
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr style={{backgroundColor:"#def2d4"}}>
                    <th>S No.</th>
                    <th>Farm Name </th>
                    <th>Licence No</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {data.map((i)=>
                  <tr>
                    <td className="td"></td>
                    <td>{i.farmName}</td>
                    <td>{i.mandiLicenceNo +"/"+i.manNo}</td>
                    
                    <td>
                      <div className="">
                          <a
                          onClick={()=>{
                            localStorage.setItem("editfarmData",JSON.stringify(i))
                            navigate("/EditFarm")
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
  </div></div>
  )
}

export default FarmTable