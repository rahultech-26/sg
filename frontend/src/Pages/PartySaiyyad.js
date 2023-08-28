import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from './BaseUrl'

function PartySaiyyad() {
    useEffect(()=>{getpartydata()},[])
    const navigate = useNavigate()
    const [list,setList] = useState([])


    const getpartydata=()=>{
        axios.get(baseUrl + "partysaiyyad").then((res)=>setList(res.data.data))
    }
    const dltpartydata=(x)=>{
        axios.delete(baseUrl + "partysaiyyad/" + x).then(()=>getpartydata())
    }
  return (
    <div>
        <div className="layout-wrapper layout-content-navbar  ">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
       
          <div className="container-xxl flex-grow-1 container-p-y" >
            {/* Responsive Table */}
            <div className="card card-sticky-div" >
              <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
             
                  <a>
                    <button onClick={()=>navigate("/addpartysaiyyad")}
                      type="submit"
                      style={{backgroundColor:"#def2d4"}}
                      className="btn btn me-sm-3 me-1"
                    >
                      Add Party
                    </button>
                  </a>
               
             
            
              </div>
              
              <div className="text-nowrap tbl-sticky" >
                <table className="table table-striped">
                  <thead className='tbl-hd-sticky'>
                    <tr style={{backgroundColor:"#def2d4"}} className="text-nowrap"  >
                      <th>S No.</th>
                      <th>Party Name</th> 
                      <th>under Group</th>
                      <th>Broker</th>
                      <th>Registration Type</th>
                      <th>FSSAI</th>
                      <th>Party Number</th>
                      <th>Man No.</th>
                      <th>Street</th>
                      <th>City</th>
                      <th>Pincode</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>GST</th>
                      <th>Pan No.</th>
                      <th>Email</th>
                      <th>Bank Detail</th>
                      <th>WhatsApp No.</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((i, n)=>
                   <tr>
                    <td>{n+1}</td>
                    <td>{i.partyName}</td>
                    <td>{i.underGroup}</td>
                    <td>{i.broker}</td>
                    <td>{i.registrationType}</td>
                    <td>{i.fssai}</td>
                    <td>{i.partyNumber}</td>
                    <td>{i.manNo}</td>
                    <td>{i.street}</td>
                    <td>{i.city}</td>
                    <td>{i.pincode}</td>
                    <td>{i.state}</td>
                    <td>{i.country}</td>
                    <td>{i.gst}</td>
                    <td>{i.panNo}</td>
                    <td>{i.email}</td>
                    <td>{i.bankDetail}</td>
                    <td>{i.whatsAppNo}</td>
                    <td>
                      <i className='fa fa-edit'onClick={()=>{
                        localStorage.setItem("partydata", JSON.stringify(i))
                        navigate("/editpartysaiyyad")
                      }} />
                      &nbsp;&nbsp;
                      <i className='fa fa-trash' onClick={()=>{if(window.confirm("are you sure?"))dltpartydata(i._id)}}/>
                    </td>
                   </tr>)}
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
    </div>
  )
}

export default PartySaiyyad