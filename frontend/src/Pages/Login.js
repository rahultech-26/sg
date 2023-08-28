import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { TailSpin } from 'react-loader-spinner';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [typeText,setTypeText]=useState(false);
  const [isLoader,setIsLoader]=useState(false)
  const postLogin=()=>{
    if(username!==""&password!==""){
    const item = {
        username:username,
        password:password
    }
    setIsLoader(true)
    axios.post(baseUrl+"login/login",item).then((res)=>{
      if(res.data.msg==="ok"){
        navigate("/home")
      } else {
        alert(res.data.msg)
      }
    })
  }
  }
  return (
    <>
    {isLoader&&
    <div style={{width:"100%",height:"100vh",backgroundColor:"rgba(0,0,0,0.3)",position:"fixed",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
    <TailSpin
  height="80"
  width="80"
  color="white"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>}
      <div 
        className="authentication-wrapper authentication-cover"
        style={{

          width: "100%",
          height: "100vh",
        }}
      >
        <div className="authentication-inner row m-0">
          <div className="login">
            <div className=" mx-auto"  id="my-node">
              <div className="app-brand mb-5">
                <a href="index-2.html" className="app-brand-link gap-2"></a>
              </div>
              <h4 className="mb-2">Welcome! 👋</h4>
              <p className="mb-4">Please log-in to your account</p>
              <div
              
                className="mb-3"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username
                  </label>
                  <input autoFocus
                    type="text"
                    onChange={(e)=>setUsername(e.target.value)}
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    autofocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge">
                    <input 
                      type={typeText?"text":"password"}
                      onChange={(e)=>setPassword(e.target.value)}
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="············"
                      aria-describedby="password"
                     
                    />
                    {!typeText?
                    <span className="input-group-text cursor-pointer">
                      <i onClick={()=>setTypeText(true)} className="bx bx-show" />
                    </span>:
                    <span className="input-group-text cursor-pointer">
                      <i onClick={()=>setTypeText(true)} className="bx bx-hide" />
                    </span>}
                  </div>
                </div>
                <div className="mb-3">

                </div>
                <button
                  onClick={()=>postLogin()}
                  className="btn btn-primary d-grid w-100"
                >
                  Login
                </button>
              </div>

            </div>
          </div>
          {/* /Login */}
        </div>
      </div>


    </>
  );
};

export default Login;
