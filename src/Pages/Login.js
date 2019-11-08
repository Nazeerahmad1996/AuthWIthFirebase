import React, { useState } from 'react'
import Bio from '../assets/Images/bio.png'
import { Col, Row, Spinner } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { useHistory } from "react-router-dom";

import '../App.css';
import * as firebase from 'firebase';

function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false)


  let history = useHistory();
  function Resgister() {
    history.push("/SignUp");
  }

  function SignIn () {
    setLoading(true)
    if (email != '' && password != '') {
      firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
        setLoading(false)
        history.push("/Home");
      }).catch(function (error) {
        setLoading(false)
        alert(error.message);
        var errorCode = error.code;
        console.log("Error code:  " + errorCode);
        var errorMessage = error.message;
        console.log("Error Message:  " + errorMessage);
      });
    } else {
      setLoading(false)
      alert("Fill Form Properly!");
    }
  }



  return (
    <div style={{ backgroundColor: '#282c34' }}>
      <Row className="Row-Background-Color">
        <Col className="Landing-page-left-Col">
          <img className="Landing-page-image" src={Bio} />
        </Col>

        <Col className="Landing-page-right-Col">
          <MDBContainer>
            <MDBRow>
              <MDBCol md='6'>
                <MDBCard
                  className='card-image'
                  style={{
                    backgroundImage:
                      'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                    width: '27rem'
                  }}
                >
                  <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                    <div className='text-center'>
                      <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                        <strong>SIGN</strong>
                        <a href='#!' className='green-text font-weight-bold'>
                          <strong> IN</strong>
                        </a>
                      </h3>
                    </div>
                    <MDBInput
                      label='Your email'
                      group
                      type='text'
                      validate
                      labelClass='white-text'
                      onChange={event => setEmail(event.target.value)}
                    />
                    <MDBInput
                      label='Your password'
                      group
                      type='password'
                      validate
                      labelClass='white-text'
                      onChange={event => setPassword(event.target.value)}
                    />
                    <MDBRow className='d-flex align-items-center mb-4'>
                      <div className='text-center mb-3 col-md-12'>
                        {!Loading ? (
                          <div className="text-center py-4 mt-3">
                            <MDBBtn
                              color='success'
                              rounded
                              type='button'
                              className='btn-block z-depth-1'
                              onClick={SignIn}
                            >
                              Sign in
                  </MDBBtn>
                          </div>

                        ) : (
                            <MDBBtn
                              color='success'
                              rounded
                              type='button'
                              className='btn-block z-depth-1'
                            >
                              <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />Loading</MDBBtn>
                          )}

                      </div>
                    </MDBRow>
                    <MDBCol md='12'>
                      <p className='font-small white-text d-flex justify-content-end'>
                        Create an account
                  <a onClick={Resgister} className='green-text ml-1 font-weight-bold'>
                          Sign up
                  </a>
                      </p>
                    </MDBCol>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Col>
      </Row>
    </div>
  )
}
export default Login;