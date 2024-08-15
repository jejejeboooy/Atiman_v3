import React from 'react'
import './donate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Donate() {
  return (
    <div id="donate" class="section-padding border-top text-black">
      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-12">
            <div class="text-center section-title">
              <h1 class="fw-semibold">Make a Difference: Donate Today</h1>
              <div class="line">
              </div>
              <div>
                <p>Your generous donation helps us provide vital psychiatric support to children, youth,
                  and families in need. Together, we can make a difference. Thank you for your support!</p>
              </div>
            </div>
            <div class="assflow-cont d-flex">
              <div>
                <a href="#" target="_blank" class="btn btn-appoint image-button text-center">
                  Make a donation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
