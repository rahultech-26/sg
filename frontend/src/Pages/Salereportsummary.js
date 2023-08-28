import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
function AddParty() {
  const navigate = useNavigate()
  const [postList,setPostList]=useState({})
  const postData=()=>{
    axios.post(baseUrl + "bank",postList).then(()=>navigate("/BankTable"))
  }
  return (
    <div>
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
                    <div className="card accordion-item">
                      <div
                        id="collapseDeliveryAddress"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingDeliveryAddress"
                        data-bs-parent="#collapsibleSection"
                      >
                        {/* <h5 class="card-header">Sale Vendor Form</h5> */}
                        <div className="accordion-body text-center">
                        <h2>Saiyad Traders</h2>
                        <h5>Sale Report Summary</h5>
                   
                        </div>
                        <div className="accordion-body">
                        <b>Date From :</b>&nbsp;
                        <label>01/04/23</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>To :</b>&nbsp;
                        <label>01/04/23</label>
                   
                        </div>
                        <div className="accordion-body">
                        <table className='table table-bordered'>
                        <thead>
                          <th>Date</th>
                          <th>Invoice</th>
                          <th>Party</th>
                          <th>Dalal</th>
                          <th>Item</th>
                          <th>Bag</th>
                          <th>Gross Wt</th>
                          <th>Net Wt</th>
                          <th>Amount</th>
                          <th>Vehical No.</th>
                        </thead>
                        <tbody>
                          <tr>
                          <td>Date</td>
                          <td>Invoice</td>
                          <td>Party</td>
                          <td>Dalal</td>
                          <td>Item</td>
                          <td>Bag</td>
                          <td>Gross Wt</td>
                          <td>Net Wt</td>
                          <td>Amount</td>
                          <td>Vehical No.</td>
                          </tr>
                          <tr>
                          <td>Date</td>
                          <td>Invoice</td>
                          <td>Party</td>
                          <td>Dalal</td>
                          <td>Item</td>
                          <td>Bag</td>
                          <td>Gross Wt</td>
                          <td>Net Wt</td>
                          <td>Amount</td>
                          <td>Vehical No.</td>
                          </tr>
                          <tr>
                          <td>Date</td>
                          <td>Invoice</td>
                          <td>Party</td>
                          <td>Dalal</td>
                          <td>Item</td>
                          <td>Bag</td>
                          <td>Gross Wt</td>
                          <td>Net Wt</td>
                          <td>Amount</td>
                          <td>Vehical No.</td>
                          </tr>
                          <tr>
                          <td>Date</td>
                          <td>Invoice</td>
                          <td>Party</td>
                          <td>Dalal</td>
                          <td>Item</td>
                          <td>Bag</td>
                          <td>Gross Wt</td>
                          <td>Net Wt</td>
                          <td>Amount</td>
                          <td>Vehical No.</td>
                          </tr>
                        </tbody>
                       </table>
                   
                        </div>


               
                          
                   
                       
                   
                
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
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

export default AddParty