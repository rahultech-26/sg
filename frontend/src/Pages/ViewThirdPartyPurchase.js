import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

function Viewsale() {
  const localdata = localStorage.getItem("viewMandiPurchaseData")
  const saleDatalocal = localdata?JSON.parse(localdata):[];
  const parsedata = localdata?JSON.parse(localdata):[];
  const [saleData, setSaleData] = useState(saleDatalocal);
  const [status, setStatus] = useState(saleData?.paymentStatus);
  const [amountPaid, setAmountPaid] = useState("");
  const [amountMode, setAmountMode] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [tRemark, setTRemark] = useState("");
  const [isMain, setIsMain] = useState(true);
  const [amtRList,setAmtRList] = useState(saleData?.amtR);
  const [isEdit,setIsEdit] = useState("");


  const delTrans=(x)=>{

    const newsauda = { ...saleData, amtR: amtRList.filter((a,b)=>b!==x) };
    setSaleData(newsauda);
    setAmtRList(amtRList.filter((a,b)=>b!==x));
    localStorage.setItem("thirdpartytransactionData", JSON.stringify(newsauda));
    axios.put(baseUrl+"thirdpartypurchase/" + saleData._id, {
      amtR: amtRList.filter((a,b)=>b!==x)
    })
  }
  const addTrans=()=>{
    if(paymentDate!==""&amountPaid!==""&amountMode!==""){

    const newItem = {
      date:paymentDate,
      amount:amountPaid,
      mode:amountMode,
      remark:tRemark
    }

    if(isEdit!==""){

      const newList = amtRList.map((i,n)=>n===isEdit?newItem:i)
      const newsauda = { ...saleData, amtR: newList };

  
      axios.put(baseUrl+"thirdpartypurchase/" + parsedata._id, {
        amtR: newList
      }).then(()=>{
        setAmountMode("")
        setPaymentDate("")
        setAmountPaid("")
        setTRemark("")
        setIsEdit("")
        localStorage.setItem("thirdpartyData", JSON.stringify(newsauda));
        setSaleData(newsauda);
        setAmtRList(newList);
      })
    } else {
      const newsauda = { ...saleData, amtR: [...amtRList,newItem] };
     
     
      axios.put(baseUrl+"thirdpartypurchase/" + saleData._id, {
        amtR: [...amtRList,newItem]
      }).then(()=>{
        setAmountMode("")
        setPaymentDate("")
        setAmountPaid("")
        setTRemark("")
        setIsEdit("")
        localStorage.setItem("thirdpartyData", JSON.stringify(newsauda));
        setSaleData(newsauda);
        setAmtRList([...amtRList,newItem]);
      })
    }
   
  }
  }
  

  const editSaudaStatus = () => {
    const newsauda = { ...saleData, paymentStatus: status };
    setSaleData(newsauda);
    localStorage.setItem("thirdpartyData", JSON.stringify(newsauda));
    axios.put(baseUrl+"thirdpartypurchase/" + parsedata._id, {
      paymentStatus: status,
    });
  };

 

  const navigate = useNavigate();



  const ddmmyy = (x)=>{
    if (x){
    const date = x.split("-")
    const dd = date[2]
    const mm = date[1]
    const yy = date[0]
    const final = `${dd}/${mm}/${yy}`
    return final

  }
  }
 const amtRecived = ()=>{
  const amt = amtRList?.map((i)=>+i.amount).reduce((a,b)=>a+b,0)
  return amt
 }
  return (
    <>
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            {/* Content wrapper */}
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          Trade Date
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>
                          {ddmmyy(parsedata.saudaDate)}
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                        broker Name
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>
                          {parsedata.brokerName}
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1"style={{textTransform:"uppercase"}}>
                          Party Name
                        </span>
                        <h3 className="card-title mb-1"style={{textTransform:"uppercase"}}>
                          {parsedata.partyName}
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                
                </div>
                <div className="row pt-3">
                <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                        Cash discount
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>
                          {parsedata.cashDiscount}
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          freight Condition
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>
                          {parsedata.freightCondition}
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          freight
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>
                          {parsedata.freight}
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          total Qunatity
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>{parsedata.quantity}</h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                        NET REMAINING QUANTITY
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>{parsedata.quantity}</h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                        RATE (IN QUINTAL)
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>{parsedata.rate}</h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          REMAINING
                           Amount
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>{(parsedata.rate*parsedata.quantity)-(amtRecived())}</h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          remark
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>{parsedata.remark}</h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                 
                  
                  
                  <div className="col-md-4 pb-3">
                    <div className="card">
                      <div className="card-body pb-0">
                        <span className="d-block fw-semibold mb-1" style={{textTransform:"uppercase"}}>
                          trade Status
                        </span>
                        <h3 className="card-title mb-1" style={{textTransform:"uppercase"}}>
                          {saleData.paymentStatus}{" "}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#addNewCCMo"
                            onClick={() => {setIsMain(false)
                              localStorage.setItem("status",saleData.paymentStatus)}}
                          
                          >
                            Change
                          </button>
                        </h3>
                      </div>
                      <div id="orderChart" className="mb-3" />
                    </div>
                  </div>
                  
                  
                  
                  
                 
                </div>
              </div>
              {/* / Content */}
            </div>
            {/* Content wrapper */}

         

            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4">THIRD PARTY TRANSACTIONS</h4>
              {/* Striped Rows */}
              <div className="card">
                <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
                 
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#addNewCCModal"
                      onClick={()=>{
                        setAmountMode("")
                        setPaymentDate("")
                        setAmountPaid("")
                        setTRemark("")
                        setIsEdit("")
                      }}
                    >
                      {" "}
                      Add{" "}
                    </button>
                
                </div>
                {/* <h5 className="card-header">Striped rows</h5> */}
                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr table-primary>
                        <th>S No.</th>
                        <th>Date</th>
                        <th>Mode </th>
                        <th>Amount</th>
                        <th>remark</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {amtRList?.map((i, n) => (
                        <tr>
                          <td>{n+1}</td>
                          <td>{ddmmyy(i.date)}</td>
                          <td>{i.mode}</td>
                          <td>{i.amount}</td>
                          <td>{i.remark}</td>
                          <td>
                          <i className="fa fa-edit"  style={{cursor:"pointer",marginRight:10}} onClick={() => {
                            setPaymentDate(i.date)
                            setAmountMode(i.mode)
                            setAmountPaid(i.amount)
                            setTRemark(i.remark)
                            setIsEdit(n)
                          }} data-bs-toggle="modal"
                      data-bs-target="#addNewCCModal"/>
                                <i className="bx bx-trash me-1"  style={{cursor:"pointer"}} onClick={() => {if(window.confirm("are you sure"))delTrans(n)}}/>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/ Striped Rows */}
            </div>
            {/* Add New Credit Card Modal */}
            <div
              className="modal fade"
              id="addNewCCModal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                <div className="modal-content p-3 p-md-5">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                    <div className="text-center mb-4">
                      <h3>THIRD PARTY TRANSACTIONS</h3>
                    </div>
                    <form
                      id="addNewCCForm"
                      className="row g-3"
                      onsubmit="return false"
                    >
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="Date">
                              Payment Date
                            </label>
                            <input
                              type="date"
                              id="Date"
                              className="form-control "
value={paymentDate}
                              onChange={(e)=>setPaymentDate(e.target.value)}
                             
                            />
                          </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="Date">
                          Payment Mode
                        </label>
                        <select
                          type="text"
                          id="Date"
                          className="form-select "
                          value={amountMode}
                          onChange={(e)=>setAmountMode(e.target.value)}
                        >
                          <option>--select--</option>
                          <option>Bank</option>
                          <option>Bank Other</option>
                          <option>Cash</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                         

                     
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="Amount">
                              Amount
                            </label>
                            <input
                              type="number"
                              id="Amount"
                              className="form-control"
                              placeholder="Number"
                              value={amountPaid}
                              onChange={(e)=>setAmountPaid(e.target.value)}
                              
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="Amount">
                              Remark
                            </label>
                            <input
                              value={tRemark}
                              onChange={(e)=>setTRemark(e.target.value)}
                              className="form-control"
                              
                             
                              
                            />
                          </div>
                        </div>
                      </div>
                    
                      <div className="container-xxl flex-grow-1 container-p-y">
    
                 
                      </div>

                      <div className="col-12 text-center">
                        <button
                   disabled={paymentDate!==""&amountPaid!==""&amountMode!==""?false:true}
                          className="btn btn-primary me-sm-3 me-1 mt-3"
                     onClick={()=>addTrans()}
                          data-bs-dismiss="modal"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-label-secondary btn-reset mt-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Add New Credit Card Modal */}

            {/* Add New status Modal */}
            <div
              className="modal fade"
              id="addNewCCMo"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                <div className="modal-content p-3 p-md-5">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                    <div className="text-center mb-4">
                      {/* <h3>CHANGE STATUS</h3> */}
                    </div>
                    <form
                      id="addNewCCForm"
                      className="row g-3"
                      onsubmit="return false"
                    >
                     
                     
                      <div className="col-md-4">
                        <button
                          className="btn btn-primary"
                          disabled
                     
                        >
                          {localStorage.getItem("status")}
                        </button>
                      </div>
                      <div className="col-md-4">
                        {/* <label className="col-sm-3 col-form-label text-sm-end" htmlFor="collapsible-Rate">STATUS</label> */}

                        <select
                          className=" form-select"
                          onChange={(e) => setStatus(e.target.value)}
                         
                        >
                          <option selected disabled>--select--</option>
                          <option>Completed</option>
                          <option>Pending</option>
                          <option>Cancel</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                      <button
                          type="submit"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={() => {
                            editSaudaStatus();
                          }}
                        >
                          Change
                        </button>
                    
                      </div>

                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/End Add New Status Modal */}
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />
      </div>
    </>
  );
}

export default Viewsale;
