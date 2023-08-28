import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { baseUrl } from './BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router'
function AddParty(props) {
  let one = React.createRef();
  let two = React.createRef();
  let three = React.createRef();
  let four = React.createRef();
  let five = React.createRef();
  let six = React.createRef();
  function handleKeyUp(e) {
    e.which = e.which || e.keyCode;

    if (e.which == 13) {
      switch (e.target.id) {
        case "input-one":
          two.current.focus();
          break;
        case "input-two":
          three.current.focus();
          break;
        case "input-three":
          four.current.focus();
          break;
        case "input-four":
          five.current.focus();
          break;
        case "input-five":
          six.current.focus();
          break;
        case "input-six":
            one.current.focus();
       
          break;
          default:
          break;
      }
    }
  }
  const [text, setText] = useState("");
  const [postList, setPostList] = useState({
    mark:""
  });

  const postData = () => {
    axios
      .post(baseUrl + "mark", postList)
      .then(() => {
        props.propMarkFn();
        refreshFn();
      });
  };
  const putData = () => {
    axios
      .put(baseUrl + "mark/" + postList._id,
        postList,
        
      )
      .then(() => {
        props.propMarkFn();
        refreshFn();
      });
  };
  const delData = () => {
    axios.delete(baseUrl + "mark/" + postList._id).then(() => {
      props.propMarkFn();
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
      mark:""
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
                            value={postList.mark}
                            onChange={(e) =>
                              setPostList(
                                props.markList.filter(
                                  (i) => i._id === e.target.value
                                )[0]
                              )
                            }
                          >
                            <option value={""} selected disabled >
                              -select-
                            </option>
                            {props.markList.map((i) => (
                              <option value={i._id}>{i.mark}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-8">
                              <div className="row">
                                <label
                                  className="col-sm-3 col-form-label text-sm-end"
                                  htmlFor="collapsible-Party"
                                >
                                  Mark
                                </label>
                                <div className="col-sm-9">
                                  <input autoFocus
                                  id={"input-one"}
                                  onKeyUp={handleKeyUp}
                                  ref={one}
                                  value={postList.mark}
                                   onChange={(e)=>setPostList({...postList,mark:e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="Mark"
                                  />
                                </div>
                        
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                    
                    id={"input-two"}
                    onKeyUp={handleKeyUp}
                    ref={two}
                      onClick={() => postData()}
                      disabled={postList._id}
                      type="submit"
                      className="btn btn-success me-sm-3 me-1"
                    >
                      Save
                    </button>
                    <button
                    id={"input-three"}
                    onKeyUp={handleKeyUp}
                    ref={three}
                    
                      onClick={() => putData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-warning me-sm-3 me-1"
                    >
                      Update
                    </button>
                    <button
                    id={"input-four"}
                    onKeyUp={handleKeyUp}
                    ref={four}
                    
                      onClick={() => delData()}
                      disabled={!postList._id}
                      type="submit"
                      className="btn btn-danger me-sm-3 me-1"
                    >
                      Delete
                    </button>
                    <button
                    id={"input-five"}
                    onKeyUp={handleKeyUp}
                    ref={five}
                    
                      onClick={() => refreshFn()}
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      Refresh
                    </button>
                    <button
                    id={"input-six"}
                    onKeyUp={handleKeyUp}
                    ref={six}
                    
                      onClick={() => props.setIsAppMark(false)}
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

export default AddParty