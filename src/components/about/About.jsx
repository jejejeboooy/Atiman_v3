import React from 'react'
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About() {
  return (
    <div id="about-bg" class="section-padding content-bg">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12">
            <div class="text-center section-title">
              <h1 class="display-4 fw-semibold">About us</h1>
              <div class="line"></div>
              <p>At Atiman, we are more than a service provider; we are a community. Together, we can build a brighter
                future for our children and youth. Whether you are seeking help or looking to support our mission, we
                welcome you with open arms.</p>
            </div>
          </div>
        </div>
        <div class="row mt-5 justify-content-center">
          <div class="col-6 col-sm-4 col-md-3">
            <div class="box-first p-5">
              <h4>Psychotherapy</h4>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <div class="box-second p-5">
              <h4>Counseling</h4>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <div class="box-third p-5">
              <h4>Psychopharmacology</h4>
            </div>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <div class="box-fourth p-5">
              <h4>Psychoeducational</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
