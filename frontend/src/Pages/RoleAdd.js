import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./BaseUrl";
import { ThreeCircles } from "react-loader-spinner";
function UserRegister() {
  
  const [isSubmit,setIsSubmit]=useState(true)
  const [postData, setPostData] = useState({
    role: "",
    permissions: {
      AllowAccess: [],
      AllowTable: [],
      Dashboard: [],
      PurchaseTrade: [],
      PurchaseTransactions: [],
      DirectPurchaseTransactions: [],
      WheatBagTransactions: [],
      WheatLabReport: [],
      SalesTrade: [],
      SalesTransactions: [],
      DirectSalesTransactions: [],
      AverageRate: [],
      VehicleRecord: [],
      TransportTransactions: [],
      Office: [],
      In: [],
      UnloadingSupervisor: [],
      UnloadingSummary: [],
      Out: [],
      Visitor: [],
      AttaTest: [],
      AttaReport: [],
      MaidaTest: [],
      MaidaReport: [],
      MaidaProduction: [],
      MaidaProductionReport: [],
      Stock: [],
      StockReport: [],
      Order: [],
      OrderReport: [],
      Dispatch: [],
      DispatchHistory: [],
      DispatchSummary: [],
      AdvanceStockReport: [],
      WheatBagStock: [],
      Party: [],
      Broker: [],
      Location: [],
      Transporter: [],
      LabIncharge: [],
      ItemType: [],
      ProductionItem: [],
      CheackList: [],
      MeterReading: [],
      WheatTank: [],
      Mill: [],
      Pesa: [],
      Department: [],
      UserRegistration: [],
      Logs: [],
      Backup: [],
    },
  });
  const clearpermissions = {
    AllowAccess: [],
    AllowTable: [],
    Dashboard: [],
    PurchaseTrade: [],
    PurchaseTransactions: [],
    DirectPurchaseTransactions: [],
    WheatBagTransactions: [],
    WheatLabReport: [],
    SalesTrade: [],
    SalesTransactions: [],
    DirectSalesTransactions: [],
    AverageRate: [],
    VehicleRecord: [],
    TransportTransactions: [],
    Office: [],
    In: [],
    UnloadingSupervisor: [],
    UnloadingSummary: [],
    Out: [],
    Visitor: [],
    AttaTest: [],
    AttaReport: [],
    MaidaTest: [],
    MaidaReport: [],
    MaidaProduction: [],
    MaidaProductionReport: [],
    Stock: [],
    StockReport: [],
    Order: [],
    OrderReport: [],
    Dispatch: [],
    DispatchSummary: [],
    AdvanceStockReport: [],
    WheatBagStock: [],
    Party: [],
    Broker: [],
    Location: [],
    Transporter: [],
    LabIncharge: [],
    ItemType: [],
    ProductionItem: [],
    CheackList: [],
    InOut: [],
    MeterReading: [],
    WheatTank: [],
    Mill: [],
    Pesa: [],
    Department: [],
    UserRegistration: [],
    Logs: [],
    Backup: [],
  };
  const allpermissions = {
    AllowAccess: ["view", "add", "edit", "delete", "export"],
    AllowTable: ["view", "add", "edit", "delete", "export"],
    Dashboard: ["view", "add", "edit", "delete", "export"],
    PurchaseTrade: ["view", "add", "edit", "delete", "export"],
    PurchaseTransactions: ["view", "add", "edit", "delete", "export"],
    DirectPurchaseTransactions: ["view", "add", "edit", "delete", "export"],
    WheatBagTransactions: ["view", "add", "edit", "delete", "export"],
    WheatLabReport: ["view", "add", "edit", "delete", "export"],
    SalesTrade: ["view", "add", "edit", "delete", "export"],
    SalesTransactions: ["view", "add", "edit", "delete", "export","status"],
    DirectSalesTransactions: ["view", "add", "edit", "delete", "export"],
    AverageRate: ["view", "add", "edit", "delete", "export"],
    VehicleRecord: ["view", "add", "edit", "delete", "export"],
    TransportTransactions: ["view", "add", "edit", "delete", "export"],
    Office: ["view","viewall", "add", "edit", "delete", "export"],
    In: ["view", "add", "edit", "delete", "export"],
    UnloadingSupervisor: ["view", "add", "edit", "delete", "export"],
    UnloadingSummary: ["view", "add", "edit", "delete", "export"],
    Out: ["view", "add", "edit", "delete", "export"],
    Visitor: ["view", "add", "edit", "delete", "export"],
    AttaTest: ["view", "add", "edit", "delete", "export","filter"],
    AttaReport: ["view", "add", "edit", "delete", "export"],
    MaidaTest: ["view", "add", "edit", "delete", "export","filter"],
    MaidaReport: ["view", "add", "edit", "delete", "export"],
    MaidaProduction: ["view", "add", "edit", "delete", "export","filter"],
    MaidaProductionReport: ["view", "add", "edit", "delete", "export","filter"],
    Stock: ["view", "add", "edit", "delete", "export","filter"],
    StockReport: ["view", "add", "edit", "delete", "export"],
    Order: ["view","viewall", "add", "edit", "delete", "export"],
    OrderReport: ["view", "add", "edit", "delete", "export"],
    Dispatch: ["view", "add", "edit", "delete", "export"],
    DispatchSummary: ["view", "add", "edit", "delete", "export"],
    AdvanceStockReport: ["view", "add", "edit", "delete", "export"],
    WheatBagStock: ["view", "add", "edit", "delete", "export"],
    Party: ["view", "add", "edit", "delete", "export"],
    Broker: ["view", "add", "edit", "delete", "export"],
    Location: ["view", "add", "edit", "delete", "export"],
    Transporter: ["view", "add", "edit", "delete", "export"],
    LabIncharge: ["view", "add", "edit", "delete", "export"],
    ItemType: ["view", "add", "edit", "delete", "export"],
    ProductionItem: ["view", "add", "edit", "delete", "export"],
    CheackList: ["view", "add", "edit", "delete", "export"],
    InOut: ["view", "add", "edit", "delete", "export", "w", "g", "s"],
    MeterReading: ["view", "add", "edit", "delete", "export","filter"],
    WheatTank: ["view", "add", "edit", "delete", "export","filter"],
    Mill: ["view", "add", "edit", "delete", "export","filter"],
    Pesa: ["view", "add", "edit", "delete", "export","filter"],
    Department: ["view", "add", "edit", "delete", "export"],
    UserRegistration: ["view", "add", "edit", "delete", "export"],
    Logs: ["view", "add", "edit", "delete", "export"],
    Backup: ["view", "add", "edit", "delete", "export"],
  };

  const submitData = () => {
    setIsSubmit(false)
    axios.post(baseUrl + "role", postData).then(() => navigate("/RoleTable"));
  };
  const navigate = useNavigate();

  return (
    <>
     {!isSubmit&&
      <div
                style={{
                  zIndex: 10,
                  position: "fixed",
                  width: "100%",
                  height: "100vh",
                  backgroundColor: "rgb(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                 <ThreeCircles
        height="100"
        width="100"
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
           
              </div>}
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="container-xxl  container-p-y">
              {/* Content */}
              {/* Collapsible Section */}
              <div className="row my-4">
                <div className="col">
                  {/* <h6> Collapsible Section </h6> */}
                  <div className="accordion">
                    {/* Delivery Address */}
                    <div className="card accordion-item">
                      <div
                        id="collapseDeliveryAddress"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingDeliveryAddress"
                        data-bs-parent="#collapsibleSection"
                      >
                        {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                        <div className="accordion-body">
                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Department
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    value={postData.role}
                                    onChange={(e) =>
                                      setPostData({
                                        ...postData,
                                        role: e.target.value,
                                      })
                                    }
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-xxl flex-grow-1">
              {/* Content */}
              {/* Collapsible Section */}
              <div className="row my-4">
                <div className="col">
                  {/* <h6> Collapsible Section </h6> */}
                  <div className="accordion">
                    {/* Delivery Address */}
                    <div className="card accordion-item">
                      <div
                      // id="collapseDeliveryAddress"
                      // className="accordion-collapse collapse show"
                      // aria-labelledby="headingDeliveryAddress"
                      // data-bs-parent="#collapsibleSection"
                      >
                        {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                        <div className="accordion-body">
                          <div className="row g-3">
                            <h1>Select Permissions</h1>
                            <div>
                              <button
                              
                                onClick={() =>
                                  setPostData({
                                    ...postData,
                                    permissions: allpermissions,
                                  })
                                }
                                style={{ color: "white", marginRight: 10,backgroundColor:"#def2d4" }}
                                className="btn btn"
                              >
                                SelectAll
                              </button>
                              <button
                                onClick={() =>
                                  setPostData({
                                    ...postData,
                                    permissions: clearpermissions,
                                  })
                                }
                                style={{ color: "white",backgroundColor:"#def2d4" }}
                                className="btn btn"
                              >
                                ClearAll
                              </button>
                            </div>
                            <div
                              style={{
                                width: "99%",

                                backgroundColor: "white",
                              }}
                            >
                              <table className="table table-bordered">

                                <tbody className="table table-bordered">

                                  {/* <tr >
                                    {" "}
                                    <td>Allow Access From All IP</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AllowAccess?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AllowAccess?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AllowAccess:
                                                    postData.permissions.AllowAccess.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AllowAccess: [
                                                    ...postData.permissions
                                                      .AllowAccess,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}

                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Allow Mobile Table View Set</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AllowTable?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AllowTable?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AllowTable:
                                                    postData.permissions.AllowTable.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AllowTable: [
                                                    ...postData.permissions
                                                      .AllowTable,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}

                                    </td>{" "}
                                  </tr> */}
                                  <tr>
                                    {" "}
                                    <td>Dashboard</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Dashboard?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Dashboard?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard:
                                                    postData.permissions.Dashboard.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard: [
                                                    ...postData.permissions
                                                      .Dashboard,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Dashboard?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Dashboard?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard:
                                                    postData.permissions.Dashboard.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard: [
                                                    ...postData.permissions
                                                      .Dashboard,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Dashboard?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Dashboard?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard:
                                                    postData.permissions.Dashboard.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard: [
                                                    ...postData.permissions
                                                      .Dashboard,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Dashboard?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Dashboard?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard:
                                                    postData.permissions.Dashboard.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard: [
                                                    ...postData.permissions
                                                      .Dashboard,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Dashboard?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Dashboard?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard:
                                                    postData.permissions.Dashboard.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Dashboard: [
                                                    ...postData.permissions
                                                      .Dashboard,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <th style={{ fontSize: 23, }} >Purchase</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Mandi</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTrade?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTrade?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade:
                                                    postData.permissions.PurchaseTrade.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade: [
                                                    ...postData.permissions
                                                      .PurchaseTrade,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTrade?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTrade?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade:
                                                    postData.permissions.PurchaseTrade.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade: [
                                                    ...postData.permissions
                                                      .PurchaseTrade,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTrade?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTrade?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade:
                                                    postData.permissions.PurchaseTrade.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade: [
                                                    ...postData.permissions
                                                      .PurchaseTrade,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTrade?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTrade?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade:
                                                    postData.permissions.PurchaseTrade.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade: [
                                                    ...postData.permissions
                                                      .PurchaseTrade,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTrade?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTrade?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade:
                                                    postData.permissions.PurchaseTrade.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTrade: [
                                                    ...postData.permissions
                                                      .PurchaseTrade,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Report</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTransactions?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTransactions?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions:
                                                    postData.permissions.PurchaseTransactions.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions: [
                                                    ...postData.permissions
                                                      .PurchaseTransactions,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTransactions?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTransactions?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions:
                                                    postData.permissions.PurchaseTransactions.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions: [
                                                    ...postData.permissions
                                                      .PurchaseTransactions,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTransactions?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTransactions?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions:
                                                    postData.permissions.PurchaseTransactions.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions: [
                                                    ...postData.permissions
                                                      .PurchaseTransactions,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTransactions?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTransactions?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions:
                                                    postData.permissions.PurchaseTransactions.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions: [
                                                    ...postData.permissions
                                                      .PurchaseTransactions,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.PurchaseTransactions?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.PurchaseTransactions?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions:
                                                    postData.permissions.PurchaseTransactions.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  PurchaseTransactions: [
                                                    ...postData.permissions
                                                      .PurchaseTransactions,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <th style={{ fontSize: 23 }} >Sales</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Mandi</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTrade?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTrade?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade:
                                                    postData.permissions.SalesTrade.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade: [
                                                    ...postData.permissions
                                                      .SalesTrade,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTrade?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTrade?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade:
                                                    postData.permissions.SalesTrade.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade: [
                                                    ...postData.permissions
                                                      .SalesTrade,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTrade?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTrade?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade:
                                                    postData.permissions.SalesTrade.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade: [
                                                    ...postData.permissions
                                                      .SalesTrade,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTrade?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTrade?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade:
                                                    postData.permissions.SalesTrade.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade: [
                                                    ...postData.permissions
                                                      .SalesTrade,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTrade?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTrade?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade:
                                                    postData.permissions.SalesTrade.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTrade: [
                                                    ...postData.permissions
                                                      .SalesTrade,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Report</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTransactions?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTransactions?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions:
                                                    postData.permissions.SalesTransactions.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions: [
                                                    ...postData.permissions
                                                      .SalesTransactions,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTransactions?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTransactions?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions:
                                                    postData.permissions.SalesTransactions.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions: [
                                                    ...postData.permissions
                                                      .SalesTransactions,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTransactions?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTransactions?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions:
                                                    postData.permissions.SalesTransactions.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions: [
                                                    ...postData.permissions
                                                      .SalesTransactions,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Status</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTransactions?.includes(
                                            "status"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTransactions?.includes(
                                                "status"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions:
                                                    postData.permissions.SalesTransactions.filter(
                                                      (i) => i !== "status"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions: [
                                                    ...postData.permissions
                                                      .SalesTransactions,
                                                      "status",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTransactions?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTransactions?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions:
                                                    postData.permissions.SalesTransactions.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions: [
                                                    ...postData.permissions
                                                      .SalesTransactions,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.SalesTransactions?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.SalesTransactions?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions:
                                                    postData.permissions.SalesTransactions.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  SalesTransactions: [
                                                    ...postData.permissions
                                                      .SalesTransactions,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <th style={{ fontSize: 23 }} >Stock</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Wheat (Purchase)</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Office?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Office?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office:
                                                    postData.permissions.Office.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office: [
                                                    ...postData.permissions
                                                      .Office,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>
                                   
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View All</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Office?.includes(
                                            "viewall"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Office?.includes(
                                                "viewall"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office:
                                                    postData.permissions.Office.filter(
                                                      (i) => i !== "viewall"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office: [
                                                    ...postData.permissions
                                                      .Office,
                                                    "viewall",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Office?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Office?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office:
                                                    postData.permissions.Office.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office: [
                                                    ...postData.permissions
                                                      .Office,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Office?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Office?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office:
                                                    postData.permissions.Office.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office: [
                                                    ...postData.permissions
                                                      .Office,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Office?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Office?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office:
                                                    postData.permissions.Office.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office: [
                                                    ...postData.permissions
                                                      .Office,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Office?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Office?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office:
                                                    postData.permissions.Office.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Office: [
                                                    ...postData.permissions
                                                      .Office,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Wheat (Shorting)</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.In?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.In?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In:
                                                    postData.permissions.In.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In: [
                                                    ...postData.permissions
                                                      .In,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.In?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.In?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In:
                                                    postData.permissions.In.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In: [
                                                    ...postData.permissions
                                                      .In,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.In?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.In?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In:
                                                    postData.permissions.In.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In: [
                                                    ...postData.permissions
                                                      .In,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.In?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.In?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In:
                                                    postData.permissions.In.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In: [
                                                    ...postData.permissions
                                                      .In,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.In?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.In?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In:
                                                    postData.permissions.In.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  In: [
                                                    ...postData.permissions
                                                      .In,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                
                                  <tr>
                                    {" "}
                                    <td>Production</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Out?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Out?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out:
                                                    postData.permissions.Out.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out: [
                                                    ...postData.permissions
                                                      .Out,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Out?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Out?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out:
                                                    postData.permissions.Out.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out: [
                                                    ...postData.permissions
                                                      .Out,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Out?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Out?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out:
                                                    postData.permissions.Out.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out: [
                                                    ...postData.permissions
                                                      .Out,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Out?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Out?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out:
                                                    postData.permissions.Out.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out: [
                                                    ...postData.permissions
                                                      .Out,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Out?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Out?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out:
                                                    postData.permissions.Out.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Out: [
                                                    ...postData.permissions
                                                      .Out,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                            
                                  <tr>
                                    {" "}

                                    <th style={{ fontSize: 23 }} >Order</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Order</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AttaTest?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AttaTest?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest:
                                                    postData.permissions.AttaTest.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest: [
                                                    ...postData.permissions
                                                      .AttaTest,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AttaTest?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AttaTest?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest:
                                                    postData.permissions.AttaTest.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest: [
                                                    ...postData.permissions
                                                      .AttaTest,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AttaTest?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AttaTest?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest:
                                                    postData.permissions.AttaTest.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest: [
                                                    ...postData.permissions
                                                      .AttaTest,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AttaTest?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AttaTest?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest:
                                                    postData.permissions.AttaTest.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest: [
                                                    ...postData.permissions
                                                      .AttaTest,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AttaTest?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AttaTest?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest:
                                                    postData.permissions.AttaTest.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest: [
                                                    ...postData.permissions
                                                      .AttaTest,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Filter</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.AttaTest?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AttaTest?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest:
                                                    postData.permissions.AttaTest.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AttaTest: [
                                                    ...postData.permissions
                                                      .AttaTest,
                                                    "filter",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                
                                  <tr>
                                    {" "}
                                    <td>Dispatch Summary</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaTest?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaTest?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest:
                                                    postData.permissions.MaidaTest.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest: [
                                                    ...postData.permissions
                                                      .MaidaTest,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaTest?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaTest?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest:
                                                    postData.permissions.MaidaTest.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest: [
                                                    ...postData.permissions
                                                      .MaidaTest,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaTest?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaTest?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest:
                                                    postData.permissions.MaidaTest.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest: [
                                                    ...postData.permissions
                                                      .MaidaTest,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaTest?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaTest?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest:
                                                    postData.permissions.MaidaTest.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest: [
                                                    ...postData.permissions
                                                      .MaidaTest,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaTest?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaTest?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest:
                                                    postData.permissions.MaidaTest.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest: [
                                                    ...postData.permissions
                                                      .MaidaTest,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Filter</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaTest?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaTest?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest:
                                                    postData.permissions.MaidaTest.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaTest: [
                                                    ...postData.permissions
                                                      .MaidaTest,
                                                    "filter",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  
                                  <tr>
                                    {" "}

                                    <th style={{ fontSize: 23 }} >User Management</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Department</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProduction?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProduction?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction:
                                                    postData.permissions.MaidaProduction.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction: [
                                                    ...postData.permissions
                                                      .MaidaProduction,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProduction?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProduction?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction:
                                                    postData.permissions.MaidaProduction.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction: [
                                                    ...postData.permissions
                                                      .MaidaProduction,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProduction?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProduction?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction:
                                                    postData.permissions.MaidaProduction.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction: [
                                                    ...postData.permissions
                                                      .MaidaProduction,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProduction?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProduction?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction:
                                                    postData.permissions.MaidaProduction.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction: [
                                                    ...postData.permissions
                                                      .MaidaProduction,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProduction?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProduction?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction:
                                                    postData.permissions.MaidaProduction.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction: [
                                                    ...postData.permissions
                                                      .MaidaProduction,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Filter</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProduction?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProduction?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction:
                                                    postData.permissions.MaidaProduction.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProduction: [
                                                    ...postData.permissions
                                                      .MaidaProduction,
                                                    "filter",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>User</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProductionReport?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProductionReport?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport:
                                                    postData.permissions.MaidaProductionReport.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport: [
                                                    ...postData.permissions
                                                      .MaidaProductionReport,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProductionReport?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProductionReport?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport:
                                                    postData.permissions.MaidaProductionReport.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport: [
                                                    ...postData.permissions
                                                      .MaidaProductionReport,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProductionReport?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProductionReport?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport:
                                                    postData.permissions.MaidaProductionReport.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport: [
                                                    ...postData.permissions
                                                      .MaidaProductionReport,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProductionReport?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProductionReport?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport:
                                                    postData.permissions.MaidaProductionReport.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport: [
                                                    ...postData.permissions
                                                      .MaidaProductionReport,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProductionReport?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProductionReport?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport:
                                                    postData.permissions.MaidaProductionReport.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport: [
                                                    ...postData.permissions
                                                      .MaidaProductionReport,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Filter</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.MaidaProductionReport?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MaidaProductionReport?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport:
                                                    postData.permissions.MaidaProductionReport.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MaidaProductionReport: [
                                                    ...postData.permissions
                                                      .MaidaProductionReport,
                                                    "filter",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                               <tr>
                                    {" "}

                                    <th style={{ fontSize: 23 }} >Master</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Party</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Party?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Party?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party:
                                                    postData.permissions.Party.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party: [
                                                    ...postData.permissions
                                                      .Party,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Party?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Party?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party:
                                                    postData.permissions.Party.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party: [
                                                    ...postData.permissions
                                                      .Party,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Party?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Party?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party:
                                                    postData.permissions.Party.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party: [
                                                    ...postData.permissions
                                                      .Party,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Party?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Party?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party:
                                                    postData.permissions.Party.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party: [
                                                    ...postData.permissions
                                                      .Party,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Party?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Party?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party:
                                                    postData.permissions.Party.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Party: [
                                                    ...postData.permissions
                                                      .Party,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Broker</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Broker?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Broker?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker:
                                                    postData.permissions.Broker.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker: [
                                                    ...postData.permissions
                                                      .Broker,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Broker?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Broker?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker:
                                                    postData.permissions.Broker.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker: [
                                                    ...postData.permissions
                                                      .Broker,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Broker?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Broker?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker:
                                                    postData.permissions.Broker.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker: [
                                                    ...postData.permissions
                                                      .Broker,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Broker?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Broker?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker:
                                                    postData.permissions.Broker.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker: [
                                                    ...postData.permissions
                                                      .Broker,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Broker?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Broker?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker:
                                                    postData.permissions.Broker.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Broker: [
                                                    ...postData.permissions
                                                      .Broker,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Yield</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Location?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Location?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location:
                                                    postData.permissions.Location.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location: [
                                                    ...postData.permissions
                                                      .Location,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Location?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Location?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location:
                                                    postData.permissions.Location.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location: [
                                                    ...postData.permissions
                                                      .Location,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Location?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Location?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location:
                                                    postData.permissions.Location.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location: [
                                                    ...postData.permissions
                                                      .Location,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Location?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Location?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location:
                                                    postData.permissions.Location.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location: [
                                                    ...postData.permissions
                                                      .Location,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Location?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Location?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location:
                                                    postData.permissions.Location.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Location: [
                                                    ...postData.permissions
                                                      .Location,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Godown</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Transporter?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Transporter?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter:
                                                    postData.permissions.Transporter.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter: [
                                                    ...postData.permissions
                                                      .Transporter,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Transporter?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Transporter?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter:
                                                    postData.permissions.Transporter.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter: [
                                                    ...postData.permissions
                                                      .Transporter,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Transporter?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Transporter?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter:
                                                    postData.permissions.Transporter.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter: [
                                                    ...postData.permissions
                                                      .Transporter,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Transporter?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Transporter?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter:
                                                    postData.permissions.Transporter.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter: [
                                                    ...postData.permissions
                                                      .Transporter,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Transporter?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Transporter?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter:
                                                    postData.permissions.Transporter.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Transporter: [
                                                    ...postData.permissions
                                                      .Transporter,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Tulai</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.LabIncharge?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.LabIncharge?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge:
                                                    postData.permissions.LabIncharge.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge: [
                                                    ...postData.permissions
                                                      .LabIncharge,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.LabIncharge?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.LabIncharge?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge:
                                                    postData.permissions.LabIncharge.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge: [
                                                    ...postData.permissions
                                                      .LabIncharge,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.LabIncharge?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.LabIncharge?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge:
                                                    postData.permissions.LabIncharge.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge: [
                                                    ...postData.permissions
                                                      .LabIncharge,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.LabIncharge?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.LabIncharge?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge:
                                                    postData.permissions.LabIncharge.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge: [
                                                    ...postData.permissions
                                                      .LabIncharge,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.LabIncharge?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.LabIncharge?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge:
                                                    postData.permissions.LabIncharge.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  LabIncharge: [
                                                    ...postData.permissions
                                                      .LabIncharge,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Brand</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ItemType?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ItemType?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType:
                                                    postData.permissions.ItemType.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType: [
                                                    ...postData.permissions
                                                      .ItemType,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ItemType?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ItemType?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType:
                                                    postData.permissions.ItemType.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType: [
                                                    ...postData.permissions
                                                      .ItemType,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ItemType?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ItemType?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType:
                                                    postData.permissions.ItemType.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType: [
                                                    ...postData.permissions
                                                      .ItemType,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ItemType?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ItemType?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType:
                                                    postData.permissions.ItemType.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType: [
                                                    ...postData.permissions
                                                      .ItemType,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ItemType?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ItemType?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType:
                                                    postData.permissions.ItemType.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ItemType: [
                                                    ...postData.permissions
                                                      .ItemType,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Bank</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ProductionItem?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ProductionItem?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem:
                                                    postData.permissions.ProductionItem.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem: [
                                                    ...postData.permissions
                                                      .ProductionItem,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ProductionItem?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ProductionItem?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem:
                                                    postData.permissions.ProductionItem.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem: [
                                                    ...postData.permissions
                                                      .ProductionItem,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ProductionItem?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ProductionItem?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem:
                                                    postData.permissions.ProductionItem.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem: [
                                                    ...postData.permissions
                                                      .ProductionItem,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ProductionItem?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ProductionItem?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem:
                                                    postData.permissions.ProductionItem.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem: [
                                                    ...postData.permissions
                                                      .ProductionItem,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.ProductionItem?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.ProductionItem?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem:
                                                    postData.permissions.ProductionItem.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  ProductionItem: [
                                                    ...postData.permissions
                                                      .ProductionItem,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Bardana Mark</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Produce Type</td>{" "}
                                    <td
                                      style={{ border: "1px solid lightgrey" }}
                                    >
                                      {" "}
                                      <th
                                        style={{
                                          border: "1px solid lightgrey",
                                          textTransform: "capitalize",
                                          fontSize: 14,
                                          fontWeight: "400",
                                        }}
                                      >
                                        {" "}
                                        <label>View</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "view",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </th>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "add",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "edit",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "delete",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.CheackList?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.CheackList?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList:
                                                    postData.permissions.CheackList.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  CheackList: [
                                                    ...postData.permissions
                                                      .CheackList,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>{" "}
                                    </td>{" "}
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <button disabled={!isSubmit}
                              onClick={() => submitData()}
                              type="submit"
                              className="btn btn-primary me-sm-3 me-1"
                            >
                              Add
                            </button>
                            <button
                              type="reset"
                              className="btn btn-label-secondary"
                              onClick={() => navigate("/RoleTable")}
                            >
                              Cancel
                            </button>
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
    </>
  );
}

export default UserRegister;
