import React from "react";
import Sidebar from "./Sidebar";

function SaiyyadReport() {
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <div className="container-fluid flex-grow-1 container-p-y">
              {/* Responsive Table */}
              <div className="card ">
                <div className="row">
                  <div className="col-md-8 ">
                    <div className="row my-3">
                      <div className="col-sm-6">
                        <div className="row">
                          <label
                            className="col-sm-3 col-form-label text-sm-end"
                            htmlFor="collapsible-Party"
                          >
                            दिनांक से
                          </label>
                          <div className="col-sm-9">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <label
                            className="col-sm-3 col-form-label text-sm-end"
                            htmlFor="collapsible-Party"
                          >
                            दिनांक तक
                          </label>
                          <div className="col-sm-9">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 ">
                      <div className="row">
                        <label
                          className="col-sm-2 col-form-label text-sm-end"
                          htmlFor="collapsible-Party"
                        >
                          फर्म
                        </label>
                        <div className="col-sm-10">
                          <select type="text" className="form-select">
                            <option>AlL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 my-3">
                      <div className="row">
                        <label
                          className="col-sm-2 col-form-label text-sm-end"
                          htmlFor="collapsible-Party"
                        >
                          पार्टी 
                        </label>
                        <div className="col-sm-10">
                          <select type="text" className="form-select">
                            <option>AlL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 ">
                      <div className="row">
                        <label
                          className="col-sm-2 col-form-label text-sm-end"
                          htmlFor="collapsible-Party"
                        >
                          दलाल 
                        </label>
                        <div className="col-sm-10">
                          <select type="text" className="form-select">
                            <option>AlL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <br/>
                    <div className="col-sm-4">
                      <input type="radio" />
                      <label className="col-form-label mx-2">
                      ब्रांड अनुसार 
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <input type="radio" />
                      <label className="col-form-label mx-2">
                      मार्क अनुसार 
                      </label>
                    </div>

                    <button className="btn btn-primary">
                      Show
                    </button>
                    <button className="btn btn-primary mx-2">
                      Back
                    </button>
                  </div>
                </div>

                {/* <div className="mt-3 mb-3" style={{ paddingLeft: "20px" }}>
             
                  <a>
                    <button 
                    // onClick={()=>navigate("/addvendor")}
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      Add Vendor
                    </button>
                  </a>
               
             
            
              </div> */}

                <div className="table-responsive text-nowrap">
                  <table className="table table-striped">
                    <thead>
                      <tr className="text-nowrap table-primary">
                        <th>S No.</th>
                        <th>जींस</th>
                        <th>ब्रांड</th>
                        <th>वास्तविक वजन</th>
                        <th>कुल वजन</th>
                        <th>मूल्य</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
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
  );
}

export default SaiyyadReport;