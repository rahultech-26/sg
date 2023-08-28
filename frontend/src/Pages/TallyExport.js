import React from 'react'
import Sidebar from './Sidebar'

function SaiyyadSale() {
  return (
    <div>
    <div className="layout-wrapper layout-content-navbar  ">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <div className="container-fluid flex-grow-1 container-p-y">
            {/* Responsive Table */}
            <div className="card ">
              <div className="row p-3">
                <div className="col-md-3">
                  <div className="row">
                  <label className="col-sm-4 col-form-label text-sm-end">
                    From
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" />
                  </div>
                </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                  <label className="col-sm-4 col-form-label text-sm-end">
                    To
                  </label>
                  <div className="col-sm-8">
                    <input type="date" className="form-control" />
                  </div>
                </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <label  className="col-sm-2 col-form-label text-sm-end">
                    फर्म 
                    </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>

            <div className="text-center">
              <button className="btn btn-success">Generate</button>
              &nbsp;
              &nbsp;
              <button className="btn btn-dark">Back</button>
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

export default SaiyyadSale