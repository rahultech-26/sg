import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import sglogo from "./sglogo.png"
function Sidebar() {


  const navigate = useNavigate()
  const [showSide, setShowSide] = useState(false)
  const [showMenu, setShowMenu] = useState("")

  return (

    <>
      <aside id="layout-menu" className=" menu-vertical menu bg-menu-theme sideclass1" style={{ height: "100vh", position: "sticky", top: 0,backgroundColor:"#def2d4" }}>
        <div className='pt-2 text-center' style={{backgroundColor:"#def2d4"}}>
           <img alt="" style={{ width: "80%", height: "auto" }} src={sglogo} /> 
        </div>

        <div className="menu-inner-shadow" style={{backgroundColor:"#def2d4"}}/>
        <ul className="menu-inner py-1" style={{backgroundColor:"#def2d4"}}>
         
            <li className="menu-item">
              <a href className="menu-link" style={{ cursor: "pointer" }}>
                <i className="menu-icon tf-icons bx bx-home-circle" />
                <div onClick={() => { navigate("/") }} >Dashboard</div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                <i className="fa fa-long-arrow-left" onClick={() => navigate(-1)} />
              </a>

            </li>
          <div className='abc' style={{ height: "80vh", overflow: "hidden", overflowY: "scroll",backgroundColor:"#def2d4" }}>
           
              <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "Purchase" ? "" : "Purchase")}>
               
                <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}} >Purchase</span>
                
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                {showMenu !== "Purchase" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
              </li>
            <div style={{ height: showMenu === "Purchase" ? "6rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              
               
                <li className="menu-item">
                  <a href onClick={() => navigate("/MandiPurchase")} className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-check-shield" />
                    <div >Mandi</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href onClick={() => navigate("/Purchasereport")} className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-check-shield" />
                    <div >Report</div>
                  </a>
                </li>
            </div>
            
            <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "Sale" ? "" : "Sale")}
            >
               
               <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>Sale</span>
               
               &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
               &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               {showMenu !== "Sale" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
             </li>
             <div style={{ height: showMenu === "Sale" ? "6rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              
               
              <li className="menu-item">
                <a href onClick={() => navigate("/MandiSale")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Mandi</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/SaleReport")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Report</div>
                </a>
              </li>
            
          </div>
            <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "Stock" ? "" : "Stock")}>
               
               <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>Stock</span>
               
               &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
               &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 
               {showMenu !== "Stock" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
             </li>
             <div style={{ height: showMenu === "Stock" ? "9rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              
               
              <li className="menu-item">
                <a href onClick={() => navigate("/Stock")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Wheat (Purchase)</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/Stock1")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Wheat (Sorting)</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/production")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Production</div>
                </a>
              </li>
             
            
          </div>
            <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "Order" ? "" : "Order")}>
               
               <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>Order</span>
               
               &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
               &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 
               {showMenu !== "Order" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
             </li>
             <div style={{ height: showMenu === "Order" ? "6rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              
               
              <li className="menu-item">
                <a href onClick={() => navigate("/Order")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Order</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/pktsalereport")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Dispatch Summary</div>
                </a>
              </li>
              
             
            
          </div>
            <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "UserManagement" ? "" : "UserManagement")}>
               
               <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>User Management</span>
               &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
               {showMenu !== "UserManagement" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
             </li>
             <div style={{ height: showMenu === "UserManagement" ? "6rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              
               
              <li className="menu-item">
                <a href onClick={() => navigate("/roletable")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Department</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/usertable")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >User</div>
                </a>
              </li>
          </div>
            <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "Master" ? "" : "Master")}>
               
                <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>Master</span>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {showMenu !== "Master" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
              </li>
              <div style={{ height: showMenu === "Master" ? "26rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              
          
              <li className="menu-item">
                <a href onClick={() => navigate("/FarmTable")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Farm</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/PartySaiyyad")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Party</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/Brokersaiyyad")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Broker</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/ProduceTabel")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Upaj</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/GodownTabel")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Godown</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/TulaiTabel")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Tulai</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/BrandTabel")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Brand</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/MarkTable")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Mark</div>
                </a>
              </li>
              <li className="menu-item">
                <a href onClick={() => navigate("/BardanaMarkTable")} className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-check-shield" />
                  <div >Bardana Mark</div>
                </a>
              </li>
             
             
          </div>
<div onClick={() => { localStorage.removeItem("user"); navigate("/") }}>
            <li className="menu-header small text-uppercase" style={{ cursor: "pointer" }} >
              <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}} >Logout</span>
            </li></div>
          </div>
        </ul>
      </aside >

      {
        showSide ?
          <div style={{ position: "fixed", backgroundColor: "white", display: "flex", flexDirection: "column", minHeight: "100vh", oerflow: "hidden", overflowY: "auto", paddingLeft: 10, zIndex: 10, border: "1px solid lightgrey", borderRadius: 5 }
          } className="sideclass" >
            <div style={{ padding: 5, marginLeft: -10 }}> 
            {/* <img style={{ width: 200, height: "auto", marginLeft: 10 }} src={safallogo} /> */}
            </div>
            <span onClick={() => setShowSide(false)} style={{ fontSize: 20, fontWeight: "bold", cursor: "pointer", position: "absolute", right: 15, top: 10 }}>X</span>


            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1" style={{ display: "flex", flexDirection: "column" }}>

 
                <li className="menu-item">
                  <a href className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div onClick={() => { navigate("/") }} >Dashboard</div>
                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <i className="fa fa-long-arrow-left" onClick={() => navigate(-1)} />
                  </a>

                </li>
              <br />
              <div className='abc' style={{ height: "80vh", overflow: "hidden", overflowY: "scroll" }}>
            
                  <li className="menu-header small text-uppercase" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onClick={() => setShowMenu(showMenu === "Purchase" ? "" : "Purchase")}>
                    <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>Purchase</span>{showMenu !== "Purchase" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
                  </li>
                <br />
                <div style={{ height: showMenu === "Purchase" ? "12rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
              <br/>
              
                <li className="menu-item">
                  <a href onClick={() => navigate("/")} className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-check-shield" />
                    <div >Mandi</div>
                  </a>
                </li> <br/>
                <li className="menu-item">
                  <a href onClick={() => navigate("/")} className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-check-shield" />
                    <div >Party</div>
                  </a>
                </li>
                <br/>
                <li className="menu-item">
                  <a href onClick={() => navigate("/")} className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-check-shield" />
                    <div >Third Party</div>
                  </a>
                </li>
                  <br />
                <br/>
                <li className="menu-item">
                  <a href onClick={() => navigate("/")} className="menu-link" style={{ cursor: "pointer" }}>
                    <i className="menu-icon tf-icons bx bx-check-shield" />
                    <div >Transactions</div>
                  </a>
                </li>
                  <br />

              </div>
              <br/>
              <li className="menu-header small text-uppercase" style={{ display: "flex",width:"100%", flexDirection: "row", alignItems:"center",justifyContent:"center" }} onClick={() => setShowMenu(showMenu === "Master" ? "" : "Master")}>
               
               <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}}>Master</span>
               
               &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
               {showMenu !== "Master" ? <i class="fa fa-caret-right" style={{color:"black",fontWeight:"bold"}}></i> : <i class="fa fa-caret-down" style={{color:"black",fontWeight:"bold"}}></i>}
             </li><br/>
             <div style={{ height: showMenu === "Maser" ? "6rem" : "0rem", transition: "0.6s", overflow: "hidden" }}>
             
              
             <li className="menu-item">
               <a href onClick={() => navigate("/")} className="menu-link" style={{ cursor: "pointer" }}>
                 <i className="menu-icon tf-icons bx bx-check-shield" />
                 <div >Party</div>
               </a>
             </li><br/>
             <li className="menu-item">
               <a href onClick={() => navigate("/")} className="menu-link" style={{ cursor: "pointer" }}>
                 <i className="menu-icon tf-icons bx bx-check-shield" />
                 <div >Broker</div>
               </a>
             </li><br/>
            
            
         </div>
                <li className="menu-header small text-uppercase" style={{ cursor: "pointer" }} onClick={() => { localStorage.removeItem("user"); navigate("/") }}>
                  <span className="menu-header-text" style={{color:"black",fontWeight:"bold"}} >Logout</span>
                </li>
              </div>
            </ul>
          </div > : <div style={{ width: 30, height: 30, margin: 15, marginLeft: 20, position: "fixed", zIndex: 1100, cursor: "pointer", padding: 7.5 }} className='sideclass card' onClick={() => setShowSide(true)}><i className='fa fa-bars' style={{ position: "fixed", zIndex: 1100, cursor: "pointer" }} /></div>
      }
    </>
  )
}

export default Sidebar