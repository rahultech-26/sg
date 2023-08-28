import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
function SaleRegistration() {
  const navigate = useNavigate()
  const date = new Date();
  const dd = date.getDate();
  const ndd = dd < 10 ? `0${dd}` : dd;
  const mm = date.getMonth() + 1;
  const nmm = mm < 10 ? `0${mm}` : mm;
  const year = date.getFullYear();
  const finalDate = `${year}-${nmm}-${ndd}`;
  const date1 = new Date(Date.now()-259200000);
  const dd1 = date1.getDate();
  const ndd1 = dd < 10 ? `0${dd1}` : dd1;
  const mm1 = date1.getMonth() + 1;
  const nmm1 = mm1 < 10 ? `0${mm1}` : mm1;
  const year1 = date1.getFullYear();
  const finalDate1 = `${year1}-${nmm1}-${ndd1}`;
 

  


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
                  
                      <a onClick={() => navigate("/AddStock")}>
                        <button
                          type="submit"
                          style={{backgroundColor:"#def2d4"}}
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Stock
                        </button>
                      </a>
                      </div>
                     
                     
                </div>
               
               
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped"
                  style={{ zoom: `${window.innerWidth < 800 ? 60  : 100}%`}}>
                    <thead>
                      <tr style={{backgroundColor:"#def2d4"}}>
                        <th>S No.</th>
                        <th>DATE</th>
                        <th>Supervisor</th>
                        <th>Shift</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                     <tr >
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        <div className="drag-target" />
      </div>
    </>
  );

}

export default SaleRegistration;
