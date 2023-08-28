import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Sidebar from "./Sidebar";
import { baseUrl } from "./BaseUrl";

function MandiPurchase() {
    
 useEffect(()=>{getSaleData();getFarmData();getJinsData()},[])
    const navigate = useNavigate()
    const ddmmyy = (x) => {
      if (x) {
        const date = x.split("-").reverse().join("/")
        return date
  
      }
    }

    const mandiSaleDataLocal= localStorage.getItem("mandiSaleDataLocal")
    const parseSaleDataLocal= mandiSaleDataLocal?JSON.parse(mandiSaleDataLocal):[]

    const mandiSaleFarmLocal= localStorage.getItem("mandiSaleFarmLocal")
    const parseSaleFarmLocal= mandiSaleFarmLocal?JSON.parse(mandiSaleFarmLocal):[]

    const mandiSaleJinsLocal= localStorage.getItem("mandiSaleJinsLocal")
    const parseSaleJinsLocal= mandiSaleJinsLocal?JSON.parse(mandiSaleJinsLocal):[]


    const [saleData,setSaleData]=useState(parseSaleDataLocal)
    const [farmData,setFarmData]=useState(parseSaleFarmLocal)
    const [jinsList,setJinsList]=useState(parseSaleJinsLocal)
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [firm,setFirm]=useState("")
    const [jins,setJins]=useState("")
    const list = saleData
    const x = new Date(from)
    const y = new Date(to)
    const list1 = from!==""? list.filter((i)=>new Date(i.date)>=x):list
    const list2 = to!==""? list1.filter((i)=>new Date(i.date)<=y):list1
    const list3 = firm!=="" ? list2.filter((i)=>i.billingFarm===firm):list2
    const list4 = jins!=="" ? list3.filter((i)=>i.itemList[0].produceName===jins):list3
    const getSaleData=()=>{
      axios.get(baseUrl + "mandisale").then((res)=>
      {
        setSaleData(res.data.data)
        localStorage.setItem("mandiSaleDataLocal", JSON.stringify(res.data.data))
      })
    }
    const getFarmData=()=>{
      axios.get(baseUrl + "farm").then((res)=>
      {
        setFarmData(res.data.data)
        localStorage.setItem("mandiSaleFarmLocal", JSON.stringify(res.data.data))
      })
    }
    const getJinsData=()=>{
      axios.get(baseUrl + "yield").then((res)=>
      {
        setJinsList(res.data.data)
        localStorage.setItem("mandiSaleJinsLocal", JSON.stringify(res.data.data))
      })
    }

 
    const delFn=(x)=>{
      axios.delete(baseUrl + "mandisale/"+x).then(()=>getSaleData())
    }
      const reset =()=>{
        setFirm("")
        setFrom("")
        setTo("")
        setJins("")
      }
     
   
  return (
    <div>
         <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">

            <div className="container-xxl flex-grow-1 container-p-y">
              {/* Striped Rows */}
              <div className="card">

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
                      <a onClick={()=>navigate("/AddMandiSale")} >
                        <button
                        style={{backgroundColor:"#def1d4"}}
                          type="submit"
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Sale
                        </button>
                      </a>
                      <a onClick={()=>reset()} >
                        <button
                        style={{backgroundColor:"#def1d4"}}
                          type="submit"
                          className="btn btn me-sm-3 me-1"
                        >
                          Reset
                        </button>
                      </a>




                  </div>
                  

                </div>
                <div className="accordion-body">
                          <div className="col-md-11 ml-5" >
                          <div className="row g-3">
                            <div className="col-md-3">
                              <div className="row ">
                                <label
                                  className="col-sm-4 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  From
                                </label>
                                <div className="col-sm-8">
                                  <input 
                                  value={from}
                                  onChange={(e)=>setFrom(e.target.value)}
                                    type="date"
                                    className="form-control fltInp"
                                  />
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row ">
                                <label
                                  className="col-sm-4 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  To
                                </label>
                                <div className="col-sm-8">
                                  <input
                                  value={to}
                                  onChange={(e)=>setTo(e.target.value)}
                                    type="date"
                                    className="form-control fltInp"
                                  />
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row ">
                                <label
                                  className="col-sm-4 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Firm
                                </label>
                                <div className="col-sm-8">
                                  <select
                                  value={firm}
                                  onChange={(e)=>setFirm(e.target.value)}
                                    className="form-select fltInp"
                                  >
                                    <option value={""}>All</option>
                                    {farmData.map((i)=>
                                    <option>{i.farmName}</option>)}
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row ">
                                <label
                                  className="col-sm-4 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                 Jins
                                </label>
                                <div className="col-sm-8">
                                  <select value={jins} onChange={(e)=>setJins(e.target.value)}
                                    className="form-select fltInp"
                                  >
                                    <option value="">All</option>
                                    {jinsList.map((i)=><option>{i.yieldName}</option>)}
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            </div>
                            </div>
                            </div>
                <div className="table-responsive text-nowrap">
                  <br />


                  <table className="table table-striped table-bordered">
                    <thead style={{backgroundColor:"#def1d4"}}>
                      <tr>
                        <th style={{ width: 50 }}>DATE </th>
                        <th style={{ width: 50 }}>BILL NO </th>
                        <th style={{ width: 100 }}>PARTY</th>
                        <th style={{ width: 100 }}>BROKER</th>
                        <th style={{ width: 105 }}>Upaj</th>
                        <th style={{ width: 50 }}>FIRM</th>
                        <th style={{ width: 50 }}>TOTAL BAG</th>
                        <th style={{ width: 50 }}>ACTUAL WEIGHT(qtl)</th>
                        <th style={{ width: 50 }}>TOTAL WEIGHT(qtl)</th>
                        <th style={{ width: 50 }}>AMOUNT</th>
                        <th style={{ width: 50 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                     
                  {list4.map((i)=>
                      <tr>
                        <td>{ddmmyy(i.date)}</td>
                        <td>{i.billNumber}</td>
                        <td>{i.party}</td>
                        <td>{i.broker}</td>
                        <td>{i.itemList[0]?.produceName}</td>
                        <td>{i.billingFarm}</td>
                        <td>{i.itemList.map((j)=>j.bag).reduce((a,b)=>+a + +b,0)}</td>
                        <td>{i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)}</td>
                        <td>{i.itemList.map((j)=>j.totalWeight).reduce((a,b)=>+a + +b,0)}</td>
                        <td>{(+i.lastAmount).toFixed(2)}</td>
                       <td>
                          <div className="resaction">
                  
                          
                              <a onClick={()=>{localStorage.setItem("editMandiSaleData",JSON.stringify(i));navigate("/EditMandiSale")}} style={{ color: "#013758", cursor: "Pointer" }}><i class="fa fa-edit" /></a> &nbsp;
                          
                              <a onClick={()=>{if(window.confirm("are you sure")){delFn(i._id)}}} style={{ color: "#013758", cursor: "Pointer" }}><i className="bx bx-trash me-1" /></a>
                          </div>
                        </td>
                      </tr>)}

                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <br />
              <br />
              {/*/ Striped Rows */}
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />
      </div>
    </div>
  )
}

export default MandiPurchase