import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Sidebar from "./Sidebar";
import { baseUrl } from "./BaseUrl";

function MandiPurchase() {
    useEffect(()=>{getPurchaseData();getFarmData()},[])
 
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

    const mandiPurchaseLocal= localStorage.getItem("mandiPurchaseLocalData")
    const mandiPurchaseParseLocal =mandiPurchaseLocal? JSON.parse(mandiPurchaseLocal):[]

    const mandiPurchaseFirmLocal= localStorage.getItem("mandiPurchaseFirmLocal")
    const firmParseLocal =mandiPurchaseFirmLocal? JSON.parse(mandiPurchaseFirmLocal):[]


    const [purchaseData,setPurchaseData]=useState(mandiPurchaseParseLocal)
    const [farmData,setFarmData]=useState(firmParseLocal)
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [farm,setFarm]=useState("")
    const [farmer,setFarmer]=useState("")
    const [amount,setAmount]=useState("")
    const [anubandhNo,setAnubandhNo]=useState("")
    const [bookletNo,setBookletNo]=useState("")
    const [bookletPageNo,setBookletPageNo]=useState("")
    const getFarmData=()=>{
      axios.get(baseUrl + "farm").then((res)=>{
        localStorage.setItem("mandiPurchaseFirmLocal",JSON.stringify(res.data.data)) 

      })
    }
    const getPurchaseData=()=>{
      axios.get(baseUrl + "mandipurchase").then((res)=>
      {
        setPurchaseData(res.data.data)
       localStorage.setItem("mandiPurchaseLocalData",JSON.stringify(res.data.data))
      })
    }
    const delFn=(x)=>{
      axios.delete(baseUrl + "mandipurchase/"+x).then(()=>getPurchaseData())
    }
    const totalAmount=(x)=>{
      const newList=list.filter((i)=>i._id===x).map((j)=>j.itemList).flat()
      const total = newList.map((i)=>i.totalAmount).reduce((a,b)=>+a + +b,0)
      return total
    }
    const list = purchaseData
    const x = new Date(from)
    const y = new Date(to)
    const list1 = from!==""? list.filter((i)=>new Date(i.date)>=x):list
    const list2 = to!==""? list1.filter((i)=>new Date(i.date)<=y):list1
    const list3 = farm!=="" ? list2.filter((i)=>i.farmName===farm):list2
    const list4 = farmer!==""? list3.filter((i)=>i.sellerName.toLowerCase().includes(farmer)):list3
    const list5 = amount!==""? list3.filter((i)=>totalAmount(i._id)?.includes(amount)):list4
    const list6 = anubandhNo!==""? list3.filter((i)=>i?.anubandhNo.toLowerCase().includes(anubandhNo)):list5
    const list7 = bookletNo!==""? list3.filter((i)=>i?.bookletNo.includes(bookletNo)):list6
    const list8 = bookletPageNo!==""? list3.filter((i)=>i.pageNo.includes(bookletPageNo)):list7
    const totalbag=(x)=>{
      const newList=list.filter((i)=>i._id===x).map((j)=>j.itemList).flat()
      const total = newList.map((i)=>i.totalBag).reduce((a,b)=>+a + +b,0)
      return total
    }
    const totalActualWeight=(x)=>{
      const newList=list.filter((i)=>i._id===x).map((j)=>j.itemList).flat()
      const total = newList.map((i)=>i.actualWeight).reduce((a,b)=>+a + +b,0)
      return total
    }
  const reset = ()=>{
         setFrom("")
         setTo("")
         setFarm("")
         setFarmer("")
         setAmount("")
         setAnubandhNo("")
         setBookletNo("")
         setBookletPageNo("")
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
                      <a onClick={()=>{navigate("/AddMandiPurchase");
                    localStorage.removeItem("localpdate")
                    }} >
                        <button 
                        style={{backgroundColor:"#def2d4"}}
                          type="submit"
                          className="btn btn me-sm-3 me-1"
                        >
                          Add Purchase
                        </button>
                      </a>
                      <a onClick={()=>{reset()
                    }} >
                        <button 
                        style={{backgroundColor:"#def2d4"}}
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
                                    type="date"
                                    value={from}
                                    onChange={(e)=>setFrom(e.target.value)}
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
                                  Farm
                                </label>
                                <div className="col-sm-8">
                                  <select value={farm}
                                    className="form-select fltInp"
                                    onChange={(e)=>setFarm(e.target.value)}
                                  >
                                    <option value={""} >All</option>
                                    {farmData.map((i)=>
                                    <option>{i.farmName}</option>
                                    )}
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
                                  Farmer
                                </label>
                                <div className="col-sm-8">
                                  <input
                                  value={farmer}
                                  onChange={(e)=>setFarmer(e.target.value)}
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
                                  Amount
                                </label>
                                <div className="col-sm-8">
                                  <input
                                  value={amount}
                                  onChange={(e)=>setAmount(e.target.value)}
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
                                  Anubandh No.
                                </label>
                                <div className="col-sm-8">
                                  <input
                                  value={anubandhNo}
                                  onChange={(e)=>setAnubandhNo(e.target.value)}
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
                                  Book No.
                                </label>
                                <div className="col-sm-4">
                                  <input
                                  value={bookletNo} 
                                  onChange={(e)=>setBookletNo(e.target.value)}
                                    className="form-control fltInp"
                                  />
                                </div>/
                                <div className="col-sm-3">
                                  <input
                                  value={bookletPageNo}
                                   onChange={(e)=>setBookletPageNo(e.target.value)}
                                    className="form-control fltInp"
                                  />
                                </div>
                        
                              </div>
                            </div>
                          
                            </div>
                            </div>
                            </div>
               
                <div className="table-responsive text-nowrap">
                  <br />


                  <table className="table table-striped table-bordered">
                    <thead style={{backgroundColor:"#def2d4"}}>

               <tr>
                        <th>S. NO.</th>
                        <th>DATE </th>
                        <th>Book No</th>
                        <th>Anubandh No</th>
                        <th>Upaj</th>
                        <th>FARM NAME</th>
                        <th>FARMEr NAME</th>
                        <th>Bag QUANTITY</th>
                        <th>Actual Weight(Qt)</th>
                        <th>Total Amount</th>
                        <th>Cash Amount</th>
                        <th>Remaining Amount</th>
                        <th>Actions</th>
                   </tr>
                    </thead>
                    <tbody>
                    {list8.map((i)=>
                      <tr>
                        <td className='td' ></td>
                        <td>{ddmmyy(i.date)}</td>
                        <td>{i.bookletNo}/{i.pageNo}</td>
                        <td>{i.anubandhNo}</td>
                        <td>{i.itemList[0]?.yieldName}</td>
                        <td>{i.farmName}</td>
                        <td>{i.sellerName}</td>
                        <td>{totalbag(i._id)}</td>
                        <td>{totalActualWeight(i._id)}</td>
                        <td>{totalAmount(i._id)}</td>
                        <td>{i.cashPayment}</td>
                        <td>{totalAmount(i._id)-i.cashPayment}</td>
                        <td>
                          <div className="resaction">
                             <a onClick={()=>{localStorage.setItem("editMandiPurchaseData",JSON.stringify(i));navigate("/EditMandiPurchase")}} style={{ color: "#013758", cursor: "Pointer" }}><i class="fa fa-edit" /></a> &nbsp;
                          
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