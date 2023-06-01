import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AnimatedImage from "../components/AnimatedImage";
// import '../../node_modules/bootstrap-icons/bootstrap-icons.css';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LoginPage = ({ logFunc, callNavigaton }) => {
  const [username, setUsername] = useState("guest");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState(false);
  const [log, setLog] = useState(false);

  const inputRef = useRef();
  const navigate = useNavigate();

  const callHome = () => {
    navigate("/home");
  };
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
    return () => {};
  }, [inputRef]);

  const getUserName = (e) => {
    let value = e.target.value;
    setUsername(value);
  };
  const getUserPassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  };

  const check = () => {
    setLog(true);
    logFunc(log, callHome);
  };
  const OnError = () => {
    setError(true);
  };
  const checkUserLoginInformation = (event) => {
    event.preventDefault();
    username === "guest" && password === "123" ? check() : OnError();

    username === "" || password === "" ? setError(true) : setError(false);

    username !== "guest" || password !== "123"
      ? setError(true)
      : setError(false);
  };

  return (
    <StyledLoginPageContainer>
      <StyledInnerDiv>
        <FormContainer>
          <div className="imageDiv">
            <AnimatedImage />
          </div>

          <div>
            <h1>Member Login</h1>
            <form onSubmit={checkUserLoginInformation}>
              {error ? (
                <span className="errorMsg">enter valid email and password</span>
              ) : (
                <span className="errorMsg" style={{ display: "none" }}>
                  give valid username
                </span>
              )}
              {/* <span  id={borderClass && 'border'}  > */}
              <span className="input" id={username != "" && "changeBg"}>
                <EmailIcon />
                <input
                  type="text"
                  ref={inputRef}
                  name="username"
                  value={username}
                  onChange={getUserName}
                  placeholder="Email"
                />

                {error ? (
                  <ErrorIcon style={{ color: "maroon" }} />
                ) : (
                  <ErrorIcon
                    style={{ color: "maroon", visibility: "hidden" }}
                  />
                )}

                {/* </span> */}
              </span>
              {
                //  error ? <span className='errorMsg'>give valid password</span> : <span className='errorMsg' style={{display:'none'}}>give valid username</span>
              }
              <span className="input">
                <LockIcon />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={getUserPassword}
                  placeholder="password"
                />
                {error ? (
                  <ErrorIcon style={{ color: "maroon" }} />
                ) : (
                  <ErrorIcon
                    style={{ color: "maroon", visibility: "hidden" }}
                  />
                )}
              </span>

              <button type="submit" className="loginButton">
                login
              </button>
            </form>

            <button className="remove ">
              <span className="forgetHeading">forget</span>
              <Link to="#" className="forget">
                {" "}
                username/password?
              </Link>
            </button>
          </div>
        </FormContainer>
        <div>
          <Link to="#" className="createAccount">
            {" "}
            create your account <ArrowRightAltIcon />{" "}
          </Link>
        </div>
      </StyledInnerDiv>
    </StyledLoginPageContainer>
  );
};

export default LoginPage;

const StyledLoginPageContainer = styled.div`
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledInnerDiv = styled.div`
  background: white;
  height: 110vh;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  justify-content: space-around;
  align-items: center;
  width: 70vw;

  .errorMsg {
    background-color: #80000081;
    /* padding: 2px; */
    color: maroon;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 2px solid #80000081;
    text-transform: capitalize;
    font-weight: bold;
  }

  .createAccount {
    margin-left: 28rem;
    font-size: 1rem;
    font-weight: 400;
    color: #212529;
    text-decoration: none;
    @media (max-width: 1000px) {
      margin-left: 0rem;
    }
  }
  .forget {
    height: 10vh;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666;
    text-decoration: none;
  }
  .remove {
    border: none;
    background-color: transparent;
  }
  .forgetHeading {
    font-size: 13px;
    line-height: 1.5;
    color: #999;
    text-transform: uppercase;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;
const FormContainer = styled.div`
  display: flex;
  margin-top: 150px;
  width: 70vw;
  justify-content: space-around;
  text-align: center;
  .imageDiv {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  h1 {
    font-weight: bolder;
    font-size: 24px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15em;
    @media (max-width: 1000px) {
      width: 90vw;
      padding: 10px;
    }
  }

  .input {
    background-color: rgba(211, 204, 204, 0.452);
    color: #867e7e;
    height: 3rem;
    width: 19em;
    border-radius: 2rem;
    margin-bottom: 0.8rem;
    padding: 1rem;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  #changeBg {
    background-color: rgb(232, 240, 254);
  }
  input {
    background: none;
    height: 3rem;
    color: #867e7e;
    border: none;
    padding: 2px;
    font: inherit;
    cursor: pointer;
    outline: none;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  /* #border{
    height: 3rem;
    width: 19em;
    border-radius: 2rem ;
    animation: startBorder 0.5s  infinite ease-in ;
rgb(232, 240, 254), rgba(70, 90, 126, 0.4)
    @keyframes startBorder{
        0%{box-shadow:1px 1px 1px 1px  #57b846dd;}
        50%{box-shadow:1px 1px 10px 15px  #4dd435dd;}
        80%{box-shadow:1px 1px 10px 25px  #d4dfd2dd;}
        99%{box-shadow:1px 1px 10px 25px  #41f122dd;}
        100%{box-shadow:none;}

    }
} */

  /* className={borderClass? 'noBorder' : 'border'}
    .border{
        border:2px solid red;
    }
    <div className=""></div>noBorder{

    } */

  .loginButton {
    border: none;
    height: 3rem;
    width: 20em;
    border-radius: 2rem;
    margin-top: 1.4rem;
    background: #57b846;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 1.5;
    color: white;
    @media (max-width: 1000px) {
      width: 100%;
    }
    &:hover {
      background: #1b1a1ae8;
    }
  }
`;
