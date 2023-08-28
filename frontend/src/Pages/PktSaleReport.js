import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

const SaleVendorTable = () => {
  const [party, setParty] = useState("")
  const [location, setLocation] = useState("")
  const getDate = (x)=>{
    const date = new Date(x);
    const dd = date.getDate();
    const ndd = dd < 10 ? `0${dd}` : dd;
    const mm = date.getMonth() + 1;
    const nmm = mm < 10 ? `0${mm}` : mm;
    const year = date.getFullYear();
    const finalDate = `${year}-${nmm}-${ndd}`;
    return finalDate
  }
  const getPartyData = () => {
    axios
      .get(baseUrl + "party")
      .then((res) => setPartyData1(res.data.data.filter((i) => i.type === "Sale")));
  };
  const getLocation = () => {
    axios
      .get(baseUrl + "location")
      .then((res) => setLocationData(res.data.data.sort((a, b) => a.location.toUpperCase() > b.location.toUpperCase() ? 1 : -1)));
  };

  const [locationData, setLocationData] = useState([]);
  const [partyData1, setPartyData1] = useState([]);
  const date = new Date()
  const dd = date.getDate()
  const mm = date.getMonth() + 1
  const year = date.getFullYear()
  const finalDate = year + "-" + "0" + mm + "-" + dd
  const localData1=localStorage.getItem("localsalereportdata")
  const parseData1 = localData1?JSON.parse(localData1):[]


  const [productionData, setProductionData] = useState(parseData1);



  const [fromDate, setFromDate] = useState(finalDate)
  const [toDate, setToDate] = useState(finalDate)


  const list = productionData
  const x = new Date(fromDate);
  const y = new Date(toDate);


  const list1 = fromDate !== "" ? list.filter((i) => (new Date(i.ddate) >= x)) : list
  const list2 = toDate !== "" ? list1.filter((i) => (new Date(i.ddate) <= y)) : list1
  const list3 = fromDate===toDate ? list.filter((i) => getDate(+i.ddate) === fromDate) : list2
  const list4 = party !== "" ? list3.filter((i) => i.partyName === party) : list3
  const list5 = location !== "" ? list4.filter((i) => i.location === location) : list4


  const list6 = list5.map((i) => i.report).flat()


  const [nameList, setNameList] = useState([])

  const getItems = () => {
    axios.get(baseUrl + "productionitem").then((res) => setNameList(res.data.data))
  }



  const navigate = useNavigate();
  const getProductionData = () => {
    axios.get(baseUrl + "salereport").then((res) => {
      setProductionData(res.data.data)

    });
  };


  const getTotalQuantitySize = (x, y, z, b) => {
    const list = list6
    if (b) {
      const qty = list.filter((i) => i.itemType === x & i.size == y & i.category === z & i.bagSize === b).map((i) => +i.quantity).reduce((a, b) => a + b, 0)
      return qty
    } else {
      const qty = list.filter((i) => i.itemType === x & i.size == y & i.category === z & !i.bagSize).map((i) => +i.quantity).reduce((a, b) => a + b, 0)
      return qty
    }

  }
  const getTotalQuantitySize1 = (x) => {
    const list = list6

    const qty = list.filter((i) => i.itemType === x).map((i) => +i.quantity).reduce((a, b) => a + b, 0)
    return qty


  }

  const getTotalQuantityInKgSize = (x, y, z, b) => {
    const list = list6
    if (b) {
      const qty = list.filter((i) => i.itemType === x & i.size == y & i.category === z & i.bagSize === b).map((i) => i.quantity * (i.bagSize || i.size)).reduce((a, b) => a + b, 0)
      return qty
    } else {
      const qty = list.filter((i) => i.itemType === x & i.size == y & i.category === z & !i.bagSize).map((i) => i.quantity * (i.bagSize || i.size)).reduce((a, b) => a + b, 0)
      return qty
    }

  }
  const getTotalQuantityInKgSize1 = (x) => {
    const list = list6

    const qty = list.filter((i) => i.itemType === x).map((i) => (i.bagSize || i.size) * i.quantity).reduce((a, b) => a + b, 0)
    return qty


  }
  const renderTable = (x) => {
    const list = list6.filter((i) => i.itemType === x).sort((a, b) => a.quantity > b.quantity ? 1 : -1)
    const list2 = list.map((i) => {
      return {
        category: i.category,
        size: i.size,
        bagSize: i.bagSize
      }
    })

    const list3 = [...new Map(list2.map(v => [JSON.stringify(v), v])).values()].sort((a, b) => +a.size > +b.size ? 1 : -1)

    if (list3.length > 0) {
      return (<>



        <tr style={{backgroundColor:"#def2d4"}}>
          <th style={{ fontSize: 20, fontWeight: "bold" }}>{x === "TANDOORI ATTA" ? "T.ATTA" : x}</th>
          <th style={{ textAlign: "center", }}>Item</th>

          <th style={{ textAlign: "center", }}>QTY <br />(bag)</th>
          <th style={{ textAlign: "center", }}>QTY <br />(kg)</th>
        </tr>



        {list3.map((i, n) =>
          <tr>

            <td style={{}}>{n + 1})&nbsp;{i.category}</td>
            <td style={{ textAlign: "center", color: "black" }}><b>{i.size} kg<br />{i.bagSize ? i.bagSize + " " + "kg bag" : ""}</b></td>

            <td style={{ textAlign: "center" }}>{getTotalQuantitySize(x, i.size, i.category, i.bagSize)}</td>
            <td style={{ textAlign: "center" }}>{getTotalQuantityInKgSize(x, i.size, i.category, i.bagSize)}</td>
          </tr>)}
        <tr style={{backgroundColor:"#def2d4"}}>
          <td style={{}}>Total</td>
          <td style={{ textAlign: "center" }}></td>
          <td style={{ textAlign: "center" }}>{getTotalQuantitySize1(x)}</td>
          <td style={{ textAlign: "center" }}>{getTotalQuantityInKgSize1(x)}</td></tr>

      </>
      )
    }
  }


  return (
    <div>
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="container-xxl flex-grow-1 container-p-y">
              {/* Responsive Table */}
              <div className="card">
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
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            style={{ width: 120, marginLeft: 10, height: 25 }}
                            type="date"
                          />
                        </div>
                      </div><br />
                      <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>
                        <div>
                          <label className='PR-l1'>To</label>
                        </div>
                        <div>
                          <input
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            style={{ width: 120, marginLeft: 10, height: 25 }}
                            type="date"
                          />
                        </div>
                      </div>
                    </div><br />
                    <div className="ast1">
                      <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>

                        <div>
                          {" "}
                          <label style={{ marginLeft: 30 }} className='PR-l2'>Party</label>
                        </div>
                        <div>
                          <select onChange={(e) => setParty(e.target.value)} style={{ width: 120, marginLeft: 10, height: 25 }} className="PR-S" >
                            <option value={""}>All</option>
                            {partyData1.map((i) => (
                              <option>{i.partyName}</option>
                            ))}
                          </select>
                        </div>
                      </div><br />
                      <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-evenly", marginLeft: 50 }}>
                        <div>
                          <label className='PR-l3'>Location</label>
                        </div>
                        <div>
                          {" "}
                          <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={{ width: 120, marginLeft: 10, height: 25 }} className="PR-S1" >
                            <option value={""}>All</option>
                            {locationData.map((i) => (
                              <option>{i.location}</option>
                            ))}

                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="ast2" >
                      <div className="ast2-a" style={{ visibility: "hidden", display: "flex", width: "22%", justifyContent: "space-evenly", justifyContent: "space-evenly", marginLeft: 150 }}>
                        <div style={{}}>
                          <label className='PR-l4'>Status</label>
                        </div>
                        <div>
                          <select

                            style={{ width: 120, marginLeft: 10, height: 25 }} className='PR-S2'
                          >
                            <option value={""}>All</option>
                            <option>Not Dispatched</option>
                            <option>Dispatched</option>
                          </select>
                        </div>
                        <div style={{ zIndex: 10 }}><i className='fa fa-search srch1' style={{ cursor: "pointer", marginLeft: 10, display: "none" }} /></div>
                      </div>
                      <div style={{ width: "78%" }}>

                      </div>
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
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                          style={{ width: "90%" }}
                          type="date"

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
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                          style={{ width: "90%" }}
                          type="date"

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
                          Party
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <select
                          onChange={(e) => setParty(e.target.value)}
                          style={{ width: "90%" }}
                        >
                          <option value={""}>All</option>
                          {partyData1.map((i) => (
                            <option>{i.partyName}</option>
                          ))}
                        </select>
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
                          Location
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <select
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          style={{ width: "90%" }}
                        >
                          <option value={""}>All</option>
                          {locationData.map((i) => (
                            <option>{i.location}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 5,
                        visibility: "hidden",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <label style={{ width: "80%", marginLeft: "20%" }}>
                          Status
                        </label>
                      </div>
                      <div style={{ width: "50%" }}>
                        <select

                          style={{ width: "90%" }}

                        >
                          <option value={""}>All</option>
                          <option>Completed</option>
                          <option>Pending</option>
                          <option>Cancel</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginLeft: "80%" }}>
                      <i
                        className="fa fa-search"
                        style={{ cursor: "pointer", display: "none" }}

                      />
                    </div>

                  </div>
                </div>

                <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>

                  <button
                    type="submit"
                    disabled
                    className="btn btn-primary me-sm-3 me-1"
                  >
                    Dispatch Report
                  </button>
                  {/* {hasPermission("MaidaProductionReport", "export") &&
                    <div style={{ width: "4rem", height: "3rem", right: 10, top: 10, position: "absolute",color:"blue", display: "flex",cursor:"pointer", alignItems: "center", justifyContent: "flex-end" }} >
                      <DownloadTableExcel
                        filename="PacketSize"
                        sheet="users"
                        currentTableRef={tableRef1.current}
                      > 
                        <i style={{ fontSize: 20 }} class="fa fa-download" aria-hidden="true"></i>
                      </DownloadTableExcel>
                    </div>} */}
                  <br />
                  <br />


                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped table-bordered" style={{ zoom: `${window.innerWidth < 800 ? 72 - productionData.length * 6 : 100}%`}} >

                    <tbody>
                      {nameList.map((i) => renderTable(i.name))}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
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
    </div >
  );
};

export default SaleVendorTable;
