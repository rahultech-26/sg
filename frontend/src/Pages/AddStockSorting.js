import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { ThreeCircles } from "react-loader-spinner";
function Addsale() {
 
 

  const [nameList, setNameList] = useState([])
  const [isSubmit, setIsSubmit] = useState(true);

  const getItems = () => {
    axios.get(baseUrl + "productionitem").then((res) => setNameList(res.data.data))
  }


 

  const getPktData = () => {
    axios.get(baseUrl + "packetsize").then((res) => setPktData(res.data.data.filter((i) => i.for !== "Production").sort((a, b) => (a.size > b.size ? -1 : 1))
    .sort((a, b) =>
      a.itemType.toUpperCase() > b.itemType.toUpperCase() ? 1 : -1
    )));
  };
  const [pktData, setPktData] = useState([]);

  const navigate = useNavigate();
  const username = localStorage.getItem("username")
  const userid = localStorage.getItem("userid")
  const [postSaleData, setPostSaleData] = useState({
    supervisorName: username !== "undefined undefined" ? username : "",
    supervisorId: userid,
    date: "",
    report: [],
  });
  const [itemType, setItemType] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bagSize, setBagSize] = useState("");
  const postDataFn = () => {
    setIsSubmit(false)
    axios.post(baseUrl + "stock", postSaleData).then(() => {
      navigate("/Stock");
    });
  };

  const [category, setCategory] = useState("SAFAL");


  const addItem = () => {

    const item = {
      itemType: itemType,
      size: size,
      quantity: quantity,
      category: category,
    };
    const item1 = {
      itemType: itemType,
      bagSize: bagSize,
      size: size,
      quantity: quantity,
      category: category,
    };

    setPostSaleData({
      ...postSaleData,
      report: [...postSaleData.report, bagSize === "" ? item : item1],
    });
    setQuantity("")
    setItemType("")
    setBagSize("")
    setSize("")
    setCategory("SAFAL")
  };
  useEffect(() => getUser());
  const [supervisorName, setSupervisorName] = useState([]);
  const getUser = () => {
    axios
      .get(baseUrl + "login")
      .then((res) => setSupervisorName(res.data.data));
  };
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
  const getSupervisor = (x) => {
    const name = supervisorName.filter((i) => i._id === x)[0];
    const finalname = (name?.firstName || "") + " " + (name?.lastName || "");
    return finalname;
  };

  const link = `whatsapp://send?text=Date : ${ddmmyy(postSaleData.date)}%0aName - ${getSupervisor(
    postSaleData.supervisorId
  )}%0a%0a${postSaleData.report.map(
    (i, n) =>
      `${n > 0 & postSaleData?.report[n - 1]?.itemType !== i.itemType ? "%0a" : ""}${i.category === "SAFAL" ? "" : i.category} ${i.itemType} ${i.size}kg ${i.bagSize ? "(" + i.bagSize + " " + "kg bag)" : ""} ${i.quantity}bag%0a`
  )}`;
  const newLink = link.replace(new RegExp(",", 'g'), "");
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
                                  date
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
                                  Shift
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    className="form-select "
                                    value={postSaleData.shift}
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                      setPostSaleData({
                                        ...postSaleData,
                                        shift: e.target.value,
                                      })
                                    }
                                  >
                                    <option disabled selected value="">
                                      --select--
                                    </option>
                                    <option>Day</option>
                                    <option>Night</option>
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
                                  Brand
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    className="form-select "
                                    value={postSaleData.shift}
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                      setPostSaleData({
                                        ...postSaleData,
                                        brand: e.target.value,
                                      })
                                    }
                                  >
                                    <option disabled selected value="">
                                      --select--
                                    </option>
                                    <option>abc</option>
                                    <option>xyz</option>
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
                                  ITEM TYPE
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    className="form-select "
                                    value={itemType}
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                      setItemType(e.target.value)
                                    }
                                  >
                                    <option disabled selected value="">
                                      --select--
                                    </option>
                                    {nameList.map((i) => <option>{i.name}</option>)}
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
                                    className="form-select "
                                    value={itemType !== "" & size !== "" ? size : ""}
                                    style={{ width: "100%" }}
                                    onChange={(e) => {

                                      setSize(e.target.value);

                                    }}
                                  >
                                    <option selected disabled value="">
                                      --select--
                                    </option>
                                    {pktData
                                      .filter(
                                        (i) => i.itemType === itemType
                                      )
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
                                  disabled={+size>24||size===""}
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

                                    <option value={10}>
                                      10 kg bag
                                    </option>
                                    <option value={15}>
                                      15 kg bag
                                    </option>
                                    <option value={30}>
                                      30 kg bag
                                    </option>

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
                                <div className="col-sm-5">
                                  <input
                                    className="form-control "
                                    value={quantity}
                                    style={{ width: "100%" }}
                                    type="number"
                                    onChange={(e) =>
                                      setQuantity(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="col-sm-3">
                                  <button
                                    className="btn btn-success me-sm-3 me-1"
                                    onClick={() => {
                                      if (itemType !== "" & size !== "" & quantity !== "") {
                                        addItem()
                                      }
                                    }}
                                  >
                                    add
                                  </button>{" "}
                                </div>
                              </div>
                            </div>

                          </div>
                          <br/>
                          <div className="table-responsive text-nowrap">
                            <table className="table table-striped table-bordered">
                              <thead>
                                <tr style={{backgroundColor:"#def2d4"}}>

                                  <th>Item </th>
                                  <th style={{ textAlign: "center" }}>Size</th>
                                  <th style={{ textAlign: "center" }}>Quantity</th>
                                  <th style={{ textAlign: "center" }}>Action</th>
                                </tr>
                              </thead>
                              <tbody className="table-border-bottom-0">
                                {postSaleData.report.map((i, n) => (
                                  <tr>

                                    <td>{n + 1})&nbsp;{i.category === "SAFAL" ? "" : i.category} {i.itemType}</td>
                                    <td style={{ textAlign: "center" }}>
                                      <b style={{ color: "black" }}> {i.size} kg<br />{i.bagSize ? `(${i.bagSize} kg bag)` : ""}</b>
                                    </td>
                                    <td style={{ textAlign: "center" }}>{i.quantity}</td>
                                    <td
                                      onClick={() =>
                                        setPostSaleData({
                                          ...postSaleData,
                                          report: postSaleData.report.filter(
                                            (x, y) => y !== n
                                          ),
                                        })
                                      }
                                      style={{ color: "red", cursor: "pointer", textAlign: "center", fontWeight: 900 }}
                                    >
                                      X
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-4 text-center">
                            <a href={newLink}>
                              <button className="btn btn-outline-success me-sm-3 me-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png?20200503174721" style={{ height: 25 }} />
                              </button>
                            </a>
                            <a>
                              <button disabled={!isSubmit}
                                onClick={() => {
                                  if (postSaleData.date !== "" & postSaleData.shift !== "" & postSaleData.report.length > 0) {
                                    postDataFn()
                                  }
                                }}
                                type="submit"
                                style={{backgroundColor:"#def2d4"}}
                                className="btn btn me-sm-3 me-1"
                              >
                                Submit
                              </button>
                            </a>
                            <button
                              type="reset"
                              className="btn btn-label-secondary btn-reset"
                              onClick={() => navigate("/Stock1")}
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
