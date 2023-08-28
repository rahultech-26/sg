
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { DownloadTableExcel } from "react-export-table-to-excel";
import ReactToPrint from 'react-to-print';
function AddParty() {
  const navigate = useNavigate()
  useEffect(()=>{getFirmData();getYeildData();getPartyData();getBrokerData();getSaleData()},[])
  const [postList,setPostList]=useState({})

  const saleReportFarmLocal =localStorage.getItem("saleReportFarmLocal")
  const parseReportFarmLocal= saleReportFarmLocal?JSON.parse(saleReportFarmLocal):[]

  const saleReportLocalData =localStorage.getItem("saleReportLocalData")
  const parseReportLocalData= saleReportLocalData?JSON.parse(saleReportLocalData):[]

  const saleReportYieldLocal =localStorage.getItem("saleReportYieldLocal")
  const parseReportYieldLocal= saleReportYieldLocal?JSON.parse(saleReportYieldLocal):[]

  const saleReportPartyLocal =localStorage.getItem("saleReportPartyLocal")
  const parseReportPartyLocal= saleReportPartyLocal?JSON.parse(saleReportPartyLocal):[]

  const saleReportBrokerLocal =localStorage.getItem("saleReportBrokerLocal")
  const parseReportBrokerLocal= saleReportBrokerLocal?JSON.parse(saleReportBrokerLocal):[]

  const [firmList,setFirmList]=useState(parseReportFarmLocal)
  const [yeildList,setYeildList]=useState(parseReportYieldLocal)
  const [partyList,setPartyList]=useState(parseReportPartyLocal)
  const [brokerList,setBrokerList]=useState(parseReportBrokerLocal)
  const [saleData,setsaleData]=useState(parseReportLocalData)
  const [saleData1,setsaleData1]=useState(parseReportLocalData)
  const tableRef = useRef(null);
  const tableRef1 = useRef(null);
  const tableRef2 = useRef(null);
  const tableRef3 = useRef(null);
  const tableRef4 = useRef(null);
  const tableRef5 = useRef(null);
  const tableRef6 = useRef(null);
  const tableRef7 = useRef(null);
  const getSaleData=()=>{
    axios.get(baseUrl +"mandisale").then((res)=>{
      setsaleData(res.data.data)
      setsaleData1(res.data.data)
      localStorage.setItem("saleReportLocalData", JSON.stringify(res.data.data))
    })
  }
  const getFirmData=()=>{
    axios.get(baseUrl +"farm").then((res)=>{setFirmList(res.data.data)
    localStorage.setItem("saleReportFarmLocal", JSON.stringify(res.data.data))
    })
  }

  const getYeildData=()=>{
    axios.get(baseUrl +"yield").then((res)=>{setYeildList(res.data.data)
      localStorage.setItem("saleReportYieldLocal", JSON.stringify(res.data.data))
    })
  }
  
  const getPartyData=()=>{
    axios.get(baseUrl +"partysaiyyad").then((res)=>{setPartyList(res.data.data)
      localStorage.setItem("saleReportPartyLocal", JSON.stringify(res.data.data))
    })
  }
  const getBrokerData=()=>{
    axios.get(baseUrl +"brokersaiyyad").then((res)=>{setBrokerList(res.data.data)
      localStorage.setItem("saleReportBrokerLocal", JSON.stringify(res.data.data))
    })
  }

const getGst =(x)=>{
  const gstNo = partyList.filter((i)=>i.partyName===x)[0].gst
  return gstNo
}
const getPan =(x)=>{
  const gstNo = partyList.filter((i)=>i.partyName===x)[0].panNo
  return gstNo
}
const getPartyTurnOver=(x)=>{
const amount = saleData.filter((i)=>i.party===x).map((i)=>i.lastAmount).reduce((a,b)=>+a + +b,0)
return amount
}
const getPartyTotalCgst=(x)=>{
const amount = saleData.filter((i)=>i.party===x).map((i)=>i.cgst).reduce((a,b)=>+a + +b,0)
return amount
}
const getPartyTotalSgst=(x)=>{
const amount = saleData.filter((i)=>i.party===x).map((i)=>i.sgst).reduce((a,b)=>+a + +b,0)
return amount
}
const getPartyTotalIgst=(x)=>{
const amount = saleData.filter((i)=>i.party===x).map((i)=>i.igst).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalBag=(x)=>{
const amount = saleData.map((i)=>i.itemList.filter((j)=>j.produceName===x).map((k)=>k.bag).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalWeight=(x)=>{
const amount = saleData.map((i)=>i.itemList.filter((j)=>j.produceName===x).map((k)=>k.totalWeight).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalAmount=(x)=>{
const amount = saleData.map((i)=>i.itemList.filter((j)=>j.produceName===x).map((k)=>k.amount).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalCgst=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0]?.produceName===x).map((j)=>j.cgst).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalSgst=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.sgst).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalIgst=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.igst).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotaltotalFreight=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.totalFreight).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalFreightAdvance=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.advanceFreight).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalTcs=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.tcs).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalRoundoff=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.roundOff).reduce((a,b)=>+a + +b,0)
return amount
}
const getjinstotalfinalAmount=(x)=>{
const amount =saleData.filter((i)=>i.itemList[0].produceName===x).map((j)=>j.lastAmount).reduce((a,b)=>+a + +b,0)
return amount
}
  const date = new Date()
  const dd = date.getDate()
  const fdd = dd<10?`0${dd}`:dd
  const mm = date.getMonth()+1
  const fmm = mm<10?`0${mm}`:mm
  const yy = date.getFullYear()
  const finalDate = `${yy}-${fmm}-${fdd}`
  const [reportType,setReportType]=useState("")
  const ddmmyy = (x)=>{
    const date = x.split("-").reverse().join("/")
    return date
  }

  const [fromDate, setFromDate]=useState(finalDate)
  const [toDate, setToDate]=useState(finalDate)
  const [companyName, setCompanyName]=useState("")
  const [jins, setJins]=useState("")
  const [party, setParty]=useState("")
  const [inState, setInState]=useState("")
  const [broker, setBroker]=useState("")
  const [saleType, setSaleType]=useState("")

  const list = saleData1
  const x = new Date(fromDate)
  const y = new Date(toDate)

  const list1 = fromDate!==""?list.filter((i)=>new Date(i.date)>= x):list
  const list2 = toDate!==""?list1.filter((i)=>new Date(i.date)<= y):list1
  const list3 = companyName!==""?list2.filter((i)=>i.billingFarm===companyName):list2
  const list4 = jins!==""?list3.filter((i)=>i.itemList[0].produceName===jins):list3
  const list5 = party!==""?list4.filter((i)=>i.party===party):list4
  const list6 = inState!==""?list5.filter((i)=>i.supplyPoint===inState):list5
  const list7 = broker!==""?list6.filter((i)=>i.broker===broker):list6
  const list8 = saleType!==""?list7:list7

  const totalFreight =()=>{
    const total = list8.map((i)=>i.totalFreight).reduce((a,b)=>+a + +b,0)
    return total
  }
  const totaladvFreight =()=>{
    const total = list8.map((i)=>i.advanceFreight?i.advanceFreight:0).reduce((a,b)=>+a + +b,0)
    return total
  }
  const grandtotalBag =()=>{
    const total = list8.map((i)=>i.itemList.map((j)=>j.bag).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
    return total
  }
  const finalavgRate =()=>{
    const list = list8.map((i)=>i.itemList.map((j)=>j.ratePerQuantal)).flat()
    const total = list.reduce((a,b)=>+a + +b,0)
    const avg = total/list.length
      return avg
  }
  const totalgrossWeight =()=>{
    const total = list8.map((i)=>i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
    return total
  }
  const totalnettWeight =()=>{
    const total = list8.map((i)=>i.itemList.map((j)=>j.totalWeight).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
    return total
  }
  const totalfinalAmount =()=>{
    const total = list8.map((i)=>i.itemList.map((j)=>j.amount).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
    return total
  }
  const componentRef = useRef();
  const componentRef1 = useRef();
  const componentRef2 = useRef();
  const componentRef3 = useRef();
  const [print,setPrint]=useState('')

  return (
    <div>
       
      {reportType==="register"?
                    <div  className='card table-responsive ' style={{position:"fixed",top:0,width:"98%",height:"100vh",marginLeft:"1%",overflowY:"auto",color:"black"}}>
                               <div>   <ReactToPrint
        trigger={() => <button className='btn btn-primary m-2'  >Print</button>}
        content={() => componentRef.current}
      /></div>
                 <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
                    
                      <div style={{color:'black'}}
                            ref={componentRef}
                        id="collapseDeliveryAddress"
                        className="accordion-collapse collapse show p-2"
                        aria-labelledby="headingDeliveryAddress"
                        data-bs-parent="#collapsibleSection"
                      >
                        {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                        <div className="accordion-body text-center">

     
                    {companyName===""?
                     <>
             {firmList.map((i)=>
             <label style={{fontSize:19,fontWeight:"bold",textTransform:"uppercase"}}>{i.farmName},</label>)}</>
                        :<h2 style={{color:"black"}} >{companyName}</h2>}
                        <h5 style={{color:"black"}} >Sale Report Summary</h5>
                   
                        </div>
                        <div className="accordion-body">
                        <b>Date From :</b>&nbsp;
                        <label>{ddmmyy(fromDate)}</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>To :</b>&nbsp;
                        <label>{ddmmyy(toDate)}</label>
                   
                        </div>
                        <div className="accordion-body">
                        <div className="tabel-responsive">
                        <table style={{fontSize:12,color:"black"}} className='table g-0'>
                        <thead style={{color:"black"}}>
                          <tr style={{color:"black",border:"1px solid black",borderLeft:"none",borderRight:"none"}}>
                          <th style={{color:"black",border:"none"}}>क्र</th>
                          <th style={{color:"black",borderLeft:"1px solid black"}}>दिंनाक</th>
                          <th style={{color:"black"}}>इनवॉइस</th>
                          <th style={{color:"black"}}>पार्टी</th>
                          <th style={{color:"black"}}>दलाल</th>
                          <th style={{color:"black"}}>उपज</th>
                          <th style={{color:"black"}}>ट्रक क्र</th></tr>
                        </thead>
                        <tbody>
                          {list8.map((i)=><>
                          <tr style={{border:"none",color:"black",lineHeight:"0%"}}>
                          <td style={{border:'none',color:"black"}} className='td'></td>
                          <td style={{border:"none",color:"black",borderLeft:"1px solid black"}}>{ddmmyy(i.date)}</td>
                          <td style={{border:"none",color:"black"}}>{i.billNumber}</td>
                          <td style={{border:"none",color:"black"}}>{i.party}</td>
                          <td style={{border:"none",color:"black"}}>{i.broker}</td>
                          <td style={{border:"none",color:"black"}}>{i.itemList[0]?.produceName}</td>
                          <td style={{border:"none",color:"black"}}>{i.truckNo}</td>
                          </tr>
                          
                          <tr className='p-0' style={{border:"none",textAlign:"center",lineHeight:"0%"}}>
                          <td style={{border:"none",color:"black",borderRight:"1px solid black"}}></td>
                          <th style={{border:"none",color:"black",textAlign:"start"}}>ब्रांड</th>
                          <th style={{border:"none",color:"black"}}>बोरे</th>
                          <th style={{border:"none",color:"black"}}>वास्तविक वजन</th>
                          <th style={{border:"none",color:"black"}}>अनुज्ञा वजन</th>
                          <th style={{border:"none",color:"black"}}>दर</th>
                          <th style={{border:"none",color:"black"}}>मूल्य</th>
                          </tr>
                          {i.itemList.map((j)=>
                          <tr className='p-0 g-0' style={{border:"none",textAlign:"center",lineHeight:"0%"}}>
                          <td style={{border:"none",color:"black",borderRight:"1px solid black"}}></td>
                          <td style={{border:"none",color:"black",textAlign:"start"}}>{j.brand}</td>
                          <td style={{border:"none",color:"black"}}>{j.bag}</td>
                          <td style={{border:"none",color:"black"}}>{j.actualWeight}</td>
                          <td style={{border:"none",color:"black"}}>{j.totalWeight}</td>
                          <td style={{border:"none",color:"black"}}>{j.ratePerQuantal}</td>
                          <td style={{border:"none",color:"black"}}>{j.amount}</td>
                          </tr>)}
                          <tr className='p-0' style={{border:"none",borderTop:"1px solid black",lineHeight:"0%",textAlign:"center"}}>
                            <td style={{border:"none",borderRight:"1px solid black"}}></td>
                          <th style={{border:"none",color:"black",textAlign:"start"}}></th>
                          <th style={{border:"none",color:"black"}}></th>
                          <th style={{border:"none",color:"black"}}>CGST</th>
                          <th style={{border:"none",color:"black"}}>SGST</th>
                          <th style={{border:"none",color:"black"}}>IGST</th>
                          <th style={{border:"none",color:"black"}}>TCS</th>
                          </tr>
                          <tr className='p-0' style={{border:"none",lineHeight:"0%",textAlign:"center"}}>
                            <td style={{border:"none",borderRight:"1px solid black"}}></td>
                          <th style={{border:"none",color:"black",textAlign:"start"}}>कुल राशि</th>
                          <th style={{border:"none",color:"black"}}>{i.itemList.map((j)=>j.amount).reduce((a,b)=>+a + +b,0)}</th>
                          <td style={{border:"none",color:"black"}}><div style={{display:"flex",justifyContent:"space-between"}}>
                            <td>{i.cgstRate}</td>
                            <td>{i.cgst}</td>
                            </div></td>
                          <th style={{border:"none",color:"black"}}><div style={{display:"flex",justifyContent:"space-between"}}>
                            <td>{i.sgstRate}</td>
                            <td>{i.sgst}</td>
                            </div></th>
                          <th style={{border:"none",color:"black"}}><div style={{display:"flex",justifyContent:"space-between"}}>
                            <td>{i.igstRate}</td>
                            <td>{i.igst}</td>
                            </div></th>
                          <th style={{border:"none",color:"black"}}>0.00</th>
                          </tr>
                          <tr className='p-0' style={{border:"none",textAlign:"center",lineHeight:"0%"}}>
                            <td style={{border:"none",borderRight:"1px solid black"}}></td>
                          <th style={{border:"none",color:"black",textAlign:"start"}}>भाड़ा (एड)</th>
                          <th style={{border:"none",color:"black"}}>{i.advanceFreight}</th>
                          <td style={{border:"none",color:"black"}}><div style={{display:"flex",justifyContent:"space-between"}}>
                            <td>0.00</td>
                            <td>0.00</td>
                            </div></td>
                          <th style={{border:"none",color:"black"}}><div style={{display:"flex",justifyContent:"space-between"}}>
                            <td>0.00</td>
                            <td>0.00</td>
                            </div></th>
                          <th style={{border:"none",color:"black"}}><div style={{display:"flex",justifyContent:"space-between"}}>
                            <td>0.00</td>
                            <td>0.00</td>
                            </div></th>
                          <th style={{border:"none",color:"black"}}>0.00</th>
                          </tr>
                          <tr className='p-0' style={{border:"none",borderTop:"1px solid black",lineHeight:"0%",textAlign:"center"}}>
                            <td style={{border:"none",borderRight:"1px solid black"}}></td>
                          <th style={{border:"none",color:"black",textAlign:"start"}}>कुल भाड़ा</th>
                          <th style={{border:"none",color:"black"}}>कुल बोरे</th>
                          <td style={{border:"none",color:"black"}}>कुल वास्तविक वजन</td>
                          <td style={{border:"none",color:"black"}}>कुल अनुज्ञा वजन</td>
                          <th colSpan={2} style={{border:"none",color:"black",textAlign:"end"}}>कुल रकम</th>
                         
                          </tr>
                          <tr className='p-0' style={{border:"none",borderBottom:"2px solid black",lineHeight:"0%",textAlign:"center"}}>
                            <td style={{border:"none",borderRight:"1px solid black"}}></td>
                          <th style={{border:"none",color:"black",textAlign:"start"}}>{i.totalFreight}</th>
                          <th style={{border:"none",color:"black"}}>{i.itemList.map((j)=>j.bag).reduce((a,b)=>+a + +b,0)}</th>
                          <td style={{border:"none",color:"black"}}>{i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)}</td>
                          <td style={{border:"none",color:"black"}}>{i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)}</td>
                          <th colSpan={2} style={{border:"none",color:"black",textAlign:"end"}}>{i.lastAmount}</th>
                          </tr>
                          </>
                          )}
                        </tbody>
                       </table>
                       </div>
                   
                        </div>


               
                          
                   
                       
                   
                
                        
                      </div>

                    </div>:
      <>
      {reportType==="brandwise"?
                    <div className='card table-responsive' style={{position:"fixed",top:0,width:"98%",height:"100vh",marginLeft:"1%",overflowY:"auto"}}>
                   <div><ReactToPrint
        trigger={() => <button className='btn btn-primary m-2'  >Print</button>}
        content={() => componentRef1.current}
      /></div>
                 <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
                  
                    <div ref={componentRef1} className="card accordion-item mt-5" style={{color:"black"}}>
                      <div>
        <div style={{width:"100%", textAlign:'center', lineHeight:"120%"}}>
        {companyName===""?<>
             {firmList.map((i)=>
             <label style={{fontSize:19,fontWeight:"bold",textTransform:"uppercase"}}>{i.farmName},</label>)}</>
                        :<h2 style={{color:"black"}} >{companyName}</h2>}<br/>
        <label style={{fontSize:17, fontWeight:"bold"}}>Sales Report (Brand Wise)</label>
        </div>
        <label className='ml-2'>Date From <span style={{fontWeight:"bold"}}>{ddmmyy(fromDate)}</span> to <span style={{fontWeight:"bold"}}>{ddmmyy(toDate)}</span> </label>
        <div className='table-responsive'>
        <table className="table">
            <thead >
              <tr>
                <th style={{color:"black"}}>S no.</th>
                <th style={{color:"black"}}>Invoice</th>
                <th style={{color:"black"}}>Party</th>
                <th style={{color:"black"}}>Broker</th>
                <th style={{color:"black"}}>Item/Upaj</th>
                <th style={{color:"black"}}>Vehicle No.</th>
                <th style={{color:"black"}}>Freight</th>
                <th style={{color:"black"}}>Freight Advance</th>
                <th style={{color:"black"}}>Bill Amount</th></tr>
            </thead>
            <tbody>
              {list8.map((i)=>
                <tr> 
                    <td style={{color:"black"}}>{ddmmyy(i.date)}</td>
                    <td style={{color:"black"}}>{i.billNumber}</td>
                    <td  style={{width:200, fontSize:13,color:"black"}}>{i.party}</td>
                    <td  style={{color:"black"}} className='p-0'>
                        <div style={{width:"100%", position:'relative'}}>
                            <span style={{fontSize:12}}>{i.broker}</span>
                            <div style={{width:"100%", display:"flex", justifyContent:'space-between'}}>
                                    <div style={{width:"75%", fontWeight:"bold"}}>Brand</div>
                                    <div style={{width:"25%", textAlign:"end", fontWeight:"bold"}}>Bag()</div>
                            </div>
                            {i.itemList.map((j)=>
                            <div style={{width:"100%", display:"flex", justifyContent:'space-between'}}>
                                    <div style={{width:"75%"}}>{j.brand} {j.admitWeight}KG</div>
                                    <div style={{width:"25%", textAlign:"end"}}>{j.bag}</div>
                            </div>)}
                           <div style={{width:"100%", display:"flex", justifyContent:'space-between', borderTop:"2px solid black"}}>
                                    <div style={{width:"75%", fontWeight:"bold"}}>Total</div>
                                    <div style={{width:"25%", fontWeight:"bold", textAlign:"end"}}>{i.itemList.map((j)=>j.bag).reduce((a,b)=>+a + +b,0)}</div>
                            </div>
                        </div>
                    </td>
                    <td  style={{color:"black"}} className='p-0'>
                        <div style={{width:"100%",  textAlign:"center"}}>
                            <span style={{fontWeight:"bold"}}>{i.itemList[0].produceName}</span><br/>
                            <span style={{fontWeight:"bold"}}>Rate</span><br/>
                            {i.itemList.map((j)=>
                            <><span>{j.ratePerQuantal}</span><br/></>)}
                            <div style={{width:"100%", borderTop:"2px solid black",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            {i.itemList.map((j)=>j.ratePerQuantal).reduce((a,b)=>+a + +b,0)}
                            </div>
                        </div>
                    </td>
                    <td style={{color:"black"}} className='p-0'>
                        <div style={{width:"100%",  textAlign:"center"}}>
                            <span >{i.truckNo}</span><br/>
                            <span style={{fontWeight:"bold"}}>Gross Wt.</span><br/>
                           {i.itemList.map((j)=>
                           <> <span>{j.actualWeight.toFixed(2)}</span><br/></>)}
                            <div style={{width:"100%", borderTop:"2px solid black"}}>
                            <span style={{fontWeight:"bold"}}>{i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0).toFixed(2)}</span>
                            </div>
                        </div> </td>
                    <td style={{color:"black"}} className='p-0'>
                        <div style={{width:"100%",  textAlign:"center"}}>
                            <span>{i.totalFreight?i.totalFreight:0}</span><br/>
                            <span style={{fontWeight:"bold"}}>Net Wt.</span><br/>
                           {i.itemList.map((j)=>
                            <><span>{j.totalWeight.toFixed(2)}</span><br/></>)}
                            <div style={{width:"100%", borderTop:"2px solid black"}}>
                            <span style={{fontWeight:"bold"}}>{i.itemList.map((j)=>j.totalWeight).reduce((a,b)=>+a + +b,0).toFixed(2)}</span>
                            </div>
                        </div> </td>
                    <td style={{color:"black"}} className='p-0'>
                        <div style={{width:"100%",  textAlign:"center"}}>
                            <span>{i.advanceFreight?i.advanceFreight:0}</span><br/>
                            <span style={{fontWeight:"bold"}}>Amount</span><br/>
                           {i.itemList.map((j)=>
                            <><span>{j.amount.toFixed(2)}</span><br/></>)}
                            <div style={{width:"100%", borderTop:"2px solid "}}>
                            <span style={{fontWeight:"bold"}}>{i.itemList.map((j)=>j.amount).reduce((a,b)=>+a + +b,0).toFixed(2)}</span>
                            </div>
                        </div> </td>
                    <td style={{color:"black"}} className='p-0'>
                        <div style={{width:"100%",  textAlign:"center"}}>
                            <span></span><br/>
                            <span style={{fontWeight:"bold"}}></span><br/>
                            {i.itemList.map((j)=><><span style={{visibility:"hidden"}}>{j.brand}</span><br/></>)}
                            <div style={{width:"100%"}}>
                            <span style={{fontWeight:"bold"}}>{+i.itemList.map((j)=>j.amount).reduce((a,b)=>+a + +b,0).toFixed(2) + +(i.advanceFreight?i.advanceFreight:0)}</span>
                            </div>
                        </div> </td>
                    
                
                </tr>)}
                <tr style={{color:"black"}} className='text-nowrap'>
                  <td style={{border:"none"}} className='p-0'>Grand Total:</td>
                  <td style={{border:"none"}} className='p-0' colSpan={2}>Total Freight: {totalFreight()}</td>
                  <td  className='p-0' style={{display:'flex',justifyContent:"space-between",border:"none"}}><label>Ad. Freight: {totaladvFreight()}</label> {grandtotalBag()}</td>
                  <td style={{border:"none"}} ></td>
                  <td className='p-0' style={{textAlign:"center",border:"none"}}>{totalgrossWeight()}</td>
                  <td className='p-0' style={{textAlign:"center",border:"none"}}>{totalnettWeight().toFixed(2)}</td>
                  <td className='p-0' style={{textAlign:"center",border:"none"}}>{totalfinalAmount()}</td>
                  <td className='p-0' style={{textAlign:"center",border:"none"}}>{totalfinalAmount()+totaladvFreight()}</td>
                </tr>
                <tr style={{color:"black"}}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Average Rate</td>
                  <td>{finalavgRate().toFixed(2)}</td>
                  <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>

                    </div>
                    </div>
                    :
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
                    {reportType===""&&
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
                       
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  From
                                </label>
                                <div className="col-sm-9">
                                  <input
                                  value={fromDate}
                                   onChange={(e)=>setFromDate(e.target.value)}
                                    type="date"
                                    className="form-control"
                                  
                                  />
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  To
                                </label>
                                <div className="col-sm-9">
                                <input
                                  value={toDate}
                                   onChange={(e)=>setToDate(e.target.value)}
                                    type="date"
                                    className="form-control"
                                  
                                  />
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Company Name
                                </label>
                                <div className="col-sm-9">
                                <select value={companyName}
                                   onChange={(e)=>setCompanyName(e.target.value)}
                                    type="date"
                                    className="form-select">
                                  <option  disabled selected>--Select--</option>
                                  <option value={""} >All</option>
                                  {firmList.map((i)=>
                                  <option>{i.farmName}</option>
                                  )}
                                  
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Jins
                                </label>
                                <div className="col-sm-9">
                                <select
                                  value={jins}
                                   onChange={(e)=>setJins(e.target.value)}
                                   
                                    className="form-select"
                                  
                                  >
                                    <option disabled selected>--Select--</option>
                                    <option value={""}>All</option>
                                    {yeildList.map((i)=>
                                    <option>{i.yieldName}</option>
                                    )}
                                  </select>
                                </div>
                        
                              </div>
                            </div>



                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Party
                                </label>
                                <div className="col-sm-9">
                                <select value={party}
                                   onChange={(e)=>setParty(e.target.value)}
                                    type="date"
                                    className="form-select">
                                  <option disabled selected>--Select--</option>
                                  <option value={""}>All</option>
                                  {partyList.map((i)=>
                                  
                                  <option>{i.partyName}</option>
                                  )}
                                  
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  In State
                                </label>
                                <div className="col-sm-9">
                                <select value={inState}
                                   onChange={(e)=>setInState(e.target.value)}
                                    type="date"
                                    className="form-select">
                                  <option disabled selected>--Select--</option>
                                  <option value={""}>All</option>
                                  
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                 Dalal
                                </label>
                                <div className="col-sm-9">
                                <select value={broker}
                                   onChange={(e)=>setBroker(e.target.value)}
                                    type="date"
                                    className="form-select">
                                      
                                  <option disabled selected>--Select--</option>
                                  <option value={""}>All</option>
                                  {brokerList.map((i)=>
                                  <option>{i.brokerName}</option>
                                  )}
                                  
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Sale Type
                                </label>
                                <div className="col-sm-9">
                                <select
                                  value={saleType}
                                   onChange={(e)=>setSaleType(e.target.value)}
                                   
                                    className="form-select"
                                  
                                  >
                                    <option disabled selected>--Select--</option>
                                    <option value={""}>All</option>
                                  </select>
                                </div>
                        
                              </div>
                            </div>
                         
                         
                         
                          
                           
                          </div>
                          <div className="mt-4 text-center">
                          
                            &nbsp;
                            <button onClick={()=>{setReportType("summary")}} className="btn btn-label-secondary">Summary</button>
                            &nbsp;
                            <button onClick={()=>{setReportType("brandwise")}} className="btn btn-label-secondary">Brand Wise</button>
                            &nbsp;
                            <button onClick={()=>{setReportType("register")}} className="btn btn-label-secondary">Register</button>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`Sale Report Without Brand From ${fromDate} to ${toDate}`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef.current}
                    >
                            <button className="btn btn-label-secondary">Without Brand In Excel</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`Sale Report With Brand From ${fromDate} to ${toDate}`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef1.current}
                    >
                            <button className="btn btn-label-secondary">With Brand In Excel</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`Sale Report With Brand From ${fromDate} to ${toDate}`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef2.current}
                    >
                            <button className="btn btn-label-secondary">With Expanse In Excel</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`TCS`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef7.current}
                    >
                            <button className="btn btn-label-secondary">TCS</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`TCS SUMMARY From ${fromDate} to ${toDate}`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef6.current}
                    >
                            <button className="btn btn-label-secondary mt-1">TCS Summary</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`PARTY TURNOVER`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef3.current}
                    >
                            <button className="btn btn-label-secondary mt-1">Turn Over</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`JINS WISE SUMMARY`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef5.current}
                    >
                            <button className="btn btn-label-secondary mt-1">Jins Wise Summary</button></DownloadTableExcel>
                            &nbsp;
                            <DownloadTableExcel
                      filename={`PARTY WISE GST TOTAL`}
                      sheet="saiyyadgroup.in"
                      currentTableRef={tableRef4.current}
                    >
                            <button className="btn btn-label-secondary mt-1">Party Wise GST Total</button></DownloadTableExcel>
                            &nbsp;
                            <button className="btn btn-label-secondary mt-1">Back</button>
                          </div>
                        </div>
                      </div>

                    </div>}
                    {reportType==="summary"&&
                    <div className="card accordion-item mt-5" style={{color:"black"}}>
                         <div><ReactToPrint
        trigger={() => <button className='btn btn-primary m-2'>Print</button>}
        content={() => componentRef2.current}
      /></div>
                        <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
                      <div
                      ref={componentRef2}
                        id="collapseDeliveryAddress"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingDeliveryAddress"
                        data-bs-parent="#collapsibleSection"
                      >
                        {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                        <div className="accordion-body text-center">
                      {companyName===""?<>
             {firmList.map((i)=>
             <label style={{fontSize:19,fontWeight:"bold",textTransform:"uppercase"}}>{i.farmName},</label>)}</>
                        :<h2 style={{color:"black"}} >{companyName}</h2>}
                        <h5 style={{color:"black"}} >Sale Report Summary</h5>
                   
                        </div>
                        <div className="accordion-body">
                        <b>Date From :</b>&nbsp;
                        <label>{ddmmyy(fromDate)}</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>To :</b>&nbsp;
                        <label>{ddmmyy(toDate)}</label>
                   
                        </div>
                        <div className="accordion-body">
                        <div className="tabel-responsive">
                        <table style={{fontSize:12,color:"black",borderColor:"black"}} className='table table-bordered'>
                        <thead style={{color:"black"}}>
                          <tr style={{color:"black"}}>
                          <th style={{color:"black"}}>Date</th>
                          <th style={{color:"black"}}>Invoice</th>
                          <th style={{color:"black"}}>Party</th>
                          <th style={{color:"black"}}>Dalal</th>
                          <th style={{color:"black"}}>Item</th>
                          <th style={{color:"black"}}>Bag</th>
                          <th style={{color:"black"}}>Gross Wt</th>
                          <th style={{color:"black"}}>Net Wt</th>
                          <th style={{color:"black"}}>Amount</th>
                          <th style={{color:"black"}}>Vehical No.</th></tr>
                        </thead>
                        <tbody>
                          {list8.map((i)=>
                          <tr>
                          <td>{ddmmyy(i.date)}</td>
                          <td>{i.billNumber}</td>
                          <td>{i.party}</td>
                          <td>{i.broker}</td>
                          <td>{i.itemList[0]?.produceName}</td>
                          <td>{i.itemList[0]?.bag}</td>
                          <td>{i.itemList[0].actualWeight}</td>
                          <td>{i.itemList[0].totalWeight}</td>
                          <td>{i.itemList[0].amount}</td>
                          <td>{i.truckNo}</td>
                          </tr>)}
                        </tbody>
                       </table>
                       </div>
                   
                        </div>


               
                          
                   
                       
                   
                
                        
                      </div>

                    </div>}
                    
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>CompanyName </th>

                <th>BillNo</th>
                <th>Party</th	>									
                <th>GSTIN</th>
                <th>Dalal</th>
                <th>JinsName</th>
                <th>Bag</th>
                <th>Sale.KulWajan</th>
                <th>KulRashi </th>
                <th>CGSTAmt </th>
                <th>SGSTAmt </th>
                <th>IGSTAmt </th>
                <th>Total Freight </th>
                <th>Freight Advance </th>
                <th>FCGSTAmt </th>
                <th>FSGSTAmt </th>
                <th>FIGSTAmt </th>
                <th>RoundOff </th>
                <th>FinalAmount </th>
                <th>TruckNo</th>
                <th>Narration</th>
                <th>Expr1022</th>
                <th>ContractNo</th>
                <th>Bori</th>
                <th>Bharti</th>
                <th>Katta</th>
                <th>SaleDetail.KulWajan</th>
                <th>Dar	</th>
                <th>Mulya</th>
                </tr>
            </thead>

            <tbody>
                  {list8.map((i)=>i.itemList.map((j)=>
                  <tr>
                <td>{i.billingFarm}</td>
                <td>{i.billNumber}</td>
                <td>{i.party}</td>
                <td>{getGst(i.party)}</td>
                <td>{i.broker}</td>
                <td>{j.produceName}</td>
                <td>{j.bag}</td>
                <td>{j.totalWeight}</td>
                <td>{j.amount}</td>
                <td>{(i.cgst)}</td>
                <td>{(i.sgst)}</td>
                <td>{(i.igst)}</td>
                <td>{i.totalFreight}</td>
                <td>{i.advanceFreight}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{i.roundOff?i.roundOff:0}</td>
                <td>{i.lastAmount}</td>
                <td>{i.truckNo  }</td>
                <td></td>
                <td></td>
                <td>{i.contractNo}</td>
                <td>{j.bag}</td>
                <td>{j.admitWeight}</td>
                <td>{j.katta?j.katta:0}</td>
                <td>{j.actualWeight}</td>
                <td>{j.ratePerQuantal}</td>
                <td>{j.amount}</td>
                  </tr>))}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef1} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>CompanyName </th>

                <th>BillNo</th>
                <th>Party</th	>									
                <th>GSTIN</th>
                <th>Dalal</th>
                <th>JinsName</th>
                <th>Bag</th>
                <th>Sale.KulWajan</th>
                <th>KulRashi </th>
                <th>CGSTAmt </th>
                <th>SGSTAmt </th>
                <th>IGSTAmt </th>
                <th>Total Freight </th>
                <th>Freight Advance </th>
                <th>FCGSTAmt </th>
                <th>FSGSTAmt </th>
                <th>FIGSTAmt </th>
                <th>RoundOff </th>
                <th>FinalAmount </th>
                <th>TruckNo</th>
                <th>Narration</th>
                <th>Expr1022</th>
                <th>ContractNo</th>
                <th>Bori</th>
                <th>Bharti</th>
                <th>Katta</th>
                <th>SaleDetail.KulWajan</th>
                <th>Dar	</th>
                <th>Mulya</th>
                </tr>
            </thead>

            <tbody>
                  {list8.map((i)=>i.itemList.map((j)=>
                  <tr>
                <td>{i.billingFarm}</td>
                <td>{i.billNumber}</td>
                <td>{i.party}</td>
                <td>{getGst(i.party)}</td>
                <td>{i.broker}</td>
                <td>{j.produceName}</td>
                <td>{j.bag}</td>
                <td>{j.totalWeight}</td>
                <td>{j.amount}</td>
                <td>{(i.cgst)}</td>
                <td>{(i.sgst)}</td>
                <td>{(i.igst)}</td>
                <td>{i.totalFreight}</td>
                <td>{i.advanceFreight}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{i.roundOff?i.roundOff:0}</td>
                <td>{i.lastAmount}</td>
                <td>{i.truckNo  }</td>
                <td></td>
                <td></td>
                <td>{i.contractNo}</td>
                <td>{j.bag}</td>
                <td>{j.admitWeight}</td>
                <td>{j.katta?j.katta:0}</td>
                <td>{j.actualWeight}</td>
                <td>{j.ratePerQuantal}</td>
                <td>{j.amount}</td>
                  </tr>))}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef6} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>CompanyName </th>

                <th>Date</th>
                <th>BillNo</th>
                <th>Party</th	>									
                <th>GSTIN</th>
                <th>PAN NO</th>
                <th>JinsName</th>
                <th>Bag</th>
                <th>KulWajan</th>
                <th>Amount </th>
                <th>TCS Per</th>
                <th>TCS AMOUNT</th>
                <th>Rount OFF</th>
                <th>Final Amount</th>
                </tr>
            </thead>

            <tbody>
                  {list8.map((i)=>
                  <tr>
                <td>{i.billingFarm}</td>
                <td>{ddmmyy(i.date)}</td>
                <td>{i.billNumber}</td>
                <td>{i.party}</td>
                <td>{getGst(i.party)}</td>
                <td>{getPan(i.party)}</td>
                <td>{i.itemList[0].produceName}</td>
                <td>{i.itemList.map((j)=>j.bag).reduce((a,b)=>+a + +b,0)}</td>
                <td>{i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)}</td>
                <td>{i.itemList.map((j)=>j.amount).reduce((a,b)=>+a + +b,0)}</td>
                <td>{i.tcsPer?i.tcsPer:0}</td>
                <td>{i.tcs}</td>
                <td>{i.roundOff}</td>
                <td>{i.lastAmount}</td>
                  </tr>)}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef7} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>CompanyName </th>
                <th>Party</th	>									
                <th>GSTIN</th>
                <th>PAN NO</th>
                <th>TCS AMOUNT</th>
                </tr>
            </thead>

            <tbody>
                  {saleData.filter((j)=>j.tcs!=="0").map((i)=>
                  <tr>
                <td>{i.billingFarm}</td>
                <td>{i.party}</td>
                <td>{getGst(i.party)}</td>
                <td>{getPan(i.party)}</td>
                <td>{i.tcs}</td>
                 </tr>)}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef2} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>CompanyName </th>

                <th>BillNo</th>
                <th>Party</th	>									
                <th>GSTIN</th>
                <th>Dalal</th>
                <th>JinsName</th>
                <th>Bag</th>
                <th>KulWajan</th>
                <th>KulMulya </th>
                <th>Aadat </th>
                <th>Aadat Amount </th>
                <th>MandiKar </th>
                <th>Mandikar Amount </th>
                <th>Bardan</th>
                <th>Bardan Amount </th>
                <th>Sutli </th>
                <th>Sutli Amount </th>
                <th>Hammali</th>
                <th>Hammali Amount </th>
                <th>Anya </th>
                <th>Anya Amount </th>
                <th>Bima </th>
                <th>Bima Amount </th>
                <th>Commission </th>
                <th>Commission Amount </th>
                <th>Discount </th>
                <th>GSTRate </th>
                <th>CGSTAmt </th>
                <th>SGSTAmt </th>
                <th>IGSTAmt </th>
                <th>Total Freight </th>
                <th>Freight Advance </th>
                <th>FCGSTAmt </th>
                <th>FSGSTAmt </th>
                <th>FIGSTAmt </th>
                <th>RoundOff </th>
                <th>FinalAmount </th>
                <th>TruckNo</th>
                <th>Narration</th>
                <th>ContractNo</th>
                <th>BiltyNo</th>
                </tr>
            </thead>

            <tbody>
                  {list8.map((i)=>i.itemList.map((j)=>
                  <tr>
                <td>{i.billingFarm}</td>
                <td>{i.billNumber}</td>
                <td>{i.party}</td>
                <td>{getGst(i.party)}</td>
                <td>{i.broker}</td>
                <td>{j.produceName}</td>
                <td>{j.bag}</td>
                <td>{j.totalWeight}</td>
                <td>{j.amount}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{(i.discount)}</td>
                <td>{(+j.cgst)+(+j.sgst)}</td>
                <td>{(((j.cgst)*j.amount?j.amount:0)/100)}</td>
                <td>{(((j.sgst)*j.amount?j.amount:0)/100)}</td>
                <td>{(((j.igst)*j.amount?j.amount:0)/100)}</td>
                <td>{i.totalFreight}</td>
                <td>{i.advanceFreight}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{i.roundOff?i.roundOff:0}</td>
                <td>{i.lastAmount}</td>
                <td>{i.truckNo  }</td>
                <td></td>
                <td>{i.contractNo}</td>
                <td>{i.biltiNo}</td>
                  </tr>))}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef3} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>Party</th>
                <th>Turn Over</th>
                </tr>
            </thead>

            <tbody>
                  {partyList.map((i)=>
                  <tr>
                <td>{i.partyName}</td>
                <td>{getPartyTurnOver(i.partyName).toFixed(2)}</td>
                
                  </tr>)}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef4} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                </tr>
            </thead>

            <tbody>
                  {partyList.map((i)=>
                  <tr>
                <td>{i.partyName}</td>
                <td>{getPartyTotalCgst(i.partyName).toFixed(2)}</td>
                <td>{getPartyTotalSgst(i.partyName).toFixed(2)}</td>
                <td>{getPartyTotalIgst(i.partyName).toFixed(2)}</td>
                
                  </tr>)}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <div className="card " style={{color:"black",display:'none'}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef5} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Totoal Bag</th>
                <th>Weight</th>
                <th>Amount Before Tax</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Total Freight</th>
                <th>Freight Advance</th>
                <th>TCS</th>
                <th>Round OFF</th>
                <th>Final Amount</th>
                </tr>
            </thead>

            <tbody>
                  {yeildList.map((i)=>
                  <tr>
                <td>{i.yieldName}</td>
                <td>{getjinstotalBag(i.yieldName)}</td>
                <td>{getjinstotalWeight(i.yieldName)}</td>
                <td>{getjinstotalAmount(i.yieldName)}</td>
                <td>{getjinstotalCgst(i.yieldName)}</td>
                <td>{getjinstotalSgst(i.yieldName)}</td>
                <td>{getjinstotalIgst(i.yieldName)}</td>
                <td>{getjinstotaltotalFreight(i.yieldName)}</td>
                <td>{getjinstotalFreightAdvance(i.yieldName)}</td>
                <td>{getjinstotalTcs(i.yieldName)}</td>
                <td>{getjinstotalRoundoff(i.yieldName)}</td>
                <td>{getjinstotalfinalAmount(i.yieldName)}</td>
                  </tr>)}
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
                    <br/>
                    


                    
                  </div>
                </div>
              </div>
            </div>
          </div>


        


        </div>
        <div className="layout-overlay layout-menu-toggle" />
        {/* Drag Target Area To SlideIn Menu On Small Screens */}
        <div className="drag-target" />

      </div>}
      </>}
   </div>
  )
}

export default AddParty