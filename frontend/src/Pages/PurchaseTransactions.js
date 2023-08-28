import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Sidebar from "./Sidebar";
import { baseUrl } from "./BaseUrl";

function MandiPurchase() {
    useEffect(()=>{getPurchaseData()},[])
 
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
    const [purchaseData,setPurchaseData]=useState([])
    const getPurchaseData=()=>{
      axios.get(baseUrl + "mandipurchase").then((res)=>
      {
        setPurchaseData(res.data.data)
       
      })
    }
    const delFn=(x)=>{
      axios.delete(baseUrl + "mandipurchase/"+x).then(()=>getPurchaseData())
    }
    const list = purchaseData
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
                      <a onClick={()=>navigate("/AddMandiPurchase")} >
                        <button
                          type="submit"
                          className="btn btn-primary me-sm-3 me-1"
                        >
                          Add Purchase
                        </button>
                      </a>




                  </div>
                  

                </div>
            
               
                <div className="table-responsive">
                  <br />


                  <table className="table table-striped">
                    <thead>

                      <tr className='table-primary table-primary'>
                        <th style={{ width: 50 }}  >S. NO.</th>
                        <th style={{ width: 50 }}>DATE </th>
                        <th style={{ width: 100 }} >BROKER NAME</th>
                        <th style={{ width: 100 }} >PARTY NAME</th>
                        <th style={{ width: 105 }}>FACTORY RATE</th>
                        <th style={{ width: 50 }}>RATE</th>
                        <th style={{ width: 50 }}>QUANTITY</th>
                        <th style={{ width: 50 }}>R. Qty.</th>
                        <th style={{ width: 50 }}>STATUS</th>
                        <th style={{ width: 50 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                    {list.map((i)=>
                      <tr>
                        <td className='td' ></td>
                        <td>{ddmmyy(i.saudaDate)}</td>
                        <td style={{ width: 100 }} >{i.brokerName}</td>
                        <td style={{ width: 100 }} >{i.partyName}</td>
                        <td>{i.rate*i.freight}</td>
                        <td>{i.rate}</td>

                        <td>{i.quantity}</td>
                        <td>{i.quantity}</td>
                        <td>{i.paymentStatus}</td>
                        <td>
                          <div className="resaction">
                            <a onClick={()=>{localStorage.setItem("viewMandiPurchaseData",JSON.stringify(i));navigate("/ViewMandiPurchase")}} style={{ color: "#696cff", cursor: "Pointer" }}><i class="menu-icon tf-icons bx bx bx-show" /></a> 
                          
                              <a onClick={()=>{localStorage.setItem("editMandiPurchaseData",JSON.stringify(i));navigate("/EditMandiPurchase")}} style={{ color: "#696cff", cursor: "Pointer" }}><i class="fa fa-edit" /></a> &nbsp;
                          
                              <a onClick={()=>{if(window.confirm("are you sure")){delFn(i._id)}}} style={{ color: "#696cff", cursor: "Pointer" }}><i className="bx bx-trash me-1" /></a>
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