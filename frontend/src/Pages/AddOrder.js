import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { ThreeCircles } from "react-loader-spinner";
function Addsale() {
  const date = new Date();
  const dd = date.getDate();
  const ndd = dd < 10 ? `0${dd}` : dd;
  const mm = date.getMonth() + 1;
  const nmm = mm < 10 ? `0${mm}` : mm;
  const year = date.getFullYear();
  const finalDate = `${year}-${nmm}-${ndd}`;
  const [nameList, setNameList] = useState([]);

  const getItems = () => {
    axios
      .get(baseUrl + "productionitem")
      .then((res) => setNameList(res.data.data));
  };


  const getLocation = () => {
    axios
      .get(baseUrl + "location")
      .then((res) =>
        setLocationData(
          res.data.data.sort((a, b) =>
            a.location.toUpperCase() > b.location.toUpperCase() ? 1 : -1
          )
        )
      );
  };
  const [locationData, setLocationData] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const getPartyData = () => {
    axios
      .get(baseUrl + "party")
      .then((res) =>
        setPartyData(res.data.data.filter((i) => i.type === "Sale"))
      );
  };
  const getPktData = () => {
    axios.get(baseUrl + "packetsize").then((res) =>
      setPktData(
        res.data.data
          .filter((i) => i.for !== "Production")
          .sort((a, b) => (a.size > b.size ? -1 : 1))
          .sort((a, b) =>
            a.itemType.toUpperCase() > b.itemType.toUpperCase() ? 1 : -1
          )
      )
    );
  };
  const [pktData, setPktData] = useState([]);

  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");
  const [postSaleData, setPostSaleData] = useState({
    supervisorName: username !== "undefined undefined" ? username : "",
    supervisorId: userid,
    date: finalDate,
    status: "Pending",
    planned: "yes",
    remark: "",
    report: [],
    partyName: "",
    location: "",
  });
  const [itemType, setItemType] = useState("");
  const [type, setType] = useState("");
  const [bagSize, setBagSize] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("SAFAL");
  const [loc, setLoc] = useState("SINGLE");
  const [isPost, setIsPost] = useState(true);
  const localData = localStorage.getItem("localorderdata1");
  const parseData = localData ? JSON.parse(localData) : [];
  const [validator, setValidator] = useState(false);
  const postDataFn = () => {
    if ((postSaleData.location !== "") & (postSaleData.partyName !== "")) {
      setIsPost(false);
      axios.post(baseUrl + "order", postSaleData).then((res) => {
        localStorage.setItem(
          "localorderdata1",
          JSON.stringify([...parseData, res.data.data])
        );
        navigate("/Order");
      });
    } else {
      setValidator(true);
    }
  };

  const addItem = () => {
    const item = {
      itemType: itemType,
      size: size,
      quantity: quantity,
      category: category.toUpperCase().trim(),
      loc: loc.toUpperCase().trim(),
    };
    const item1 = {
      itemType: itemType,
      size: size,
      bagSize: bagSize,
      quantity: quantity,
      category: category.toUpperCase().trim(),
      loc: loc.toUpperCase().trim(),
    };

    setPostSaleData({
      ...postSaleData,
      report: [...postSaleData.report, bagSize === "" ? item : item1],
    });
    setType("");
    setQuantity("");
    setItemType("");
    setSize("");
    setBagSize("");
    setCategory("SAFAL");
  };
  const totalBagQuantity = () => {
    const list = postSaleData.report.map((i) => i.quantity);
    const total = list.reduce((a, b) => +a + +b, 0);
    return total;
  };
  const qtyTon = () => {
    const list = postSaleData.report.map(
      (i) => (i.bagSize || i.size) * i.quantity
    );
    const total = list.reduce((a, b) => +a + +b, 0);
    const ton = total / 1000;
    return ton;
  };
  const list = postSaleData.report.filter((i) => i.loc !== "SINGLE");
  const list1 = list.map((i) => {
    return {
      loc: i.loc,
    };
  });
  const list2 = [...new Map(list1.map((v) => [JSON.stringify(v), v])).values()];
  return (
    <>
      {!isPost && (
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
        </div>
      )}
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="container-xxl flex-grow-1 container-p-y">
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
                        {/* <h5 class="card-header">Sale Form</h5> */}
                        <div className="accordion-body">
                          <div className="row g-3">
                            <div className="col-md-4">
                              <div className="row">

                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Sauda"
                                >
                                  Order Date
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    value={postSaleData.date}
                                    type="date"
                                    className="form-control "
                                    onChange={(e) =>
                                      setPostSaleData({
                                        ...postSaleData,
                                        date: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Location
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    value={postSaleData.location}
                                    style={{ width: "100%" }}
                                    className="form-select"
                                    onChange={(e) =>
                                      setPostSaleData({
                                        ...postSaleData,
                                        location: e.target.value,
                                      })
                                    }
                                  >
                                    <option selected disabled value="">
                                      --select--
                                    </option>
                                    {locationData.map((i) => (
                                      <option>{i.location}</option>
                                    ))}
                                  </select>
                                  <span
                                    style={{
                                      display:
                                        validator &
                                        (postSaleData?.location === "")
                                          ? ""
                                          : "none",
                                      color: "red",
                                    }}
                                  >
                                    * feild is required
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Party
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    value={postSaleData.partyName}
                                    style={{ width: "100%" }}
                                    className="form-select"
                                    onChange={(e) =>
                                      setPostSaleData({
                                        ...postSaleData,
                                        partyName: e.target.value,
                                      })
                                    }
                                  >
                                    <option disabled selected value="">--Select--</option>
                                    {partyData.map((i) => (
                                      <option>{i.partyName}</option>
                                    ))}
                                  </select>
                                  <span
                                    style={{
                                      display:
                                        validator &
                                        (postSaleData?.partyName === "")
                                          ? ""
                                          : "none",
                                      color: "red",
                                    }}
                                  >
                                    * feild is required
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label
                                className="col-sm-3 col-form-label text-sm-end"
                                htmlFor="collapsible-Party"
                              >
                                <input
                                  disabled={list.length}
                                  type="radio"
                                  name="loc"
                                  checked={loc === "SINGLE"}
                                  onClick={() => setLoc("SINGLE")}
                                />
                                &nbsp; SINGLE
                              </label>
                              <label
                                className="col-sm-3 col-form-label text-sm-end"
                                htmlFor="collapsible-Party"
                              >
                                <input
                                  type="radio"
                                  name="loc"
                                  checked={loc !== "SINGLE"}
                                  onClick={() => setLoc("")}
                                />
                                &nbsp; MULTIPLE&nbsp;
                              </label>

                              <input
                                style={{
                                  display: loc === "SINGLE" ? "none" : "",
                                }}
                                value={loc}
                                onChange={(e) =>
                                  setLoc(e.target.value.toUpperCase())
                                }
                                className="col-sm-6 yourclassname"
                                placeholder="enter delivery area"
                              />
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Sauda"
                                >
                                  ITEM TYPE
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    value={itemType}
                                    style={{ width: "100%" }}
                                    className="form-select"
                                    onChange={(e) =>
                                      setItemType(e.target.value)
                                    }
                                  >
                                    <option disabled selected value="">
                                      --select--
                                    </option>
                                    {nameList.map((i) => (
                                      <option>{i.name}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Sauda"
                                >
                                  Brand 
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    value={itemType}
                                    style={{ width: "100%" }}
                                    className="form-select"
                                    onChange={(e) =>
                                      setItemType(e.target.value)
                                    }
                                  >
                                    <option disabled selected value="">
                                      --select--
                                    </option>
                                    {nameList.map((i) => (
                                      <option>{i.name}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Pkt Size
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    value={
                                      (itemType !== "") & (size !== "")
                                        ? size
                                        : ""
                                    }
                                    style={{ width: "100%" }}
                                    className="form-select"
                                    onChange={(e) => {
                                      setSize(e.target.value);
                                    }}
                                  >
                                    <option selected disabled value="">
                                      --select--
                                    </option>
                                    {pktData
                                      .filter((i) => i.itemType === itemType)
                                      .map((i) => (
                                        <option value={i.size}>
                                          {i.size} kg
                                        </option>
                                      ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Bag Size
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    disabled={+size > 24 || size === ""}
                                    className="form-select "
                                    value={bagSize}
                                    style={{ width: "100%" }}
                                    onChange={(e) => {
                                      setBagSize(e.target.value);
                                    }}
                                  >
                                    <option selected value="">
                                      same
                                    </option>

                                    <option value={10}>10 kg bag</option>
                                    <option value={15}>15 kg bag</option>
                                    <option value={30}>30 kg bag</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  qty
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    className="form-control"
                                    value={quantity}
                                    style={{ width: "100%" }}
                                    type="number"
                                    onChange={(e) =>
                                      setQuantity(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Remark
                                </label>
                                <div className="col-sm-9">
                                  <textarea
                                    placeholder="Remark"
                                    className="form-control"
                                    value={postSaleData.remark}
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                      setPostSaleData({
                                        ...postSaleData,
                                        remark: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="row">
                                <div className="col-sm-3">
                                  <button
                                    className="btn btn-success me-sm-3 me-1"
                                    onClick={() => {
                                      if (
                                        (itemType !== "") &
                                        (size !== "") &
                                        (quantity !== "")
                                      ) {
                                        addItem();
                                      }
                                    }}
                                  >
                                    add
                                  </button>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              className="btn btn"
                              style={{backgroundColor:"#def2d4",display:"flex"}}
                            >
                              <div className="col-md-6">
                                <div className="row">
                                  <label
                                    style={{
                                      fontWeight: "bolder",
                                      fontSize: 14,
                                      color: "white",
                                    }}
                                    className="col-sm-5 col-form-label text-sm-center"
                                    htmlFor="collapsible-Party"
                                  >
                                    Total Bag Qty
                                  </label>
                                  <div className="col-sm-5">
                                    <input
                                      value={totalBagQuantity()}
                                      disabled
                                      style={{
                                        width: "100%",
                                        textAlign: "center",
                                        fontWeight: "bolder",
                                      }}
                                      type="number"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row">
                                  <label
                                    style={{
                                      fontWeight: "bolder",
                                      fontSize: 14,
                                      color: "white",
                                    }}
                                    className="col-sm-5 col-form-label text-sm-center"
                                    htmlFor="collapsible-Party"
                                  >
                                    Total qty (in Ton)
                                  </label>
                                  <div className="col-sm-5">
                                    <input
                                      value={qtyTon()}
                                      disabled
                                      style={{
                                        width: "100%",
                                        textAlign: "center",
                                        fontWeight: "bolder",
                                      }}
                                      type="number"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="table-responsive text-nowrap">
                            <table
                              className="table table-striped table-bordered"
                              style={{
                                zoom: `${window.innerWidth < 800 ? 60 : 100}%`,
                              }}
                            >
                              {list.length === 0 ? (
                                <thead>
                                  <tr  style={{backgroundColor:"#def2d4"}}>
                                    <th>Item </th>
                                    <th style={{ textAlign: "center" }}>
                                      Size
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                      Quantity
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                              ) : null}
                              <tbody className="table-border-bottom-0">
                                {list.length === 0
                                  ? postSaleData.report.map((i, n) => (
                                      <tr>
                                        <td>
                                          {n + 1})&nbsp;
                                          {i.category === "SAFAL"
                                            ? ""
                                            : i.category}{" "}
                                          {i.itemType}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                          <b style={{ color: "black" }}>
                                            {" "}
                                            {i.size} kg
                                            <br />
                                            {i.bagSize
                                              ? `(${i.bagSize} kg bag)`
                                              : ""}
                                          </b>
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                          {i.quantity}
                                        </td>
                                        <td
                                          style={{
                                            alignItems: "center",
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <button
                                            className="btn btn-success"
                                            onClick={() =>
                                              setPostSaleData({
                                                ...postSaleData,
                                                report: postSaleData.report.map(
                                                  (x) =>
                                                    x === i
                                                      ? {
                                                          ...x,
                                                          quantity:
                                                            +x.quantity + 1,
                                                        }
                                                      : x
                                                ),
                                              })
                                            }
                                          >
                                            +
                                          </button>
                                          &nbsp;
                                          <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                              setPostSaleData({
                                                ...postSaleData,
                                                report: postSaleData.report.map(
                                                  (x) =>
                                                    x === i
                                                      ? {
                                                          ...x,
                                                          quantity:
                                                            x.quantity - 1,
                                                        }
                                                      : x
                                                ),
                                              })
                                            }
                                          >
                                            -
                                          </button>
                                          &nbsp;
                                          <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                              setPostSaleData({
                                                ...postSaleData,
                                                report:
                                                  postSaleData.report.filter(
                                                    (x) => x !== i
                                                  ),
                                              })
                                            }
                                          >
                                            x
                                          </button>
                                        </td>
                                      </tr>
                                    ))
                                  : list2.map((j) => (
                                      <>
                                        <tr className="table-warning">
                                          <th>{j.loc}</th>
                                        </tr>
                                        <tr className="table-primary">
                                          <th>Item </th>
                                          <th style={{ textAlign: "center" }}>
                                            Size
                                          </th>
                                          <th style={{ textAlign: "center" }}>
                                            Quantity
                                          </th>
                                          <th style={{ textAlign: "center" }}>
                                            Action
                                          </th>
                                        </tr>
                                        {list
                                          .filter((m) => m.loc === j.loc)
                                          .map((i, n) => (
                                            <tr>
                                              <td>
                                                {n + 1})&nbsp;
                                                {i.category === "SAFAL"
                                                  ? ""
                                                  : i.category}{" "}
                                                {i.itemType}
                                              </td>
                                              <td
                                                style={{ textAlign: "center" }}
                                              >
                                                <b style={{ color: "black" }}>
                                                  {" "}
                                                  {i.size} kg
                                                  <br />
                                                  {i.bagSize
                                                    ? `(${i.bagSize} kg bag)`
                                                    : ""}
                                                </b>
                                              </td>
                                              <td
                                                style={{ textAlign: "center" }}
                                              >
                                                {i.quantity}
                                              </td>
                                              <td
                                                style={{
                                                  alignItems: "center",
                                                  display: "flex",
                                                  justifyContent: "center",
                                                }}
                                              >
                                                <button
                                                  className="btn btn-success"
                                                  onClick={() =>
                                                    setPostSaleData({
                                                      ...postSaleData,
                                                      report:
                                                        postSaleData.report.map(
                                                          (x) =>
                                                            x === i
                                                              ? {
                                                                  ...x,
                                                                  quantity:
                                                                    +x.quantity +
                                                                    1,
                                                                }
                                                              : x
                                                        ),
                                                    })
                                                  }
                                                >
                                                  +
                                                </button>
                                                &nbsp;
                                                <button
                                                  className="btn btn-warning"
                                                  onClick={() =>
                                                    setPostSaleData({
                                                      ...postSaleData,
                                                      report:
                                                        postSaleData.report.map(
                                                          (x) =>
                                                            x === i
                                                              ? {
                                                                  ...x,
                                                                  quantity:
                                                                    x.quantity -
                                                                    1,
                                                                }
                                                              : x
                                                        ),
                                                    })
                                                  }
                                                >
                                                  -
                                                </button>
                                                &nbsp;
                                                <button
                                                  className="btn btn-danger"
                                                  onClick={() =>
                                                    setPostSaleData({
                                                      ...postSaleData,
                                                      report:
                                                        postSaleData.report.filter(
                                                          (x) => x !== i
                                                        ),
                                                    })
                                                  }
                                                >
                                                  x
                                                </button>
                                              </td>
                                            </tr>
                                          ))}
                                      </>
                                    ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-4 text-center">
                            <a>
                              <button
                                style={{
                                  cursor: !isPost ? "not-allowed" : "pointer",
                                  backgroundColor:"#def2d4"
                                }}
                                disabled={!isPost}
                                onClick={() => {
                                  if (
                                    (postSaleData.report.length > 0)
                                  ) {
                                    postDataFn();
                                  }
                                }}
                                type="submit"
                                
                                className="btn btn me-sm-3 me-1"
                              >
                                Submit
                              </button>
                            </a>
                            <button
                              type="reset"
                              className="btn btn-label-secondary btn-reset"
                              onClick={() => navigate("/Order")}
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

export default Addsale;
