import React, { useState } from 'react'
import Bio from '../assets/Images/bio.png'
import { Col, Row, Spinner } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { useHistory } from "react-router-dom";

import '../App.css';
import * as firebase from 'firebase';
function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false)

  let history = useHistory();
  function Login() {
    history.push("/Login");
  }
  SignUp = () => {
    setLoading(true)
    if (email === confirmEmail) {
      if (email != '' && username != '' && password != '') {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
          setLoading(false)
          var userId = firebase.auth().currentUser.uid

          firebase.database().ref('users/' + userId).set({
            Name: username,
            Email: email,
            Uid: userId,
          });
          history.push("/Home");
          firebase.auth().currentUser.updateProfile({
            displayName: username,
          }).then(() => {

          }).catch(function (error) {
            alert(error.message);
          });

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
    else {
      setLoading(false)
      alert("Email didn't matched!");
    }
  }



  return (
    <div>
      <Row className="Row-Background-Color">
        <Col className="Landing-page-left-Col">
          <img className="Landing-page-image" src={Bio} />
        </Col>

        <Col style={{ marginTop: 20 }} className="Landing-page-right-Col">
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
                    <form>
                      <div className='text-center'>
                        <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                          <strong>SIGN</strong>
                          <a href='#!' className='green-text font-weight-bold'>
                            <strong> UP</strong>
                          </a>
                        </h3>
                      </div>
                      <div className="grey-text">
                        <MDBInput
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          labelClass='white-text'
                          onChange={event => setUsername(event.target.value)}
                        />
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          labelClass='white-text'
                          onChange={event => setEmail(event.target.value)}
                        />
                        <MDBInput
                          label="Confirm your email"
                          icon="exclamation-triangle"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          labelClass='white-text'
                          onChange={event => setConfirmEmail(event.target.value)}
                        />
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                          labelClass='white-text'
                          onChange={event => setPassword(event.target.value)}
                        />
                      </div>
                      {/* <div className='md-form pb-3'>
                        <MDBInput
                          label={
                            <>
                              Accept the&nbsp;
                      <a href='#!' className='green-text font-weight-bold'>
                                Terms and Conditions
                      </a>
                            </>
                          }
                          type='checkbox'
                          id='checkbox1'
                          labelClass='white-text'
                        />
                      </div> */}
                      {!Loading ? (
                        <div className="text-center py-4 mt-3">
                          <MDBBtn
                            color='success'
                            rounded
                            type='button'
                            className='btn-block z-depth-1'
                            onClick={SignUp}
                          >
                            Register
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

                    </form>
                    <MDBCol md='12'>
                      <p className='font-small white-text d-flex justify-content-end'>
                        Already have an account?
                  <a onClick={Login} className='green-text ml-1 font-weight-bold'>
                          Sign in
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
  );
}

export default SignUp;