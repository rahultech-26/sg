import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
const UserTable = () => {
  const delFn = (x) => {
    axios
      .delete(baseUrl + "login/" + x)
      .then(() => getData());
  };

  const getData = () => {
    axios
      .get(baseUrl + "login")
      .then((res) => {
        setPartyData(res.data.data)
      });
  };
  const [partyData, setPartyData] = useState([]);

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
                    <a onClick={() => navigate("/UserRegister")}>
                      <button
                        type="submit"
                        className="btn btn-primary me-sm-3 me-1"
                      >
                        Add New User
                      </button>
                    </a>
                  <br />
                  <br />
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped"
                  style={{ zoom: `${window.innerWidth < 800 ? 60 : 100}%` }}>
                    <thead>
                      <tr className="text-nowrap table-primary">
                        <th>S No.</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>MOBILE NO.</th>
                        <th>EMAIL ID</th>
                        <th>USER NAME</th>
                        <th>PASSWORD</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partyData.map((i, n) => (
                        <tr>
                          <td>{n + 1}</td>
                          <td>{i.firstName} {i.lastName}</td>
                          <td>{i.role}</td>
                          <td>{i.phoneNumber}</td>
                          <td>{i.emailId}</td>
                          <td>{i.username}</td>
                          <td>{i.password}</td>
                          <td>
                              <>
                                <i style={{ color: "rgb(95,97,222" }}
                                  className="fa fa-edit"
                                  onClick={() => {
                                    localStorage.setItem("edituser", JSON.stringify(i))
                                    navigate("/EditUserRegister")
                                  }}
                                >

                                </i>&nbsp;&nbsp;
                                <i
                                  className="fa fa-trash"
                                  onClick={() => { if (window.confirm("are you sure")) delFn(i._id) }}
                                >

                                </i></>
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

export default UserTable;
