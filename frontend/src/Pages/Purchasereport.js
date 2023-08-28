import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from './BaseUrl'
import Sidebar from './Sidebar'
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
function SaiyyadPurchaseReport() {
  const date = new Date()
  const dd = date.getDate()
  const fdd = dd<10?`0${dd}`:dd
  const mm = date.getMonth()+1
  const fmm = mm<10?`0${mm}`:mm
  const yy = date.getFullYear()
  const finalDate = `${yy}-${fmm}-${fdd}`
  const ddmmyy = (x)=>{
    const date = x.split("-").reverse().join("/")
    return date
  }
  const navigate = useNavigate()
  useEffect(()=>{getUpaj();getFarm();getMark();getGodown();getPurchaseDate()},[])

  const purchaseReportFarmLocal= localStorage.getItem("purchaseReportFarmLocal")
  const parseReportFarmLocal = purchaseReportFarmLocal?JSON.parse(purchaseReportFarmLocal):[]

  const purchaseReportYeildLocal= localStorage.getItem("purchaseReportYeildLocal")
  const parseReportYeildLocal = purchaseReportYeildLocal?JSON.parse(purchaseReportYeildLocal):[]

  const purchaseReportMarkLocal= localStorage.getItem("purchaseReportMarkLocal")
  const parseReportMarkLocal = purchaseReportMarkLocal?JSON.parse(purchaseReportMarkLocal):[]

  const purchaseReportGodownLocal= localStorage.getItem("purchaseReportGodownLocal")
  const parseReportGodownLocal = purchaseReportGodownLocal?JSON.parse(purchaseReportGodownLocal):[]
  
  const [farmList, setFarmList]=useState(parseReportFarmLocal)
  const [upajList, setUpajList]=useState(parseReportYeildLocal)
  const [markList, setMarkList]=useState(parseReportMarkLocal)
  const [godownList, setGodownList]=useState(parseReportGodownLocal)
 
  const [farmNameList, setFarmNameList]=useState([])
  const [yeildNameList, setYeildNameList]=useState([])
  const [markNameList, setMarkNameList]=useState([])
  const [godownNameList, setGodownNameList]=useState([])
  const [farmName, setFarmName]=useState("")
  const [yeildName, setYeildName]=useState("")
  const [markName, setMarkName]=useState("")
  const [godownName, setGodownName]=useState("")
  const tableRef = useRef(null);
  const getFarm=()=>{
    axios.get(baseUrl + "farm").then((res)=>{setFarmList(res.data.data)
    localStorage.setItem("purchaseReportFarmLocal", JSON.stringify(res.data.data))
    })
  }
  
  const getUpaj=()=>{
    axios.get(baseUrl + "yield").then((res)=>{setUpajList(res.data.data)
      localStorage.setItem("purchaseReportYeildLocal", JSON.stringify(res.data.data))
    })
  }
  const getMark=()=>{
    axios.get(baseUrl + "mark").then((res)=>{setMarkList(res.data.data)
      localStorage.setItem("purchaseReportMarkLocal", JSON.stringify(res.data.data))
    })
  }
  const getGodown=()=>{
    axios.get(baseUrl + "godown").then((res)=>{setGodownList(res.data.data)
      localStorage.setItem("purchaseReportGodownLocal", JSON.stringify(res.data.data))
    })
  }
  
const [reportType,setReportType]=useState("")

   const [fromDate,setFromDate]=useState(finalDate)
   const [toDate,setToDate]=useState(finalDate)
   const [purchaseData,setPurchaseData]=useState([])
   const [purchaseData1,setPurchaseData1]=useState([])
  const getPurchaseDate=()=>{
    axios.get(baseUrl + "mandipurchase").then((res)=>{
      setPurchaseData(res.data.data)
      setPurchaseData1(res.data.data)
    })
  }
    const list=purchaseData
    const x = new Date(fromDate)
    const y = new Date(toDate)
    const list1 = fromDate!==""?list.filter((i)=>new Date(i.date)>=x):list
    const list2 = toDate!==""?list1.filter((i)=>new Date(i.date)<=y):list1
    const list33 = list2.sort((a,b)=>a.itemList[0].yeildName?.toLowerCase()>b.itemList[0].yeildName?.toLowerCase()?-1:1).sort((a,b)=>new Date(a.date)>new Date(b.date)?1:-1)
    const list333 = list33.map((i)=>{
      return {
        ...i,yn:i.itemList[0].yieldName
      }
    })
    const cashPayment = ()=>{
      const cash = list2.map((i)=>i.cashPayment).reduce((a,b)=>+a+ +b,0)
      return cash
    }
    const rtgs = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.totalAmount)).reduce((a,b)=>+a+ +b,0)
      return cash - cashPayment()
    }
    const averageRate = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.ratePerQuantal))
      const rate = cash.reduce((a,b)=>+a + +b,0)
      const avg = rate/cash.length
      return avg 
    }
    const totalBag = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.totalBag)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalWeight = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.actualWeight)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalAmount = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.totalAmount)).reduce((a,b)=>+a+ +b,0)
      const tulai = list2.map((j)=>j.itemList.map((i)=>i.totalTulai)).reduce((a,b)=>+a+ +b,0)
      const labour = list2.map((j)=>j.itemList.map((i)=>i.totalLabour)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalLabour = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.totalLabour)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalTulai = ()=>{
      const cash = list2.map((j)=>j.itemList.map((i)=>i.totalTulai)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
   
    const averageRate1 = (x)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.ratePerQuantal))
      const rate = cash.reduce((a,b)=>+a + +b,0)
      const avg = rate/cash.length
      return avg 
    }
    const totalBag1 = (x)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.totalBag)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalWeight1 = (x)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.actualWeight)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalAmount1 = (x)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.totalAmount)).reduce((a,b)=>+a+ +b,0)
      const tulai = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.totalTulai)).reduce((a,b)=>+a+ +b,0)
      const labour = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.totalLabour)).reduce((a,b)=>+a+ +b,0)
      return cash + tulai + labour
    }
    const totalLabour1 = (x)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.totalLabour)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalTulai1 = (x)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.map((i)=>i.totalTulai)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const paybleAmount = (x)=>{
      const amount = x.map((i)=>i.totalAmount).reduce((a,b)=>+a+ +b,0)
      return amount 
    }
   
    const averageRate2 = (x,y)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.ratePerQuantal))
      const rate = cash.reduce((a,b)=>+a + +b,0)
      const avg = rate/cash.length
      return avg 
    }
    const totalBag2 = (x,y)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.totalBag)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalWeight2 = (x,y)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.actualWeight)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalAmount2 = (x,y)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.totalAmount)).reduce((a,b)=>+a+ +b,0)
      const tulai = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.totalTulai)).reduce((a,b)=>+a+ +b,0)
      const labour = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.totalLabour)).reduce((a,b)=>+a+ +b,0)
      return cash + tulai + labour
    }
    const totalLabour2 = (x,y)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.totalLabour)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const totalTulai2 = (x,y)=>{
      const cash = list2.filter((i)=>i.date===x).map((j)=>j.itemList.filter((k)=>k.yieldName===y).map((i)=>i.totalTulai)).reduce((a,b)=>+a+ +b,0)
      return cash 
    }
    const fiterFn=()=>{
const list = purchaseData1
const list1= farmNameList.length>0?list.filter((i)=>farmNameList.includes(i.farmName)):list
const list2= yeildNameList.length>0?list1.filter((i)=>yeildNameList.includes(i.itemList[0]?.yieldName)):list1
const list3= markNameList.length>0?list2.filter((i)=>markNameList.includes(i.itemList[0]?.mark)):list2
const list4= godownNameList.length>0?list3.filter((i)=>godownNameList.includes(i.itemList[0]?.godown)):list3
setPurchaseData(list4)
    }
    const getHindi = (X) => {
      axios
        .get(baseUrl + `translate?text=${x}&lang=hi`)
        .then((res) =>{
         return res.data});
    };
const markTotalWeight = (x,y)=>{
  const total = list2.map((i)=>i.itemList.filter((j)=>j.mark===x&j.yieldName===y).map((k)=>k.actualWeight?k.actualWeight:0).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
  return total
}
const getYeildWeight = (x)=>{
  const total = list2.map((i)=>i.itemList.filter((j)=>j.yieldName===x).map((k)=>k.actualWeight?k.actualWeight:0).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
  return (total)
}
const markFinalTotalWeight = ()=>{
  const total = list2.map((i)=>i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
  return (total)
}
const yeildFinalTotalWeight = ()=>{
  const total = list2.map((i)=>i.itemList.map((j)=>j.actualWeight).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
  return (total)
}
const markTotalAmount = (x,y)=>{
  const total = list2.map((i)=>i.itemList.filter((j)=>j.mark===x&j.yieldName===y).map((k)=>k.totalAmount?k.totalAmount:0).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
  return (total)
}
const getYeildAmount = (x)=>{
  const total = list2.map((i)=>i.itemList.filter((j)=>j.yieldName===x).map((k)=>k.totalAmount?k.totalAmount:0).reduce((a,b)=>+a + +b,0)).reduce((a,b)=>+a + +b,0)
  return (total)
}
const markAverageAmount = (x,y)=>{
  const total = list2.map((i)=>i.itemList.filter((j)=>j.mark===x&j.yieldName===y).map((k)=>k.ratePerQuantal?k.ratePerQuantal:0)).flat()
  const total1 = total.reduce((a,b)=>+a + +b,0)
  return total1/total.length
}
const getYeildAmountAvg = (x)=>{
  const total = list2.map((i)=>i.itemList.filter((j)=>j.yieldName===x).map((k)=>k.ratePerQuantal?k.ratePerQuantal:0)).flat()
  const total1 = total.reduce((a,b)=>+a + +b,0)
  return total1/total.length
}
const finalList = yeildNameList.length?yeildNameList:upajList.map((i)=>i.yieldName)
  return (
    <div>
    <div className="layout-wrapper layout-content-navbar  ">
        <Sidebar />
      <div className="layout-container">
        <div className="layout-page">
          <div className="container-fluid flex-grow-1 container-p-y">
            {/* Responsive Table */}
            {reportType===""&&
            <div className="card ">
              <br/>
              <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-sm-end">
                        फर्म 
                        </label>
                        <div className="col-sm-7">
                            <select value={farmName} onChange={(e)=>setFarmName(e.target.value)} type="text" className="form-select" >
                              <option value={""} disabled selected>--Select--</option>
                              <option >All</option>
                              {farmList.map((i)=>
                              <option>{i.farmName}</option>
                              )}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <button  onClick={()=>{
                              if(farmName==="All"){
                                setFarmNameList(farmList.map((i)=>i.farmName))
                              }else{
                                setFarmNameList([...farmNameList,farmName])}}}className="btn btn-outline-dark">Add</button>
                        </div>
                    </div>
                    <div className="table-responsive text-nowrap  my-3">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-nowrap table-primary">
                        <th></th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {farmNameList.map((i)=>
                      <tr>
                        <td>{i}</td>
                        <td></td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
                </div>
               
                <div className="col-md-6">
                <div className="row">
                        <label className="col-sm-2 col-form-label text-sm-end">
                        उपज 
                        </label>
                        <div className="col-sm-7">
                        <select value={yeildName} onChange={(e)=>setYeildName(e.target.value)} type="text" className="form-select" >
                              <option value={""} disabled selected>--Select--</option>
                              <option >All</option>
                              {upajList.map((i)=>
                              <option>{i.yieldName}</option>
                              )}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <button onClick={()=>{
                              if(yeildName==="All"){
                                setYeildNameList(upajList.map((i)=>i.yieldName))
                              }else{
                              setYeildNameList([...yeildNameList,yeildName])}}} className="btn btn-outline-dark">Add</button>
                        </div>
                    </div>
                    <div className="table-responsive text-nowrap  my-3">
                  <table className="table table-striped">
                    <thead>
                      
                      <tr className="text-nowrap table-primary">
                        <th></th>
                        <th>Jins</th>
                      </tr>
                    </thead>
                    <tbody>
                    {yeildNameList.map((i)=>
                      <tr>
                        <td></td>
                        <td>{i}</td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="row g-0">
                        <label className="col-sm-2 col-form-label text-sm-center">
                        मार्क  
                        </label>
                        <div className="col-sm-4">
                        <select value={markName} onChange={(e)=>setMarkName(e.target.value)} type="text" className="form-select" >
                              <option value={""} disabled selected>--Select--</option>
                              <option >All</option>
                              {markList.map((i)=>
                              <option>{i.mark}</option>
                              )}
                            </select>
                        </div>
                        <div className="col-sm-3 text-sm-end">
                            <button onClick={()=>{
                              if(markName==="All"){
                                setMarkNameList(markList.map((i)=>i.mark))
                              }else{
                                setMarkNameList([...markNameList,markName])}}} className="btn btn-outline-dark">Add</button>
                        </div>
                    </div>
                    <div style={{height:250}} className="table-responsive text-nowrap my-3">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-nowrap table-primary">
                        <th></th>
                        <th>Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                    {markNameList.map((i)=>
                      <tr>
                        <td></td>
                        <td>{i}</td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="row g-0">
                        <label className="col-sm-2 col-form-label text-sm-center">
                        गोदाम 
                        </label>
                        <div className="col-sm-5">
                        <select value={godownName} onChange={(e)=>setGodownName(e.target.value)} type="text" className="form-select" >
                              <option value={""} selected>--Select--</option>
                              <option>All</option>
                              {godownList.map((i)=>
                              <option>{i.godownName}</option>
                              )}
                            </select>
                        </div>
                        <div className="col-sm-3 text-sm-end">
                            <button onClick={()=>{
                              if(godownName==="All"){
                                setGodownNameList(godownList.map((i)=>i.godownName))
                              }else{
                                setGodownNameList([...godownNameList,godownName])}}} className="btn btn-outline-dark">Add</button>
                        </div>
                    </div>
                    <div className="table-responsive text-nowrap  my-3">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-nowrap table-primary">
                        <th></th>
                        <th>Godown</th>
                      </tr>
                    </thead>
                    <tbody>
                    {godownNameList.map((i)=>
                      <tr>
                        <td></td>
                        <td>{i}</td>
                      </tr>)}
                        
                    </tbody>
                  </table>
                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                       <div className="col-md-6">
                        <label  className="col-sm-4">From</label>
                        <div className="col">
                            <input value={fromDate} onChange={(e)=>setFromDate(e.target.value)} type="date" className="form-control" />
                        </div>
                       </div>
                       <div className="col-md-6">
                        <label  className="col-sm-4">To</label>
                        <div className="col">
                            <input value={toDate} onChange={(e)=>setToDate(e.target.value)} type="date" className="form-control" />
                        </div>
                       </div>
                       </div>
                        <div className="row">
                            <div className="col-md-7">
                                <label className="col-sm-5">टेम्पलेट </label>
                                <div className="col">
                                    <select type="text" className="form-select">
                                        <option>all</option>
                                    </select>
                                </div>
                                <label className="col-sm-5">भावांतर </label>
                                <div className="col">
                                    <select type="text" className="form-select">
                                        <option>all</option>
                                    </select>
                                </div>
                                <label className="col-sm-5">क्रमबद्ध  </label>
                                <div className="col">
                                    <select type="text" className="form-select">
                                        <option>all</option>
                                    </select>
                                </div>
                                <label className="col-sm-5">प्रकार  </label>
                                <div className="col">
                                    <select type="text" className="form-select">
                                        <option>all</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <button onClick={()=>{fiterFn();setReportType("detail")}} className="btn btn-dark col-sm-12 mt-4">विस्तृत ब्यौरा</button>
                                <button onClick={()=>{fiterFn();setReportType("short")}} className="btn btn-dark col-sm-12 mt-4">संक्षिप्त ब्यौरा</button>
                                <button onClick={()=>{fiterFn();setReportType("summary")}} className="btn btn-dark col-sm-12 mt-4">शरांशा </button>
                                <DownloadTableExcel
                      filename={`Purchase Report From ${fromDate} to ${toDate}`}
                      sheet="users"
                      currentTableRef={tableRef.current}
                    >
                                <button className="btn btn-dark col-sm-12 mt-4">एक्सेल में भेजे</button></DownloadTableExcel>
                            </div>
                            <div className="row">
                                <button onClick={()=>{fiterFn();setReportType("mark")}} className="btn btn-dark col-sm-6 mt-4 mx-2">पड़ताल मार्क अनुसार </button>
                                <button className="btn btn-dark col-sm-4 mt-4 mx-2"> पीछे  </button>
                        </div>
                        </div>
                    </div>
                </div>
              </div>

            
              <br /></div>}
            <br />
            <br />
            <br />
            {reportType==="detail"&&
            <>
            <div className="card " style={{color:"black"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div style={{height:100, width:"100%",display:"flex", flexDirection:"column", alignItems:"center", fontSize:20, justifyContent:"center"}}>
              <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
             <div style={{ width:"100%",display:"flex", flexWrap:"wrap", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             {farmNameList.map((i)=>
            <b>{i+","}</b>)}
            </div>
            <b>किसान खरीदी </b>
            <div style={{position:"absolute",right:20,top:80,fontSize:12}}>
            <b>दिनांक से :   {ddmmyy(fromDate)}</b><br/>
            <b >दिनांक तक : {ddmmyy(toDate)}</b>
               </div>
           

        </div>
        <div className='table-responsive'>
        <table className='table table-bordered'style={{color:"black"}}>
            <thead style={{height:40, textAlign:"center",border:"1px solid black",color:"black"}}>
                <th style={{borderRight:"1px solid black",width:10}}>क्र0</th>
                <th style={{borderRight:"1px solid black",width:500}}>किसान</th>
                <th style={{borderRight:"1px solid black"}}>पुस्तिक क्र.</th>
                <th style={{borderRight:"1px solid black"}}>बोरे</th>
                <th style={{borderRight:"1px solid black"}}>वजन</th>
                <th style={{borderRight:"1px solid black"}}>दर</th>
                <th style={{borderRight:"1px solid black"}}>मूल्य</th>
                <th style={{borderRight:"1px solid black"}}>हिम्माली</th>
                <th style={{borderRight:"1px solid black"}}>तुलाई</th>
                <th style={{borderRight:"1px solid black"}}>भुगतान राशि</th>
            </thead>

            <tbody style={{borderColor:"black"}}>
              {list333.map((i,n)=><>
              {(n===0||list333[n-1].date!==i.date)?<tr style={{borderTop:"none",borderBottom:"none",lineHeight:"40%"}}>
                <td></td>
                <td><b style={{fontSize:11}}>
              {ddmmyy(i.date)}</b></td>
              <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>:null}
              {(n===0||list333[n-1].date!==i.date)||(list333[n-1]?.yn!==i.yn)?
              <tr style={{borderTop:"none",borderBottom:"none",lineHeight:"40%"}}>
                <td></td>
                <td><b style={{fontSize:11}}>{i.yn}</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>:null}
              
                <tr className="text-nowrap" style={{ textAlign:"center",height:10,fontSize:12,color:"black",borderTop:"none",borderBottom:"none",lineHeight:"40%"}}>
                <td className='td'></td>
                <td className="p-1" style={{display:"flex",justifyContent:"space-between",border:"none"}}><label>{i.sellerNameHindi}</label><label> {i.itemList[0].mark}</label></td>
                <td>{i.bookletNo}/{i.pageNo}</td>
                <td>{i.itemList.map((i)=>i.totalBag).reduce((a,b)=>+a+ +b,0)}</td>
                <td>{i.itemList.map((i)=>i.actualWeight).reduce((a,b)=>+a+ +b,0).toFixed(2)}</td>
                <td>{i.itemList.map((i)=>i.ratePerQuantal).reduce((a,b)=>+a+ +b,0).toFixed(2)}</td>
                <td>{(i.itemList.map((i)=>i.actualWeight).reduce((a,b)=>+a+ +b,0))*(i.itemList.map((i)=>i.ratePerQuantal).reduce((a,b)=>+a+ +b,0))}</td>
                <td>{i.itemList.map((i)=>i.totalLabour).reduce((a,b)=>+a+ +b,0).toFixed(2)}</td>
                <td>{i.itemList.map((i)=>i.totalTulai).reduce((a,b)=>+a+ +b,0).toFixed(2)}</td>
                <td>{paybleAmount(i.itemList)}</td>
                </tr>
                {((n===list333.length-1)||list333[n+1].date!==i.date)?  
                  <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13,lineHeight:"40%"}}>
                <td></td>
                <td></td>
                <td></td>
                <td>{totalBag1(i.date).toFixed(2)}</td>
                <td>{totalWeight1(i.date).toFixed(2)}</td>
                <td>{averageRate1(i.date).toFixed(2)}</td>
                <td>{totalAmount1(i.date).toFixed(2)}</td>
                <td>{totalLabour1(i.date).toFixed(2)}</td>
                <td>{totalTulai1(i.date).toFixed(2)}</td>
                <td>{(totalAmount1(i.date)-(totalLabour1(i.date)+totalTulai1(i.date))).toFixed(2)}</td>
                </tr>:null}
                </>
                )}
                
            
                <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13,lineHeight:"40%"}}>
                <td></td>
                <td >Grand Total</td>
                <td></td>
                <td>{totalBag().toFixed(2)}</td>
                <td>{totalWeight().toFixed(2)}</td>
                <td>{averageRate().toFixed(2)}</td>
                <td>{totalAmount().toFixed(2)}</td>
                <td>{totalLabour().toFixed(2)}</td>
                <td>{totalTulai().toFixed(2)}</td>
                <td>{totalAmount().toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
        <div style={{height:40, width:"100%", border:"1px solid black", display:"flex",alignItems:"start", paddingLeft:5, borderLeft:"none", borderRight:"none",borderTop:"none", }}>
            <b>By Cash ₹{cashPayment()}, By Chq ₹0 ,By NEFT-{rtgs()} </b>
        </div>
        <div style={{minHeight:100, width:"100%", borderBottom:"1px solid black", display:"flex",}}>
        <div style={{minHeight:100, width:"50%", display:"flex", flexDirection:"column", padding:5}}>
            <b>मंडी शुल्क   </b>
            {farmNameList.map((i)=>
            <b>{i+","}</b>)}
        </div>
        <div style={{height:100, width:"50%", display:"flex", flexDirection:"column", padding:5, alignItems:"end"}}>
            <b>दिनाँक तक देय  निर्धारित  शुल्क</b>
            {farmNameList.map((i)=>
            <b>{i+","}</b>)}
        </div>
        </div>
             </div>
             </div>

            
            </div>
            <br />
            <br />
            <br /></>}
            {reportType==="short"&&
            <>
            <div className="card " style={{color:"black"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div style={{height:100, width:"100%",display:"flex", flexDirection:"column", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
             <div style={{ width:"100%",display:"flex", flexWrap:"wrap", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             {farmNameList.map((i)=>
            <b>{i+","}</b>)}
            </div>
            <b>किसान खरीदी </b>
        </div>
        <div className='table-responsive'>
        <table className='table table-bordered'style={{color:"black"}}>
            <thead style={{height:40, textAlign:"center",border:"1px solid black",color:"black"}}>
                <th style={{borderRight:"1px solid black",width:10}}>क्र0</th>
                <th style={{borderRight:"1px solid black",width:500}}>किसान</th>
                <th style={{borderRight:"1px solid black"}}>पुस्तिक क्र.</th>
                <th style={{borderRight:"1px solid black"}}>बोरे</th>
                <th style={{borderRight:"1px solid black"}}>वजन</th>
                <th style={{borderRight:"1px solid black"}}>दर</th>
                <th style={{borderRight:"1px solid black"}}>मूल्य</th>
                <th style={{borderRight:"1px solid black"}}>हिम्माली</th>
                <th style={{borderRight:"1px solid black"}}>तुलाई</th>
                <th style={{borderRight:"1px solid black"}}>भुगतान राशि</th>
            </thead>

            <tbody style={{borderColor:"black"}}>
              {list333.map((i,n)=><>
              {(n===0||list333[n-1].date!==i.date)?<tr style={{}}>
                <td></td>
                <td>
              {ddmmyy(i.date)}</td>
              <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>:null}
              {(n===0||list333[n-1].date!==i.date)||(list333[n-1]?.yn!==i.yn)?
              <tr style={{borderTop:"none",borderBottom:"none"}}>
                <td></td>
                <td>
                {i.yn}</td>
                <td></td>
                <td>{totalBag2(i.date,i.yn)}</td>
                <td>{totalWeight2(i.date,i.yn)}</td>
                <td>{averageRate2(i.date,i.yn).toFixed(2)}</td>
                <td>{totalAmount2(i.date,i.yn)}</td>
                <td>{totalLabour2(i.date,i.yn)}</td>
                <td>{totalTulai2(i.date,i.yn)}</td>
                <td>{totalAmount2(i.date,i.yn)-(totalLabour2(i.date,i.yn)+totalTulai2(i.date,i.yn))}</td>
                </tr>:null}
                {((n===list333.length-1)||list333[n+1].date!==i.date)?  
                  <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13}}>
                <td></td>
                <td></td>
                <td></td>
                <td>{totalBag1(i.date).toFixed(2)}</td>
                <td>{totalWeight1(i.date).toFixed(2)}</td>
                <td>{averageRate1(i.date).toFixed(2)}</td>
                <td>{totalAmount1(i.date).toFixed(2)}</td>
                <td>{totalLabour1(i.date).toFixed(2)}</td>
                <td>{totalTulai1(i.date).toFixed(2)}</td>
                <td>{(totalAmount1(i.date)-(totalLabour1(i.date)+totalTulai1(i.date))).toFixed(2)}</td>
                </tr>:null}
                </>
                )}
                
            
                <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13}}>
                <td></td>
                <td >Grand Total</td>
                <td></td>
                <td>{totalBag().toFixed(2)}</td>
                <td>{totalWeight().toFixed(2)}</td>
                <td>{averageRate().toFixed(2)}</td>
                <td>{(totalAmount()+((totalLabour()+totalTulai()))).toFixed(2)}</td>
                <td>{totalLabour().toFixed(2)}</td>
                <td>{totalTulai().toFixed(2)}</td>
                <td>{totalAmount().toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
        <div style={{height:40, width:"100%", border:"1px solid black", display:"flex",alignItems:"start", paddingLeft:5, borderLeft:"none", borderRight:"none",borderTop:"none", }}>
            <b>By Cash ₹{cashPayment()}, By Chq ₹0 ,By NEFT-{rtgs()} </b>
        </div>
        <div style={{minHeight:100, width:"100%", borderBottom:"1px solid black", display:"flex",}}>
        <div style={{minHeight:100, width:"50%", display:"flex", flexDirection:"column", padding:5}}>
            <b>मंडी शुल्क   </b>
            {farmNameList.map((i)=>
            <b>{i+","}</b>)}
        </div>
        <div style={{minHeight:100, width:"50%", display:"flex", flexDirection:"column", padding:5, alignItems:"end"}}>
            <b>दिनाँक तक देय  निर्धारित  शुल्क</b>
            {farmNameList.map((i)=>
            <b>{i+","}</b>)}
        </div>
        </div>
             </div>
             </div>

            
            </div>
            <br/>
            <br/>
            <br/></>}
            {reportType==="summary"&&
            <>
            <div className="card " style={{color:"black"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div style={{height:100, width:"100%",display:"flex", flexDirection:"column", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
             <div style={{ width:"100%",display:"flex", flexWrap:"wrap", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             {farmNameList.map((i)=>
            <b>{i+","}</b>)}
            </div>
            <b>किसान खरीदी </b>
        </div>
        <div className='table-responsive'>
        <table className='table table-bordered'style={{color:"black"}}>
            <thead style={{height:40, textAlign:"center",border:"1px solid black",color:"black"}}>
                <th style={{borderRight:"1px solid black"}}>जींस </th>
                <th style={{borderRight:"1px solid black"}}>वजन</th>
                <th style={{borderRight:"1px solid black"}}>मूल्य</th>
                <th style={{borderRight:"1px solid black"}}>पड़ताल </th>
              
            </thead>

            <tbody style={{borderColor:"black"}}>
            
                {yeildNameList.map((i)=>
                <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13}}>
                <td>{i}</td>
                <td>{getYeildWeight(i).toFixed(2)}</td>
              
                <td>{getYeildAmount(i).toFixed(2)}</td>
                <td>{getYeildAmountAvg(i).toFixed(2)==="NaN"?0:getYeildAmountAvg(i).toFixed(2)}</td>
                </tr>)}
               
                <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13}}>
                <td colSpan={1} ><label>Grand Total</label></td>
                <td>{yeildFinalTotalWeight().toFixed(2)}</td>
                <td>{totalAmount().toFixed(2)}</td>
                <td>{}</td>
               
                </tr>
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
            <br />
            <br />
            <br /></>}
            {reportType==="mark"&&
            <>
            <div className="card " style={{color:"black"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div style={{height:100, width:"100%",display:"flex", flexDirection:"column", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
             <div style={{ width:"100%",display:"flex", flexWrap:"wrap", alignItems:"center", fontSize:20, justifyContent:"center"}}>
             {farmNameList.map((i)=>
            <b>{i+","}</b>)}
            </div>
            <b>किसान खरीदी </b>
        </div>
        <div className='table-responsive'>
        <table className='table table-bordered'style={{color:"black"}}>
            <thead style={{height:40, textAlign:"center",border:"1px solid black",color:"black"}}>
                <th style={{borderRight:"1px solid black"}}> जींस</th>
                <th style={{borderRight:"1px solid black"}}> मार्क </th>
                <th style={{borderRight:"1px solid black"}}>वजन</th>
                <th style={{borderRight:"1px solid black"}}>मूल्य</th>
                <th style={{borderRight:"1px solid black"}}>पड़ताल </th>
              
            </thead>

            <tbody style={{borderColor:"black"}}>
            
                {finalList.map((x)=>markNameList.map((i)=>{
                  if(markTotalWeight(i,x)!==0){
                  return(
                <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13}}>
                <td>{x}</td>
                <td>{i}</td>
                <td>{markTotalWeight(i,x).toFixed(2)}</td>
              
                <td>{markTotalAmount(i,x)}</td>
                <td>{markAverageAmount(i,x).toFixed(2)==="NaN"?0:markAverageAmount(i,x).toFixed(2)}</td>
                </tr>)}}
                ))}
               
                <tr style={{ textAlign:"center",fontWeight:"bold",height:10,fontSize:13}}>
                <td colSpan={2} ><label>Grand Total</label></td>
                <td>{markFinalTotalWeight()}</td>
               
                <td>{totalAmount().toFixed(2)}</td>
                <td>{}</td>
                </tr>
            </tbody>
        </table>
   <br/>
             </div>
             </div>

            
            </div>
            <br />
            <br />
            <br /></>}
            
            <div className="card " style={{color:"black",display:"none"}}>
              <br/>
             <div className='row' style={{color:"black"}}>
             <div onClick={()=>{setReportType("")}} className='card' style={{position:"absolute",top:10,right:15,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",width:30}}><i className="fa fa-arrow-left" aria-hidden="true"/></div>
            
        <div className='table-responsive'>
        <table ref={tableRef} className='table table-bordered'style={{color:"black"}}>
            <thead>
              <tr>
                <th>Date </th>
                <th>Kishan Name</th>
                <th>Soda Patrak Kramank</th>
                <th>Jins Name</th>
                <th>Patr Sankhiya</th>
                <th>Bhawantar</th>
                <th>Wastvik Wajan</th>
                <th>Dar</th>
                <th>Amount</th>
                <th>Kull Hammali</th>
                <th>Kul Tulai</th>
                <th>Bhugtan Rashi </th>
                <th>Mark </th>
                <th>Payment Mode </th>
                <th>Name </th>
                <th>Cheque Detail1 </th>
                <th>Cheque Detail2 </th>
                <th>Kishan Gaw Hindi </th>
                <th>Pustika1 </th>
                <th>Pustika2 </th>
                <th>By Cash </th>
                <th>Rest </th>
                <th>Patiya No </th>
                </tr>
            </thead>

            <tbody>
                  {list2.map((i)=>
                  <tr>
                <td>{ddmmyy(i.date)}</td>
                <td>{i.sellerNameHindi}</td>
                <td>{i.bookletNo}/{i.pageNo}</td>
                <td>{(i.itemList[0].yieldName)}</td>
                <td>{ i.pageNo}</td>
                <td></td>
                <td>{i.itemList[0]?.actualWeight}</td>
                <td>{i.itemList[0]?.ratePerQuantal}</td>
                <td>{i.itemList[0]?.ratePerQuantal*i.itemList[0]?.actualWeight}</td>
                <td>{i.itemList[0]?.totalLabour}</td>
                <td>{i.itemList[0]?.totalTulai}</td>
                <td>{((i.itemList[0]?.ratePerQuantal)*(i.itemList[0]?.actualWeight))-(+i.itemList[0]?.totalLabour + +i.itemList[0]?.totalTulai)}</td>
                <td>{(i.itemList[0]?.mark)}</td>
                <td></td>
                <td>{(i.remainingPaymentType)}</td>
                <td>(BANK)</td>
                <td>0</td>
                <td>{i.village}</td>
                <td >{i.bookletNo}</td>
                <td>{i.pageNo}</td>
                <td>{i.cashPayment}</td>
                <td>{i.remaining?i.remaining:0}</td>
                <td>0</td>
                  </tr>)}
            </tbody>
        </table>
   <br/>
             </div>
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
    
  </div>
  )
}

export default SaiyyadPurchaseReport