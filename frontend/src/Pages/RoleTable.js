import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
const RoleTable = () => { 
  const localData = localStorage.getItem("rolelist")
  const parseData = localData?JSON.parse(localData):[]

  const delFn = (x) => {
    axios
      .delete(baseUrl + "role/" + x)
      .then(() => getData());
  };

  const getData = () => {
    axios
      .get(baseUrl + "role")
      .then((res) => {
        setPartyData(res.data.data)

      });
  };

  const [partyData, setPartyData] = useState(parseData);
  const [partyData1, setPartyData1] = useState([]);

  const navigate = useNavigate();

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="container-xxl flex-grow-1 container-p-y">
              {/* Responsive Table */}
              <div className="card">
                <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
                    <a onClick={() => navigate("/RoleAdd")}>
                      <button
                        type="submit"
                        style={{backgroundColor:"#def2d4"}}
                        className="btn btn me-sm-3 me-1"
                      >
                        Add Department
                      </button>
                    </a>
                  <br />
                  <br />

                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr style={{backgroundColor:"#def2d4"}} className="text-nowrap">
                        <th>S No.</th>
                        <th>Department</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partyData.map((i, n) => (
                        <tr>
                          <td>{n + 1}</td>
                          <td>{i.role}</td>

                          <td>
                              <i onClick={() => {
                                localStorage.setItem("editroledata", JSON.stringify(i))
                                navigate("/RoleEdit")
                              }} className="fa fa-pencil" ></i>
                              <i
                                style={{ marginLeft: 10, color: "blue" }}
                                className="fa fa-trash"
                                onClick={() => { if (window.confirm("are you sure")) delFn(i._id) }}
                              >

                              </i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> <br />
              <br />
              <br />
              {/*/ Responsive Table */}
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />
      </div>
    </div>
  );
};

export default RoleTable;
