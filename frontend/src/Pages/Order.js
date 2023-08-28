import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl"
function SaleRegistration() {
 
  const navigate = useNavigate()


  const ddmmyy = (x) => {
    if (x) {
      const date = x.split("-")
      const dd = date[2]
      const mm = date[1]
      const yy = date[0]
      const final = `${dd}/${mm}/${yy}`
      return final

    }
  }
  const ddmmyy1 = (x) => {
    const date = new Date(x)
    const dd = date.getDate()
    const ndd = dd < 10 ? `0${dd}` : dd
    const mm = date.getMonth() + 1
    const nmm = mm < 10 ? `0${mm}` : mm
    const yy = date.getFullYear()
    const hh = date.getHours()
    const nhh = hh > 12 ? hh - 12 : hh
    const mn = date.getMinutes()
    const nmn = mn < 10 ? `0${mn}` : mn
    const ampm = hh > 11 ? "pm" : "am"

    return `${ndd}/${nmm}/${yy} ${nhh}:${nmn} ${ampm}`
  }
  const ddmmyy2 = (x) => {
    const date = new Date(x)
    const dd = date.getDate()
    const ndd = dd < 10 ? `0${dd}` : dd
    const mm = date.getMonth() + 1
    const nmm = mm < 10 ? `0${mm}` : mm
    const yy = date.getFullYear()

    return `${yy}-${nmm}-${ndd}`
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
                      <a onClick={() => navigate("/AddOrder")}>
                        <button
                          type="submit"
                          style={{backgroundColor:"#def2d4"}}
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Order
                        </button>
                      </a>
                  </div>

                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped"
                  style={{ zoom: `${window.innerWidth < 800 ? 56 : 100}%` }}>
                    <thead>
                      <tr  style={{backgroundColor:"#def2d4"}}>
                        <th>S No.</th>
                        <th>Order</th>
                        <th>PARTY NAME</th>
                        <th>LOCATION</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                   <tr>
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
