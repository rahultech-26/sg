import React from 'react'

function demotable() {
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
                  <a >
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      Add Party
                    </button>
                  </a>




              </div>
              

            </div>
        
           
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr className="table-primary">
                    <th>S No.</th>
                    <th>Party Name </th>
                    <th>Mobile No.</th>
                    <th>Type</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                 
                  <tr>
                    <td className="td"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    <td>
                      <div className="">
                          <a
                          
                            style={{
                              color: "#696cff",
                              cursor: "Pointer",
                            }}
                          >
                            <i class="fa fa-pencil" />
                          </a>
                          <a >
                            <i className="bx bx-trash me-1" />
                          </a>
                      </div>
                    </td>
                  </tr>
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

export default demotable