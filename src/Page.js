import React from "react";
import { Link } from "react-router-dom";

function Page() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>Blog Home - Start Bootstrap Template</title>

          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

          <link href="css/styles.css" rel="stylesheet" />
        </head>
        <body>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a class="navbar-brand" href="#!">
                Start Bootstrap
              </a>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#!">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/form">
                      <br></br>
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/dataFetch">
                      <br></br>
                      JsonFetch
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <br></br>
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <h1 class="fw-bolder">Welcome to Home!</h1>
          <p class="lead mb-0"></p>
        </body>
      </html>
    </>
  );
}
export default Page;
