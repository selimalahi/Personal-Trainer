import React from "react";
import { Link } from "react-router-dom";

import { useContext } from 'react';
import {  GoogleAuthProvider } from 'firebase/auth';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {

  const [error, setError] = useState('');

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handelGoogleSignIn = () => {
      providerLogin(googleProvider)
          .then(result => {
              const user = result.user;

              const currentUser ={
                email: user.email
              }
              console.log(currentUser)
              
              // get jwt token
              fetch('https://assignment-11-server-site-selimalahi.vercel.app/jwt', {
                method:'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);

                localStorage.setItem('local-token', data.token)
                navigate(from, { replace: true });
              })


             
          })
          .catch(error => console.error(error));
  }

  const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              form.reset();
              setError('');
              const currentUser ={
                email: user.email
              }
              console.log(currentUser)
              
              // get jwt token
              fetch('https://assignment-11-server-site-sigma.vercel.app/jwt', {
                method:'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);

                localStorage.setItem('local-token', data.token)
                navigate(from, {replace : true})
              })

          })
          .catch(error => {
              console.error(error)
              setError(error.message);
          })
  }

 
 

  return (
    <div className="hero w-full my-20">
      
      <Helmet>           
           <title>login page</title>          
       </Helmet>
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-4">
          <h1 className="text-5xl text-center font-bold ">Login!</h1>
          <form  onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            ---------or-------- <br />
            <button onClick={handelGoogleSignIn} className="btn btn-active">Login With Google</button>
          </p>
          <p className="text-center pt-5">
            Dont't Have An Account?
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
