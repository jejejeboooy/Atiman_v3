import React from 'react'
import './flow.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Flow() {
  return (
    <div id="assflow" class="section-padding border-top text-black">
      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-12">
            <div class="text-center section-title">
              <h1 class="display-4 fw-semibold">Assessment Flow</h1>
              <div class="line">
              </div>
            </div>
          </div>
          <div class="assflow-cont">
            <div>
                <a href="#appoint" target="_blank" class="btn btn-appoint image-button text-center">
                  BOOK APPOINTMENT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
