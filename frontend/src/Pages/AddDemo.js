import React from 'react'

function AddDemo() {
  return (
    <div>  <div className="layout-wrapper layout-content-navbar  ">
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
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Party"
                            >
                              Party Name
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Country"
                            >
                              Type
                            </label>
                            <div className="col-sm-9">
                              <select
                                className=" form-select"
                              >
                                <option disabled selected>--select--</option>
                                <option>Sale</option>
                                <option>Purchase</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <label
                              className="col-sm-3 col-form-label text-sm-end"
                              htmlFor="collapsible-Mobile"
                            >
                              Mobile No.
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                placeholder="Number"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                       
                      </div>
                      <div className="mt-4 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary me-sm-3 me-1"
                        >
                          Submit
                        </button>
                        <button
                    
                          type="reset"
                          className="btn btn-label-secondary"
                        >
                          Cancel
                        </button>
                      </div>
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

  </div></div>
  )
}

export default AddDemo