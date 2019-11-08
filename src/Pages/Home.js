import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';
import '../App.css';
import * as firebase from 'firebase';
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
    const [Name, setName] = useState('');
    useEffect(() => {
        var user = firebase.auth().currentUser;

        if (user) {
            setName(user.displayName);
        } else {
            history.push("/Login");
        }
    });
    function SignOut() {
        firebase.auth().signOut().then(function () {
            history.push("/LandingPage");
        }).catch(function (error) {
            alert(error.message)
        });
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
            <MDBCard testimonial>
                <div style={{ height: 200, backgroundColor: '#4b0082' }} className='indigo lighten-1' />
                <div className='mx-auto white'>
                    <img style={{ borderRadius: 150, marginTop: -70 }}
                        src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg'
                        alt='Avatar'
                    />
                </div>
                <MDBCardBody>
                    <h4 className='card-title'>{Name}</h4>
                    <hr />
                    <p>
                        <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos, adipisci{' '}
                        <MDBIcon icon='quote-right' />
                    </p>
                    <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                        onClick={SignOut}
                    >
                        Sign Out
                  </MDBBtn>
                </MDBCardBody>
            </MDBCard>

        </div>
    )
}
export default Home;