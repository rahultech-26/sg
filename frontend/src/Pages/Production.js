import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
function SaleRegistration() {
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
  const navigate = useNavigate()
 
 
  const itemlocal = localStorage.getItem("productionitemlocaldata")
  const parseitem = itemlocal ? JSON.parse(itemlocal) : []

  const [nameList, setNameList] = useState(parseitem)

  const getItems = () => {
    axios.get(baseUrl + "productionitem").then((res) => {
      localStorage.setItem("productionitemlocaldata", JSON.stringify(res.data.data.filter((i) => i.name !== "ATTA"&i.for!=="stock")))
      setNameList(res.data.data.filter((i) => i.name !== "ATTA"&i.for!=="stock"))
    })
  }
 
  const localData = localStorage.getItem("maidaproductiondatalocal")
  const parseData = localData ? JSON.parse(localData) : []
  const getProductionData = () => {
    axios.get(baseUrl + "production").then((res) => {
      localStorage.setItem("maidaproductiondatalocal", JSON.stringify(res.data.data.sort((a, b) => a.date > b.date ? 1 : -1)))
      setProductionData1(res.data.data.sort((a, b) => a.date > b.date ? 1 : -1))
    });
  };
  const delFn = (x) => {
    axios.delete(baseUrl + "production/" + x).then(() => getProductionData());
  };

  const [productionData1, setProductionData1] = useState(parseData);
  const [productionDate, setProductionDate] = useState("");

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

  const getTime = (x) => {
    const y = x.split(":")
    const h = y[0]
    const mm = y[1]
    const ampm = h > 11 ? "PM" : "AM"
    const hh = h > 12 ? h - 12 : h
    const time = hh + ":" + mm + " " + ampm
    return time
  }
  const [fromDate, setFromDate] = useState(finalDate1)
  const [toDate, setToDate] = useState(finalDate)
  const [fromTime, setFromTime] = useState("")
  const [toTime, setToTime] = useState("")
  const list = productionData1
  const x = new Date(fromDate);
  const y = new Date(toDate);


  const list1 = fromDate !== "" ? list.filter((i) => (new Date(i.date) >= x)) : list
  const list2 = toDate !== "" ? list1.filter((i) => (new Date(i.date) <= y)) : list1
  const ft = getTime(fromTime)
  const tt = getTime(toTime)
  const list3 = fromTime !== "" ? list2.filter((i) => getTime(i.timeFrom) >= ft) : list2
  const list4 = toTime !== "" ? list3.filter((i) => getTime(i.timeTo) <= tt) : list3
  const totalQuantity = (x) => {
    const productionDataReports = list4.filter((i) => i.date === x).map((i) => i.report).flat()
    const currItemList = productionDataReports.filter((i) => i.itemType !== "ATTA")
    if (currItemList.length > 0) {
      const total = currItemList.map((i) => i.size * i.quantity).reduce((a, b) => a + b, 0)
      return total
    } else {
      return 1
    }
  }
  const list11 = list4.map((i) => {
    return {
      date: i.date
    }
  })
  const list12 = [...new Map(list11.map(v => [JSON.stringify(v), v])).values()]
  const [pageNumber, setPageNumber] = useState(0)
  const [perPage, setPerPage] = useState(10000)
  const totalPage = Math.ceil(list12.length / perPage)

  const quantityInKg = (x, y) => {
    const productionDataReports = list4.filter((i) => i.date === y).map((i) => i.report).flat()
    const currItemList = productionDataReports.filter((i) => i.itemType === x)
    if (currItemList.length > 0) {
      const total = currItemList.map((i) => i.size * i.quantity).reduce((a, b) => a + b, 0)
      return total
    } else {
      return 0
    }
  }
  const quantityInKg1 = (x) => {
    const productionDataReports = list4.filter((i) => i.date === x).map((i) => i.report).flat()
    const currItemList = productionDataReports.filter((i) => i.itemType.includes("MAIDA"))
    if (currItemList.length > 0) {
      const total = currItemList.map((i) => i.size * i.quantity).reduce((a, b) => a + b, 0)
      return total
    } else {
      return 0
    }
  }
  useEffect(() => getUser())
  const [supervisorName, setSupervisorName] = useState([])
  const getUser = () => {
    axios.get(baseUrl + "login").then((res) => setSupervisorName(res.data.data))
  }
  const getSupervisor = (x) => {
    const name = supervisorName.filter((i) => i._id === x)[0]
    const finalname = (name?.firstName || "") + " " + (name?.lastName || "")
    return finalname
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
                      <a onClick={() => navigate("/AddProduction")}>
                        <button
                        style={{backgroundColor:"#def2d4"}}
                          type="submit"
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Production
                        </button>
                      </a>
                  </div>
                  <div className='sideclass1'>
                    <div
                      className="mt-3 mb-3"
                      style={{
                        justifyContent: "space-evenly",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap"
                      }}
                    >
                      <div className="ast1">
                        <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>
                          <div >
                            <label className="PR-l">From</label>
                          </div>
                          <div>
                            <input
                              style={{ width: 120, marginLeft: 10, height: 25 }}
                              type="date"
                              value={fromDate}
                              onChange={(e) => setFromDate(e.target.value)}
                            />
                          </div>
                        </div><br />
                        <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>
                          <div>
                            <label className='PR-l1'>To</label>
                          </div>
                          <div>
                            <input
                              style={{ width: 120, marginLeft: 10, height: 25 }}
                              type="date"
                              value={toDate}
                              onChange={(e) => setToDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div><br />
                      <div className="ast1">
                        <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>

                          <div >
                            <label className="PR-l">From</label>
                          </div>
                          <div>
                            <input
                              style={{ width: 100, marginLeft: 10, height: 25 }}
                              type="time"
                              onChange={(e) => setFromTime(e.target.value)}
                            />
                          </div>
                        </div><br />
                        <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>
                          <div >
                            <label className="PR-l">To</label>
                          </div>
                          <div>
                            <input
                              style={{ width: 100, marginLeft: 10, height: 25 }}
                              type="time"
                              onChange={(e) => setToTime(e.target.value)}
                            />
                          </div>
                          <div style={{ marginLeft: "5%" }}>

                          </div>
                        </div>

                      </div>
                      <br />


                    </div>
                  </div>
                </div>
                <div className="sideclass">
                  <div
                    className="mt-3 mb-3"
                    style={{
                      justifyContent: "space-between",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 5,
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <label style={{ width: "80%", marginLeft: "20%" }}>
                          From
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <input
                          style={{ width: "90%" }}
                          value={fromDate}
                          type="date"
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 5,
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <label style={{ width: "80%", marginLeft: "20%" }}>
                          To
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <input
                          style={{ width: "90%" }}
                          value={toDate}
                          type="date"
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 5,
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <label style={{ width: "80%", marginLeft: "20%" }}>
                          From
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <input
                          style={{ width: "90%" }}
                          type="time"
                          onChange={(e) => setFromTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 5,
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <label style={{ width: "80%", marginLeft: "20%" }}>
                          To
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <input
                          style={{ width: "90%" }}
                          type="time"
                          onChange={(e) => setToTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 5,
                      }}
                    >


                    </div>
                    <div style={{ marginLeft: "80%" }}>

                    </div>

                  </div>
                </div>
              
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped"
                  style={{ zoom: `${window.innerWidth < 800 ? 60 : 100}%` }}>
                    <thead>
                      <tr style={{backgroundColor:"#def2d4"}}>
                        <th>S No.</th>
                        <th>DATE</th>
                        {nameList.map((i) =>
                          <th>{i.name}</th>)}
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {list12.filter((i, n) => n >= pageNumber * perPage & n < (pageNumber + 1) * perPage).sort((a, b) => a.date > b.date ? -1 : 1).map((i, n) => <tr>
                        <td >{pageNumber * perPage + n + 1}</td>
                        <td>{ddmmyy(i.date)}</td>
                        {nameList.map((j, n) =>
                          j.name.includes("MAIDA") ?

                            <td>{(quantityInKg1(i.date) * 100 / totalQuantity(i.date)).toFixed(2)} %</td>
                            :

                            <td>{(quantityInKg(j.name, i.date) * 100 / totalQuantity(i.date)).toFixed(2)} %</td>)}
                        <td> <a
                          data-bs-toggle="modal"
                          data-bs-target="#addNewCCMod"
                          onClick={() => setProductionDate(i.date)}

                          style={{
                            color: "#696cff",
                            cursor: "Pointer",
                          }}
                        >
                          <i class="menu-icon tf-icons bx bx bx-show" />
                        </a>
                         <a
                          data-bs-toggle="modal"
                          data-bs-target="#addNewCCMod1"
                          onClick={() => setProductionDate(i.date)}

                          style={{
                            color: "#696cff",
                            cursor: "Pointer",
                          }}
                        >
                          <i class="fa fa-edit" />
                        </a> <a className="" data-bs-toggle="modal"
                          data-bs-target="#addNewCCMod2"
                          onClick={() => setProductionDate(i.date)} style={{

                            cursor: "Pointer",
                          }}>
                          <i className="bx bx-trash me-1" />
                        </a></td>
                      </tr>)}
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
        <div
          className="modal fade"
          id="addNewCCMod"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
            <div className="modal-content p-5 p-md-5">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="text-center mb-4">
                  <h3>{ddmmyy(productionDate)}</h3>
                </div>
                <form
                  id="addNewCCForm"
                  className="row g-3"
                  onsubmit="return false"
                >
                  {list4.filter((i) => i.date === productionDate).map((i, n) =><>
                  
                    <div style={{ textAlign: "center", minHeight: 70 }} className="col-md-6">

                    <i style={{
                                
                                cursor: "Pointer",
                              }} className="fa fa-eye" data-bs-dismiss="modal" onClick={() => {

localStorage.setItem(
  "productiondata",
  JSON.stringify(i)
);
navigate("/ViewProduction");
}} />
                      <div className="btn btn-outline-info col-sm-12" >{getTime(i.timeFrom) + " " + "to" + " " + getTime(i.timeTo)}</div>
                      <h6>{getSupervisor(i.supervisorId)}</h6>
                    </div>
                    </>)
                  }


                </form>
              </div >
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="addNewCCMod1"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
            <div className="modal-content p-5 p-md-5">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="text-center mb-4">
                  <h3>{ddmmyy(productionDate)}</h3>
                </div>
                <form
                  id="addNewCCForm"
                  className="row g-3"
                  onsubmit="return false"
                >
                  {list4.filter((i) => i.date === productionDate).map((i, n) =><>
                  
                    <div style={{ textAlign: "center", minHeight: 70 }} className="col-md-6">

                   
                    <i style={{
                                
                                cursor: "Pointer",
                              }} className="fa fa-edit" data-bs-dismiss="modal" onClick={() => {

localStorage.setItem(
  "productiondata",
  JSON.stringify(i)
);
navigate("/EditProduction");
}} />
                      <div className="btn btn-outline-info col-sm-12"  >{getTime(i.timeFrom) + " " + "to" + " " + getTime(i.timeTo)}</div>
                      <h6>{getSupervisor(i.supervisorId)}</h6>
                    </div>
                    </>)
                  }


                </form>
              </div >
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="addNewCCMod2"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
            <div className="modal-content p-5 p-md-5">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="text-center mb-4">
                  <h3>{ddmmyy(productionDate)}</h3>
                </div>
                <form
                  id="addNewCCForm"
                  className="row g-3"
                  onsubmit="return false"
                >
                  {list4.filter((i) => i.date === productionDate).map((i, n) =><>
                  
                    <div style={{ textAlign: "center", minHeight: 70 }} className="col-md-6">

<i className="fa fa-trash" onClick={() => { if (window.confirm("are you sure")) delFn(i._id) }}/>
                      <div className="btn btn-outline-info col-sm-12" >{getTime(i.timeFrom) + " " + "to" + " " + getTime(i.timeTo)} </div>
                      <h6>{getSupervisor(i.supervisorId)}</h6>
                    </div>
                    </>)
                  }


                </form>
              </div >
            </div>
          </div>
        </div>
       
      </div>
    </>
  );

}

export default SaleRegistration;
