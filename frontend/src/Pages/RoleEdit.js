import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./BaseUrl";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
function UserRegister() {

  const localData = localStorage.getItem("editroledata")
  const parseData = localData? JSON.parse(localData):[]
  const [postData, setPostData] = useState(parseData);
  const [isSubmit,setIsSubmit]=useState(true)
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
    Out: [],
    Visitor: [],
    UnloadingSupervisor: [],
    UnloadingSummary: [],
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
    Out: ["view", "add", "edit", "delete", "export"],
    Visitor: ["view", "add", "edit", "delete", "export"],
    UnloadingSupervisor: ["view", "add", "edit", "delete", "export"],
    UnloadingSummary: ["view", "add", "edit", "delete", "export"],
    AttaTest: ["view", "add", "edit", "delete", "export","filter"],
    AttaReport: ["view", "add", "edit", "delete", "export"],
    MaidaTest: ["view", "add", "edit", "delete", "export","filter"],
    MaidaReport: ["view", "add", "edit", "delete", "export"],
    MaidaProduction: ["view", "add", "edit", "delete", "export"],
    MaidaProductionReport: ["view", "add", "edit", "delete", "export"],
    Stock: ["view", "add", "edit", "delete", "export"],
    StockReport: ["view", "add", "edit", "delete", "export"],
    Order: ["view", "viewall","add", "edit", "delete", "export"],
    OrderReport: ["view", "add", "edit", "delete", "export"],
    Dispatch: ["view", "add", "edit", "delete", "export"],
    DispatchHistory: ["view", "add", "edit", "delete", "export"],
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
    MeterReading: ["view", "add", "edit", "delete", "export"],
    WheatTank: ["view", "add", "edit", "delete", "export"],
    Mill: ["view", "add", "edit", "delete", "export"],
    Pesa: ["view", "add", "edit", "delete", "export"],
    Department: ["view", "add", "edit", "delete", "export"],
    UserRegistration: ["view", "add", "edit", "delete", "export"],
    Logs: ["view", "add", "edit", "delete", "export"],
    Backup: ["view", "add", "edit", "delete", "export"],
  };

  const submitData = () => {
    setIsSubmit(false)
    axios.put(baseUrl + "role/" + postData._id, postData).then(() => navigate("/RoleTable"));
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
                                style={{ color: "white", marginRight: 10 }}
                                className="btn btn-info"
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
                                style={{ color: "white" }}
                                className="btn btn-info"
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

                                  <tr>
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
                                  </tr>
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

                                    <td>Purchase Trade</td>{" "}
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

                                    <td>Purchase Transactions</td>{" "}
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

                                    <td>Wheat Bag Transactions</td>{" "}
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
                                          checked={postData.permissions.WheatBagTransactions?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagTransactions?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions:
                                                    postData.permissions.WheatBagTransactions.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions: [
                                                    ...postData.permissions
                                                      .WheatBagTransactions,
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
                                          checked={postData.permissions.WheatBagTransactions?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagTransactions?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions:
                                                    postData.permissions.WheatBagTransactions.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions: [
                                                    ...postData.permissions
                                                      .WheatBagTransactions,
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
                                          checked={postData.permissions.WheatBagTransactions?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagTransactions?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions:
                                                    postData.permissions.WheatBagTransactions.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions: [
                                                    ...postData.permissions
                                                      .WheatBagTransactions,
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
                                          checked={postData.permissions.WheatBagTransactions?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagTransactions?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions:
                                                    postData.permissions.WheatBagTransactions.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions: [
                                                    ...postData.permissions
                                                      .WheatBagTransactions,
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
                                          checked={postData.permissions.WheatBagTransactions?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagTransactions?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions:
                                                    postData.permissions.WheatBagTransactions.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagTransactions: [
                                                    ...postData.permissions
                                                      .WheatBagTransactions,
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

                                    <td>Wheat Lab Report</td>{" "}
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
                                          checked={postData.permissions.WheatLabReport?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatLabReport?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport:
                                                    postData.permissions.WheatLabReport.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport: [
                                                    ...postData.permissions
                                                      .WheatLabReport,
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
                                          checked={postData.permissions.WheatLabReport?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatLabReport?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport:
                                                    postData.permissions.WheatLabReport.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport: [
                                                    ...postData.permissions
                                                      .WheatLabReport,
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
                                          checked={postData.permissions.WheatLabReport?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatLabReport?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport:
                                                    postData.permissions.WheatLabReport.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport: [
                                                    ...postData.permissions
                                                      .WheatLabReport,
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
                                          checked={postData.permissions.WheatLabReport?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatLabReport?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport:
                                                    postData.permissions.WheatLabReport.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport: [
                                                    ...postData.permissions
                                                      .WheatLabReport,
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
                                          checked={postData.permissions.WheatLabReport?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatLabReport?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport:
                                                    postData.permissions.WheatLabReport.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatLabReport: [
                                                    ...postData.permissions
                                                      .WheatLabReport,
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
                                    <td>Sales Trade</td>{" "}
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

                                    <td>Sales Transactions</td>{" "}
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

                                    <td>Average Rate</td>{" "}
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
                                          checked={postData.permissions.AverageRate?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AverageRate?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate:
                                                    postData.permissions.AverageRate.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate: [
                                                    ...postData.permissions
                                                      .AverageRate,
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
                                          checked={postData.permissions.AverageRate?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AverageRate?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate:
                                                    postData.permissions.AverageRate.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate: [
                                                    ...postData.permissions
                                                      .AverageRate,
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
                                          checked={postData.permissions.AverageRate?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AverageRate?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate:
                                                    postData.permissions.AverageRate.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate: [
                                                    ...postData.permissions
                                                      .AverageRate,
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
                                          checked={postData.permissions.AverageRate?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AverageRate?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate:
                                                    postData.permissions.AverageRate.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate: [
                                                    ...postData.permissions
                                                      .AverageRate,
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
                                          checked={postData.permissions.AverageRate?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.AverageRate?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate:
                                                    postData.permissions.AverageRate.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  AverageRate: [
                                                    ...postData.permissions
                                                      .AverageRate,
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

                                    <td>Vehicle Record</td>{" "}
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
                                          checked={postData.permissions.VehicleRecord?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.VehicleRecord?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord:
                                                    postData.permissions.VehicleRecord.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord: [
                                                    ...postData.permissions
                                                      .VehicleRecord,
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
                                          checked={postData.permissions.VehicleRecord?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.VehicleRecord?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord:
                                                    postData.permissions.VehicleRecord.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord: [
                                                    ...postData.permissions
                                                      .VehicleRecord,
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
                                          checked={postData.permissions.VehicleRecord?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.VehicleRecord?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord:
                                                    postData.permissions.VehicleRecord.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord: [
                                                    ...postData.permissions
                                                      .VehicleRecord,
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
                                          checked={postData.permissions.VehicleRecord?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.VehicleRecord?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord:
                                                    postData.permissions.VehicleRecord.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord: [
                                                    ...postData.permissions
                                                      .VehicleRecord,
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
                                          checked={postData.permissions.VehicleRecord?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.VehicleRecord?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord:
                                                    postData.permissions.VehicleRecord.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  VehicleRecord: [
                                                    ...postData.permissions
                                                      .VehicleRecord,
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

                                    <td>Transport Transactions</td>{" "}
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
                                          checked={postData.permissions.TransportTransactions?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.TransportTransactions?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions:
                                                    postData.permissions.TransportTransactions.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions: [
                                                    ...postData.permissions
                                                      .TransportTransactions,
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
                                          checked={postData.permissions.TransportTransactions?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.TransportTransactions?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions:
                                                    postData.permissions.TransportTransactions.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions: [
                                                    ...postData.permissions
                                                      .TransportTransactions,
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
                                          checked={postData.permissions.TransportTransactions?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.TransportTransactions?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions:
                                                    postData.permissions.TransportTransactions.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions: [
                                                    ...postData.permissions
                                                      .TransportTransactions,
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
                                          checked={postData.permissions.TransportTransactions?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.TransportTransactions?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions:
                                                    postData.permissions.TransportTransactions.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions: [
                                                    ...postData.permissions
                                                      .TransportTransactions,
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
                                          checked={postData.permissions.TransportTransactions?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.TransportTransactions?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions:
                                                    postData.permissions.TransportTransactions.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  TransportTransactions: [
                                                    ...postData.permissions
                                                      .TransportTransactions,
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

                                    <th style={{ fontSize: 23 }} >In-Out</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Office</td>{" "}
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
                                    <td>In</td>{" "}
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
                                    <td>Out</td>{" "}
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
                                    <td>Visitor</td>{" "}
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
                                          checked={postData.permissions.Visitor?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Visitor?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor:
                                                    postData.permissions.Visitor.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor: [
                                                    ...postData.permissions
                                                      .Visitor,
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
                                          checked={postData.permissions.Visitor?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Visitor?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor:
                                                    postData.permissions.Visitor.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor: [
                                                    ...postData.permissions
                                                      .Visitor,
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
                                          checked={postData.permissions.Visitor?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Visitor?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor:
                                                    postData.permissions.Visitor.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor: [
                                                    ...postData.permissions
                                                      .Visitor,
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
                                          checked={postData.permissions.Visitor?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Visitor?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor:
                                                    postData.permissions.Visitor.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor: [
                                                    ...postData.permissions
                                                      .Visitor,
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
                                          checked={postData.permissions.Visitor?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Visitor?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor:
                                                    postData.permissions.Visitor.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Visitor: [
                                                    ...postData.permissions
                                                      .Visitor,
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

                                    <th style={{ fontSize: 23 }} >Lab</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Atta Test</td>{" "}
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
                                    <td>Maida Test</td>{" "}
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
                                      </td>
                                    </td>{" "}
                                  </tr>
                                
                                  <tr>
                                    {" "}

                                    <th style={{ fontSize: 23 }} >Production & Dispatch</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Maida Production</td>{" "}
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

                                    <td>Maida Production Report</td>{" "}
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
                                      </td>
                                    </td>{" "}
                                  </tr>
                                  
                                  <tr>
                                    {" "}
                                    <td>Stock</td>{" "}
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
                                          checked={postData.permissions.Stock?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Stock?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock:
                                                    postData.permissions.Stock.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock: [
                                                    ...postData.permissions
                                                      .Stock,
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
                                          checked={postData.permissions.Stock?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Stock?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock:
                                                    postData.permissions.Stock.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock: [
                                                    ...postData.permissions
                                                      .Stock,
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
                                          checked={postData.permissions.Stock?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Stock?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock:
                                                    postData.permissions.Stock.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock: [
                                                    ...postData.permissions
                                                      .Stock,
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
                                          checked={postData.permissions.Stock?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Stock?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock:
                                                    postData.permissions.Stock.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock: [
                                                    ...postData.permissions
                                                      .Stock,
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
                                          checked={postData.permissions.Stock?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Stock?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock:
                                                    postData.permissions.Stock.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock: [
                                                    ...postData.permissions
                                                      .Stock,
                                                    "export",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>
                                      {" "}
                                      <td
                                        style={{
                                          border: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Filter</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Stock?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Stock?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock:
                                                    postData.permissions.Stock.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Stock: [
                                                    ...postData.permissions
                                                      .Stock,
                                                    "filter",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Stock Report</td>{" "}
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
                                          checked={postData.permissions.StockReport?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.StockReport?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport:
                                                    postData.permissions.StockReport.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport: [
                                                    ...postData.permissions
                                                      .StockReport,
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
                                          checked={postData.permissions.StockReport?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.StockReport?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport:
                                                    postData.permissions.StockReport.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport: [
                                                    ...postData.permissions
                                                      .StockReport,
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
                                          checked={postData.permissions.StockReport?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.StockReport?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport:
                                                    postData.permissions.StockReport.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport: [
                                                    ...postData.permissions
                                                      .StockReport,
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
                                          checked={postData.permissions.StockReport?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.StockReport?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport:
                                                    postData.permissions.StockReport.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport: [
                                                    ...postData.permissions
                                                      .StockReport,
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
                                          checked={postData.permissions.StockReport?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.StockReport?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport:
                                                    postData.permissions.StockReport.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport: [
                                                    ...postData.permissions
                                                      .StockReport,
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
                                          checked={postData.permissions.StockReport?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.StockReport?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport:
                                                    postData.permissions.StockReport.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  StockReport: [
                                                    ...postData.permissions
                                                      .StockReport,
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
                                          checked={postData.permissions.Order?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Order?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order:
                                                    postData.permissions.Order.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order: [
                                                    ...postData.permissions
                                                      .Order,
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
                                        <label>View All</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Order?.includes(
                                            "viewall"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Order?.includes(
                                                "viewall"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order:
                                                    postData.permissions.Order.filter(
                                                      (i) => i !== "viewall"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order: [
                                                    ...postData.permissions
                                                      .Order,
                                                    "viewall",
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
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.Order?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Order?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order:
                                                    postData.permissions.Order.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order: [
                                                    ...postData.permissions
                                                      .Order,
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
                                          checked={postData.permissions.Order?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Order?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order:
                                                    postData.permissions.Order.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order: [
                                                    ...postData.permissions
                                                      .Order,
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
                                          checked={postData.permissions.Order?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Order?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order:
                                                    postData.permissions.Order.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order: [
                                                    ...postData.permissions
                                                      .Order,
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
                                          checked={postData.permissions.Order?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Order?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order:
                                                    postData.permissions.Order.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Order: [
                                                    ...postData.permissions
                                                      .Order,
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
                                    <td>Unloading</td>{" "}
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
                                          checked={postData.permissions.UnloadingSupervisor?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSupervisor?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor:
                                                    postData.permissions.UnloadingSupervisor.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor: [
                                                    ...postData.permissions
                                                      .UnloadingSupervisor,
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
                                          checked={postData.permissions.UnloadingSupervisor?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSupervisor?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor:
                                                    postData.permissions.UnloadingSupervisor.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor: [
                                                    ...postData.permissions
                                                      .UnloadingSupervisor,
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
                                          checked={postData.permissions.UnloadingSupervisor?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSupervisor?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor:
                                                    postData.permissions.UnloadingSupervisor.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor: [
                                                    ...postData.permissions
                                                      .UnloadingSupervisor,
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
                                          checked={postData.permissions.UnloadingSupervisor?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSupervisor?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor:
                                                    postData.permissions.UnloadingSupervisor.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor: [
                                                    ...postData.permissions
                                                      .UnloadingSupervisor,
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
                                          checked={postData.permissions.UnloadingSupervisor?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSupervisor?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor:
                                                    postData.permissions.UnloadingSupervisor.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSupervisor: [
                                                    ...postData.permissions
                                                      .UnloadingSupervisor,
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
                                    <td>Unloading Summary</td>{" "}
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
                                          checked={postData.permissions.UnloadingSummary?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSummary?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary:
                                                    postData.permissions.UnloadingSummary.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary: [
                                                    ...postData.permissions
                                                      .UnloadingSummary,
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
                                          checked={postData.permissions.UnloadingSummary?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSummary?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary:
                                                    postData.permissions.UnloadingSummary.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary: [
                                                    ...postData.permissions
                                                      .UnloadingSummary,
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
                                          checked={postData.permissions.UnloadingSummary?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSummary?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary:
                                                    postData.permissions.UnloadingSummary.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary: [
                                                    ...postData.permissions
                                                      .UnloadingSummary,
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
                                          checked={postData.permissions.UnloadingSummary?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSummary?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary:
                                                    postData.permissions.UnloadingSummary.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary: [
                                                    ...postData.permissions
                                                      .UnloadingSummary,
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
                                          checked={postData.permissions.UnloadingSummary?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UnloadingSummary?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary:
                                                    postData.permissions.UnloadingSummary.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UnloadingSummary: [
                                                    ...postData.permissions
                                                      .UnloadingSummary,
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

                                    <td>Loading</td>{" "}
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
                                          checked={postData.permissions.OrderReport?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.OrderReport?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport:
                                                    postData.permissions.OrderReport.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport: [
                                                    ...postData.permissions
                                                      .OrderReport,
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
                                          bOrderReport: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Add</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.OrderReport?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.OrderReport?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport:
                                                    postData.permissions.OrderReport.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport: [
                                                    ...postData.permissions
                                                      .OrderReport,
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
                                          bOrderReport: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Edit</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.OrderReport?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.OrderReport?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport:
                                                    postData.permissions.OrderReport.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport: [
                                                    ...postData.permissions
                                                      .OrderReport,
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
                                          bOrderReport: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Delete</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.OrderReport?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.OrderReport?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport:
                                                    postData.permissions.OrderReport.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport: [
                                                    ...postData.permissions
                                                      .OrderReport,
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
                                          bOrderReport: "1px solid lightgrey",
                                        }}
                                      >
                                        {" "}
                                        <label>Export</label>{" "}
                                        <input
                                          type="checkbox"
                                          checked={postData.permissions.OrderReport?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.OrderReport?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport:
                                                    postData.permissions.OrderReport.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  OrderReport: [
                                                    ...postData.permissions
                                                      .OrderReport,
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

                                    <td>Loading Summary</td>{" "}
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
                                          checked={postData.permissions.DispatchSummary?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.DispatchSummary?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary:
                                                    postData.permissions.DispatchSummary.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary: [
                                                    ...postData.permissions
                                                      .DispatchSummary,
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
                                          checked={postData.permissions.DispatchSummary?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.DispatchSummary?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary:
                                                    postData.permissions.DispatchSummary.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary: [
                                                    ...postData.permissions
                                                      .DispatchSummary,
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
                                          checked={postData.permissions.DispatchSummary?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.DispatchSummary?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary:
                                                    postData.permissions.DispatchSummary.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary: [
                                                    ...postData.permissions
                                                      .DispatchSummary,
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
                                          checked={postData.permissions.DispatchSummary?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.DispatchSummary?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary:
                                                    postData.permissions.DispatchSummary.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary: [
                                                    ...postData.permissions
                                                      .DispatchSummary,
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
                                          checked={postData.permissions.DispatchSummary?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.DispatchSummary?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary:
                                                    postData.permissions.DispatchSummary.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  DispatchSummary: [
                                                    ...postData.permissions
                                                      .DispatchSummary,
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

                                    <th style={{ fontSize: 23 }} >Bag Management</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}

                                    <td>Wheat Bag Stock</td>{" "}
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
                                          checked={postData.permissions.WheatBagStock?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagStock?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock:
                                                    postData.permissions.WheatBagStock.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock: [
                                                    ...postData.permissions
                                                      .WheatBagStock,
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
                                          checked={postData.permissions.WheatBagStock?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagStock?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock:
                                                    postData.permissions.WheatBagStock.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock: [
                                                    ...postData.permissions
                                                      .WheatBagStock,
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
                                          checked={postData.permissions.WheatBagStock?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagStock?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock:
                                                    postData.permissions.WheatBagStock.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock: [
                                                    ...postData.permissions
                                                      .WheatBagStock,
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
                                          checked={postData.permissions.WheatBagStock?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagStock?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock:
                                                    postData.permissions.WheatBagStock.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock: [
                                                    ...postData.permissions
                                                      .WheatBagStock,
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
                                          checked={postData.permissions.WheatBagStock?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatBagStock?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock:
                                                    postData.permissions.WheatBagStock.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatBagStock: [
                                                    ...postData.permissions
                                                      .WheatBagStock,
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

                                    <th style={{ fontSize: 23 }} >Report</th>{" "}

                                  </tr>
                              
                                  <tr>
                                    {" "}
                                    <td>Meter Reading</td>{" "}
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
                                          checked={postData.permissions.MeterReading?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MeterReading?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading:
                                                    postData.permissions.MeterReading.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading: [
                                                    ...postData.permissions
                                                      .MeterReading,
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
                                          checked={postData.permissions.MeterReading?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MeterReading?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading:
                                                    postData.permissions.MeterReading.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading: [
                                                    ...postData.permissions
                                                      .MeterReading,
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
                                          checked={postData.permissions.MeterReading?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MeterReading?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading:
                                                    postData.permissions.MeterReading.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading: [
                                                    ...postData.permissions
                                                      .MeterReading,
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
                                          checked={postData.permissions.MeterReading?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MeterReading?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading:
                                                    postData.permissions.MeterReading.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading: [
                                                    ...postData.permissions
                                                      .MeterReading,
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
                                          checked={postData.permissions.MeterReading?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MeterReading?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading:
                                                    postData.permissions.MeterReading.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading: [
                                                    ...postData.permissions
                                                      .MeterReading,
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
                                          checked={postData.permissions.MeterReading?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.MeterReading?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading:
                                                    postData.permissions.MeterReading.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  MeterReading: [
                                                    ...postData.permissions
                                                      .MeterReading,
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
                                    <td>Wheat Tank</td>{" "}
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
                                          checked={postData.permissions.WheatTank?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatTank?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank:
                                                    postData.permissions.WheatTank.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank: [
                                                    ...postData.permissions
                                                      .WheatTank,
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
                                          checked={postData.permissions.WheatTank?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatTank?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank:
                                                    postData.permissions.WheatTank.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank: [
                                                    ...postData.permissions
                                                      .WheatTank,
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
                                          checked={postData.permissions.WheatTank?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatTank?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank:
                                                    postData.permissions.WheatTank.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank: [
                                                    ...postData.permissions
                                                      .WheatTank,
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
                                          checked={postData.permissions.WheatTank?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatTank?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank:
                                                    postData.permissions.WheatTank.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank: [
                                                    ...postData.permissions
                                                      .WheatTank,
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
                                          checked={postData.permissions.WheatTank?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatTank?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank:
                                                    postData.permissions.WheatTank.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank: [
                                                    ...postData.permissions
                                                      .WheatTank,
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
                                          checked={postData.permissions.WheatTank?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.WheatTank?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank:
                                                    postData.permissions.WheatTank.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  WheatTank: [
                                                    ...postData.permissions
                                                      .WheatTank,
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
                                    <td>Mill</td>{" "}
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
                                          checked={postData.permissions.Mill?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Mill?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill:
                                                    postData.permissions.Mill.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill: [
                                                    ...postData.permissions
                                                      .Mill,
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
                                          checked={postData.permissions.Mill?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Mill?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill:
                                                    postData.permissions.Mill.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill: [
                                                    ...postData.permissions
                                                      .Mill,
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
                                          checked={postData.permissions.Mill?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Mill?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill:
                                                    postData.permissions.Mill.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill: [
                                                    ...postData.permissions
                                                      .Mill,
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
                                          checked={postData.permissions.Mill?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Mill?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill:
                                                    postData.permissions.Mill.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill: [
                                                    ...postData.permissions
                                                      .Mill,
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
                                          checked={postData.permissions.Mill?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Mill?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill:
                                                    postData.permissions.Mill.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill: [
                                                    ...postData.permissions
                                                      .Mill,
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
                                          checked={postData.permissions.Mill?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Mill?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill:
                                                    postData.permissions.Mill.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Mill: [
                                                    ...postData.permissions
                                                      .Mill,
                                                    "filter",
                                                  ],
                                                },
                                              });
                                            }
                                          }}
                                        />{" "}
                                      </td>
                                    </td>{" "}
                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Pesa</td>{" "}
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
                                          checked={postData.permissions.Pesa?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Pesa?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa:
                                                    postData.permissions.Pesa.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa: [
                                                    ...postData.permissions
                                                      .Pesa,
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
                                          checked={postData.permissions.Pesa?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Pesa?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa:
                                                    postData.permissions.Pesa.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa: [
                                                    ...postData.permissions
                                                      .Pesa,
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
                                          checked={postData.permissions.Pesa?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Pesa?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa:
                                                    postData.permissions.Pesa.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa: [
                                                    ...postData.permissions
                                                      .Pesa,
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
                                          checked={postData.permissions.Pesa?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Pesa?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa:
                                                    postData.permissions.Pesa.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa: [
                                                    ...postData.permissions
                                                      .Pesa,
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
                                          checked={postData.permissions.Pesa?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Pesa?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa:
                                                    postData.permissions.Pesa.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa: [
                                                    ...postData.permissions
                                                      .Pesa,
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
                                          checked={postData.permissions.Pesa?.includes(
                                            "filter"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Pesa?.includes(
                                                "filter"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa:
                                                    postData.permissions.Pesa.filter(
                                                      (i) => i !== "filter"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Pesa: [
                                                    ...postData.permissions
                                                      .Pesa,
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
                                          checked={postData.permissions.Department?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Department?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department:
                                                    postData.permissions.Department.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department: [
                                                    ...postData.permissions
                                                      .Department,
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
                                          checked={postData.permissions.Department?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Department?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department:
                                                    postData.permissions.Department.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department: [
                                                    ...postData.permissions
                                                      .Department,
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
                                          checked={postData.permissions.Department?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Department?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department:
                                                    postData.permissions.Department.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department: [
                                                    ...postData.permissions
                                                      .Department,
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
                                          checked={postData.permissions.Department?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Department?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department:
                                                    postData.permissions.Department.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department: [
                                                    ...postData.permissions
                                                      .Department,
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
                                          checked={postData.permissions.Department?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Department?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department:
                                                    postData.permissions.Department.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Department: [
                                                    ...postData.permissions
                                                      .Department,
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

                                    <td>User Registration</td>{" "}
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
                                          checked={postData.permissions.UserRegistration?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UserRegistration?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration:
                                                    postData.permissions.UserRegistration.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration: [
                                                    ...postData.permissions
                                                      .UserRegistration,
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
                                          checked={postData.permissions.UserRegistration?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UserRegistration?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration:
                                                    postData.permissions.UserRegistration.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration: [
                                                    ...postData.permissions
                                                      .UserRegistration,
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
                                          checked={postData.permissions.UserRegistration?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UserRegistration?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration:
                                                    postData.permissions.UserRegistration.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration: [
                                                    ...postData.permissions
                                                      .UserRegistration,
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
                                          checked={postData.permissions.UserRegistration?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UserRegistration?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration:
                                                    postData.permissions.UserRegistration.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration: [
                                                    ...postData.permissions
                                                      .UserRegistration,
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
                                          checked={postData.permissions.UserRegistration?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.UserRegistration?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration:
                                                    postData.permissions.UserRegistration.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  UserRegistration: [
                                                    ...postData.permissions
                                                      .UserRegistration,
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

                                    <td>Logs</td>{" "}
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
                                          checked={postData.permissions.Logs?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Logs?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs:
                                                    postData.permissions.Logs.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs: [
                                                    ...postData.permissions
                                                      .Logs,
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
                                          checked={postData.permissions.Logs?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Logs?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs:
                                                    postData.permissions.Logs.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs: [
                                                    ...postData.permissions
                                                      .Logs,
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
                                          checked={postData.permissions.Logs?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Logs?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs:
                                                    postData.permissions.Logs.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs: [
                                                    ...postData.permissions
                                                      .Logs,
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
                                          checked={postData.permissions.Logs?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Logs?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs:
                                                    postData.permissions.Logs.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs: [
                                                    ...postData.permissions
                                                      .Logs,
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
                                          checked={postData.permissions.Logs?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Logs?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs:
                                                    postData.permissions.Logs.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Logs: [
                                                    ...postData.permissions
                                                      .Logs,
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
                                    <td>Location</td>{" "}
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

                                    <td>Transporter</td>{" "}
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

                                    <td>Lab Incharge</td>{" "}
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
                                    <td>Item Type</td>{" "}
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

                                    <td>Production Item</td>{" "}
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

                                    <td>Cheack List</td>{" "}
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

                                    <th style={{ fontSize: 23 }} >Data Backup</th>{" "}

                                  </tr>
                                  <tr>
                                    {" "}
                                    <td>Backup</td>{" "}
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
                                          checked={postData.permissions.Backup?.includes(
                                            "view"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Backup?.includes(
                                                "view"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup:
                                                    postData.permissions.Backup.filter(
                                                      (i) => i !== "view"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup: [
                                                    ...postData.permissions
                                                      .Backup,
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
                                          checked={postData.permissions.Backup?.includes(
                                            "add"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Backup?.includes(
                                                "add"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup:
                                                    postData.permissions.Backup.filter(
                                                      (i) => i !== "add"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup: [
                                                    ...postData.permissions
                                                      .Backup,
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
                                          checked={postData.permissions.Backup?.includes(
                                            "edit"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Backup?.includes(
                                                "edit"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup:
                                                    postData.permissions.Backup.filter(
                                                      (i) => i !== "edit"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup: [
                                                    ...postData.permissions
                                                      .Backup,
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
                                          checked={postData.permissions.Backup?.includes(
                                            "delete"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Backup?.includes(
                                                "delete"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup:
                                                    postData.permissions.Backup.filter(
                                                      (i) => i !== "delete"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup: [
                                                    ...postData.permissions
                                                      .Backup,
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
                                          checked={postData.permissions.Backup?.includes(
                                            "export"
                                          )}
                                          onClick={() => {
                                            if (
                                              postData.permissions.Backup?.includes(
                                                "export"
                                              )
                                            ) {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup:
                                                    postData.permissions.Backup.filter(
                                                      (i) => i !== "export"
                                                    ),
                                                },
                                              });
                                            } else {
                                              setPostData({
                                                ...postData,
                                                permissions: {
                                                  ...postData.permissions,
                                                  Backup: [
                                                    ...postData.permissions
                                                      .Backup,
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
                              Update
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
