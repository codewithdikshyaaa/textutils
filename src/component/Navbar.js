import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TEXTUTILS</a>
    {/* <Link class="navbar-brand" to="/">TEXTUTILS</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          {/* <Link class="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
          {/* <Link class="nav-link" to="/about">About</Link> */}
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
