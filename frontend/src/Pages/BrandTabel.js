import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { useRef } from "react";
function PartyTabel() {
  useEffect(()=>{getBrandData()},[])
const navigate = useNavigate()
const [brandData,setBrandData]=useState([])
const getBrandData=()=>{
  axios.get(baseUrl + "brand").then((res)=>setBrandData(res.data.data))
}
const delFn=(x)=>{
  axios.delete(baseUrl + "brand/"+x).then(()=>getBrandData())
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
                      <a onClick={()=>navigate("/AddBrand")} >
                        <button style={{backgroundColor:"#def2d4"}}
                          type="submit"
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Brand
                        </button>
                      </a>




                  </div>
                  

                </div>
            
               
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr style={{backgroundColor:"#def2d4"}}>
                        <th>Brand Name</th>
                   
                  
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {brandData.map((i)=>
                      <tr>
                        <td>{i.brandName}</td>
                    <td>
                          <div className="">
                              <a
                              onClick={()=>{
                                localStorage.setItem("editBrandData",JSON.stringify(i))
                                navigate("/EditBrand")
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
