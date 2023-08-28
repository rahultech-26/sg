import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
function AddBardanaBardanaMark1(props) {
  
  const [text, setText] = useState("");
  const [postList, setPostList] = useState({
    bardanaMarkId:"",
    bardanaMark:""
  });

  const postData = () => {
    axios
      .post(baseUrl + "BardanaMark", postList)
      .then(() => {
        props.propBardanaMarkFn();
        refreshFn();
      });
  };
  const putData = () => {
    axios
      .put(baseUrl + "BardanaMark/" + postList._id,
        postList,
        
      )
      .then(() => {
        props.propBardanaMarkFn();
        refreshFn();
      });
  };
  const delData = () => {
    axios.delete(baseUrl + "BardanaMark/" + postList._id).then(() => {
      props.propBardanaMarkFn();
      refreshFn();
    });
  };

  const getHindi = (x) => {
    axios
      .get(baseUrl + `translate?text=${x}&lang=hi`)
      .then((res) => setText(res.data));
  };

  const refreshFn = () => {
    setPostList({
      bardanaMarkId:"",
      bardanaMark:""
    })
  };
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
                    <div className="accordion-body">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <select
                            className="col-md-12 form-select"
                            value={postList.bardanaMark}
                            onChange={(e) =>
                              setPostList(
                                props.bardanaList.filter(
                                  (i) => i._id === e.target.value
                                )[0]
                              )
                            }
                          >
                            <option value={""} selected disabled >
                              -select-
                            </option>
                            {props.bardanaList.map((i) => (
                              <option value={i._id}>{i.bardanaMark}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <div>
                        <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                 बारदाना ग्रेड०आईडी०   
                                </label>
                                <div className="col-sm-4">
                                  <input
                                  value={postList.bardanaMarkId}
                                   onChange={(e)=>setPostList({...postList,bardanaMarkId:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="बारदाना ग्रेड०आईडी०"
                                  />
                                </div>
                        
                              </div><br/>
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                 बारदाना ग्रेड
                                </label>
                                <div className="col-sm-4">
                                  <input
                                  value={postList.bardanaMark}
                                   onChange={(e)=>setPostList({...postList,bardanaMark:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="बारदाना ग्रेड"
                                  />
                                </div>
                        
                              </div>
                              </div>
                            </div>
                    
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => postData()}
                      disabled={postList._id}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => putData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-warning me-sm-3 me-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => delData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-danger me-sm-3 me-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => refreshFn()}
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      Refresh
                    </button>
                    <button
                      onClick={() => props.setIsAppBardanaMark(false)}
                      type="reset"
                      className="btn btn-info"
                    >
                      Back
                    </button>
                  </div>
                  <br />
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

export default AddBardanaBardanaMark1