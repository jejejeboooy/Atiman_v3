import React from 'react'
import './footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo-colored-small.svg'


export default function Footer() {
  return (
    <footer class="footer">
      <div class="container d-flex footer-icons">
        <div>
          <a className="footer-logo" href="#">
            <img src={logo} alt="Atiman" />
          </a>
          <a class="h6 fw-bold text-black">
            Copyright 2024 ATIMAN. All rights reserved.
          </a>
        </div>
        <div class="d-flex gap-3 ms-5">
          <div>
            <a class="footer-icon" aria-current="page" href="https://github.com/nobledev89/Atiman_v2" target="_blank">
              <i class="bi bi-discord iconbox-dark"></i>
            </a>
          </div>
          <div>
            <a class="footer-icon" aria-current="page" href="#">
              <i class="bi bi-github iconbox-dark"></i>
            </a>
          </div>
          <div>
            <a class="footer-icon" aria-current="page" href="#">
              <i class="bi bi-telegram iconbox-dark"></i>
            </a>
          </div>
          <div>
            <a class="footer-icon" aria-current="page" href="#">
              <i class="bi bi-twitter-x iconbox-dark"></i>
            </a>
          </div>
          <div>
            <a class="footer-icon" aria-current="page" href="#">
              <i class="bi bi-youtube iconbox-dark"></i>
            </a>
          </div>
          <div>
            <a class="footer-icon" aria-current="page" href="#">
              <i class="bi bi-instagram iconbox-dark"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
