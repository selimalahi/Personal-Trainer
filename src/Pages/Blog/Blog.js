import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mt-20 mb-20">
       <Helmet>           
           <title>blog page</title>          
       </Helmet>
      <div className="card-body">
        <h2 className="text-yellow-600">
          Q-1) What are Difference between SQL and NoSQL?
        </h2>
        <p>
          Answer: SQL is the programming language used to interface with
          relational databases. (Relational databases model data as records in
          rows and tables with logical links between them). NoSQL is a class of
          DBMs that are non-relational and generally do not use SQL.
          <br />
          <span className="text-yellow-600">There are five practical differences between SQL and NoSQL:</span> <br />
          1) Language <br />
          2) Scalability <br />
          3) Structure <br />
          4) Properties <br />
          5) Support and communities
        </p>
      </div>
      <div className="card-body">
        <h2 className="text-yellow-600">Q-2) What is JWT, and how does it work?</h2>
        <p>
          Answer : JSON Web Token (JWT) is an open standard (RFC 7519) for
          securely transmitting information between parties as JSON object. It
          is compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          <br />
          <span className="text-yellow-600">How does it work :</span><br />
          Basically the identity provider(IdP) generates a JWT certifying user
          identity and Resource server decodes and verifies the authenticity of
          the token using secret salt / public key. <br />
          1) User sign-in using username and password or google/facebook. <br />
          2) Authentication server verifies the credentials and issues a jwt
          signed using either a secret salt or a private key. <br />
          3) User's Client uses the JWT to access protected resources by passing
          the JWT in HTTP Authorization header. <br />
          4) Resource server then verifies the authenticity of the token using
          the secret salt/ public key.
        </p>
      </div>
      <div className="card-body">
        <h2 className="text-yellow-600">
          Q-3) What is the difference between javascript and NodeJS?
        </h2>
        <p>
          Answer: JavaScript is a popular programming language utilized by
          nearly every online application developer. Finding a resource on the
          subject to work on JavaScript and conduct critical development is
          straightforward.
          <br />
          Although Node JS is a JavaScript framework extension, it also has
          other unnamed features, such as a non-blocking running control system,
          essential for attaining business objectives. It may also be visible to
          a user who has signed in from a different approach for security
          reasons. When it comes to a comparison of nest js vs. express, both
          are node js components.
        </p>
      </div>
      <div className="card-body">
        <h2 className="text-yellow-600">
          Q-4) How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. <br />
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
